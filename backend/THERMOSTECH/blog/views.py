from rest_framework import generics

from .serializers import Postserializers
from .models import Post


class PostListAPIView(generics.ListAPIView):
    queryset= Post.objects.all()
    serializer_class= Postserializers
    