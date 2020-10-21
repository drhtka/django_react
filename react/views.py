# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def reactDef(request):
    return TemplateResponse(request, 'react/react1.html')

def reactDefDz1(request):
    return TemplateResponse(request, 'react/reactdz1.html')
