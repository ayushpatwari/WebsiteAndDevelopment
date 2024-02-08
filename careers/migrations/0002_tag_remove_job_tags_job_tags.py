# Generated by Django 4.2.5 on 2024-01-04 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('careers', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='job',
            name='tags',
        ),
        migrations.AddField(
            model_name='job',
            name='tags',
            field=models.ManyToManyField(to='careers.tag'),
        ),
    ]
