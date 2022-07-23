from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
admin.site.site_header = "THERMOSTECH Admin"
admin.site.site_title = "THERMOSTECH Admin Panel"
admin.site.index_title ="Welcome to THERMOSTECH Admin Panel"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('apiv1/', include("home.urls")),
    # path('apiv2/', include("blog.urls"))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)