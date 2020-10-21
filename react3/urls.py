# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.urls import path

from react3.views import reactDef3, reactDefDz3


urlpatterns = [
    path('', reactDef3, name='react3'),
    path('dz/', reactDefDz3, name='reactdz3'),
]

