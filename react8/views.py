# -*- coding: utf-8 -*-
from django.shortcuts import render


from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def reactDef8(request):
    return TemplateResponse(request, 'react8/react8.html')

def reactDefDz8(request):
    return TemplateResponse(request, 'react8/reactdz8.html')
