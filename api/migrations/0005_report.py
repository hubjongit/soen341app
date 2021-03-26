# Generated by Django 3.1.6 on 2021-03-25 17:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0004_comment'),
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('report_reason', models.IntegerField(choices=[(1, 'Spam'), (2, 'Violence'), (3, 'Harassment'), (4, 'False Information'), (5, 'Hate Speech')], default=1)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('content', models.TextField(error_messages={'invalid': 'Make sure you wrote at most 200 chars!'}, max_length=200)),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reports', to='api.post')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reports', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('timestamp',),
            },
        ),
    ]
