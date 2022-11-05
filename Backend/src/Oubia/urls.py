from django.urls import path
from . import views

urlpatterns = [
    path('contact-data/',views.SendEmail,name='routes'),
    path('project/',views.getProject,name='routes'),
    path('resume/',views.getResume,name='routes'),
]
