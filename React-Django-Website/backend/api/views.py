from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny

# Create your views here.

class CreateUser(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerialaizer
    permission_classes = [AllowAny]