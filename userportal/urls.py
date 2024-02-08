from django.urls import path
from . import views

urlpatterns = [
    path('', views.applications, name="userapps"),
    path('calendar', views.calendar, name="calendar"),
    path("calls", views.calls, name="calls")
]
