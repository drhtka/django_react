# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.urls import path

from react8.views import reactDef8, reactDefDz8


urlpatterns = [
    path('', reactDef8, name='react8'),
    path('dz/', reactDefDz8, name='reactdz8'),
]



