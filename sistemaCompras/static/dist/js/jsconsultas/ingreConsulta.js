$(document).ready(function() {

    const $turno = $('#turno');
    const $doctor = $('#doctor');
    const $fecha = $('#fecha');
    var $fInicio, $fFin;

    $turno.change(function() {
        $doctor.val('');

        $doctor.prop('disabled', !Boolean($turno.val()));
        $doctor.find('option[data-region]').hide();
        $doctor.find('option[data-region="' + $turno.val() + '"]').show();
    });

    // Aplicando Datepicker
    $fecha.datepicker({
        dateFormat: "dd/M/yy"
    });

    // Cambiando rango de fechas
    $turno.change(function (message){

        $fInicio = $("#turno option:selected").attr('data-fInicio');
        $fFin = $("#turno option:selected").attr('data-fFin');

        console.log($fInicio, $fFin);
        $fecha.datepicker('option', 'minDate', $fInicio);
        $fecha.datepicker('option', 'maxDate', $fFin);
    });
});