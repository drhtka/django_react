# -*- coding: utf-8 -*-
from django.shortcuts import render


from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def reactDef9(request):
    return TemplateResponse(request, 'react9/react9.html')

def reactDefDz9(request):
    return TemplateResponse(request, 'react9/reactdz9.html')
