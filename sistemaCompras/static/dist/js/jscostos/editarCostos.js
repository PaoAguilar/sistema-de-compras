$(document).ready(function() {
    //    Validando los campos a ingresar
    var conc, cos
    $('#guardar').on('click',function(){
        
        conc = $('#concepto').val();
        cos = $('#costo').val();
        if(conc.length==0 || conc.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Costos',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el nombre del costo.'
            });
        }else if(cos.length== 0 || cos.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Costos',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el monto del costo'
            });
        
        }else{
            document.formuEditar.submit()
        }
            
        

    });

});
