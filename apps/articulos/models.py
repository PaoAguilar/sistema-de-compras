from django.db import models
from apps.personas.models import EmpresaProvedora


# Create your models here.
class Articulo(models.Model):
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

    def __str__(self):
        return '%s' % (self.nombre)

class Oferta(models.Model):
    #id default
    precio = models.FloatField()
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    periodo_gracia = models.IntegerField() #arreglar diagrama
    descuento = models.IntegerField()    #arreglar diagrama
    tipo_entrega = models.CharField(max_length=25)
    id_articulo = models.ForeignKey(Articulo, on_delete=models.CASCADE, db_column= 'id_articulos')
    id_provedora = models.ForeignKey(EmpresaProvedora, on_delete=models.CASCADE, db_column= 'id_provedora')
    
    
    class Meta:
        db_table = 'Oferta'
        verbose_name = 'Oferta'
        verbose_name_plural = 'Ofertas'
        default_permissions = []

    def __str__(self):
        return '%s' % (self.id_articulo)

class Inventario(models.Model):
    #id default
    id_articulo = models.ForeignKey(Articulo, on_delete=models.CASCADE, db_column= 'id_articulos')
    existencia = models.IntegerField()
    id_remision = models.ForeignKey('compras.NotaRemision', on_delete= models.CASCADE, db_column='id_remision')    

    class Meta:
        db_table = 'Inventario'
        verbose_name = 'Inventario'
        verbose_name_plural = 'Inventario'
        default_permissions = []

    def __str__(self):
        return '%s' % (self.id_articulo)

