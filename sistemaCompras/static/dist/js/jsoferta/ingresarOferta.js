$(document).ready(function() {
    //    Validando los campos a ingresar

    var precio, fecha_inicio, fecha_fin, periodo_gracia, descuento, tipo_entrega, id_articulos, id_provedora
    $('#guardar').on('click',function(){
        
        precio = $('#precio').val();
        fecha_inicio = $('#fecha_inicio').val();
        fecha_fin = $('#fecha_fin').val();
        periodo_gracia = $('#periodo_gracia').val();
        descuento = $('#descuento').val();
        tipo_entrega = $('#tipo_entrega').val();
        id_articulos = $('#id_articulos').val();
        id_provedora = $('#id_provedora').val();
        
        if(precio.length== 0 || precio.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Oferta',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el Precio de la Oferta.'
            });
        }else if(fecha_inicio.length== 0 || fecha_inicio.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Oferta',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el Inicio de la Oferta.'
            });  
        }else if(fecha_fin.length== 0 || fecha_fin.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Oferta',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el Fin de la Oferta.'
            });  
        }else if(periodo_gracia.length== 0 || periodo_gracia.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Oferta',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el Periodo de Gracia de la Oferta.'
            });  
        }else if(descuento.length== 0 || descuento.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Oferta',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el descuento de la Oferta.'
            });  
        }else if(tipo_entrega.length== 0 || tipo_entrega.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Oferta',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el Tipo de Entrega de la Oferta.'
            });  
        }else{
            document.formulario.submit()
        }
    });
});

