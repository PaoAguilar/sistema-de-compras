$(document).ready(function() {
    $('#id_articulo').select2();
    //    Validando los campos a ingresar
    var articulo, cantidad
    $('#guardar').on('click',function(){
        
        articulo = $('#id_articulo').val();
        cantidad = $('#cantida').val();

        
        if(articulo.length== 0 || articulo.trim() == ""){
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Articulo a requisicion',
                fade: true,
                delay: 4000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado el articulo para requisición.'
            });
        }else if(cantidad.length== 0 || cantidad.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Articulo a requisicion',
                fade: true,
                autohide: true,
                delay: 4000,
                subtitle: 'Error en el registro',
                body: 'No se ha ingresado la cantidad para requisición.'
            });  
        }else{
            document.form_ingresar.submit()
        }
    });

    // Agregando el datatable y sweet alerts
    resultado = $('#opt').val();
    $('#tableArticulosRequisicion').DataTable(
        {
            "language": {
              "decimal":        ".",
              "emptyTable":     "No hay datos para mostrar",
              "info":           "del _START_ al _END_ (_TOTAL_ total)",
              "infoEmpty":      "del 0 al 0 (0 total)",
              "infoFiltered":   "(filtrado de todas las _MAX_ entradas)",
              "infoPostFix":    "",
              "thousands":      "'",
              "lengthMenu":     "Mostrar _MENU_ entradas",
              "loadingRecords": "Cargando...",
              "processing":     "Procesando...",
              "search":         "Buscar:",
              "zeroRecords":    "No hay resultados",
              "paginate": {
                "first":      "Primero",
                "last":       "Último",
                "next":       "Siguiente",
                "previous":   "Anterior"
              },
              "aria": {
                "sortAscending":  ": ordenar de manera Ascendente",
                "sortDescending": ": ordenar de manera Descendente ",
              }
            }     
          } 
    );

    switch (resultado) {
        case '1':
            Swal.fire(
                'Articulos para requisición',
                "Se ha agregado con exito!",
                'success'
            );
            break;
        case '2':
            Swal.fire(
                'Articulos para requisición',
                "Se actualizo con exito!",
                'success'
            );
            break;
        case '3':
            Swal.fire(
                'Articulos para requisición',
                "Eliminado con exito!",
                'success'
            );
            break; 
    }  
});

