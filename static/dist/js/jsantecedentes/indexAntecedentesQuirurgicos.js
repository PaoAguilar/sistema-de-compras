$(document).ready(function() {

  //Añadiendo DatePicker y poniendole un formato que si acepte postgres
  $('#fecha_ante_quirur').datepicker({
    maxDate: 0,
    changeMonth: true,
    changeYear: true,
    onSelect: function(dateText) {
      var fecha_ante_quirur = $('#fecha_ante_quirur').datepicker('getDate');
      fecha_ante_quirur = $.datepicker.formatDate('yy-mm-dd', fecha_ante_quirur);
      $('#fecha_ante_quirur_formato').val(fecha_ante_quirur);
    }
  });

    resultado = $('#opt').val();
    $('#tableAntecedenteQuirurgico').DataTable(
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

function mostrar_formulario_editar_antquirurgico(fecha, descripcion, causa, complicacion, id) {
    $('#fecha_ante_quirur_editar').val(fecha);
    $('#descripcion_cirugia_editar').val(descripcion);
    $('#causa_editar').val(causa);
    $('#complicacion_editar').val(complicacion);
    $('#identificador_antquir_editar').val(id);
}