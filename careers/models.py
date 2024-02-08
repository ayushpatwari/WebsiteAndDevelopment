#from django.contrib.postgres.fields import ArrayField
from django.db import models
from login.models import User
from userportal.models import Application

# Create your models here.



class Tag(models.Model):
    name = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name


class Job(models.Model):
    id = models.AutoField(primary_key=True)
    jobTitle = models.CharField(max_length=50)
    tags = models.ManyToManyField(Tag)
    hourlyWage = models.IntegerField()
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=2)
    description = models.TextField()

    
    jobCompany = models.CharField(max_length=50)
    # add in URL for Details button for more info  -   detailsURL

class FormApp(models.Model):
    forJob = models.ForeignKey(Job, on_delete=models.CASCADE)
    fName = models.CharField(max_length=100)
    lName = models.CharField(max_length=100)
    pName = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    dateOfBirth = models.CharField(max_length=100)
    lastCompany = models.CharField(max_length=100)
    lastJobTitle = models.CharField(max_length=100)
    lastDateEmployed = models.CharField(max_length=100)
    contactSuper = models.BooleanField(default=False)
    superName = models.CharField(max_length=100)
    superTitle = models.CharField(max_length=100)
    superContact = models.CharField(max_length=100)
    education = models.CharField(max_length=100)
    school = models.CharField(max_length=100)
    major = models.CharField(max_length=100)
    dateOfGrad = models.CharField(max_length=100)
    languages = models.CharField(max_length=200)
    citizenship = models.CharField(max_length=100)
    file = models.FileField(upload_to='uploads/')
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    associated_application = models.OneToOneField(Application, on_delete=models.CASCADE, null=True)

    







