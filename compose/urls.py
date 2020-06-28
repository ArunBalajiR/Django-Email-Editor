from django.urls import path
from . import views as composeview

app_name='compose'

urlpatterns = [
    path('',composeview.index,name="composeview"),
    
]

