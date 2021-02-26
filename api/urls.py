from django.urls import path, include
from . import views

app_name = "api"

urlpatterns = [
    path('', views.api_overview, name="api-overview"),
    path('register/', views.api_register, name="api-register"),
    path('post/', views.api_post, name="api-post"),
    path('login/', views.api_login, name="api-login"),
    path('logout/', views.api_logout, name="api-logout"),
    path('feed/', views.api_feed, name="api-feed"),
]
