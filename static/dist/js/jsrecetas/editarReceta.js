$(document).ready(function () {
    // Para cerrar el modal de editar medicamento
    $('#modal_editar_receta').on('hidden.bs.modal', function () {
        $('#medTable').html("");
    });

    $('.modal').css('z-index', 99999);

    //Añadir medicamento a la lista
    $('#formMedicamento').submit(function (e) {
        e.preventDefault();

        nombre_editar = $("#nombre_editar").val();
        nombre_comer_editar = $("#nombre_comer_editar").val();
        concentra_editar = $("#concentra_editar").val();
        frec_editar = $("#frec_editar").val();
        via_admin_editar = $("#via_admin_editar").val();
        duracion_editar = $("#duracion_editar").val();

        nombre_editar = "<td><input type='hidden' name='nombre_editar' value='" + nombre_editar + "'>" + nombre_editar + "</td>";
        nombre_comer_editar = "<td><input type='hidden' name='nombre_comer_editar' value='" + nombre_comer_editar + "'>" + nombre_comer_editar + "</td>";
        concentra_editar = "<td><input type='hidden' name='concentra_editar' value='" + concentra_editar + "'>" + concentra_editar + "</td>";
        frec_editar = "<td><input type='hidden' name='frec_editar' value='" + frec_editar + "'>" + frec_editar + "</td>";
        via_admin_editar = "<td><input type='hidden' name='via_admin_editar' value='" + via_admin_editar + "'>" + via_admin_editar + "</td>";
        duracion_editar = "<td><input type='hidden' name='duracion_editar' value='" + duracion_editar + "'>" + duracion_editar + " días</td>";

        opcion_editar = "<td><input type='button' class='btn-danger' id='quitarMedicamento' value='Quitar'></td>";

        fila = "<tr>" + nombre_editar + nombre_comer_editar + concentra_editar + frec_editar + via_admin_editar + duracion_editar + opcion_editar + "</tr>";
        $("#medTable").append(fila);

        // Para que todos los campos queden vacios nuevamente
        $("#nombre_comer_editar").val("");
        $("#concentra_editar").val("");
        $("#frec_editar").val("");
        $("#via_admin_editar").val("");
        $("#duracion_editar").val("");
    });

    // Para remover un medicamento de la lista
    $("#medTable").on("click", "#quitarMedicamento", function () {
        $(this).closest("tr").remove();
    });

    $('#enviar_med_editar').click(function () {
        var nombre = $("#nombre_editar").val();
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
            $('#formuMed_editar').submit();
        }
    });

});

function mostrar_formulario_editar_receta(id_receta) {
    $.ajax({
        url: '/consultas/receta/ajax/' + id_receta, //Url a la que se hara la peticion (Puede especificarse como ajax post),
        dataType: "json",
        // data: request,
        success: function (data) {
            console.log(data)
            data.forEach(medicamento => {
                var nombre_med = "<td>" + medicamento.nombre + "</td>";
                var via_administracion = "<td>" + medicamento.via_administracion + "</td>";
                var nombre_comercial = "<td>" + medicamento.nombre_comercial + "</td>";
                var concentracion = "<td>" + medicamento.concentracion + "</td>";
                var duracion_tratamiento = "<td>" + medicamento.duracion_tratamiento + " dias</td>";
                var frecuencia = "<td>" + medicamento.frecuencia + "</td>";
                opcion = "<td><input type='button' class='btn-danger' id='quitarMedicamento' value='Quitar'></td>";

                fila = "<tr>" + nombre_med + nombre_comercial + concentracion + frecuencia + via_administracion + duracion_tratamiento + opcion + "</tr>";
                $("#medTable").append(fila);
                console.log(medicamento.nombre)
            });
            $('#id_receta_editar').val(id_receta);
            $('#modal_editar_receta').modal('show');
        }
    });
}