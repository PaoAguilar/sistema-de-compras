#from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse_lazy
from django.views import View
from xhtml2pdf import pisa
#import os
#from django.conf import settings
#from django.template import Context
from django.template.loader import get_template
# Create your views here.
from apps.articulos.models import Articulo


class reporteArtDepto(View):
    def get(self, request, *args, **kwargs):
        try:
            template = get_template('reportes/reportes.html')
            context = {
            	'titulo': 'esto es un pdf'
            }
            html = template.render(context)
            response: HttpResponse = HttpResponse(content_type='application/pdf')
            #response['Content-Disposition'] = 'attachment; filename="reporte1.pdf"'
            pisa_status = pisa.CreatePDF(html, dest=response)
            return response
        except: 
            pass
        return HttpResponseRedirect(reverse_lazy('home'))