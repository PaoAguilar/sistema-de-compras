$(document).ready(function() {

    resultado = $('#opt').val();
    $('#tablaEmpleados thead tr').clone(true).appendTo( '#tablaEmpleados thead' );
    $('#tablaEmpleados thead tr:eq(1) th').each( function (i) {
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
    var table = $('#tablaEmpleados').DataTable( {
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
                'Empleado',
                "Se ha creado con exito!",
                'success'
            );
            break;
        case '2':
            Swal.fire(
                'Empleado',
                "Se actualizo con exito!",
                'success'
            );
            break;
        case '3':
            Swal.fire(
                'Empleado',
                "Eliminado con exito!",
                'success'
            );
            break;
       
    } 

  
});

$(document).on('click', '#eliminar', function(event) {
    event.preventDefault();
    // let form = event.target;
    swal.fire({
        title: '¿Seguro que desea Eliminar al empleado?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si!'
    }).then((result) => {
        if (result.value) {
            // form.submit();
            window.location.href = urlMap =$('#Url').val();
        }
    });
});
