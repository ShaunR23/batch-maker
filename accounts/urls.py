from django.urls import path
from .views import ProfileListAPIView, UserAccount

urlpatterns = [
    path('profiles/', ProfileListAPIView.as_view()),
    path('user/', UserAccount.as_view()),
]