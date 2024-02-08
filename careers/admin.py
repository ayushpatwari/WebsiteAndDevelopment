from django.contrib import admin
from .models import Job, Tag, FormApp

# Register your models here.
admin.site.register(Job)
admin.site.register(Tag)
admin.site.register(FormApp)