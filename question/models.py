from django.db import models

# Create your models here.
class Question(models.Model):
    ANSWER_CHOICES = (
        ('A','A'),
        ('B','B'),
        ('C','C'),
        ('D', 'D'),
    )
    title = models.TextField()
    description = models.TextField(blank=True,null=True)
    option_1 = models.CharField(max_length = 100)
    option_2 = models.CharField(max_length = 100)
    option_3 = models.CharField(max_length = 100)
    option_4 = models.CharField(max_length = 100)
    answer = models.CharField(max_length = 1,choices = ANSWER_CHOICES)
    solution = models.TextField(blank=True,null=True)

    def __str__(self): 
        return self.title