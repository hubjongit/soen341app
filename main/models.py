from django.db import models

# Create your models here.
class Post(models.Model):
    post_title = models.CharField(max_length=100)
    # post_caption =
    # post_picture =
    # post_timestamp =

# after any changes regarding models, need to run: "python manage.py makemigrations" and then "python manage.py migrate" from the shell