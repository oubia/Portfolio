# from email import message
# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view ,permission_classes
from rest_framework import permissions
from rest_framework import status

from .serializers import ContactSerializer, DownloadPdfSerializer, ProjectSerializer, ResumeSerializer
from .models import *
# from django.core.mail import BadHeaderError, send_mail
from django.http import HttpResponse

# create a class for the Todo model viewsets

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def getContact(request):
    print("getcontact--------------------------------")
    contact = Contact.objects.all()
    try:
        serialisator = ContactSerializer(contact,many=True)
        return Response(serialisator.data)
    except:
        
        return Response('error')


@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def getProject(request):
    print("getProject--------------------------------")
    project = Project.objects.all()
    try:
        serialisator = ProjectSerializer(project,many=True)
        return Response(serialisator.data)
    except:
        
        return Response('error')

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def getResume(request):
    print("getProject--------------------------------")
    resume = Resume.objects.all()
    try:
        serialisator = ResumeSerializer(resume,many=True)
        return Response(serialisator.data)
    except:
        
        return Response('error')


@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def getDownloadPdf(request):
    print("getProject--------------------------------")
    pdf = DownloadPdf.objects.all()
    try:
        serialisator = DownloadPdfSerializer(pdf,many=True)
        return Response(serialisator.data)
    except:
        
        return Response('error')







@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def SendEmail(request):
    data=request.data
    print(data)
    '''try:
        
        try:
           send_mail(
           data['subject'],
           data['message'],
           data['email'],
           ['dev.oubia@gmail.com'],
           fail_silently=False
        )
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        print("email------------------------sent")
        return HttpResponseRedirect('/contact/thanks/')
        
    except:
        message= {'detail':'some error has been created while sending email'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)'''
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
