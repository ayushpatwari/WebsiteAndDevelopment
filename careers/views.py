from django.shortcuts import render
from .models import *

# Create your views here.
def careers(request):
    jobs = Job.objects.all()


    context = {"jobs": jobs,
               "count": jobs.count()}
    return render(request, "Careers.html", context) 
