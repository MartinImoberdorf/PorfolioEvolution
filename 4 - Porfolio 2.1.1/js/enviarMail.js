// Enviar mail

const btn = document.getElementById('button');

const nom = document.getElementById('from_name');
const email = document.getElementById('email_id');
const msg = document.getElementById('message');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_61uipdm';
  
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'sending...';
      alert('Información enviada correctamente, gracias!');
      nom.value='';
      email.value='';
      msg.value='';
      btn.value ='Send message';
    }, (err) => {
      alert('Error, intentar de nuevo!');
      btn.value ='Send message';
    });
});