from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile
import datetime 

class UserRegisterForm(UserCreationForm):
    # GENDER_CHOICES = (
    #     ('M','Male'),
    #     ('F', 'Female'),
    # )
    first_name = forms.CharField(required=True)
    last_name = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    # mobileno = forms.RegexField('^[0-9]{10}$',error_messages={'invalid  ': 'Please enter valid mobile number.'})
    # gender = forms.ChoiceField(choices=GENDER_CHOICES)
    class Meta:
        model = User
        fields = ['first_name','last_name','username', 'email', 'password1', 'password2']