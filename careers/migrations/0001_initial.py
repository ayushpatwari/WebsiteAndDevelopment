# Generated by Django 4.2.5 on 2023-12-27 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('jobTitle', models.CharField(max_length=50)),
                ('dateUpdated', models.DateField(auto_now=True)),
                ('tags', models.CharField(max_length=15)),
                ('hourlyWage', models.IntegerField()),
                ('city', models.CharField(max_length=20)),
                ('state', models.CharField(max_length=2)),
                ('jobCompany', models.CharField(max_length=50)),
            ],
        ),
    ]
