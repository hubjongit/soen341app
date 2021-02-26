from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from rest_framework import serializers
from api.models import Post


class RegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def save(self):
        username = self.validated_data['username']
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            errors = {'errors': ["Passwords do not match."]}
            raise serializers.ValidationError(errors)
        try:
            validate_password(password, username)
            user = User.objects.create_user(username=username, password=password)
            user.save()
            return user
        except ValidationError as errors:
            error_messages = [error for error in errors]
            raise serializers.ValidationError({'errors': error_messages})


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class FeedSerializer(serializers.ModelSerializer):
    timestamp = serializers.DateTimeField(format="%d-%b-%Y, %H:%M", required=False)
    username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Post
        fields = ('username', 'timestamp', 'picture', 'caption')


class UsernameSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',)


class FollowRelationSerializer(serializers.Serializer):
    user_to_follow = serializers.CharField()
