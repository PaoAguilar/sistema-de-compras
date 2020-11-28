$(document).ready(function () {

  //    Validando los campos a ingresar
  var nombre_med, nombre_comercial, concentracion, frecuencia, via_admin, dias
  $('#agregarMed').on('click', function () {

    nombre_med = $('#nombre').val();
    nombre_comercial = $('#nombre_comer').val();
    concentracion = $('#concentra').val();
    frecuencia = $('#frec').val();
    via_admin = $('#via_admin').val();
    dias = $('#duracion').val();
    if (nombre_med.length == 0 || nombre_med.trim() == "") {
      $(document).Toasts('create', {
        class: 'bg-danger',
        title: 'Recetas',
        fade: true,
        delay: 4000,
        autohide: true,
        body: 'No se ha ingresado el nombre del medicamento.'
      });
    } else if (nombre_comercial.length == 0 || nombre_comercial.trim() == "") {
      $(document).Toasts('create', {
        class: 'bg-danger',
        title: 'Recetas',
        fade: true,
        delay: 4000,
        autohide: true,
        body: 'No se ha ingresado el nombre comercial del medicamento.'
      });
    } else if (concentracion.length == 0 || concentracion.trim() == "") {
      $(document).Toasts('create', {
        class: 'bg-danger',
        title: 'Recetas',
        fade: true,
        delay: 4000,
        autohide: true,
        body: 'No se ha ingresado la concentracioón del medicamento.'
      });
    } else if (frecuencia.length == 0 || frecuencia.trim() == "") {
      $(document).Toasts('create', {
        class: 'bg-danger',
        title: 'Recetas',
        fade: true,
        delay: 4000,
        autohide: true,
        body: 'No se ha ingresado la frecuencia para usar el medicamento.'
      });
    } else if (via_admin.length == 0 || via_admin.trim() == "") {
      $(document).Toasts('create', {
        class: 'bg-danger',
        title: 'Recetas',
        fade: true,
        delay: 4000,
        autohide: true,
        body: 'No se ha ingresado la via de administración del medicamento.'
      });
    } else if (dias.length == 0 || dias.trim() == "") {
      $(document).Toasts('create', {
        class: 'bg-danger',
        title: 'Recetas',
        fade: true,
        delay: 4000,
        autohide: true,
        body: 'No se ha ingresado la duración en dias para usar el medicamento.'
      });
    } else {
      document.formMed.submit()
    }
  });
});
