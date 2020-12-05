$(document).ready(function() {
    //    Validando los campos a ingresar

    var fecha_pedido, fecha_entrega
    $('#guardar').on('click',function(){
        
        fecha_pedido = $('#fecha_pedido').val();
        fecha_entrega = $('#fecha_entrega').val();

        
        if(fecha_pedido.length== 0 || fecha_pedido.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Requisicion',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la fecha de pedido.'
            });
        }else if(fecha_entrega.length== 0 || fecha_entrega.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Requisicion',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la fecha de entrega.'
            });  
        }else{
            document.formulario.submit()
        }
    });
});

