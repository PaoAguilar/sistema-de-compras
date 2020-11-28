$(document).ready(function() {

    //    Validando los campos a ingresar
    var fecha_aprox, codigo, id, enfermedad
    $('#guardarAntMed').on('click',function(){
        id=$('#id_cod_ante_med').val();
        fecha_aprox = $('#fecha_ante_med').val();
        codigo = $('#codigo').val();
        enfermedad = $('#enfermedad').val();
        if(fecha_aprox.length==0 || fecha_aprox.trim() == "" ){
             $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Antecedente Médico',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha ingresado la fecha.'
            });
        }else if(codigo.length==0 || codigo.trim() == "" || (enfermedad && !id && codigo) || !enfermedad||enfermedad.length<4){
            $(document).Toasts('create', {
               class: 'bg-danger',
               title: 'Antecedente Médico',
               fade: true,
               delay: 4000,
               autohide: true,
               body: 'La enfermedad o el código ingresado es inválido.'
           });
        }else{
            document.formuIngresarAntecedentesMed.submit()
        }
    });

    $('#guardarAntMedicoEditar').on('click',function(){
        id=$('#id_cod_ante_med_editar').val();
        fecha_aprox = $('#fecha_ante_med_editar').val();
        codigo = $('#codigo_editar').val();
        enfermedad = $('#enfermedad_editar').val();
        if(fecha_aprox.length==0 || fecha_aprox.trim() == "" ){
             $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Antecedente Médico',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha ingresado la fecha.'
            });
            $('.toast').css('z-index',9999999);
        }else if(codigo.length==0 || codigo.trim() == "" || (enfermedad && !id && codigo) || !enfermedad||enfermedad.length<4){
            $(document).Toasts('create', {
               class: 'bg-danger',
               title: 'Antecedente Médico',
               fade: true,
               delay: 4000,
               autohide: true,
               body: 'La enfermedad o el código ingresado es inválido.'
           });
          $('.toast').css('z-index',9999999);
        }else{
            document.formuEditarAntMedico.submit()
        }
    });
});