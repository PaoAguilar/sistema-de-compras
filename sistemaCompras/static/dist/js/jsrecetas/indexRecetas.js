$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();

	//Añadir medicamento a la lista
	$('#formMed').submit(function (e) {
		e.preventDefault();

		nombre = $("#nombre").val();
		nombre_comer = $("#nombre_comer").val();
		concentra = $("#concentra").val();
		frec = $("#frec").val();
		via_admin = $("#via_admin").val();
		duracion = $("#duracion").val();

		via_admin = "<input type='hidden' name='via_admin' value='" + via_admin + "' >";
		nombre_comer = "<input type='hidden' name='nombre_comer' value='" + nombre_comer + "' >";
		concentra = "<input type='hidden' name='concentra' value='" + concentra + "' >";

		frec = "<td><input type='hidden' name='frec' value='" + frec + "'>" + via_admin + frec + "</td>";
		nombre = "<td><input type='hidden' name='nombre' value='" + nombre + "'>" + nombre_comer + nombre + "</td>";
		duracion = "<td><input type='hidden' name='duracion' value='" + duracion + "'>" + concentra + duracion + " días</td>";

		opcion = "<td><input type='button' class='btn-danger' id='quitarMed' value='Quitar'></td>";

		fila = "<tr>" + frec + nombre + duracion + opcion + "</tr>";

		$("#cuerpoMed").append(fila);


		$("#nombre_comer").val("");
		$("#concentra").val("");
		$("#frec").val("");
		$("#via_admin").val("");
		$("#duracion").val("");

	});

	$("#tablaMedicamentos").on("click", "#quitarMed", function () {
		$(this).closest("tr").remove();
	});

	$('#guardarReceta').click(function () {
		var nombre = $("#nombre").val();
		if (!nombre) {
			$(document).Toasts('create', {
				class: 'bg-danger',
				title: 'Receta',
				fade: true,
				delay: 5000,
				autohide: true,
				subtitle: 'Error en el registro',
				body: 'Debe ingresar al menos un medicamento a la receta'
			});
			$('.toast').css('z-index', 99999999);
		} else {
			$('#formRegistrarReceta').submit();
		}
	});

});