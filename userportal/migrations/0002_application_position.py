# Generated by Django 4.2.5 on 2024-01-06 01:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userportal', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='position',
            field=models.CharField(default='Product Designer', max_length=200),
            preserve_default=False,
        ),
    ]