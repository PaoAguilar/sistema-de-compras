$(document).ready(function () {
    // ========================================================================
    //                     PARA  VISTA DE RESET USER
    // ========================================================================
    // Añadiendo mensajes de exito al reestablecer usuario, luego de ser bloqueado
    resultado = $('#opt').val();
    switch (resultado) {
        case '1':
            Swal.fire({
                icon: 'success',
                title: 'Usuario desbloqueado!',
                text: "Su usuario ha sido desbloqueado",
            }).then(() => { window.location.href = "http://80.211.96.186/" });
            break;
        case '2':
            Swal.fire(
                'NO se pudo resetear el username!',
                "Este usuario no es valido!",
                'error'
            );
            break;
    }

    $('#username').keyup(function () {
        username = $('#username').val();
        let button = $('#reset_username')
        if (username.length !== 0 && username.trim() !== "") {
            console.log(username);
            button.prop("disabled", false);
            button.addClass("btn-success");
            button.removeClass("btn-secondary");
        } else {
            button.prop("disabled", true);
            button.addClass('btn-secondary');
            button.removeClass('btn-success');
        }
    });
});