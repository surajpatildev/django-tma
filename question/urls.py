from django.urls import path
from .views import QuestonViewSet

urlpatterns = [
    path('questions/', QuestonViewSet.as_view(), name="songs-all")
]