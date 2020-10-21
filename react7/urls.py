# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.urls import path

from react7.views import reactDef7, reactDefDz7


urlpatterns = [
    path('', reactDef7, name='react7'),
    path('dz/', reactDefDz7, name='reactdz7'),
]



