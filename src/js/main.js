import * as webpFunctions from "./modules/webp.js";
webpFunctions.isWebp();
// import * as modulesFunctions from "./modules/modals.js";
// modulesFunctions.modals();
//модально окно первой страници переписать
$(function () {
  $('.header__btn').on('click', function(){
    $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__close').on('click', function(){
    $('.rightside-menu').addClass('rightside-menu--close');
  });
})