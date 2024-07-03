// Enviar mail

const btn = document.getElementById('button');
const nom = document.getElementById('from_name');
const email = document.getElementById('email_id');
const msg = document.getElementById('message');

// Expresión regular para validar el formato de correo electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener el valor del campo de correo electrónico
  const emailValue = email.value.trim();

  // Verificar si el correo electrónico es válido utilizando la expresión regular
  if (!emailRegex.test(emailValue)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  btn.value = 'Sending...';

  const userID = 'HwEitgJqtJdybkHbx';
  const serviceID = 'service_o7i0wyc';
  const templateID = 'template_61uipdm';

  emailjs.sendForm(serviceID, templateID, this, userID)
    .then(() => {
      btn.value = 'Send';
      alert('Información enviada correctamente, ¡gracias!');
      nom.value = '';
      email.value = '';
      msg.value = '';
    }, (err) => {
      btn.value = 'Send';
      alert('Error, intenta de nuevo.');
    });
});

