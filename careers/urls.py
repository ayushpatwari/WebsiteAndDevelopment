from django.urls import path

from . import views

urlpatterns = [
    path('', views.careers, name="careers"),
    path('<int:id>/', views.forms, name='job_post_form'),

]

