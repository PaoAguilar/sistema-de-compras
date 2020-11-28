$(document).ready(function() {

    resultado = $('#opt').val();
    $('#tablaExpedientes thead tr').clone(true).appendTo( '#tablaExpedientes thead' );
    $('#tablaExpedientes thead tr:eq(1) th').each( function (i) {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Buscar '+title+'" />' );
 
        $( 'input', this ).on( 'keyup change', function () {
            if ( table.column(i).search() !== this.value ) {
                table
                    .column(i)
                    .search( this.value )
                    .draw();
            }
        } );
    } );
    var table = $('#tablaExpedientes').DataTable( {
        orderCellsTop: true,
        fixedHeader: true,
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

    } );


    switch (resultado) {
        case '1':
            Swal.fire(
                'Expediente',
                "Se ha creado con exito!",
                'success'
            );
            break;
        case '2':
            Swal.fire(
                'Expediente',
                "Se actualizo con exito!",
                'success'
            );
            break;
        case '3':
            Swal.fire(
                'Expediente',
                "Eliminado con exito!",
                'success'
            );
            break;
       
    } 
  
});