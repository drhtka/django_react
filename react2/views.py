# -*- coding: utf-8 -*-
from django.shortcuts import render

# Create your views here.

# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def reactDef2(request):
    return TemplateResponse(request, 'react2/react2.html')

def reactDefDz2(request):
    return TemplateResponse(request, 'react2/reactdz2.html')
