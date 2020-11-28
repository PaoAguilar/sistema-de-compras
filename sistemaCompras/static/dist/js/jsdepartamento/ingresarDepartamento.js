$(document).ready(function() {
    //    Validando los campos a ingresar

    var codigo, nombre
    $('#guardar').on('click',function(){
        
        nombre = $('#nombre').val();
        codigo = $('#codigo').val();
        if(nombre.length== 0 || nombre.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Departamento',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el nombre del departamento.'
            });
        }else if(codigo.length== 0 || codigo.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Departamento',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el codigo del departamento.'
            });  
        }else{
            document.formulario.submit()
        }
    });
});

