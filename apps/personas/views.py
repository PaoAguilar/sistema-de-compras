from django.shortcuts import render, redirect
from apps.personas.models import *
from django.contrib import messages
# Create your views here.

####################################### DEPARTAMENTOS ####################################


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


def departamento_edit(request, id_depto):
    depto = Departamento.objects.get(id=id_depto)
    if request.method == 'GET':

        contexto = {'departamento': depto}
        return render(request, 'departamentos/editar.html', contexto)

    elif request.method == 'POST':

        cod = request.POST.get('codigo')
        nombre = request.POST.get('nombre')

        depto.codigo = cod
        depto.nombre = nombre
        depto.save()
        messages.success(request, '2')
        return redirect('indexDepartamento')


def departamento_eliminar(request, id_depto):
    if request.method == 'GET':
        depto = Departamento.objects.get(id=id_depto)
        depto.delete()
        messages.success(request, '3')

    return redirect('indexDepartamento')

def indexEmpresaProveedora(request):
    empresaProveedoraregistradas = EmpresaProvedora.objects.all()
    contexto = {'empresasProveedoras': empresaProveedoraregistradas}
    return render(request, 'empresaProveedora/index.html', contexto)


def empresaProveedora_create(request):
    if request.method == 'POST':
        user_id = request.POST.get('user_id')
        depa_id = request.POST.get('depa_id')
        municipio_id = request.POST.get('municipio_id')
        nombre = request.POST.get('nombre')
        telefono = request.POST.get('telefono')
        direccion = request.POST.get('direccion')
        new_empresaProveedora = EmpresaProvedora()
        new_empresaProveedora.auth_id = user_id
        new_empresaProveedora.depa_id = depa_id
        new_empresaProveedora.municipio_id = municipio_id
        new_empresaProveedora.nombre = nombre
        new_empresaProveedora.telefono = telefono
        new_empresaProveedora.direccion = direccion
        new_empresaProveedora.save()
        messages.success(request, '1')
        return redirect('indexEmpresaProveedora')
    else:

        return render(request, 'empresaProveedora/ingresar.html')


def empresaProveedora_edit(request, id_proveedor):
    proveedor = EmpresaProvedora.objects.get(id=id_proveedor)
    if request.method == 'GET':

        contexto = {'empresaProveedora': proveedor}
        return render(request, 'empresaProveedora/editar.html', contexto)

    elif request.method == 'POST':

        user_id = request.POST.get('user_id')
        depa_id = request.POST.get('depa_id')
        municipio_id = request.POST.get('municipio_id')
        nombre = request.POST.get('nombre')
        telefono = request.POST.get('telefono')
        direccion = request.POST.get('direccion')

        proveedor.auth_id = user_id
        proveedor.depa_id = depa_id
        proveedor.municipio_id = municipio_id
        proveedor.nombre = nombre
        proveedor.telefono = telefono
        proveedor.direccion = direccion
        proveedor.save()
        messages.success(request, '2')
        return redirect('indexEmpresaProveedora')


def empresaProveedora_eliminar(request, id_proveedor):
    if request.method == 'GET':
        proveedor = EmpresaProvedora.objects.get(id=id_proveedor)
        proveedor.delete()
        messages.success(request, '3')

    return redirect('indexEmpresaProveedora')
####################################### EMPLEADOS ####################################


def indexEmpleado(request):
    return render(request, 'empleados/index.html')
