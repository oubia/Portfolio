import os
from django.db import models
from django.conf import settings

# Create your models here.

class Contact(models.Model):
    Name = models.CharField(max_length=200)
    Email = models.EmailField(max_length=200)
    Subject = models.CharField(max_length=200)
    Message = models.CharField(max_length=1000)



def vo_image_upload(inatance,filename):
    return os.path.join('Project',filename)

class Project(models.Model):
    Type = models.CharField(max_length=200)
    myphoto = models.ImageField(upload_to="files")
    Languages = models.CharField(max_length=200)
    Client = models.CharField(max_length=200)
    Preview = models.CharField(max_length=200)


class Resume(models.Model):
    Type = models.CharField(max_length=200)
    Date = models.CharField(max_length=200)
    Title = models.CharField(max_length=200)
    Description = models.TextField(max_length=1000)


class DownloadPdf(models.Model):
    title = models.CharField(max_length=200)
    pdf = models.FileField(upload_to='pdfs')