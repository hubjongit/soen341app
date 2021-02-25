from django.contrib.auth import login, authenticate
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.serializers import RegisterSerializer, LoginSerializer


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
