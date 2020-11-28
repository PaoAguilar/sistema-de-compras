$(document).ready(function() {

    resultado = $('#opt').val();
    switch (resultado) {
        case '1':
            Swal.fire(
                'Cita',
                "Se ha creado con exito!",
                'success'
            );
            break;
        case '2':
            Swal.fire(
                'Turno Lleno',
                "El turno ya esta lleno para el doctor y fecha seleccionada",
                'error'
            );
            break;
        case '3':
            Swal.fire(
                'Error',
                "El paciente ya tiene una cita para la fecha y turno seleccionado",
                'error'
            );
            break;
       case '4':
            Swal.fire(
                'Cita',
                "Eliminada con exito!",
                'success'
            );
            break;
    } 
   
    $('#programadas thead tr').clone(true).appendTo( '#programadas thead' );
    $('#programadas thead tr:eq(1) th').each( function (i) {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
 
        $( 'input', this ).on( 'keyup change', function () {
            if ( table.column(i).search() !== this.value ) {
                table
                    .column(i)
                    .search( this.value )
                    .draw();
            }
        } );
    } );
    var table = $('#programadas').DataTable( {
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

$(document).on('click', '#eliminar', function(event) {
    event.preventDefault();
    // let form = event.target;
    swal.fire({
        title: '¿Seguro que desea Eliminar la cita programada?',
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