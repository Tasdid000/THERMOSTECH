from importlib.metadata import files
from .models import Contact, Job, JobApply, Portfolio, Post
from .serializers import ContactSerializers, JobApplySerializers, Jobserializers, Portfolioserializers, Postserializers

from rest_framework.views import APIView
from rest_framework import generics, parsers, status
from rest_framework.response import Response

class ContactAPIView(APIView):
    def get(self, request, format=None):
        contact_list = Contact.objects.all()
        contact_serializers = ContactSerializers(contact_list, many=True)
        return Response(contact_serializers.data)

    def post(self, request, format=None):
        contact_serializers = ContactSerializers(data=request.data)
        if contact_serializers.is_valid():
            contact_serializers.save()
            return Response(contact_serializers.data, status=status.HTTP_201_CREATED)
        return Response(contact_serializers.errors, status=status.HTTP_400_BAD_REQUEST)

# class ContactListAPIView(generics.ListAPIView):
#     queryset=Contact.objects.all()
#     serializer_class = ContactSerializers
#     parser_classes = [parsers.FormParser, parsers.MultiPartParser]


class JobapplyAPIView(APIView):
    # parser_classes = [parsers.FileUploadParser]
    serializer_class = JobApplySerializers

    def pre_save(self, obj):
        obj.file = self.request.FILES.get('file')
    def get(self, request, format=None,):
        JobApply_list = JobApply.objects.all()
        JobApply_serializers = JobApplySerializers(JobApply_list, many=True)
        return Response(JobApply_serializers.data)

    def post(self, request, format=None):
        JobApply_serializers = JobApplySerializers(data=request.data)
        if JobApply_serializers.is_valid():
            JobApply_serializers.save()
            return Response(JobApply_serializers.data, status=status.HTTP_201_CREATED)
        return Response(JobApply_serializers.errors, status=status.HTTP_400_BAD_REQUEST)

class PortfolioListAPIView(generics.ListAPIView):
    queryset= Portfolio.objects.all()
    serializer_class= Portfolioserializers
    


class PostListAPIView(generics.ListAPIView):
    queryset= Post.objects.all()
    serializer_class= Postserializers

class JobListAPIView(generics.ListAPIView):
    queryset= Job.objects.all()
    serializer_class= Jobserializers