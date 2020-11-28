$(document).ready(function() {

  //Autocomplete de Codigo Internacional en antecedente medico

    //Autocomplete de crear
    $("#codigo").autocomplete({
      source: '/antecedentes/ajax/codigo', //Url a la que se hara la peticion (Puede especificarse como ajax post)
      minLength:1,  //Minimo de longitud para el termino de busqueda
      open: function(){ //No entendi bien como, pero es loque obtiene lo resultados y los pone como lista debajo del input XD
        setTimeout(function(){
          $('.ui-autocomplete').css('z-index', 99);
        },0)
      },
      select: function (event, ui) {  //Lo que se ejecutará cuando el usuario realice una seleccion de la lista
        // Set selection
        $('#enfermedad').val(ui.item.value); // se muestra el resultado seleccionado en el elemento especificado por su id
        $('#codigo').val(ui.item.label); // display the selected text
        $('#id_cod_ante_med').val(ui.item.id);
        return false;
      }
    })

    $("#enfermedad").autocomplete({
      source: '/antecedentes/ajax/enfermedad',
      minLength:1,
      open: function(){
        setTimeout(function(){
          $('.ui-autocomplete').css('z-index', 99);
        },0)
      },
      select: function (event, ui) {
        // Set selection
        $('#enfermedad').val(ui.item.label); // display the selected text
        $('#codigo').val(ui.item.value); // display the selected text
        $('#id_cod_ante_med').val(ui.item.id);
        return false;
      }
    })

    //Autocomplete de Editar
    $("#codigo_editar").autocomplete({
      source: '/antecedentes/ajax/codigo',
      minLength:1,
      open: function(){
        setTimeout(function(){
          $('.ui-autocomplete').css('z-index', 99);
        },0)
      },
      appendTo: "#formuEditarAntMedico", //Esto es para especificar el contexto del autocomplete, Es necesario cuando se usa en MODALES
      select: function (event, ui) {
        // Set selection
        $('#enfermedad_editar').val(ui.item.value); // display the selected text
        $('#codigo_editar').val(ui.item.label); // display the selected text
        $('#id_cod_ante_med_editar').val(ui.item.id);
        return false;
      }
    });

    $("#enfermedad_editar").autocomplete({
      source: '/antecedentes/ajax/enfermedad',
      minLength:1,
      open: function(){
        setTimeout(function(){
          $('.ui-autocomplete').css('z-index', 99);
        },0)
      },
      appendTo: "#formuEditarAntMedico",
      select: function (event, ui) {
        // Set selection
        $('#enfermedad_editar').val(ui.item.label); // display the selected text
        $('#codigo_editar').val(ui.item.value); // display the selected text
        $('#id_cod_ante_med_editar').val(ui.item.id);
        return false;
      }
    });

    //Añadiendo DatePicker y poniendole un formato que si acepte postgres
    $('#fecha_ante_med').datepicker({
      maxDate: 0,
      changeMonth: true,
      changeYear: true,
      onSelect: function(dateText) {
        var fecha_ante_med = $('#fecha_ante_med').datepicker('getDate');
        fecha_ante_med = $.datepicker.formatDate('yy-mm-dd', fecha_ante_med);
        $('#fecha_ante_med_formato').val(fecha_ante_med);
      }
    });

    resultado = $('#opt').val();
    $('#tableAntecedenteMedico').DataTable(
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

function mostrar_formulario_editar_antmedico(fecha, codigo, enfermedad, id,id_cod) {
    $('#fecha_ante_med_editar').val(fecha);
    $('#codigo_editar').val(codigo);
    $('#enfermedad_editar').val(enfermedad);
    $('#identificador_editar_antmedico').val(id);
    $('#id_cod_ante_med_editar').val(id_cod);
}