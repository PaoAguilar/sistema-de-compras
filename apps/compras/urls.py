from django.urls import path, include
from apps.compras.views import *

urlpatterns = [
    path('requisicion/', indexRequision, name = 'indexRequision'),
    path('requision/generar/', generarRequision, name='generar_requisicion')
    ]