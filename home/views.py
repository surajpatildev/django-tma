from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):

    return render(request,'index.html')
    # return HttpResponse("Hello")

def contactus(request):
    return render(request,'contactus.html')