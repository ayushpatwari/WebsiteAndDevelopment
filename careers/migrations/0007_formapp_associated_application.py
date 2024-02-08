# Generated by Django 4.2.5 on 2024-02-06 00:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userportal', '0002_application_position'),
        ('careers', '0006_formapp_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='formapp',
            name='associated_application',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='userportal.application'),
        ),
    ]