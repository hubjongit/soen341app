from django.contrib.auth import login, authenticate, logout
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from api.models import Post
from api.serializers import RegisterSerializer, LoginSerializer, PostSerializer, FeedSerializer


# Create your views here.

@api_view(['GET'])
def api_overview(request):
    api_response = "The REST framework is working."
    return Response(api_response)


@api_view(['POST'])
def api_register(request):
    if request.method == "POST":
        form = RegisterSerializer(data=request.data)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return Response({"success": "true"})
        error_messages = [one_error for error in form.errors.values() for one_error in error]
        return Response({"errors": error_messages})


@api_view(['POST'])
def api_post(request):
    if request.method == "POST":
        form = PostSerializer(data=request.data)
        if form.is_valid():
            form.save()
            return Response({"success": "true"})
        error_messages = [one_error for error in form.errors.values() for one_error in error]
        return Response({"errors": error_messages})


@api_view(['POST'])
def api_login(request):
    if request.method == "POST":
        form = LoginSerializer(data=request.data)
        if form.is_valid():
            user = authenticate(request, username=form.validated_data.get('username'),
                                password=form.validated_data.get('password'))
            if user is not None:
                login(request, user)
                return Response({"success": "true"})
            else:
                error_message = ["The username and/or password you entered is incorrect."]
                return Response({"errors": error_message})

            
@api_view(['POST'])
def api_logout(request):
    if request.method == "POST":
        logout(request)
        return Response({"success": str(not request.user.is_authenticated).lower()})


@api_view(['GET'])
def api_feed(request):
    # # get all the users a user follows.
    # following_objects = request.user.following.all()  # This return a list of FollowRelation objects
    # # Iterate to get the following users from the objects
    # following = [following_obj.following for following_obj in following_objects]
    # following.append(request.user)  # Adding the user themselves to the list of users that their posts will show on home
    # posts = Post.objects.filter(user__in=following)  # Returns a list of posts
    # posts_serializer = FeedSerializer(posts, many=True)
    posts = Post.objects.filter(user=request.user)  # Returns a list of posts
    posts_serializer = FeedSerializer(posts, many=True)
    return Response(posts_serializer.data)
