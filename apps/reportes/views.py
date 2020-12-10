#from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse_lazy
from django.views import View
from xhtml2pdf import pisa
from django.db.models.aggregates import Sum
from django.db.models import Sum

from django.template.loader import get_template
# Create your views here.
from apps.personas.models import Departamento
from apps.personas.models import Empleado
from apps.articulos.models import Articulo
from apps.compras.models import ordenCompra
from apps.articulos.models import Inventario

from django.db import connection

from datetime import datetime


class reporteArtDepto(View):
    def get(self, request, *args, **kwargs):
        
            template = get_template('reportes/reportes.html')
            context = {
            'titulo': 'esto es un pdf',
            }
            requisiciones = Articulo.objects.raw('SELECT ID_DEPARTAMENTO AS ID, NOMBRE, SUM( CANTIDAD_PEDIDO  ) pedido FROM REQUISICION INNER JOIN COMPRAS_REQUESICIONARTICULO ON COMPRAS_REQUESICIONARTICULO.REQUISICION_ID=REQUISICION.ID INNER JOIN DEPARTAMENTO ON DEPARTAMENTO.ID=REQUISICION.ID_DEPARTAMENTO GROUP BY ID_DEPARTAMENTO, NOMBRE ORDER BY pedido DESC;')
            fechas = datetime.now()
            context = {'requisicion': requisiciones, 'fecha': fechas
                       }
            html = template.render(context)
            response: HttpResponse = HttpResponse(content_type='application/pdf')
            pisa_status = pisa.CreatePDF(html, dest=response)
            return response


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
            template = get_template('reportes/reporte3.html')
            context = {
            'titulo': 'esto es un pdf',
            }
            articulos = Articulo.objects.raw('SELECT a.ID AS ID, ep.NOMBRE, a.nombre, a.marca,a.modelo, o.PRECIO, o.FECHA_INICIO, o.FECHA_FIN FROM OFERTA o, ARTICULO a, "EMPRESA PROVEEDORA" ep WHERE o.ID_ARTICULOS=a.ID AND o.ID_PROVEDORA=ep.ID')
            fechas = datetime.now()
            context = {'articulo': articulos, 'fecha': fechas}
            html = template.render(context)
            response: HttpResponse = HttpResponse(content_type='application/pdf')
            #response['Content-Disposition'] = 'attachment; filename="reporte1.pdf"'
            pisa_status = pisa.CreatePDF(html, dest=response)
            return response

class reporteOrdenCompra(View):
    def get(self, request, *args, **kwargs):
            template = get_template('reportes/reporte4.html')
            context = {'titulo': 'esto es un pdf',}
            ordenes = ordenCompra.objects.raw('SELECT o.ID_PROVEDORA AS ID, p.NOMBRE, SUM(ord.PRECIO_TOTAL) precio, Count(ord_of.OFERTA_ID) cuenta FROM "ORDEN DE COMPRA" ord, "OFERTA" o, "EMPRESA PROVEEDORA" p, "ORDEN DE COMPRA_OFERTAS" ord_of WHERE ord_of.OFERTA_ID=o.ID AND o.ID_PROVEDORA=p.ID AND ord_of.ORDENCOMPRA_ID = ord.ID GROUP BY p.NOMBRE, o.ID_PROVEDORA ORDER BY precio DESC')
            fechas = datetime.now()
            context = {'orden': ordenes, 'fecha': fechas}
            html = template.render(context)
            response: HttpResponse = HttpResponse(content_type='application/pdf')
            pisa_status = pisa.CreatePDF(html, dest=response)
            return response

class reporteStock(View):
    def get(self, request, *args, **kwargs):
        try:
            template = get_template('reportes/reporte5.html')
            context = {'titulo': 'esto es un pdf',}
            ordenes = Inventario.objects.raw('SELECT i.ID_ARTICULOS AS ID, i.EXISTENCIA, a.nombre, a.marca,a.modelo FROM INVENTARIO i, ARTICULO a WHERE i.ID_ARTICULOS=a.ID ORDER BY a.nombre DESC;')
            fechas = datetime.now()
            context = {'orden': ordenes, 'fecha': fechas}
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
            context = {'titulo': 'esto es un pdf',}
            ordenes = Inventario.objects.raw('SELECT  i.ID_ARTICULOS AS ID, i.EXISTENCIA, a.nombre, a.marca,a.modelo,i.COSTO_PROMEDIO FROM INVENTARIO i, ARTICULO a WHERE i.ID_ARTICULOS=a.ID ORDER BY a.nombre DESC')
            fechas = datetime.now()
            context = {'orden': ordenes, 'fecha': fechas}
            html = template.render(context)
            response: HttpResponse = HttpResponse(content_type='application/pdf')
            #response['Content-Disposition'] = 'attachment; filename="reporte1.pdf"'
            pisa_status = pisa.CreatePDF(html, dest=response)
            return response
        except:
            pass
            return HttpResponseRedirect(reverse_lazy('home'))