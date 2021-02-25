from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.


@api_view(['GET'])
def api_overview(request):
    api_response = "The REST framework is working."
    return Response(api_response)
