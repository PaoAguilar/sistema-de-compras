$(document).ready(function () {

    const $sala = $('#sala_id');
    const $camilla = $('#camilla_id');

    $sala.change(function () {
        $camilla.val('');

        $camilla.prop('disabled', !Boolean($sala.val()));
        $camilla.find('option[data-region]').hide();
        $camilla.find('option[data-region="' + $sala.val() + '"]').show();
    })
});


function mostrar_formulario_editar(fecha_ingreso, fecha_egreso, sala, camilla, id) {
    $('#fe_ingreso_editar').val(fecha_ingreso);
    $('#fe_egreso_editar').val(fecha_egreso);
    $('#camilla_editar').val(camilla);
    $('#sala_editar').val(sala);
    $('#identificador_editar').val(id);
    console.log(fecha_egreso);
}
