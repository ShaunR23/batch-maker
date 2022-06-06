from django.shortcuts import render
from .models import Recipe, Steps
from rest_framework import generics
from .serializers import RecipeSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly

class RecipeListAPIView(generics.ListAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly)
    serializer_class = RecipeSerializer

    def get_queryset(self):
        return Recipe.objects.filter(phase='SUBMITTED')

class UserRecipeList(generics.ListCreateAPIView):
    serializer_class = RecipeSerializer
    permission_classes = (IsAuthorOrReadOnly)




