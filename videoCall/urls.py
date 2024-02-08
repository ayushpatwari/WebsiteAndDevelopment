from django.urls import path
from . import views

urlpatterns = [
    path('<str:room_name>/', views.basic_chat , name="videocall"),
]