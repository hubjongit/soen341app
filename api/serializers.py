from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from rest_framework import serializers


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
            errors = {'errors':  ["Passwords do not match."]}
            raise serializers.ValidationError(errors)
        try:
            validate_password(password, username)
            user = User.objects.create_user(username=username, password=password)
            user.save()
            return user
        except ValidationError as errors:
            error_messages = [error for error in errors]
            raise serializers.ValidationError({'errors': error_messages})


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=300)
    password = serializers.CharField(max_length=300)
