from django import forms
from .models import FormApp

class FormAppForm(forms.ModelForm):
    class Meta:
        model = FormApp
        exclude = ['forJob', 'user', 'associated_application']
