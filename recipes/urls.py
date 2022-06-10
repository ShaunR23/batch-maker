from django.urls import path
from . import views

app_name='recipes'

urlpatterns = [
   path('user/recipe/', views.UserRecipeListAPIView.as_view(),),
   path('recipe/', views.RecipeListAPIView.as_view(),),
]