# Generated by Django 4.1.2 on 2022-10-19 13:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Oubia', '0003_react_delete_todo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('description', models.CharField(max_length=500)),
                ('completed', models.BooleanField(default=False)),
            ],
        ),
        migrations.DeleteModel(
            name='React',
        ),
    ]
