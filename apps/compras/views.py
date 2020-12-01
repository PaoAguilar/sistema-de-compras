from django.shortcuts import render, redirect
from apps.compras.models import *
from apps.articulos.models import *
# Create your views here.
def indexRequision(request):
    requisioncreadas = RequesionCompra.objects.all() # aca filtrar por el usuario
    contexto = {'requision': requisioncreadas}
    return render(request,'requision/index.html', contexto)

def generarRequision(request):
    if request.method == 'GET':
        articulos = Articulo.objects.all()
        contexto = {'articulos' : articulos}
        return render(request, 'requision/generar.html', contexto)
    
    elif request.method == 'POST':
        articulos = Articulo.objects.filter(id__in = request.POST.getlist('articulos'))
        new_requision = RequesionCompra()
        new_requision.fecha_entrega = request.POST.get('fecha_entrega')
        new_requision.fecha_pedido = request.POST.get('fecha_pedido')
        new_requision.cantidad_pedido = request.POST.get('cantidad_pedido')
        new_requision.estado = 'Solicitado'
        new_requision.id_departamento_id = 1
        new_requision.save()
        if len(articulos) > 0:
            new_requision.articulos.add(*articulos)
        return redirect('indexRequision')



