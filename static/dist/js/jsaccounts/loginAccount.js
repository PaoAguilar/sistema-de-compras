$(document).ready(function () {
    // ======================================================================
    //                     PARA  VISTA DE MAIL BLOCK
    // ======================================================================
    // Añadiendo mensajes de exito al enviar correo de recuperacion de user
    resultado = $('#opt').val();
    console.log(resultado);

    switch (resultado) {
        case '1':
            Swal.fire({
                icon: 'success',
                title: 'Correo Enviado!',
                text: "Se le ha enviado un correo de recuperación de usuario",
                // confirmButtonText: "<a href='http://127.0.0.1:8000/'>OK</a>",
            }).then(() => { window.location.href = "http://80.211.96.186/" });
            break;
        case '2':
            Swal.fire(
                'NO se envio el correo!',
                "Este correo no le pertence a este usuario!",
                // "Asegurese que el correo y el usuario sean validos!!",
                'error'
            );
            break;
        case '3':
            Swal.fire(
                'Usuario sin datos!',
                "El administrador aún no ha cargado sus datos personales al sistema!",
                'error'
            );
            break;
    }