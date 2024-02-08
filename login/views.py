from django.shortcuts import render, redirect
from django.contrib.auth import authenticate
from django.contrib.auth import login as log, logout as lout
from .models import User
from .forms import SignUp, LogIn
from .decorators import *

# Create your views here.
@unauth_user
def login(request):
    if request.method == "POST":
        #check if it is a registration or a login
        if request.POST.get("confirm") and request.POST.get("email"):
            #we know it is a registration
            form = SignUp(request.POST) #
            print(form.is_valid())
            if form.is_valid():
                username = form.cleaned_data['username']
                email = form.cleaned_data['email']
                password = form.cleaned_data['password']
                print(password)
                # Create a new user
                user = User.objects.create_user(username=username, email=email, password=password)
                # Log in the user
                log(request, user)
                # Redirect to the home page or a success page
                return redirect('/careers')
            else:
                print("Errors are" + str(form.errors))
                return redirect('/')
        else:
            username = request.POST.get("username")
            password = request.POST.get("password")
            form = LogIn(request.POST)
            if form.is_valid():
                username = form.cleaned_data['username']
                password = form.cleaned_data['password']

                # Authenticate the user
                user = authenticate(request, username=username, password=password)

                if user is not None:
                    # Log in the user
                    log(request, user)
                    return redirect('/dashboard')
                else:
                    # Handle invalid login credentials
                    print("Login Failed")
                    return redirect('/')
    else:
        #method is GET
        return render(request, "login.html")
    
def logout_user(request):
    lout(request)
    return redirect("/login")