# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.urls import path

from react9.views import reactDef9, reactDefDz9


urlpatterns = {
    path('', reactDef9),
    path('dz/', reactDefDz9),
}



