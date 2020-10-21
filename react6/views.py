# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def reactDef6(request):
    return TemplateResponse(request, 'react6/react6.html')

def reactDefDz6(request):
    return TemplateResponse(request, 'react6/reactdz6.html')
