# Generated by Django 4.1.2 on 2022-10-23 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Oubia', '0007_volunteer_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Type', models.CharField(max_length=200)),
                ('Date', models.CharField(max_length=200)),
                ('Title', models.CharField(max_length=200)),
                ('Description', models.CharField(max_length=1000)),
            ],
        ),
        migrations.AddField(
            model_name='volunteer',
            name='Client',
            field=models.CharField(default=2000, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='volunteer',
            name='Languages',
            field=models.CharField(default=0, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='volunteer',
            name='Preview',
            field=models.CharField(default=0, max_length=200),
            preserve_default=False,
        ),
    ]
