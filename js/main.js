const form = document.querySelector('.wrapper form');
const email = document.querySelector('.wrapper form input[type=email]');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let emailValue = email.value;
  if(validateEmail(emailValue)){
    form.classList.remove('error');
  }else{
    form.classList.add('error');
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}