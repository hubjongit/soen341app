# Generated by Django 3.1.6 on 2021-03-04 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_followrelation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='picture',
            field=models.ImageField(upload_to='postimages/'),
        ),
    ]
