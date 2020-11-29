from django.urls import path, include
from apps.articulos.views import *

urlpatterns = [
    # URLS QUE MANEJAN LOS ARTICULOS
    path('articulo/', indexArticulo, name='indexArticulo'),
    path('articulo/crear/', articulo_create, name='articulo_crear'),
    path('articulo/editar/<int:id_articulo>/',
         articulo_edit, name='articulo_editar'),
    path('articulo/<int:id_articulo>/eliminar/',
         articulo_eliminar, name='articulo_eliminar'),
]
