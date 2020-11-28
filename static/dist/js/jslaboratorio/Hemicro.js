$(document).ready(function() {
    var hematies,leucocitos,flora,levadura
    $("#printButton").click(function() {
        var mode = 'iframe'; //popup
        var close = mode == "popup";
        var options = { mode: mode, popClose: close };
        $("div.Impresion").printArea(options);
    });
    $('#guardar').on('click',function(){

        hematies = $('#hematies').val();
        leucocitos = $('#leucocitos').val();
        flora = $('#flora').val();
        levadura = $('#levadura').val();
        
        

        if (hematies.length==0 ||hematies.trim() == "" ) {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado los hematies'
            });
        
        } else if(leucocitos.length==0 ||leucocitos.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado los leucocitos'
            });
        }else if (flora.length==0 ||flora.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la flora bacteriana'
            });
        }else if(levadura.length==0 ||levadura.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Heces Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la levardura'
            });
        } else{
            document.formuIngresar.submit()
        }
    });

});
