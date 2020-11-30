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

####################################### EMPLEADOS ####################################


def indexEmpleado(request):
    Empl = Empleado.objects.all()
    contexto = {'empleados': Empl}
    return render(request, 'empleados/index.html', contexto)


def empleado_create(request):
    if request.method == 'POST':
        #### AGREGADO LOS DATOS DE EMPLEADO ###
        nombre1 = request.POST.get('nombre1')
        nombre2 = request.POST.get('nombre2')
        apellido1 = request.POST.get('apellido1')
        apellido2 = request.POST.get('apellido2')
        genero = request.POST.get('genero')
        fechaNaci = request.POST.get('fechaNaci')
        telefono = request.POST.get('telefono')
        dep = request.POST.get('departamento')
        muni = request.POST.get('municipio')
        direccion = request.POST.get('direccion')
        dui = request.POST.get('dui')
        nit = request.POST.get('nit')
        usersis = request.POST.get('usersis')
        tipoDepa = request.POST.get('tipoDepa')
        fechcontra = request.POST.get('fechacontra')

        # CREAMOS LA INFORMACION DEL EMPLEADO
        new_empleado = Empleado()
        new_empleado.primer_nombre = nombre1
        new_empleado.segundo_nombre = nombre2
        new_empleado.primer_apellido = apellido1
        new_empleado.segundo_apellido = apellido2
        new_empleado.genero = genero
        new_empleado.fecha_nacimiento = fechaNaci
        new_empleado.telefono = telefono
        new_empleado.depa_id_id = dep
        new_empleado.municipio_id_id = muni
        new_empleado.direccion = direccion
        new_empleado.dui = dui
        new_empleado.nit = nit
        new_empleado.auth_id_id = usersis
        new_empleado.id_departamento_id = tipoDepa
        new_empleado.fecha_contratacion = fechcontra

        new_empleado.save()
        messages.success(request, '1')
        return redirect('indexEmpleado')

    else:
        usersdispo = User.objects.exclude(
            id__in=Empleado.objects.order_by().values('auth_id_id').distinct())
        tipodepartamento = Departamento.objects.all()
        depart = Depa.objects.all()
        muni = Municipio.objects.all()
        contexto = {'usuarios': usersdispo,
                    'tipoDepas': tipodepartamento,
                    'departamentos': depart,
                    'municipios': muni}
        return render(request, 'empleados/ingresar.html', contexto)


def empleado_edit(request, id_empleado):

    usersdispo = User.objects.exclude(
        id__in=Empleado.objects.order_by().values('auth_id_id').distinct())
    tipodepartamento = Departamento.objects.all()
    infoempleado = Empleado.objects.get(id=id_empleado)
    depart = Depa.objects.all()
    muni = Municipio.objects.all()

    if request.method == 'GET':
        contexto = {'usuarios': usersdispo,
                    'empleado': infoempleado,
                    'tipoDepas': tipodepartamento,
                    'departamentos': depart,
                    'municipios': muni
                    }
        return render(request, 'empleados/editar.html', contexto)

    elif request.method == 'POST':
        # obteniendo los datos a actualizar de empleado
        nombre1 = request.POST.get('nombre1')
        nombre2 = request.POST.get('nombre2')
        apellido1 = request.POST.get('apellido1')
        apellido2 = request.POST.get('apellido2')
        genero = request.POST.get('genero')
        fechaNaci = request.POST.get('fechaNaci')
        telefono = request.POST.get('telefono')
        dep = request.POST.get('departamento')
        muni = request.POST.get('municipio')
        direccion = request.POST.get('direccion')
        dui = request.POST.get('dui')
        nit = request.POST.get('nit')
        usersis = request.POST.get('usersis')
        tipoDepa = request.POST.get('tipoDepa')
        fechcontra = request.POST.get('fechacontra')

        # Actualizamos primero el info de la tablapersona
        infoempleado.primer_nombre = nombre1
        infoempleado.segundo_nombre = nombre2
        infoempleado.primer_apellido = apellido1
        infoempleado.segundo_apellido = apellido2
        infoempleado.genero = genero
        infoempleado.fecha_nacimiento = fechaNaci
        infoempleado.telefono = telefono
        infoempleado.depa_id_id = dep
        infoempleado.municipio_id_id = muni
        infoempleado.direccion = direccion
        infoempleado.dui = dui
        infoempleado.nit = nit
        infoempleado.id_departamento_id = tipoDepa
        infoempleado.fecha_contratacion = fechcontra
        infoempleado.save()
        messages.success(request, '2')
        return redirect('indexEmpleado')


def empleado_detalle(request, id_empleado):
    usersdispo = User.objects.all()
    infoempleado = Empleado.objects.get(id=id_empleado)
    tipodepartamento = Departamento.objects.all()
    depart = Depa.objects.all()
    muni = Municipio.objects.all()
    contexto = {'usuarios': usersdispo,
                'empleado': infoempleado,
                'tipoDepas': tipodepartamento,
                'departamentos': depart,
                'municipios': muni
                }
    return render(request, 'empleados/detalles.html', contexto)


def empleado_eliminar(request, id_empleado):
    if request.method == 'GET':
        infoempleado = Empleado.objects.get(id=id_empleado)
        infoempleado.delete()
        messages.success(request, '3')
    return redirect('indexEmpleado')
