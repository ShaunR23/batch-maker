from django.db import models
from django.conf import settings


PHASES = (
    ('DRAFT', 'Draft'),
    ('SUBMITTED', 'Submitted'),
)

CATEGORY = (
    ('POPULAR', 'Popular'),
    ('FAVORITE', 'Favorite'),
    ('ALL', 'All'),
)

RECIPE_TYPES = (
    ('BREAKFAST', 'Breakfast'),
    ('LUNCH', 'Lunch'),
    ('DINNER', 'Dinner'),
    ('DESSERT', 'Dessert'),
)

MEASUREMENTS = (
    ('GRAMS', 'Grams'),
    ('CUPS', 'Cups'),
    ('OUNCES', 'Ounces'),
    ('LBS', 'Pounds'),

)

class Recipe(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    recipe_type = models.CharField(max_length=255, choices=RECIPE_TYPES, default='DESSERT')
    recipe_name = models.CharField(max_length=255, blank=True)
    prep_time = models.IntegerField(default=0)
    cook_time = models.IntegerField(default=0)
    cook_temp = models.IntegerField(default=0)
    yield_name = models.CharField(max_length=255, blank=True)
    yield_quantity = models.IntegerField(default=0)
    notes =models.CharField(max_length=255, blank=True)
    step_number = models.IntegerField(default=1)
    directions = models.CharField(max_length=255, blank=True)
    measure_amount = models.IntegerField(default=0)
    measure_type = models.CharField(max_length=255, choices=MEASUREMENTS, default='CUPS')
    ingredient = models.CharField(max_length=255, default='Ingredient')
    phase = models.CharField(max_length=255, default="DRAFT" )











