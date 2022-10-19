from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ContactSerializer
from .models import *
 
# create a class for the Todo model viewsets

@api_view(['GET'])
def getContact(request):
    contact = Contact.objects.all()
    serialisator = ContactSerializer(contact,many=True)
    return Response(serialisator.data)