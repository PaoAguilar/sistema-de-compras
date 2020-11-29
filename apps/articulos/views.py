from django.shortcuts import render, redirect
from apps.articulos.models import *
from django.contrib import messages

# Create your views here.


def indexArticulo(request):
    articulosregistrados = Articulo.objects.all()
    contexto = {'articulos': articulosregistrados}
    return render(request, 'articulos/index.html', contexto)


def articulo_create(request):
    if request.method == 'POST':
        serial = request.POST.get('serial')
        nombre = request.POST.get('nombre')
        marca = request.POST.get('marca')
        modelo = request.POST.get('modelo')
        descripcion = request.POST.get('descripcion')
        new_articulo = Articulo()
        new_articulo.serial = serial
        new_articulo.nombre = nombre
        new_articulo.marca = marca
        new_articulo.modelo = modelo
        new_articulo.descripcion = descripcion
        new_articulo.save()
        messages.success(request, '1')
        return redirect('indexArticulo')
    else:

        return render(request, 'articulos/ingresar.html')


def articulo_edit(request, id_articulo):
    articulo = Articulo.objects.get(id=id_articulo)
    if request.method == 'GET':

        contexto = {'articulo': articulo}
        return render(request, 'articulos/editar.html', contexto)

    elif request.method == 'POST':

        serial = request.POST.get('serial')
        nombre = request.POST.get('nombre')
        marca = request.POST.get('marca')
        modelo = request.POST.get('modelo')
        descripcion = request.POST.get('descripcion')

        articulo.serial = serial
        articulo.nombre = nombre
        articulo.marca = marca
        articulo.modelo = modelo
        articulo.descripcion = descripcion
        articulo.save()
        messages.success(request, '2')
        return redirect('indexArticulo')


def articulo_eliminar(request, id_articulo):
    if request.method == 'GET':
        articulo = Articulo.objects.get(id=id_articulo)
        articulo.delete()
        messages.success(request, '3')

    return redirect('indexArticulo')
