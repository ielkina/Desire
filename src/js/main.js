// import * as webpFunctions from "./modules/webp.js";
// import * as modulesFunctions from "./modules/modals.js";
// webpFunctions.isWebp();
// modulesFunctions.modals();
$(function () {
  $('.header__btn').on('click', function(){
    $('.rightside-menu').revoveClass('rightside-menu--close');
  });
  $('.rightside-menu__close').on('click', function(){
    $('.rightside-menu').addClass('rightside-menu--close');
  });
});