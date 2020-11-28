$(document).ready(function () {

    //Añadiendo DatePicker y poniendole un formato que si acepte postgres
    //DatePiker de la fecha de ingreso
    $('#fe_ingreso').datepicker({
        maxDate: 0,
        changeMonth: true,
        changeYear: true,
        onSelect: function (dateText) {
            console.log("Selected date: " + dateText + "; input's current value: " + this.value);
            var fe_ingreso = $('#fe_ingreso').datepicker('getDate');
            fe_ingreso = $.datepicker.formatDate('yy-mm-dd', fe_ingreso);
            console.log("FECHA FORMATEADA PARA SER USADA " + fe_ingreso);
            $('#fecha_ingreso_formato').val(fe_ingreso);
        }
    });

    //DatePiker de la fecha de egreso
    $('#fe_egreso').datepicker({
        maxDate: 0,
        changeMonth: true,
        changeYear: true,
        onSelect: function (dateText) {
            console.log("Selected date: " + dateText + "; input's current value: " + this.value);
            var fe_egreso = $('#fe_egreso').datepicker('getDate');
            fe_egreso = $.datepicker.formatDate('yy-mm-dd', fe_egreso);
            console.log("FECHA FORMATEADA PARA SER USADA " + fe_egreso);
            $('#fecha_egreso_formato').val(fe_egreso);
        }
    });

    //Validando los campos a ingresar
    var fecha_ingreso, fecha_egreso, sala, camilla
    $('#guardarIngreso').on('click', function () {

        fecha_ingreso = $('#fe_ingreso').val();
        fecha_egreso = $('#fe_egreso').val();
        sala = $('#sala_id').val();
        camilla = $('#camilla_id').val();
        if (fecha_ingreso.length == 0 || fecha_ingreso.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Orden de Ingreso',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha registrado la fecha de orden de ingreso.'
            });
        } else if (fecha_egreso.length == 0 || fecha_egreso.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Orden de Ingreso',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha registrado la fecha de egreso de la orden de ingreso.'
            });
        } else if (sala.length == 0 || sala.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Orden de Ingreso',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha ingresado el nombre de la sala.'
            });
        } else if (camilla.length == 0 || camilla.trim() == "") {
            $(document).Toasts('create', {
                class: 'bg-danger',
                title: 'Orden de Ingreso',
                fade: true,
                delay: 4000,
                autohide: true,
                body: 'No se ha ingresado la camilla.'
            });
        } else {
            document.formingreso.submit()
        }
    });
});