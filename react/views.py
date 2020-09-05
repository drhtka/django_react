# -*- coding: utf-8 -*-
from django.shortcuts import render

# Create your views here.

# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def reactDef(request):
    return TemplateResponse(request, 'react/react1.html')

def reactDefDz1(request):
    return TemplateResponse(request, 'react/reactdz1.html')

def reactDef3(request):
    return TemplateResponse(request, 'react/react3.html')

def reactDefDz3(request):
    return TemplateResponse(request, 'react/reactdz3.html')