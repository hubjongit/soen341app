from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Post(models.Model):
    caption = models.TextField(blank=True, max_length=200,
                               error_messages={'invalid': 'Make sure you wrote at most 200 chars!'})
    picture = models.ImageField(upload_to='')
    timestamp = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE)

    def __str__(self):
        return "{0} posted {1}".format(self.user.username, self.caption)

    class Meta:
        ordering = ("-timestamp",)
