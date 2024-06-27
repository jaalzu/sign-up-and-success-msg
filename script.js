

let emailInput = document.getElementById('email');
let errorMessage = document.getElementsByClassName('.msg-error');
let signUpSection = document.getElementById('sign-up');
let successSection = document.getElementById('success');
let userEmail = document.getElementById('userEmail');

function validateEmail(event) {
   
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    

    if (!emailInput.checkValidity()) {
      errorMessage.classList.remove('hidden');
    } else {
      // Mostrar la sección de éxito y ocultar la sección de sign-up
      signUpSection.classList.add('hidden');
      successSection.classList.remove('hidden');

      
      // Actualizar el mensaje de éxito con el correo electrónico del usuario
      userEmail.textContent = emailInput.value;
    }
  });
  

  document.getElementById('dissmissBtn').addEventListener('click', () => {
    signUpSection.classList.remove('hidden');
    successSection.classList.add('hidden');
  });
}

