# Generated by Django 4.0.4 on 2022-05-19 15:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_rename_exampleemail_contact_email_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='sno',
            new_name='id',
        ),
    ]
