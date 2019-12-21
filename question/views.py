from django.shortcuts import render
from .models import Question
from rest_framework import generics
from .serializers import QuestionSerializer
from rest_framework.response import Response
# Create your views here.
# ViewSets define the view behavior.
class QuestonViewSet(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        data = serializer.data
        # here you can manipulate your data response
        headers={"Access-Control-Allow-Origin" : "*"}
        res = Response(data)
        res['Test-Header'] = "Value"
        res['Access-Control-Allow-Origin'] = "*"
        return res