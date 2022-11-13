# from email import message
# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view ,permission_classes
from rest_framework import permissions
from rest_framework import status

from .serializers import ContactSerializer, DownloadPdfSerializer, ProjectSerializer, ResumeSerializer
from .models import *
# from django.core.mail import BadHeaderError, send_mail

# create a class for the Todo model viewsets

@api_view(['GET'])
def getContact(request):
    print("getcontact--------------------------------")
    contact = Contact.objects.all()
    try:
        serialisator = ContactSerializer(contact,many=True)
        return Response(serialisator.data)
    except:
        
        return Response('error')


@api_view(['GET'])
def getProject(request):
    print("getProject--------------------------------")
    project = Project.objects.all()
    try:
        serialisator = ProjectSerializer(project,many=True)
        return Response(serialisator.data)
    except:
        
        return Response('error')

@api_view(['GET'])
def getResume(request):
    print("getProject--------------------------------")
    resume = Resume.objects.all()
    try:
        serialisator = ResumeSerializer(resume,many=True)
        return Response(serialisator.data)
    except:
        
        return Response('error')


@api_view(['GET'])
def getDownloadPdf(request):
    print("getProject--------------------------------")
    pdf = DownloadPdf.objects.all()
    try:
        serialisator = DownloadPdfSerializer(pdf,many=True)
        return Response(serialisator.data)
    except:
        
        return Response('error')







@api_view(['POST'])
def SendEmail(request):
    data=request.data
    print(data)
   
    contact = Contact.objects.create(
        Name=data['name'],
        Email=data['email'],
        Subject=data['subject'],
        Message=data['message'],
    )
    try:
       contact.save()
       message= {'detail':'done'}
       return Response(message,status=status.HTTP_202_ACCEPTED)
    except:
        message= {'detail':'done'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
