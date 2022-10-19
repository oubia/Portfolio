from django.db import models

# Create your models here.

class Contact(models.Model):
    Name = models.CharField(max_length=200)
    Email = models.EmailField(max_length=200)
    Subject = models.CharField(max_length=200)
    Message = models.CharField(max_length=1000)

