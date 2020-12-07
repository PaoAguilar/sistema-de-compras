from django.urls import path, include
from apps.reportes.views import *

urlpatterns = [
    # URLS QUE MANEJAN LOS REPORTES
    path('reportes/', reporteArtDepto.as_view(), name='reportes'),
    path('reporte2/', reporteArtEmple.as_view(), name='reporte2'),
    path('reporte3/', reporteArtProvee.as_view(), name='reporte3'),
    path('reporte4/', reporteOrdenCompra.as_view(), name='reporte4'),
    path('reporte5/', reporteStock.as_view(), name='reporte5'),
    path('reporte6/', reporteInventario.as_view(), name='reporte6')
    ]