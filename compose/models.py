from django.db import models

from ckeditor_uploader.fields import RichTextUploadingField

class Mail(models.Model):

    body = RichTextUploadingField(blank=True)
