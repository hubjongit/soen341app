from django.contrib.auth import login
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.serializer import RegisterSerializer


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
        return Response(form.errors)
