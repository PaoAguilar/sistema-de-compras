from django.urls import path, include
from apps.personas.views import *

urlpatterns = [
    # URLS QUE MANEJAN LOS DEPARTAMENTOS
    path('departamento/', indexDepartamento, name='indexDepartamento'),
    path('departamento/crear/', departamento_create, name='departamento_crear'),
    path('departamento/editar/<int:id_depto>/',
         departamento_edit, name='departamento_editar'),
    path('departamento/<int:id_depto>/eliminar/',
         departamento_eliminar, name='departamento_eliminar'),

      # URLS QUE MANEJAN LOS PROVEEDORES
    path('empresaProveedora/', indexEmpresaProveedora, name='indexEmpresaProveedora'),
    path('empresaProveedora/crear/', empresaProveedora_create, name='empresaProveedora_crear'),
    path('empresaProveedora/editar/<int:id_proveedor>/',empresaProveedora_edit, name='empresaProveedora_editar'),
    path('empresaProveedora/<int:id_proveedor>/eliminar/',empresaProveedora_eliminar, name='empresaProveedora_eliminar'),
    # URLS QUE MANEJAN LOS EMPLEADOS
    path('empleado/', indexEmpleado, name='indexEmpleado'),
    path('empleado/crear/', empleado_create, name='empleado_crear'),
]
