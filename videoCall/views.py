from django.shortcuts import render

# Create your views here.
def basic_chat(request, room_name):
    print(request.user.username)
    return render(request, "interview.html", {
        "room_name": room_name,
        "username":request.user.username
    })