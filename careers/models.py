#from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.



class Tag(models.Model):
    name = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name


class Job(models.Model):
    jobTitle = models.CharField(max_length=50)
    dateUpdated=models.DateField(auto_now=True)
    #tags = ArrayField(models.CharField(max_length=15), blank=True)
    tags = models.ManyToManyField(Tag)
    hourlyWage = models.IntegerField()
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=2)
    
    jobCompany = models.CharField(max_length=50)
    # add in URL for Details button for more info  -   detailsURL

