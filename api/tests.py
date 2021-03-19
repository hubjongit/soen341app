import tempfile
from django.conf import settings
from django.contrib.auth.models import User
from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from .models import FollowRelation, Post, Comment


class RegisterLoginTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='travis', password='Concordia.1')

    def test_register_new_user(self):
        response = self.client.post('/api/register/', {'username': 'register', 'password': "Concordia.1",
                                                   'password2': "Concordia.1"})
        obj=User.objects.all()
        self.assertEqual(obj[1].username, 'register')
        self.assertEqual(response.status_code, 200)

    def test_login(self):
        self.assertEqual(self.client.cookies, {})
        print(self.client.cookies)
        response = self.client.post('/api/login/', {'username': 'travis', 'password': "Concordia.1"})
        self.assertNotEqual(self.client.cookies['sessionid'].value, "")
        self.assertEqual(response.status_code, 200)

    def test_logout(self):
        self.client.post('/api/login/', {'username': 'travis', 'password': "Concordia.1"})
        response = self.client.post('/api/logout/')
        self.assertEqual(self.client.cookies['sessionid'].value, "")
        self.assertEqual(response.status_code, 200)


class PostTest(TestCase):
    def setUp(self):
        settings.MEDIA_ROOT = tempfile.mkdtemp()
        self.user = User.objects.create_user(
            username='travis', password='Concordia.1')
        self.image = SimpleUploadedFile(name='test_image.jpg', content=open('media/travis_test.png', 'rb').read(),
                                        content_type='image/jpeg')

    def test_create_post_post_request(self):
        self.client.login(username='travis', password='Concordia.1')
        response = self.client.post('/api/post/', {'image': self.image, 'caption': "test"})
        self.assertEqual(response.status_code, 200)


class FeedTest(TestCase):
    def setUp(self):
        settings.MEDIA_ROOT = tempfile.mkdtemp()
        self.user = User.objects.create_user(username='travis', password='Concordia.1')
        self.client.login(username='travis', password='Concordia.1')
        self.image = SimpleUploadedFile(name='test_image.jpg', content=open('media/travis_test.png', 'rb').read(),
                                        content_type='image/jpeg')
        self.new_user = User.objects.create_user(username='new', password='Concordia.1')
        self.dont_follow = User.objects.create_user(username='dont_follow', password='Concordia.1')
        FollowRelation.objects.create(user=self.user, user_to_follow=self.new_user)
        Post.objects.create(image=self.image, caption="post 1", user=self.new_user)
        Post.objects.create(image=self.image, caption="post 2", user=self.user)
        Post.objects.create(image=self.image, caption="post 3", user=self.dont_follow)

    def test_feed_get_request(self):
        self.client.login(username='travis', password='Concordia.1')
        response = self.client.get('/api/feed/')
        self.assertEqual(response.data[0]['username'], 'travis')
        self.assertEqual(response.data[0]['caption'], 'post 2')
        self.assertEqual(response.data[1]['username'], 'new')
        self.assertEqual(response.data[1]['caption'], 'post 1')

    def test_get_following_posts_only(self):
        self.client.login(username='travis', password='Concordia.1')
        response = self.client.get('/api/feed/')
        self.assertEqual(len(response.data),2)
        self.assertNotEqual(response.data[0]['username'], 'dont_follow')
        self.assertNotEqual(response.data[1]['username'], 'dont_follow')


class FollowTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='travis', password='Concordia.1')
        self.new_user = User.objects.create_user(username='new', password='Concordia.1')
        self.user_to_follow = User.objects.create_user(
            username='followed', password='Concordia.1')
        FollowRelation.objects.create(user=self.user, user_to_follow=self.user_to_follow)

    def test_follow_user_post_request(self):
        self.client.login(username='travis', password='Concordia.1')
        response = self.client.post('/api/follow/', {'user_to_follow': 'new'}, format('application/json'))
        self.assertEqual(response.status_code, 200)

    def test_get_users_to_follow_get_request(self):
        self.client.login(username='travis', password='Concordia.1')
        response = self.client.get('/api/follow/')
        self.assertEqual(response.data[0]['username'], 'new')

    def test_get_users_not_followed_yet_only(self):
        self.client.login(username='travis', password='Concordia.1')
        response = self.client.get('/api/follow/')
        self.assertEqual(len(response.data),1)
        self.assertNotEqual(response.data[0]['username'], 'followed')

class CommentTest(TestCase):
    def setUp(self):
        settings.MEDIA_ROOT = tempfile.mkdtemp()
        self.user = User.objects.create_user(username='travis', password='Concordia.1')
        self.client.login(username='travis', password='Concordia.1')
        self.image = SimpleUploadedFile(name='test_image.jpg', content=open('media/aq.jpg', 'rb').read(),
                                        content_type='image/jpeg')
        self.post = Post.objects.create(image=self.image, caption="post 1", user=self.user)
        self.obj = Comment.objects.create(post=self.post, user=self.user, content="my comment")

    def test_comment_post_request(self):
        response = self.client.post('/api/comment/', {"post": "1", "content": "my 1st comment"}, format('application/json'))
        self.assertEqual(response.status_code, 200)

    def test_comment_feed_get_request(self):
        response = self.client.get('/api/feed/')
        self.assertEqual(response.data[0]['comments'][0]['username'], 'travis')
        self.assertEqual(response.data[0]['comments'][0]['content'], 'my comment')
