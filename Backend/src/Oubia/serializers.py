from rest_framework import serializers

# import the todo data model
from .models import *


# create a serializer class
class ContactSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Contact
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Project
        fields = '__all__'

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = "__all__"

class DownloadPdfSerializer(serializers.ModelSerializer):
    class Meta:
        model = DownloadPdf
        fields = "__all__"