const btn = document.querySelector('.humb');
const navLink = document.querySelector('#app-header-menu');
const closeButton = document.querySelector('#humb-cancelor');
const toclose = document.querySelectorAll('.nav-link');
const menuheader = document.querySelector('#app-header-info');

function display() {
  navLink.classList.add('app-header-menu-visible');
  const menu = document.querySelector('#welcome');

  menu.classList.add('welcome-invisible');
  btn.classList.add('humb-invisible');
  closeButton.classList.add('humb-cancel-visible');
  menuheader.classList.add('app-header-hide');
}

function close() {
  navLink.classList.remove('app-header-menu-visible');
  const menu = document.querySelector('#welcome');
  menu.classList.remove('welcome-invisible');
  btn.classList.remove('humb-invisible');
  closeButton.classList.remove('humb-cancel-visible');
  menuheader.classList.remove('app-header-hide');
}

btn.addEventListener('click', display);
closeButton.addEventListener('click', close);
toclose.forEach((item) => {
  item.addEventListener('click', close);
});