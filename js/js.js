// Función de validación del formulario personal
function validarFormularioPersonal() {
  // Obtener referencias a los campos de entrada de texto
  var nombreInput = document.getElementById('nombre');
  var apellidosInput = document.getElementById('apellidos');
  var nifInput = document.getElementById('nif');
  var emailInput = document.getElementById('email');
  var telefonoInput = document.getElementById('telefono');
  
  // Obtener los valores de los campos de entrada de texto
  // La función trim() elimina los espacios en blanco al inicio y al final de una cadena de texto.

  var nombre = nombreInput.value.trim();
  var apellidos = apellidosInput.value.trim();
  var nif = nifInput.value.trim();
  var email = emailInput.value.trim();
  var telefono = telefonoInput.value.trim();

  // Validar los valores de los campos
  var nombreValido = /^[A-Za-z\s]+$/.test(nombre);
  var apellidosValidos = /^[A-Za-z\s]+$/.test(apellidos);
  var nifValido = /^[0-9]{8}[A-Za-z]$/.test(nif);
  var emailValido = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  var telefonoValido = /^[0-9]{9}$/.test(telefono);

  // Comprobar si alguno de los campos no es válido
  if (!nombreValido || !apellidosValidos || !nifValido || !emailValido || (telefono !== '' && !telefonoValido)) {
    alert("Por favor, completa los campos correctamente.");
    return false;
  }

  return true;
}

// Función de validación del formulario de síntomas
function validarFormularioSintomas() {
  // Obtener referencias a las casillas de verificación de síntomas
  var sintomasCheckboxes = document.getElementsByName('sintomas[]');
  var sintomasSeleccionados = false;

  // Comprobar si se ha seleccionado al menos un síntoma
  for (var i = 0; i < sintomasCheckboxes.length; i++) {
    if (sintomasCheckboxes[i].checked) {
      sintomasSeleccionados = true;
      break;
    }
  }

  // Mostrar mensaje de error si no se seleccionó ningún síntoma
  if (!sintomasSeleccionados) {
    alert('Por favor, seleccione al menos un síntoma en el formulario de Síntomas.');
    return false;
  }

  return true;
}

// Habilitar o deshabilitar la selección de frecuencia cuando se selecciona/deselecciona un síntoma
var sintomasCheckboxes = document.getElementsByName('sintomas[]');
var frecuenciaSelect = document.getElementById('frecuencia');

function validarFormulario() {
  // Validar el formulario de síntomas y habilitar/deshabilitar la selección de frecuencia en consecuencia
  if (validarFormularioSintomas()) {
    frecuenciaSelect.removeAttribute('disabled');
  } else {
    frecuenciaSelect.setAttribute('disabled', 'disabled');
  }
}

// Agregar el evento 'change' a las casillas de verificación de síntomas
for (var i = 0; i < sintomasCheckboxes.length; i++) {
  sintomasCheckboxes[i].addEventListener('change', validarFormulario);
}

// Función de validación del formulario de observaciones
function validarFormularioObservaciones() {
  return true;
}

// Función para enviar los datos de los formularios
function enviarFormularios() {
  // Validar cada formulario
  var formularioPersonalValido = validarFormularioPersonal();
  var formularioSintomasValido = validarFormularioSintomas();
  var formularioObservacionesValido = validarFormularioObservaciones();

  // Solicitar confirmación antes de enviar los datos
  if (formularioPersonalValido && formularioSintomasValido && formularioObservacionesValido) {
    var confirmacion = confirm('¿Está seguro de que desea enviar los datos?');
    if (confirmacion) {
      console.log('Datos enviados correctamente.');
      alert('Datos enviados correctamente.');
    }
  }
}
