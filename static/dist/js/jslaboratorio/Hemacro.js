$(document).ready(function() {
    var aspecto,consistencia,color,presencia,olor,restos,moco
    $("#printButton").click(function() {
        var mode = 'iframe'; //popup
        var close = mode == "popup";
        var options = { mode: mode, popClose: close };
        $("div.Impresion").printArea(options);
    });
    $('#guardar').on('click',function(){

        aspecto = $('#aspecto').val();
        consistencia = $('#consistencia').val();
        color = $('#color').val();
        presencia = $('#sangre').val();
        olor = $('#olor').val();
        restos = $('#restos').val();
        moco = $('#moco').val();
        

        if (aspecto.length==0 ||aspecto.trim() == "" ) {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Macroscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el aspecto'
            });
        
        } else if(consistencia.length==0 ||consistencia.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Macroscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la consistencia'
            });
        }else if (color.length==0 ||color.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Macroscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el color'
            });
        }else if(presencia.length==0 ||presencia.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Macroscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la presencia de sangre'
            });
        } else if(olor.length==0 ||olor.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Macroscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado olor'
            });
        }else if(restos.length==0 ||restos.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Macroscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado si hay restos de comida'
            });
        }else if(moco.length==0 ||moco.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Macroscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la presencia de moco'
            });
        }else{
            document.formuIngresar.submit()
        }
    });

});
