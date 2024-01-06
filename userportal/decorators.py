from django.http import HttpResponse
from django.shortcuts import redirect

def unauth_user(func):
    def wrapper(request, *args, **kwargs):
        if not request.user.is_authenticated:
            return redirect("/login")
        else:
            return func(request, *args, **kwargs)
    return wrapper