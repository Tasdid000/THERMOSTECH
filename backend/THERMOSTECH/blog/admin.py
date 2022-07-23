from django.contrib import admin

from THERMOSTECH.blog.models import Post

# Register your models here.
@admin.register(Post)
class Postadmin(admin.ModelAdmin):
    class Media:
        js= ('tiny.js')