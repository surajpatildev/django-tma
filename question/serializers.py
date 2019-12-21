from rest_framework import routers, serializers, viewsets
from .models import Question

# Serializers define the API representation.
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Question
        fields = "__all__"