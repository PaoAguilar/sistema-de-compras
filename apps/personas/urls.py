from django.urls import path, include
from apps.personas.views import *

urlpatterns = [
    # URLS QUE MANEJAN LOS DEPARTAMENTOS
    path('departamento/', indexDepartamento, name='indexDepartamento'),
]
