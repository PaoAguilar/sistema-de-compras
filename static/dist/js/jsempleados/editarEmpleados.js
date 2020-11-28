$(document).ready(function () {
    //    Validando los campos a ingresar
    const $depa = $('#departamento');
    const $muni = $('#municipio');

    $depa.change(function () {
        $muni.val('');

        $muni.prop('disabled', !Boolean($depa.val()));
        $muni.find('option[data-region]').hide();
        $muni.find('option[data-region="' + $depa.val() + '"]').show();
    });
    $('[data-mask]').inputmask();
    var nombre1, nombre2, apellido1, apellido2, genero, dui, telefono, nit, isss, fechaNaci, tipEmpl, sueldo, fechacontra, estado, clinica_id, usersis, especialidad_id, cargo, dep, muni, call, colo, casa, civil
    $('#guardar').on('click', function () {

        nombre1 = $('#nombre1').val();
        nombre2 = $('#nombre2').val();
        apellido1 = $('#apellido1').val();
        apellido2 = $('#apellido2').val();
        genero = $('#genero').val();
        dui = $('#dui').val();
        telefono = $('#telefono').val();
        dep = $('#departamento').val();
        muni = $('#municipio').val();
        call = $('#calle').val();
        colo = $('#colonia').val();
        casa = $('#casa').val();
        nit = $('#nit').val();
        isss = $('#isss').val();
        fechaNaci = $('#fechaNaci').val();
        civil = $('#estadocivil').val();


        tipEmpl = $('#tipEmpl').val();
        sueldo = $('#sueldo').val();
        fechacontra = $('#fechacontra').val();
        estado = $('#estado').val();
        clinica_id = $('#clinica_id').val();
        usersis = $('#usersis').val();
        especialidad_id = $('#especialidad_id').val();
        cargo = $('#cargo').val();


        if (nombre1.length == 0 || nombre1.trim() == "" || nombre2.length == 0 || nombre2.trim() == "" || apellido1.length == 0 || apellido1.trim() == "" || apellido2.length == 0 || apellido2.trim() == "" || civil.length == 0 || civil.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Empleado',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el nombre, apellido o estado civil'
            });
        } else if (genero.length == 0 || genero.trim() == "" || fechaNaci.length == 0 || fechaNaci.trim() == "" || telefono.length == 0 || telefono.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Empleado',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el genero, fecha de nacimiento o telefono'
            });
        } else if (dep.length == 0 || dep.trim() == "" || muni.length == 0 || muni.trim() == "" || call.length == 0 || call.trim() == "" || colo.length == 0 || colo.trim() == "" || casa.length == 0 || casa.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Empleado',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado todos los datos referentes a la direccion'
            });
        } else if (dui.length == 0 || dui.trim() == "" || nit.length == 0 || nit.trim() == "" || isss.length == 0 || isss.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Empleado',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado DUI, NIT o ISSS'
            });
        } else if (usersis.length == 0 || usersis.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Empleado',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha seleccionado el usuario del trabajador'
            });
        } else if (sueldo.length == 0 || sueldo.trim() == "" || fechacontra.length == 0 || fechacontra.trim() == "" || cargo.length == 0 || cargo.trim() == "" || tipEmpl.length == 0 || tipEmpl.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Empleado',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No ingresado el sueldo, fecha de contratacion,cargo o tipo de empleado'
            });
        } else if (estado.length == 0 || estado.trim() == "" || clinica_id.length == 0 || clinica_id.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Empleado',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No ingresado el estado o la clinica'
            });
        } else {
            document.formuIngresar.submit()
        }
    });
});

//Validando que si el empleado NO es doctor, no se pueda elegir especialidad
function mostrarEspecialidad() {
    /* Para obtener el valor*/
    var cod = $('#tipEmpl').val();
    console.log(cod)
    if (cod == "Personal Medico") {
        document.getElementById("espera").hidden = true;
        document.getElementById("especialidad").hidden = false;
    } else {
        document.getElementById("especialidad").hidden = true;
        // para volver a dejar el campo de especialidad vacio
        document.getElementById("especialidad_id").value = '';
    }
}