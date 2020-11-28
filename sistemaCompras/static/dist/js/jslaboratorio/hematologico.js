$(document).ready(function() {
    var serie,unidad,referencia
    $("#printButton").click(function() {
        var mode = 'iframe'; //popup
        var close = mode == "popup";
        var options = { mode: mode, popClose: close };
        $("div.Impresion").printArea(options);
    });
    $('#guardar').on('click',function(){

        serie = $('#tserie').val();
        unidad = $('#unidad').val();
        referencia = $('#vreferencia').val();
        

        if (serie.length==0 ||serie.trim() == "" ) {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen hematologico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el tipo de serie'
            });
        
        } else if(unidad.length==0 ||unidad.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen hematologico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la unidad'
            });
        }else if (referencia.length==0 ||referencia.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen hematologico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de referencia'
            });
        }else{
            document.formuIngresar.submit()
        }
    });

});
