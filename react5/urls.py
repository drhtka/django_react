# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.urls import path

from react5.views import reactDef5, reactDefDz5


urlpatterns = {
    path('', reactDef5),
    path('dz/', reactDefDz5),
}

