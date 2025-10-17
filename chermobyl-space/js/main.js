$(function() {

  (function mobileMenu(){
    $('.header__burger').click(function(){
      $('.header__menu_overlay').addClass('overlay-active');
      $('.header__menu_mobile').addClass('menu-active');
    });
    $('.header__menu_mobile_close').click(function(){
      $('.header__menu_overlay').removeClass('overlay-active');
      $('.header__menu_mobile').removeClass('menu-active');
    });
  })();

});