function enviarCorreo() {
      // anclo los valores de los elementos email, subject y message a constantes con sus respectivos nombres
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Verificar si el correo contiene una arroba mediante el ".includes()", utilizo el "!" para verificar si es true o false la respuesta.
      if (!email.includes("@")) {
        alert("Por favor, ingresa un correo válido.");
        return false;
      }

      // Confirmación de envío al precionar el boton de "enviarCorreo" con un alert de que el email fue enviado.
      alert("El correo a sido enviado");
      return true;
    }
/*
// contact.js

function enviarCorreo() {
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validaciones adicionales
    if (!email || !subject || !message) {
        alert('Por favor, completa todos los campos del formulario.');
        return false; // Evita que se envíe el formulario
    }

    // Confirmación antes de enviar
    const confirmacion = confirm('¿Estás seguro de que deseas enviar el formulario?');
    if (!confirmacion) {
        return false; // Detén el envío si el usuario cancela
    }

    // FormSubmit maneja el envío
    alert('Formulario enviado con éxito. Nos pondremos en contacto contigo pronto.');
    return true; // Permite enviar el formulario
}
*/