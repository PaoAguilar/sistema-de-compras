$(document).ready(function() {

    //    Validando los campos a ingresar
    var nombre_comercial, nombre_medicamento, tipo_administracion, concentracion, frecuencia
    $('#guardarMed').on('click',function(){
        
        nombre_comercial = $('#nombre_comercial').val();
        nombre_medicamento = $('#nombre_medicamento').val();
        tipo_administracion = $('#tipo_adminis').val();
        concentracion = $('#concentracion').val();
        frecuencia = $('#frecuencia').val();
        if(nombre_comercial.length==0 || nombre_comercial.trim() == "" ){
             $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Medicación Actual',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha ingresado el nombre comercial del medicamento.'
            });
        }else if(nombre_medicamento.length==0 || nombre_medicamento.trim() == "" ){
            $(document).Toasts('create', {
               class: 'bg-danger',
               title: 'Medicación Actual',
               fade: true,
               delay: 4000,
               autohide: true,
               body: 'No se ha ingresado el nombre del medicamento.'
           });
        }else if(tipo_administracion.length==0 || tipo_administracion.trim() == "" ){
            $(document).Toasts('create', {
               class: 'bg-danger',
               title: 'Medicación Actual',
               fade: true,
               delay: 4000,
               autohide: true,
               body: 'No se ha ingresado el tipo de administración de medicamento.'
           });
        }else if(concentracion.length==0 || concentracion.trim() == "" ){
            $(document).Toasts('create', {
               class: 'bg-danger',
               title: 'Medicación Actual',
               fade: true,
               delay: 4000,
               autohide: true,
               body: 'No se ha ingresado la concentración del medicamento.'
           });
        }else if(frecuencia.length==0 || frecuencia.trim() == "" ){
            $(document).Toasts('create', {
               class: 'bg-danger',
               title: 'Medicación Actual',
               fade: true,
               delay: 4000,
               autohide: true,
               body: 'No se ha ingresado la frecuencia de consumo de medicamento.'
           });
        }else{
            document.formuIngresarMedicacion.submit()
        }
    });
});
