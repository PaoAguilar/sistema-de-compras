$(document).ready(function() {
	//Cargar autocomplete y tooltip
	cargar();

	//Añadir diagnostico
	$('#formDiagnostico').submit(function(e){
		e.preventDefault();

		codigo = $("#codigo").val();
		enfermedad = $("#enfermedad").val();
		id_cod = $("#id_cod").val();
		if ((enfermedad.length > 3 ) && id_cod && codigo){
			id_cod = "<input type='hidden' name='ids_codigos' value='"+id_cod+"' required>";

			codigo = "<td>"+id_cod+codigo+"</td>";
			enfermedad = "<td>"+enfermedad+"</td>";
			opcion="<td><input type='button' class='btn-danger' id='quitarDiag' value='Quitar'></td>";

			fila="<tr>"+codigo+enfermedad+opcion+"</tr>";

			$("#cuerpoEnfermedad").append(fila);

			$("#codigo").val("");
			$("#enfermedad").val("");
			$("#id_cod").val("");

		}else if((enfermedad && !id_cod && codigo)||enfermedad.length<4){
			$(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Diagnóstico',
                fade: true,
                delay: 5000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'La enfermedad o el código ingresado es inválido.'
            });
		}
	});

	$('#enviar').click(function() {
		sintomas=$('#sintomas').val();
		codigos = $('[name="ids_codigos"]').val();
		if(sintomas.length < 5||!sintomas){
			$(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Diagnóstico',
                fade: true,
                delay: 5000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'Los datos ingresados en síntomas son inválidos. Por favor ingrese los síntomas del paciente.'
            });
		}else if(!codigos){
			$(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Diagnóstico',
                fade: true,
                delay: 5000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'Debe ingresar al menos un padecimiento o enfermedad.'
            });
		}else{
			camp = '<textarea required type="text" hidden name="sintomas">'+sintomas+'</textarea>';
			$('#formDiagnosticoGuardar').append(camp);
			$('#formDiagnosticoGuardar').submit();
		}
	});

	$("#tablaEnfermedades").on("click", "#quitarDiag", function() {
	   $(this).closest("tr").remove();
	});

});

function cargar(){
	$('[data-toggle="tooltip"]').tooltip();

	//Autocomplete de Codigo Internacional en Diagnóstico

    //Autocomplete de crear
    $("#codigo").autocomplete({
		source: function(request, response) {
			$.ajax({
				url: '/antecedentes/ajax/codigo', //Url a la que se hara la peticion (Puede especificarse como ajax post),
				dataType: "json",
				data: request,
				success: function (data) {
					// No matching result
					if (data.length == 0) {
						$("#codigo").autocomplete("close");
						$('#enfermedad').val(""); // borra la enfermedad anterior
						$('#id_cod').val(""); //borar el id_cod anterior
					}
					else {
						response(data);
					}
				}
			});
		},
		autoFill:true,
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
			$('#id_cod').val(ui.item.id);
			return false;
		}
	})

	$("#enfermedad").autocomplete({
		source: function(request, response) {
			$.ajax({
				url: '/antecedentes/ajax/enfermedad', //Url a la que se hara la peticion (Puede especificarse como ajax post),
				dataType: "json",
				data: request,
				success: function (data) {
					// No matching result
					if (data.length == 0) {
						$("#enfermedad").autocomplete("close");
						$('#codigo').val(""); // borra la enfermedad anterior
						$('#id_cod').val(""); //borar el id_cod anterior
					}
					else {
						response(data);
					}
				}
			});
		},
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
			$('#id_cod').val(ui.item.id);
			return false;
		}
	})
}