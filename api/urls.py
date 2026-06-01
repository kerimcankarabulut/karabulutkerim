from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HakkimdaViewSet, CategoryViewSet, ContentViewSet, IletisimViewSet

router = DefaultRouter()
router.register(r'hakkimda', HakkimdaViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'contents', ContentViewSet)
router.register(r'iletisim', IletisimViewSet)

urlpatterns = [
    path('', include(router.urls)),
]