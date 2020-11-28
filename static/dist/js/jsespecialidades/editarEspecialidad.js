$(document).ready(function() {
    //    Validando los campos a ingresar
    $('[data-mask]').inputmask();
    var nombre
    $('#guardar').on('click',function(){
        
        nombre = $('#nombre').val();

        if(nombre.length==0 || nombre.trim() == "" ){
            $(document).Toasts('create', {
               class: 'bg-danger',
               title: 'Epecialidad',
               fade: true,
               delay: 4000,
               autohide: true,
               subtitle: 'Error en el registro',
               body: 'No se ha ingresado el nombre de la especialidad.'
           });
       }else{
        document.formularioEditar.submit()
       }
            
        
    });
});