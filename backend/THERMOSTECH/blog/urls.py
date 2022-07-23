from django.urls import path
from .views import PostListAPIView
urlpatterns = [
    path('Blog/', PostListAPIView.as_view()),
]
