const errorLogo = document.querySelector('.error');
const errorMsg = document.querySelector('.errorMsg');
const btn = document.querySelector('#btn');

function showError (){
  errorLogo.classList.add('visible');
  errorMsg.classList.add('visible');

  setTimeout(() => {
    errorLogo.classList.remove('visible');
  }, 3000);
  setTimeout(() => {
    errorMsg.classList.remove('visible');
  }, 3000);
}

btn.addEventListener('click', showError);



