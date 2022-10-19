from rest_framework import serializers
 
# import the todo data model
from .models import *
 
# create a serializer class
class ContactSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Contact
        fields = "__all__"