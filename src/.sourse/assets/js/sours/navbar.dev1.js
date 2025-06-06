"use strict";

// Функция меню бургера
function burgerMenu() {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  var body = document.querySelector('body');
  burger.addEventListener('click', function () {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
      burger.classList.add('active-burger');
      body.classList.add('locked');
    } else {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
    }
  }); //ставим бреакпоинт навбара

  window.addEventListener('resize', function () {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
    }
  });
}