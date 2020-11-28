from django.shortcuts import render, redirect
from apps.personas.models import *
from django.contrib import messages
# Create your views here.


def indexDepartamento(request):
    departamentosregistrados = Departamento.objects.all()
    contexto = {'departamentos': departamentosregistrados}
    return render(request, 'departamentos/index.html', contexto)


def departamento_create(request):
    if request.method == 'POST':
        cod = request.POST.get('codigo')
        nombre = request.POST.get('nombre')
        new_departamento = Departamento()
        new_departamento.codigo = cod
        new_departamento.nombre = nombre
        new_departamento.save()
        messages.success(request, '1')
        return redirect('indexDepartamento')
    else:

        return render(request, 'departamentos/ingresar.html')
