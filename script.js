function showMenu() {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
  document.body.classList.toggle('lock');
}

document.querySelector('.header__burger').addEventListener('click', showMenu);
