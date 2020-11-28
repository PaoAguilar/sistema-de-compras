$(document).ready(function() {
    var uratos,acido,oxalatos,fosca,fosamor,fosamonico,riesgos
    $("#printButton").click(function() {
        var mode = 'iframe'; //popup
        var close = mode == "popup";
        var options = { mode: mode, popClose: close };
        $("div.Impresion").printArea(options);
    });
    $('#guardar').on('click',function(){

        uratos = $('#uratos').val();
        acido = $('#acido').val();
        oxalatos = $('#oxalatos').val();
        fosca = $('#fosca').val();
        fosamor = $('#fosamor').val();
        fosamonico = $('#fosamonico').val();
        riesgos = $('#riesgos').val();
        

        if (uratos.length==0 ||uratos.trim() == "" ) {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Crisataluria',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado los uratos amorfos'
            });
        
        } else if(acido.length==0 ||acido.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Crisataluria',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el acido urico'
            });
        }else if (oxalatos.length==0 ||oxalatos.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Crisataluria',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado los oxalatos calcicos'
            });
        }else if(fosca.length==0 ||fosca.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Crisataluria',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado los fosfatos calcicos'
            });
        } else if(fosamor.length==0 ||fosamor.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Crisataluria',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado los fosfatos amorfos'
            });
        }else if(fosamonico.length==0 ||fosamonico.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Crisataluria',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado los fosfatos amonicos'
            });
        }else if(riesgos.length==0 ||riesgos.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Crisataluria',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado los riesgos litogenos'
            });
        }else{
            document.formuIngresar.submit()
        }
    });

});
