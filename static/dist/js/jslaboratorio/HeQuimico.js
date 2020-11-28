$(document).ready(function() {
    var ph,azucares,sangre
    $("#printButton").click(function() {
        var mode = 'iframe'; //popup
        var close = mode == "popup";
        var options = { mode: mode, popClose: close };
        $("div.Impresion").printArea(options);
    });
    $('#guardar').on('click',function(){

        ph = $('#ph').val();
        azucares = $('#azucares').val();
        sangre = $('#sangre').val();
      
        
        

        if (ph.length==0 ||ph.trim() == "" ) {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado los ph'
            });
        
        } else if(azucares.length==0 ||azucares.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado los azucares'
            });
        }else if (sangre.length==0 ||sangre.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la presencia de sangre oculta'
            });
        }else{
            document.formuIngresar.submit()
        }
    });

});
