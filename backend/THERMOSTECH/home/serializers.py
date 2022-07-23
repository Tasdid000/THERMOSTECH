from rest_framework import serializers
from .models import Contact, Job, JobApply, Portfolio,Post

class ContactSerializers(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = [ "id","name", "email", "Website_URL" ,"Phone", "contact"]

class JobApplySerializers(serializers.ModelSerializer):

    class Meta:
        model = JobApply
        fields = [ "id", "fname", "lname", "email", "Phone", "Address", "City", "State", "Education", "Experience", "LinkedIn", "GitHub", "About", "Skills", "file",]
class Portfolioserializers(serializers.ModelSerializer):

    class Meta:
        model = Portfolio
        fields = ["id", "title", "content", "slug", "TimeStamp", "image"]


class Postserializers(serializers.ModelSerializer):
    class Meta:
       model= Post
       fields = ["id","image","title","content","desc","athour","slug","TimeStamp"]


class Jobserializers(serializers.ModelSerializer):
    class Meta:
       model= Job
       fields = ["id","title","Job_responsibilities","subject", "Requirements","Experience"]