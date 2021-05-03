from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import CustomUser
from .serializers import CustomUserSerializer
from rest_framework.permissions import IsAuthenticated


class CustomUserView(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


@api_view(['POST', ])
def registration_view(request):

    if request.method == 'POST':
        serializer = CustomUserSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            glhenderson = serializer.save()
            data['response'] = "Successfully registered a new user."
            data['email'] = glhenderson.email
            token = Token.objects.get(user=glhenderson).key
            data['token'] = token
        else:
            data = serializer.errors
        return Response(data)
