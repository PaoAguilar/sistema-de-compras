from django.urls import path, include
from apps.personas.views import *

urlpatterns = [
    # URLS QUE MANEJAN LOS DEPARTAMENTOS
    path('departamento/', indexDepartamento, name='indexDepartamento'),
    path('departamento/crear/', departamento_create, name='departamento_crear'),
    path('departamento/editar/<int:id_depto>/',
         departamento_edit, name='departamento_editar'),
]
