$(document).ready(function() {
    var parametro,comentario,unidades,resultado,rango
    $("#printButton").click(function() {
        var mode = 'iframe'; //popup
        var close = mode == "popup";
        var options = { mode: mode, popClose: close };
        $("div.Impresion").printArea(options);
    });
    $('#guardar').on('click',function(){

        parametro = $('#parametro').val();
        comentario = $('#comentario').val();
        unidades = $('#unidades').val();
        resultado = $('#resultado').val();
        rango = $('#rango').val();
        
        

        if (parametro.length==0 ||parametro.trim() == "" ) {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Sanguineo Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el campo parametro'
            });
        
        } else if(comentario.length==0 ||comentario.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Sanguineo Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor comentario'
            });
        }else if (unidades.length==0 ||unidades.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Sanguineo Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de  unidades'
            });
        }else if(resultado.length==0 ||resultado.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Sanguineo Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de resultado'
            });
        } else if(rango.length==0 ||rango.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Sanguineo Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de rango'
            });
        }else{
            document.formuIngresar.submit()
        }
    });

});
