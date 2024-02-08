from django.http import HttpResponse
from django.shortcuts import redirect

def unauth_user(func):
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated:
            print(request.user)
            return func(request, *args, **kwargs)
        else:
            return redirect("login")
    return wrapper