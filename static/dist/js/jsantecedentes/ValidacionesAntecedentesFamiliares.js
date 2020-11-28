$(document).ready(function() {

    //    Validando los campos a ingresar
    var nombre_familiar, parentesco, padecimientos
    $('#guardarAntFam').on('click',function(){
        
        nombre_familiar = $('#nombre_familiar').val();
        parentesco = $('#parentesco').val();
        padecimientos = $('#padecimientos').val();
        if(nombre_familiar.length==0 || nombre_familiar.trim() == "" ){
             $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Antecedente Familiar',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha ingresado el nombre del familiar.'
            });
        }else if(parentesco.length==0 || parentesco.trim() == "" ){
            $(document).Toasts('create', {
               class: 'bg-danger',
               title: 'Antecedente Familiar',
               fade: true,
               delay: 4000,
               autohide: true,
               body: 'No se ha ingresado el parentesco.'
           });
        }else if(padecimientos.length==0 || padecimientos.trim() == "" ){
            $(document).Toasts('create', {
               class: 'bg-danger',
               title: 'Antecedente Familiar',
               fade: true,
               delay: 4000,
               autohide: true,
               body: 'No se ha ingresado el padecimiento.'
           });
        }else{
            document.formuIngresarAntecedentesFam.submit()
        }
    });
});
