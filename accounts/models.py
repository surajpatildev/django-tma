# from django.db import models

# # Create your models here.
from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    GENDER_CHOICES = (
        ('M','Male'),
        ('F', 'Female'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    gender = models.CharField(max_length = 1,choices = GENDER_CHOICES,null=True)
    birthdate = models.DateField(null=True, blank=True)
    mobileno = models.BigIntegerField(null=True)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')

    def __str__(self): 
        return self.user.username