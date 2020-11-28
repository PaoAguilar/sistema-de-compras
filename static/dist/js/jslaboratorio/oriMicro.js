$(document).ready(function() {
    var uretral,urotelio,renal,leucocitos,piocitos,eritrocitos,bacteria,parasitos,funguria,filamento,proteina,cilindros
    $("#printButton").click(function() {
        var mode = 'iframe'; //popup
        var close = mode == "popup";
        var options = { mode: mode, popClose: close };
        $("div.Impresion").printArea(options);
    });
    $('#guardar').on('click',function(){

        uretral = $('#uretral').val();
        urotelio = $('#urotelio').val();
        renal = $('#renal').val();
        leucocitos = $('#leucocitos').val();
        piocitos = $('#piocitos').val();
        eritrocitos = $('#eritrocitos').val();
        bacteria = $('#bacteria').val();
        parasitos = $('#parasitos').val();
        funguria = $('#funguria').val();
        filamento = $('#filamento').val();
        proteina = $('#proteina').val();
        cilindros = $('#cilindros').val();
        

        if (uretral.length==0 ||uretral.trim() == "" ) {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el campo uretral'
            });
        
        } else if(urotelio.length==0 ||urotelio.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor urotelio'
            });
        }else if (renal.length==0 ||renal.trim() == "" ){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el vlor de  renal'
            });
        }else if(leucocitos.length==0 ||leucocitos.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de leucocitos'
            });
        } else if(piocitos.length==0 ||piocitos.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de piocitos'
            });
        }else if(eritrocitos.length==0 ||eritrocitos.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de eritrocitos'
            });
        }else if(bacteria.length==0 ||bacteria.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de bacterias'
            });
        }else if(parasitos.length==0 ||parasitos.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado valor de parasitos'
            });
        }else if(funguria.length==0 ||funguria.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de funguria'
            });
        }else if(filamento.length==0 ||filamento.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de filamento de muncia'
            });
        }else if(proteina.length==0 ||proteina.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de proteina'
            });
        }else if(cilindros.length==0 ||cilindros.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Examen Orina Microscopico',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el valor de cilindro'
            });
        }else{
            document.formuIngresar.submit()
        }
    });

});
