# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def reactDef4(request):
    return TemplateResponse(request, 'react4/react4.html')

def reactDefDz4(request):
    return TemplateResponse(request, 'react4/reactdz4.html')
