$(document).ready(function() {

    resultado = $('#opt').val();
    $('#tableMedActual').DataTable(
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
});

function mostrar_formulario_editar_medactual(nombre_comercial, nombre_medicamento, tipo_administracion, concentracion, frecuencia, id) {
    $('#nombre_comercial_editar').val(nombre_comercial);
    $('#nombre_medicamento_editar').val(nombre_medicamento);
    $('#tipo_adminis_editar').val(tipo_administracion);
    $('#concentracion_editar').val(concentracion);
    $('#frecuencia_editar').val(frecuencia);
    $('#identificador_editar_medactual').val(id);
}