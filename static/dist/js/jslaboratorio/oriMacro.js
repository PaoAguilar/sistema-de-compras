$(document).ready(function() {
    var color,aspecto,sedimento
    $("#printButton").click(function() {
        var mode = 'iframe'; //popup
        var close = mode == "popup";
        var options = { mode: mode, popClose: close };
        $("div.Impresion").printArea(options);
    });
    $('#guardar').on('click',function(){

        color = $('#color').val();
        aspecto = $('#aspecto').val();
        sedimento = $('#sedimento').val();
        if (color.length==0 ||color.trim() == "" ) {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Macroscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el color'
            });
        
        } else if(aspecto.length==0 ||aspecto.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Macroscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el aspecto '
            });
        }else if (sedimento.length==0 ||sedimento.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Macroscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado los sedimentos '
            });
        }else{
            document.formuIngresar.submit()
        }
    });

});
