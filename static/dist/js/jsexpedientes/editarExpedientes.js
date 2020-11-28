$(document).ready(function() {

    const $depa = $('#departamento');
    const $muni = $('#municipio');
    
    $depa.change(function() {
    $muni.val('');
    
    $muni.prop('disabled', !Boolean($depa.val()));
    $muni.find('option[data-region]').hide();
    $muni.find('option[data-region="' + $depa.val() + '"]').show();
});
    //    Validando los campos a ingresar
    $('[data-mask]').inputmask();

    var nombre1,nombre2, apellido1,apellido2, genero, dui, telefono, nit, isss, fecha_nacimiento, dep, muni, call, colo, casa, user, civil, NomContacto, parentContac, telContact
    $('#guardar').on('click',function(){
        
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
        user = $('#usersis').val();
        fecha_nacimiento = $('#fecha_nacimiento').val();
        civil = $('#estadocivil').val();
        NomContacto= $('#nombre_contacto').val();
        parentContac = $('#parentesco').val();
        telContact= $('#telefonoContacto').val();

        if (nombre1.length==0 ||nombre1.trim() == "" || nombre2.length==0 ||nombre2.trim() == "" ||apellido1.length==0 || apellido1.trim() == "" ||apellido2.length==0  ||genero.length==0|| genero.trim() == ""  ) {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Expediente',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el nombre, apellido o genero'
            });
        } else if(civil.length==0 || civil.trim() == ""|| fecha_nacimiento.length==0||fecha_nacimiento.trim() == "" ||telefono.length==0||telefono.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Expediente',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el estado civil, fecha de nacimiento o telefono'
            });
        }else if( dui.length==0 ||dui.trim() == ""|| nit.length==0 ||nit.trim() == ""  || isss.length==0 ||isss.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Expediente',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado DUI, NIT o ISSS'
            });
        }else if(user.length==0 || user.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Expediente',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha seleccionado el usuario del paciente'
            });
        }else if(dep.length==0||dep.trim() == ""||muni.length==0||muni.trim() == "" ||call.length==0||call.trim() == "" ||colo.length==0||colo.trim() == "" ||casa.length==0||casa.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Expediente',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado todos los datos referentes a la direccion'
            });
        }else if (NomContacto.length==0|| NomContacto.trim() == ""|| parentContac.length==0 || parentContac.trim() == ""||telContact.length==0||telContact.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Expediente',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado completo los datos del contacto'
            });
        } else{
            document.formuEditar.submit()
        }






            
    

    });

});