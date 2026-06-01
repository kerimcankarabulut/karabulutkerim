from rest_framework import viewsets
from .models import Hakkimda, Category, Content, Iletisim
from .serializers import HakkimdaSerializer, CategorySerializer, ContentSerializer, IletisimSerializer

class HakkimdaViewSet(viewsets.ModelViewSet):
    queryset = Hakkimda.objects.all()
    serializer_class = HakkimdaSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ContentViewSet(viewsets.ModelViewSet):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer

class IletisimViewSet(viewsets.ModelViewSet):
    queryset = Iletisim.objects.all().order_by('-tarih')
    serializer_class = IletisimSerializer