from django.db import models
from django.conf import settings

class Category(models.Model):
    name = models.CharField(max_length=100)
    category_type = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.category_type} - {self.name}"

class Content(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text_content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Hakkimda(models.Model):
    isim_soyisim = models.CharField(max_length=100, verbose_name="İsim Soyisim")
    yas = models.IntegerField(verbose_name="Yaş")
    sehir = models.CharField(max_length=50, verbose_name="Yaşadığın Şehir")
    meslek = models.CharField(max_length=100, verbose_name="Bölüm / Meslek")
    linkedin_url = models.URLField(blank=True, verbose_name="LinkedIn URL")
    github_url = models.URLField(blank=True, verbose_name="Github URL")
    aciklama = models.TextField(verbose_name="Açıklama")
    fotograf = models.ImageField(upload_to='profil_fotograflari/', blank=True, null=True, verbose_name="Güncel Fotoğraf")

    def __str__(self):
        return self.isim_soyisim

    class Meta:
        verbose_name = "Hakkında Bilgisi"
        verbose_name_plural = "Hakkında Bilgileri"

class Iletisim(models.Model):
    isim = models.CharField(max_length=100)
    email = models.EmailField()
    mesaj = models.TextField()
    tarih = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.isim} - {self.email}"