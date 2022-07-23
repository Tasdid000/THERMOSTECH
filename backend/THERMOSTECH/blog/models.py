from django.db import models
class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    content = models.TextField()
    athour = models.CharField(max_length=13)
    slug = models.CharField(max_length=130)
    TimeStamp = models.DateTimeField(blank=True)

    def __str__(self):
        return self.title + ' by ' + self.athour
