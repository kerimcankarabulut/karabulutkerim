from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    is_author = models.BooleanField(default=False)

    # Hocanın "Hakkımda" seçeneği için istediği özel alanlar
    yas = models.IntegerField(null=True, blank=True)
    sehir = models.CharField(max_length=100, null=True, blank=True)
    meslek = models.CharField(max_length=100, null=True, blank=True)
    linkedin_url = models.URLField(null=True, blank=True)
    github_url = models.URLField(null=True, blank=True)
    aciklama = models.TextField(null=True, blank=True)
    fotograf = models.ImageField(upload_to='profile_pics/', null=True, blank=True)

    def __str__(self):
        return self.username