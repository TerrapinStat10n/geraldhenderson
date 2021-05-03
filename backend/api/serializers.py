from rest_framework import serializers
from .models import CustomUser
from rest_framework.authtoken.models import Token


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "__all__"
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
