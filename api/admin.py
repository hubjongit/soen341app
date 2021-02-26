from django.contrib import admin
from .models import Post, FollowRelation


class PostAdmin(admin.ModelAdmin):
    readonly_fields = ('timestamp',)


# Register your models here.
admin.site.register(Post, PostAdmin)
admin.site.register(FollowRelation, )
