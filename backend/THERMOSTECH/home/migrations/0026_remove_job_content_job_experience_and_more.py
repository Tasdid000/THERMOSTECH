# Generated by Django 4.0.4 on 2022-06-19 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0025_job'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='job',
            name='content',
        ),
        migrations.AddField(
            model_name='job',
            name='Experience',
            field=models.CharField(default='', max_length=2550152),
        ),
        migrations.AddField(
            model_name='job',
            name='Job_responsibilities',
            field=models.TextField(default='', max_length=2550152),
        ),
        migrations.AlterField(
            model_name='job',
            name='subject',
            field=models.CharField(max_length=2550152),
        ),
    ]