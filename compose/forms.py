from django.forms import ModelForm
from django import forms
from ckeditor_uploader.fields import RichTextUploadingField
from .models import Mail
class MailForm(ModelForm):
    # to=forms.EmailField()
    # sub=forms.CharField(max_length=100)       if we want to state To and Sub is also within forms 
    body = RichTextUploadingField(blank=True)
    class Meta:
        labels={
            # 'to',
            # 'sub',
            'body' : '',
        }
        model= Mail
        fields=['body']
