from django.contrib import admin
from api import views
from django.urls import path, include, re_path


urlpatterns = [
    path('', include('api.urls')),
    path('admin/', admin.site.urls),
    re_path(r'^Users/$', views.CustomUserView),
    path('api/rest-auth/', include('rest_auth.urls')),
    path('api/rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api-auth/', include('rest_framework.urls')),

]