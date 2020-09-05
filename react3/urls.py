# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.urls import path

from react.views import reactDef3, reactDefDz3


urlpatterns = {
    path('3', reactDef3),
    path('3dz', reactDef3),
}

