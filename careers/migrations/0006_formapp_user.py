# Generated by Django 4.2.5 on 2024-02-05 01:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('careers', '0005_alter_formapp_dateofbirth_alter_formapp_dateofgrad_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='formapp',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]