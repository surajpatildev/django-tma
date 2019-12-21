from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import views as auth_views
from django.contrib import messages
from .forms import UserRegisterForm
from django.contrib import auth
from datetime import date
from .models import Profile
from django.http import JsonResponse
# Create your views here.
def login(request):
    if(request.user.is_authenticated):
        return redirect('home')
    else:
        login_view = auth_views.LoginView.as_view(template_name = 'login.html')
        return login_view(request)

@login_required
def logout(request):
    if(request.user.is_authenticated):
        # messages.success(request,'You have been logged out!')
        logout_view = auth_views.LogoutView.as_view(template_name = 'logout.html')
        return logout_view(request)
    else:
        return redirect('login')
     

def signup(request):

    if(request.user.is_authenticated):
        return redirect('home')
    else:
        if request.method == 'POST':
            form = UserRegisterForm(request.POST)
            if form.is_valid():
                form.save()
                username = form.cleaned_data.get('username')
                user = User.objects.get(username=username)
                profile = Profile(user =user)
                profile.save()
                auth.login(request, user)
                messages.success(request, f'Account created for {username}!')
                return redirect('home')
        else:
            form = UserRegisterForm()
        return render(request, 'signup.html', {'form': form})
   

def resetpass(request):
    return render(request,'resetpass.html')


@login_required
def profile(request):
    return render(request, 'profile.html')


def validate_username(request):
    username = request.GET.get('username', None)
    data = {
        'is_taken': User.objects.filter(username__iexact=username).exists()
    }
    if data['is_taken']:
        data['error_message'] = 'A user with this username already exists.'
    return JsonResponse(data)
