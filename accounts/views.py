from django.shortcuts import render
from rest_framework import generics
from .models import Profile
from .permissions import isUserOnly
from .serializers import ProfileSerializer
from rest_framework.permissions import IsAuthenticated

class ProfileListAPIView(generics.ListCreateAPIView):
    queryset =  Profile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UserAccount(generics.ListAPIView):
    serializer_class = ProfileSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user.id
        return Profile.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UserAccountDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (isUserOnly,)




