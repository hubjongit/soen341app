from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from pytz import unicode
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated

from api.models import Post, FollowRelation
from api.serializers import RegisterSerializer, LoginSerializer, PostSerializer, FeedSerializer, UsernameSerializer, \
    FollowRelationSerializer


# Create your views here.

@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
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
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def api_post(request):
    if request.method == "POST":
        request.data.update({'user': request.user.id})
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
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def api_logout(request):
    if request.method == "POST":
        logout(request)
        return Response({"success": str(not request.user.is_authenticated).lower()})


@api_view(['GET'])
def api_getauth(request):
    content = {
        'user': unicode(request.user),  # `django.contrib.auth.User` instance.
        'auth': unicode(request.auth),  # None
    }
    return Response(content)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def api_feed(request):
    following_objects = request.user.following.all()
    following = [following_obj.user_to_follow for following_obj in following_objects]
    following.append(request.user)
    posts = Post.objects.filter(user__in=following)
    posts_serializer = FeedSerializer(posts, many=True)
    return Response(posts_serializer.data)


@api_view(['GET', 'POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def api_follow(request):
    if request.method == "GET":
        following_objects = request.user.following.all()
        following = [following_obj.user_to_follow for following_obj in following_objects]
        following.append(request.user)
        users = User.objects.all()
        new_users = [user for user in users if user not in following]
        new_users_serializer = UsernameSerializer(new_users, many=True)
        return Response(new_users_serializer.data)

    elif request.method == "POST":
        follow_form = FollowRelation()
        form = FollowRelationSerializer(data=request.data)
        if form.is_valid():
            follow_form.user = request.user
            follow_form.user_to_follow = User.objects.get(username=form.validated_data.get('user_to_follow'))
            follow_form.save()
            return Response({"success": "true"})
        else:
            error_messages = [one_error for error in form.errors.values() for one_error in error]
            return Response({"errors": error_messages})
