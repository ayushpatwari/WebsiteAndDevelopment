from django.urls import path

from . import views

urlpatterns = [
    path('', views.homepage, name="careers"),
    path('benefits', views.benefits, name="benefits")
]