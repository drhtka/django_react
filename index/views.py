# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def Index(request):

    return TemplateResponse(request, 'index/index.html')