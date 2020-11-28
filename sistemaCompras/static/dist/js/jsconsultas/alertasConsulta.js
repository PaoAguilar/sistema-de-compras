// Todos los alert de consultas aqui
$(document).ready(function () {
    resultado = $('#opt').val();
    console.log("RESULTADO " + resultado);
    switch (resultado) {
        // CASO 1 Y 2 PARA ORDEN DE EXAMEN
        case '1':
            console.log("Entro al switch");
            Swal.fire(
                'Orden de examen',
                "Se ha creado con exito!",
                'success'
            );
            break;
        case '2':
            Swal.fire(
                'Orden de examen',
                "Eliminado con exito!",
                'success'
            );
            break;
        // CASO 3, 4 Y 5 PARA ORDEN DE INGRESO
        case '3':
            Swal.fire(
                'Orden de ingreso',
                "Se ha creado con exito!",
                'success'
            );
            break;
        case '4':
            Swal.fire(
                'Orden de ingreso',
                "Se ha actualizado con exito!",
                'success'
            );
            break;
        case '5':
            Swal.fire(
                'Orden de ingreso',
                "Eliminado con exito!!",
                'success'
            );
            break;
        // CASO 6,7,8,9 Y 10 PARA SIGNOS VITALES
        case '6':
            Swal.fire(
                'Signos vitales',
                "Se ha creado con exito!",
                'success'
            );
            break;
        case '7':
            Swal.fire(
                'Signos vitales',
                "Error al editar - Los registros no son de este dia!",
                'error'
            );
            break;
        case '8':
            Swal.fire(
                'Signos vitales',
                "Se ha actualizado con exito!",
                'success'
            );
            break;
        case '9':
            Swal.fire(
                'Signos vitales',
                "Error al eliminar - Los registros no son de este dia!",
                'error'
            );
            break;
        case '10':
            Swal.fire(
                'Orden de ingreso',
                "Eliminado con exito!!",
                'success'
            );
            break;
        // CASO 11 Y 12 PARA DIAGNOSTICOS
        case '11':
            Swal.fire(
                'Diagnostico',
                "Se ha creado con exito!",
                'success'
            );
            break;
        case '12':
            Swal.fire(
                'Diagnostico',
                "Se ha actualizado con exito!",
                'success'
            );
            break;
        // CASO 13,14 Y 15 PARA TRATAMIENTOS
        case '13':
            Swal.fire(
                'Tratamiento',
                "Se ha creado con exito!",
                'success'
            );
            break;
        case '14':
            Swal.fire(
                'Tratamiento',
                "Se ha actualizado con exito!",
                'success'
            );
            break;
        case '15':
            Swal.fire(
                'Tratamiento',
                "Eliminado con exito!!",
                'success'
            );
            break;
    }
});