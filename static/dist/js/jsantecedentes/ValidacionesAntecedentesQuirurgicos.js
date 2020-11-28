$(document).ready(function() {

    //    Validando los campos a ingresar
    var fecha_aprox, descripcion, causa, complicacion
    $('#guardarAntQuirurgico').on('click',function(){
        
        fecha_aprox = $('#fecha_ante_quirur').val();
        descripcion = $('#descripcion_cirugia').val();
        causa = $('#causa').val();
        complicacion = $('#complicacion').val();
        if(fecha_aprox.length==0 || fecha_aprox.trim() == "" ){
             $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Antecedente Quirúrgico',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha ingresado la fecha aproximada.'
            });
        }else if(descripcion.length==0 || descripcion.trim() == "" ){
            $(document).Toasts('create', {
               class: 'bg-danger',
               title: 'Antecedente Quirúrgico',
               fade: true,
               delay: 4000,
               autohide: true,
               body: 'No se ha ingresado la descripción de la cirugía.'
           });
        }else if(causa.length==0 || causa.trim() == "" ){
            $(document).Toasts('create', {
               class: 'bg-danger',
               title: 'Antecedente Quirúrgico',
               fade: true,
               delay: 4000,
               autohide: true,
               body: 'No se ha ingresado la causa de cirugía.'
           });
        }else if(complicacion.length==0 || complicacion.trim() == "" ){
            $(document).Toasts('create', {
               class: 'bg-danger',
               title: 'Antecedente Quirúrgico',
               fade: true,
               delay: 4000,
               autohide: true,
               body: 'No se ha ingresado la complicación.'
           });
        }else{
            document.formuIngresarAntecedentesQui.submit()
        }
    });
});
