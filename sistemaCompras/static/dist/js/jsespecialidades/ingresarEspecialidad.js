$(document).ready(function() {
    //    Validando los campos a ingresar
    var nombre_especialidad
    $('#guardar').on('click',function(){
        
        nombre_especialidad = $('#nombre_especialidad').val();
        if(nombre_especialidad.length==0 || nombre_especialidad.trim() == "" ){
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
            document.formulario.submit()
        }
    });
});
