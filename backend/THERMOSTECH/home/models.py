from django.db import models



class Contact (models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    email = models.CharField(max_length=200)
    Website_URL=models.CharField(max_length=10000)
    Phone=models.CharField(max_length=50)
    contact=models.TextField()


    def __str__(self):
        return 'Messages from ' + self.name + ' - ' + self.email 

class Meta:
    verbose_name_plural = 'Contact Us'

class JobApply(models.Model):
    id = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=150)
    lname = models.CharField(max_length=150)
    email = models.CharField(max_length=200)
    Phone=models.CharField(max_length=50)
    Address =models.CharField(max_length=10000)
    City = models.CharField(max_length=10000)
    State = models.CharField(max_length=10000)
    Education = models.CharField(max_length=10000)
    Experience = models.TextField(max_length=12122)
    LinkedIn = models.CharField(max_length=12122)
    GitHub = models.CharField(max_length=12122)
    About = models.TextField()
    Skills = models.TextField()
    file = models.FileField(default="")
    def __str__(self):
        return 'Messages from ' + self.fname + ' - ' + self.email 

class Meta:
    verbose_name_plural = 'Job Apply'


class Portfolio (models.Model):
    id = models.AutoField(primary_key=True, blank=True)
    title = models.CharField(max_length=255)
    content = models.TextField()
    slug = models.CharField(max_length=130)
    TimeStamp = models.DateTimeField(blank=True)
    image = models.ImageField(upload_to="home/images", default ="")

    def __str__(self):
        return self.title + ' by ' + self.content[0:30]

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to="home/images", default ="")
    title = models.CharField(max_length=255)
    content = models.TextField()
    desc = models.CharField(max_length=25015, default ="")
    athour = models.CharField(max_length=1023)
    slug = models.CharField(max_length=130)
    TimeStamp = models.DateTimeField(null=True)

    def __str__(self):
        return self.title + ' by ' + self.athour

class Job(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    Job_responsibilities = models.TextField()
    subject = models.TextField()
    Requirements = models.TextField()
    Experience=models.TextField()
    def __str__(self):
        return self.title + ' by ' + self.subject