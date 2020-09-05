# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.urls import path

from react4.views import reactDef4, reactDefDz4


urlpatterns = {
    path('4/', reactDef4),
    path('dz/', reactDefDz4),
}

