$(document).ready(function () {
    $('#usersis').select2();
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
    var nombre1, nombre2, apellido1, apellido2, genero, fechaNaci, telefono, direccion, dep, muni, dui, nit,  usersis, tipoDepa, fechacontra
    $('#guardar').on('click', function () {

        nombre1 = $('#nombre1').val();
        nombre2 = $('#nombre2').val();
        apellido1 = $('#apellido1').val();
        apellido2 = $('#apellido2').val();
        genero = $('#genero').val();
        fechaNaci = $('#fechaNaci').val();
        telefono = $('#telefono').val();
        direccion = $('#direccion').val();
        dep = $('#departamento').val();
        muni = $('#municipio').val();
        dui = $('#dui').val();
        nit = $('#nit').val();
        usersis = $('#usersis').val();
        tipoDepa = $('#tipoDepa').val();
        fechacontra = $('#fechacontra').val();
        

        if (nombre1.length == 0 || nombre1.trim() == "" || nombre2.length == 0 || nombre2.trim() == "" || apellido1.length == 0 || apellido1.trim() == "" || apellido2.length == 0 || apellido2.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Empleado',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el nombre o apellido'
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
        } else if (dep.length == 0 || dep.trim() == "" || muni.length == 0 || muni.trim() == "" || direccion.length == 0 || direccion.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Empleado',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado todos los datos referentes a la direccion'
            });
        } else if (dui.length == 0 || dui.trim() == "" || nit.length == 0 || nit.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Empleado',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado DUI o NIT'
            });
        } else if (usersis.length == 0 || usersis.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Empleado',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha seleccionado el usuario del empleado'
            });
        } else if (tipoDepa.length == 0 || tipoDepa.trim() == "" || fechacontra.length == 0 || fechacontra.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Empleado',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No ingresado el tipo de departamento o fecha de contratacion'
            });
        } else {
            document.formuEditar.submit()
        }
    });
});