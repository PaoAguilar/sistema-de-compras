$(document).ready(function() {
	cargar_edit();

	//Editar Diagnostico
	$('#formDiagnostico_editar').submit(function(e){
		e.preventDefault();

		codigo = $("#codigo_editar").val();
		enfermedad = $("#enfermedad_editar").val();
		id_cod = $("#id_cod_editar").val();
		if ((enfermedad.length > 3 )&& id_cod && codigo){
			id_cod = "<input type='hidden' name='ids_codigos_editar' value='"+id_cod+"' required>";

			codigo = "<td>"+id_cod+codigo+"</td>";
			enfermedad = "<td>"+enfermedad+"</td>";
			opcion="<td><input type='button' class='btn-danger' id='quitarDiag_editar' value='Quitar'></td>";

			fila="<tr>"+codigo+enfermedad+opcion+"</tr>";

			$("#cuerpoEnfermedad_editar").append(fila);

			$("#codigo_editar").val("");
			$("#enfermedad_editar").val("");
			$("#id_cod_editar").val("");

		}else if((enfermedad && !id_cod && codigo)|| enfermedad.length < 4){
			$(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Diagnóstico',
                fade: true,
                delay: 5000,
                autohide: true,
                subtitle: 'Error en el registro',
                body: 'La enfermedad o el código ingresado es inválido.',
            });
            $('.toast').css('z-index',9999999);
		}
	});

	$('#enviar_diag_editar').click(function() {
		sintomas=$('#sintomas_editar').val();
		codigos = $('[name="ids_codigos_editar"]').val();
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
            $('.toast').css('z-index',9999999);
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
            $('.toast').css('z-index',9999999);
		}else{
			camp = '<textarea required type="text" hidden name="sintomas_editar">'+sintomas+'</textarea>';
			$('#formDiagnosticoActualizar').append(camp);
			$('#formDiagnosticoActualizar').submit();
		}
	});

	$("#tablaEnfermedades_editar").on("click", "#quitarDiag_editar", function() {
	   $(this).closest("tr").remove();
	});
});

function cargar_edit(){

	//Autocomplete de Codigo Internacional en Diagnóstico

    //Autocomplete de crear
    $("#codigo_editar").autocomplete({
		source: function(request, response) {
			$.ajax({
				url: '/antecedentes/ajax/codigo', //Url a la que se hara la peticion (Puede especificarse como ajax post),
				dataType: "json",
				data: request,
				success: function (data) {
					// No matching result
					if (data.length == 0) {
						$("#codigo_editar").autocomplete("close");
						$('#enfermedad_editar').val(""); // borra la enfermedad anterior
						$('#id_cod_editar').val(""); //borar el id_cod anterior
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
				$('.ui-autocomplete').css('z-index', 9999999); //z-index ayuda a sobreponer,mientras mas alto el numero, mayor nivel de superposicion
			},0)
		},
		select: function (event, ui) {  //Lo que se ejecutará cuando el usuario realice una seleccion de la lista
			// Set selection
			$('#enfermedad_editar').val(ui.item.value); // se muestra el resultado seleccionado en el elemento especificado por su id
			$('#codigo_editar').val(ui.item.label); // display the selected text
			$('#id_cod_editar').val(ui.item.id);
			return false;
		}
	})

	$("#enfermedad_editar").autocomplete({
		source: function(request, response) {
			$.ajax({
				url: '/antecedentes/ajax/enfermedad', //Url a la que se hara la peticion (Puede especificarse como ajax post),
				dataType: "json",
				data: request,
				success: function (data) {
					// No matching result
					if (data.length == 0) {
						$("#enfermedad_editar").autocomplete("close");
						$('#codigo_editar').val(""); // borra la enfermedad anterior
						$('#id_cod_editar').val(""); //borar el id_cod anterior
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
				$('.ui-autocomplete').css('z-index', 9999999);
			},0)
		},
		select: function (event, ui) {
			// Set selection
			$('#enfermedad_editar').val(ui.item.label); // display the selected text
			$('#codigo_editar').val(ui.item.value); // display the selected text
			$('#id_cod_editar').val(ui.item.id);
			return false;
		}
	})
}