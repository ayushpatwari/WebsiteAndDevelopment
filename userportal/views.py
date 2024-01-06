from django.shortcuts import render, redirect
from .decorators import *


# Create your views here.
@unauth_user
def applications(request):
    context = {"applications" : request.user.applications.all()}
    return render(request, "userportal.html", context)