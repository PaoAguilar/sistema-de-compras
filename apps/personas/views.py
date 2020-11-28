from django.shortcuts import render, redirect
from apps.personas.models import *
# Create your views here.


def indexDepartamento(request):
    return render(request, 'departamentos/index.html')


def departamento_create(request):
    if request.method == 'POST':
        cod = request.POST.get('codigo')
        nombre = request.POST.get('nombre')
        new_departamento = Departamento()
        new_departamento.codigo = cod
        new_departamento.nombre = nombre
        new_departamento.save()
        return redirect('indexDepartamento')
    else:

        return render(request, 'departamentos/ingresar.html')
