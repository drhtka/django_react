# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.urls import path

from react.views import reactDef, reactDefDz1


urlpatterns = {
    path('', reactDef),
    path('dz/', reactDefDz1),
}



