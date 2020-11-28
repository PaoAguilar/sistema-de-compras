$(document).ready(function() {
        var nombre,docuemnto
        $("#printButton").click(function() {
            var mode = 'iframe'; //popup
            var close = mode == "popup";
            var options = { mode: mode, popClose: close };
            $("div.Impresion").printArea(options);
        });
        $('#guardar').on('click',function(){
    
            nombre = $('#nombreExamen').val();
            documento = $('#archivo').val();
            
    
            if (nombre.length==0 ||nombre.trim() == "" ) {
                $(document).Toasts('create', {
                    class: 'bg-danger',
                    title: 'Expediente',
                    fade: true,
                    delay: 4000,
                    autohide: true,
                    subtitle: 'Error en el registro',
                    body: 'No se ha ingresado el nombre del examen o el archivo del examen'
                });
            
            } else{
                document.formuIngresar.submit()
            }
        });
    
    });
    