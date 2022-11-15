from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('contact-data/',views.SendEmail,name='routes'),
    path('project/',views.getProject,name='routes'),
    path('resume/',views.getResume,name='routes'),
    path('download/',views.getDownloadPdf,name='routes'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
