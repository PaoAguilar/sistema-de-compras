$(document).ready(function () {

    resultado = $('#opt').val();
    switch (resultado) {
        case '1':
            Swal.fire(
                'Turno',
                "Se ha creado con éxito!",
                'success'
            );
            break;

        case '2':
            Swal.fire(
                'Turno',
                "Se ha eliminado con éxito!",
                'success'
            );
            break;

        case '3':
            Swal.fire(
                'Error',
                'El turno seleccionado tiene citas programadas',
                'error'
            );

        case '4':
            Swal.fire(
                'Turno',
                "Se ha actualizado con éxito!",
                'success'
            );
            break;

        case '5':
            Swal.fire(
                'Error',
                "El turno seleccionado tiene citas programadas",
                'error'
            );
            break;
    }


    $('#turnos thead tr').clone(true).appendTo( '#turnos thead' );
    $('#turnos thead tr:eq(1) th').each( function (i) {
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
    var table = $('#turnos').DataTable( {
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
});

$(document).on('click', '#eliminar', function (event) {
    event.preventDefault();
    swal.fire({
        title: '¿Seguro que desea Eliminar el turno seleccionado?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si!'
    }).then((result) => {
        if (result.value) {
            // form.submit();
            window.location.href = urlMap = $('#Url').val();
        }
    });
});