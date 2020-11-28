$(document).ready(function () {

    //    Validando los campos a ingresar
    var temperatura, frec_cardiaca, frec_respiratoria, presion, peso
    $('#guardarSigno').on('click', function () {

        temperatura = $('#temperatura').val();
        frec_cardiaca = $('#fc').val();
        frec_respiratoria = $('#fr').val();
        presion = $('#pa').val();
        peso = $('#peso').val();
        if (temperatura.length == 0 || temperatura.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Signos Vitales',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha ingresado la temperatura del paciente.'
            });
        } else if (frec_cardiaca.length == 0 || frec_cardiaca.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Signos Vitales',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha ingresado la frecuencia cardiaca del paciente.'
            });
        } else if (frec_respiratoria.length == 0 || frec_respiratoria.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Signos Vitales',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha ingresado la frecuencia respiratoria del paciente.'
            });
        } else if (peso.length == 0 || peso.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Signos Vitales',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha ingresado el peso del paciente.'
            });
        } else {
            document.formRegistrarReceta.submit()
        }
    });
});