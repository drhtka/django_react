# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.urls import path

from react6.views import reactDef6, reactDefDz6


urlpatterns = {
    path('', reactDef6),
    path('dz/', reactDefDz6),
}



