# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def reactDef7(request):
    return TemplateResponse(request, 'react7/react7.html')

def reactDefDz7(request):
    return TemplateResponse(request, 'react7/reactdz7.html')
