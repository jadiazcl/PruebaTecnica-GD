# Generated by Django 4.1.5 on 2023-01-28 22:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CacheCallsGD',
            fields=[
                ('id_cache', models.AutoField(primary_key=True, serialize=False)),
                ('code_filter', models.CharField(max_length=255)),
                ('comuna_filter', models.CharField(max_length=255)),
                ('page_filter', models.IntegerField(default=1)),
                ('result', models.TextField(blank=True)),
                ('date_call', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
