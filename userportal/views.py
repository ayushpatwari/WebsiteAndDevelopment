from django.shortcuts import render, redirect
from .decorators import *


# Create your views here.
@unauth_user
def applications(request):
    context = {"applications" : request.user.applications.all()}
    return render(request, "User_Portal.html", context)

@unauth_user
def calendar(request):
    return render(request, "calendar.html")

@unauth_user
def calls(request):
    return render(request, "calls.html")