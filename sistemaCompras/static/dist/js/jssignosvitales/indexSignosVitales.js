$(document).ready(function () {
    $('#pa').inputmask();
    $('#pa_editar').inputmask();

    $('#tableSignosVitales').DataTable(
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
});

function mostrar_formulario_editar_signos(temperatura, fre_card, fre_resp, presion, peso, id) {
    $('#temperatura_editar').val(temperatura);
    $('#fc_editar').val(fre_card);
    $('#fr_editar').val(fre_resp);
    $('#pa_editar').val(presion);
    $('#peso_editar').val(peso);
    $('#identificador_editar_signos').val(id);
    console.log("TEMPERATURRA  " + temperatura);
    console.log("El  ID " + id);
}