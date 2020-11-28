$(document).ready(function () {

    $('#tableexamenpendiente').DataTable(
        {
            "language": {
                "decimal": ".",
                "emptyTable": "No hay datos para mostrar",
                "info": "del _START_ al _END_ (_TOTAL_ total)",
                "infoEmpty": "del 0 al 0 (0 total)",
                "infoFiltered": "(filtrado de todas las _MAX_ entradas)",
                "infoPostFix": "",
                "thousands": "'",
                "lengthMenu": "Mostrar _MENU_ entradas",
                "loadingRecords": "Cargando...",
                "processing": "Procesando...",
                "search": "Buscar:",
                "zeroRecords": "No hay resultados",
                "paginate": {
                    "first": "Primero",
                    "last": "Último",
                    "next": "Siguiente",
                    "previous": "Anterior"
                },
                "aria": {
                    "sortAscending": ": ordenar de manera Ascendente",
                    "sortDescending": ": ordenar de manera Descendente ",
                }
            }

        }
    );

    //    Validando campo para ingresar orden de examen
    var tipo
    $('#guardarOrdenExam').on('click', function () {

        tipo = $('#tipo_id').val();
        if (tipo.length == 0 || tipo.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Orden de Examen',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha ingresado el tipo de exámen.'
            });
        } else {
            document.formordenexamen.submit()
        }
    });
});