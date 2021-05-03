from django.urls import include, path
from rest_framework import routers
from .views import CustomUserView, registration_view
from rest_framework.authtoken.views import obtain_auth_token
from django.conf import settings
from django.conf.urls.static import static


app_name = "api"


router = routers.DefaultRouter()
router.register('Users', CustomUserView)

urlpatterns = [
    path('', include(router.urls)),
    path('register', registration_view, name="register"),
    path('api/login', obtain_auth_token, name="login")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)