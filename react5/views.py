# -*- coding: utf-8 -*-
from django.shortcuts import render

# Create your views here.

# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def reactDef5(request):
    return TemplateResponse(request, 'react5/react5.html')

def reactDefDz5(request):
    return TemplateResponse(request, 'react5/reactdz5.html')
