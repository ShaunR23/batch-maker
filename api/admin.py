from django.contrib import admin
from django.urls import path, include

# Register your models here.

urlpatterns = [
    path('', include('recipes.urls')),
    path('', include('accounts.urls'))
]