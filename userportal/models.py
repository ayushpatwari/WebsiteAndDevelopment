from django.db import models
from login.models import User 

# Create your models here.
class Application(models.Model):
    companyName = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    timeOfApplication = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = "applications")