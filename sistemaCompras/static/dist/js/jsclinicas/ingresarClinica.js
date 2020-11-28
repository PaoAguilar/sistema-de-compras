$(document).ready(function() {
    //    Validando los campos a ingresar
    const $depa = $('#departamento');
    const $muni = $('#municipio');
    
    $depa.change(function() {
    $muni.val('');
    
    $muni.prop('disabled', !Boolean($depa.val()));
    $muni.find('option[data-region]').hide();
    $muni.find('option[data-region="' + $depa.val() + '"]').show();
    });
    var nombre, direccion
    $('#guardar').on('click',function(){
        
        nombre = $('#nombre').val();
        direccion = $('#direccion').val();
        if(nombre.length== 0 || nombre.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Clinica',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el nombre de la clinica.'
            });
        }else if(direccion.length== 0 || direccion.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Clinica',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la direccion de la clinica.'
            });
        
        }else{
            document.formulario.submit()
        }

    });

});

