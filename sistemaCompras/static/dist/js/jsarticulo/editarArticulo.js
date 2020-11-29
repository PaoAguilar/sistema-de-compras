$(document).ready(function() {
    //    Validando los campos a ingresar

    var codigo, nombre
    $('#guardar').on('click',function(){
        
        serial = $('#serial').val();
        nombre = $('#nombre').val();
        marca = $('#marca').val();
        modelo = $('#modelo').val();
        descripcion = $('#descripcion').val();

        if(serial.length== 0 || serial.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Articulo',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el serial del articulo.'
            });
        }else if(nombre.length== 0 || nombre.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Articulo',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el nombre del articulo.'
            });  
        }else if(marca.length== 0 || marca.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Articulo',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la marca del articulo.'
            });  
        }else if(modelo.length== 0 || modelo.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Articulo',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el modelo del articulo.'
            });  
        }else if(descripcion.length== 0 || descripcion.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Articulo',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la descripcion del articulo.'
            });  
        }else{
            document.formularioEditar.submit()
        }
    });
});