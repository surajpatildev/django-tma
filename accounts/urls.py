from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views
from . import views
urlpatterns = [
    path('login', views.login,name = 'login'),
    path('logout', views.logout,name = 'logout'),
    path('signup', views.signup, name = 'signup'),
    path('profile', views.profile, name = 'profile'),
    path('reset-password', views.resetpass,name = 'reset-password'),
    path('ajax/validate_username/', views.validate_username, name='validate_username')
]
