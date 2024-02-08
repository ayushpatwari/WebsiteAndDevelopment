from django.shortcuts import render, redirect
from .models import Email

# Create your views here.

def homepage(request):
    if request.method == "POST":
        data = request.POST.get("email")
        print(data)

        email_send = Email(
            email = data
        )
        email_send.save()
        return redirect('/')

    return render(request, "home.html")

def benefits(request):
    return render(request, "Benefits.html")