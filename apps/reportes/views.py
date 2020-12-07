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
from apps.personas.models import Departamento
from apps.personas.models import Empleado

from django.db import connection

class reporteArtDepto(View):
    def get(self, request, *args, **kwargs):
        try:
            template = get_template('reportes/reportes.html')
            context = {
            'titulo': 'esto es un pdf',

            }
            #con django
            articulos_solicitados = Departamento.objects.all()
            #cursor = connection.cursor()
            #cursor.execute('''SELECT * FROM departamento''')
            #cursor.execute('''SELECT count(*) FROM people_person''')
            #articulos_solicitados = cursor.fetchone()
            context = {'articulos': articulos_solicitados}
            html = template.render(context)
            response: HttpResponse = HttpResponse(content_type='application/pdf')
            #response['Content-Disposition'] = 'attachment; filename="reporte1.pdf"'
            pisa_status = pisa.CreatePDF(html, dest=response)
            return response
        except:
            pass
            return HttpResponseRedirect(reverse_lazy('home'))


class reporteArtEmple(View):
    def get(self, request, *args, **kwargs):
        try:
            template = get_template('reportes/reporte2.html')
            context = {
            'titulo': 'esto es un pdf',

            }
            #con django
            articulos_solicitados = Departamento.objects.all()
            #cursor = connection.cursor()
            #cursor.execute('''SELECT * FROM departamento''')
            #cursor.execute('''SELECT count(*) FROM people_person''')
            #articulos_solicitados = cursor.fetchone()
            context = {'articulos': articulos_solicitados}
            html = template.render(context)
            response: HttpResponse = HttpResponse(content_type='application/pdf')
            #response['Content-Disposition'] = 'attachment; filename="reporte1.pdf"'
            pisa_status = pisa.CreatePDF(html, dest=response)
            return response
        except:
            pass
            return HttpResponseRedirect(reverse_lazy('home'))


class reporteArtProvee(View):
    def get(self, request, *args, **kwargs):
        try:
            template = get_template('reportes/reporte3.html')
            context = {
            'titulo': 'esto es un pdf',

            }
            #con django
            articulos_solicitados = Departamento.objects.all()
            #cursor = connection.cursor()
            #cursor.execute('''SELECT * FROM departamento''')
            #cursor.execute('''SELECT count(*) FROM people_person''')
            #articulos_solicitados = cursor.fetchone()
            context = {'articulos': articulos_solicitados}
            html = template.render(context)
            response: HttpResponse = HttpResponse(content_type='application/pdf')
            #response['Content-Disposition'] = 'attachment; filename="reporte1.pdf"'
            pisa_status = pisa.CreatePDF(html, dest=response)
            return response
        except:
            pass
            return HttpResponseRedirect(reverse_lazy('home'))


class reporteOrdenCompra(View):
    def get(self, request, *args, **kwargs):
        try:
            template = get_template('reportes/reporte4.html')
            context = {
            'titulo': 'esto es un pdf',

            }
            #con django
            articulos_solicitados = Departamento.objects.all()
            #cursor = connection.cursor()
            #cursor.execute('''SELECT * FROM departamento''')
            #cursor.execute('''SELECT count(*) FROM people_person''')
            #articulos_solicitados = cursor.fetchone()
            context = {'articulos': articulos_solicitados}
            html = template.render(context)
            response: HttpResponse = HttpResponse(content_type='application/pdf')
            #response['Content-Disposition'] = 'attachment; filename="reporte1.pdf"'
            pisa_status = pisa.CreatePDF(html, dest=response)
            return response
        except:
            pass
            return HttpResponseRedirect(reverse_lazy('home'))

class reporteStock(View):
    def get(self, request, *args, **kwargs):
        try:
            template = get_template('reportes/reporte5.html')
            context = {
            'titulo': 'esto es un pdf',

            }
            #con django
            articulos_solicitados = Departamento.objects.all()
            #cursor = connection.cursor()
            #cursor.execute('''SELECT * FROM departamento''')
            #cursor.execute('''SELECT count(*) FROM people_person''')
            #articulos_solicitados = cursor.fetchone()
            context = {'articulos': articulos_solicitados}
            html = template.render(context)
            response: HttpResponse = HttpResponse(content_type='application/pdf')
            #response['Content-Disposition'] = 'attachment; filename="reporte1.pdf"'
            pisa_status = pisa.CreatePDF(html, dest=response)
            return response
        except:
            pass
            return HttpResponseRedirect(reverse_lazy('home'))

class reporteInventario(View):
    def get(self, request, *args, **kwargs):
        try:
            template = get_template('reportes/reporte6.html')
            context = {
            'titulo': 'esto es un pdf',

            }
            #con django
            articulos_solicitados = Departamento.objects.all()
            #cursor = connection.cursor()
            #cursor.execute('''SELECT * FROM departamento''')
            #cursor.execute('''SELECT count(*) FROM people_person''')
            #articulos_solicitados = cursor.fetchone()
            context = {'articulos': articulos_solicitados}
            html = template.render(context)
            response: HttpResponse = HttpResponse(content_type='application/pdf')
            #response['Content-Disposition'] = 'attachment; filename="reporte1.pdf"'
            pisa_status = pisa.CreatePDF(html, dest=response)
            return response
        except:
            pass
            return HttpResponseRedirect(reverse_lazy('home'))