from rest_framework import serializers
from .models import Hakkimda, Category, Content, Iletisim

class HakkimdaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hakkimda
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ContentSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()

    class Meta:
        model = Content
        fields = '__all__'

class IletisimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Iletisim
        fields = '__all__'