# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.urls import path

from react2.views import reactDef2, reactDefDz2


urlpatterns = {
    path('', reactDef2),
    path('dz/', reactDefDz2),
}

