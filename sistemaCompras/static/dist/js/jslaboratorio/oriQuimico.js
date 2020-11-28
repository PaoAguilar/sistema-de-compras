$(document).ready(function() {
    var densidad,ph,glucosa,proteinas,hemoglobina,cuerpo_cetonico,pigmento_biliar,urobilinogeno,nitritos
    $("#printButton").click(function() {
        var mode = 'iframe'; //popup
        var close = mode == "popup";
        var options = { mode: mode, popClose: close };
        $("div.Impresion").printArea(options);
    });
    $('#guardar').on('click',function(){

        densidad = $('#densidad').val();
        ph = $('#ph').val();
        glucosa = $('#glucosa').val();
        proteinas = $('#proteinas').val();
        hemoglobina = $('#hemoglobina').val();
        cuerpo_cetonico = $('#cuerpo_cetonico').val();
        pigmento_biliar = $('#pigmento_biliar').val();
        urobilinogeno = $('#urobilinogeno').val();
        nitritos = $('#nitritos').val();
        filamento = $('#filamento').val();
        proteina = $('#proteina').val();
        cilindros = $('#cilindros').val();
        

        if (densidad.length==0 ||densidad.trim() == "" ) {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el campo densidad'
            });
        
        } else if(ph.length==0 ||ph.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor ph'
            });
        }else if (glucosa.length==0 ||glucosa.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de  glucosal'
            });
        }else if(proteinas.length==0 ||proteinas.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de proteinas'
            });
        } else if(hemoglobina.length==0 ||hemoglobina.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de hemoglobina'
            });
        }else if(cuerpo_cetonico.length==0 ||cuerpo_cetonico.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de cuerpo_cetonico'
            });
        }else if(pigmento_biliar.length==0 ||pigmento_biliar.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de pigmento_biliars'
            });
        }else if(urobilinogeno.length==0 ||urobilinogeno.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado valor de .urobilinogeno'
            });
        }else if(nitritos.length==0 ||nitritos.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Quimico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de nitritos'
            });
        }else{
            document.formuIngresar.submit()
        }
    });

});
