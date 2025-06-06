$(function() {
  var mixer = mixitup('.portfolio__content');
  $('.slider-blog__inner').slick({
    dots:true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt="arrow"></button>'
  });
})
