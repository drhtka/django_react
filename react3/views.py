# -*- coding: utf-8 -*-
from django.shortcuts import render

# Create your views here.

# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def reactDef3(request):
    return TemplateResponse(request, 'react3/react3.html')

def reactDefDz3(request):
    return TemplateResponse(request, 'react3/reactdz3.html')