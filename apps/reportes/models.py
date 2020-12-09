from django.db import models
from apps.articulos.models import Oferta
from apps.personas.models import Departamento, EmpresaProvedora
# Create your models here.

class Art(models.Model):
    #id default
    serial = models.CharField(max_length=20)
    nombre = models.CharField(max_length=25) # cambiar dice articulo
    marca = models.CharField(max_length=25)
    modelo = models.CharField(max_length=25)
    descripcion = models.CharField(max_length=100)

    class Meta:
        db_table = 'Articulo'
        verbose_name = 'Articulo'
        verbose_name_plural = 'Articulos'
        default_permissions = []
        managed = False

    def __str__(self):
        return '%s' % (self.nombre)

class Requision(models.Model):
    #Id default
    articulos = models.ManyToManyField(Art, through='ReqArticulo')
    id_departamento = models.ForeignKey(Departamento, on_delete= models.CASCADE, db_column='id_departamento')
    fecha_pedido = models.DateField()
    fecha_entrega = models.DateField()
    estado = models.CharField(max_length=30)

    class Meta:
        db_table = 'Requisicion'
        verbose_name = 'Requsicion'
        verbose_name_plural = 'Requisicion'
        default_permissions = []
        managed = False

    def __str__(self):
        return '%s' % (self.id_articulo)      

class ReqArticulo(models.Model):  
    #id_default
    articulo = models.ForeignKey(Art, on_delete=models.CASCADE)
    requisicion = models.ForeignKey(Requision, on_delete=models.CASCADE)
    cantidad_pedido = models.IntegerField()

    class Meta:
        db_table = 'COMPRAS_REQUESICIONARTICULO'
        verbose_name = 'COMPRAS_REQUESICIONARTICULO'
        verbose_name_plural = 'COMPRAS_REQUESICIONARTICULO'
        default_permissions = []
        managed = False

    def __str__(self):
        return '%s' % (self.requisicion)      
