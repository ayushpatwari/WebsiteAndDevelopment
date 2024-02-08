from django.urls import path

from . import views

urlpatterns = [
    path('', views.login, name="login"),
    path('out', views.logout_user, name="logout")
]