$(function (){
  $('.slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000
  });
  $('.latest__slider').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: "<img src='images/icons/sliderleft.png' class='prev'>",
    nextArrow: "<img src='images/icons/sliderright.png' class='next'>",
  });
  $('.header__menu-btn').on('click', function(){
    $('.header__menu > ul').slideToggle();
  });
  $('.header__drop-down.drop-down').on('click', function(){
    $(this).children('.drop-down__list').slideToggle();
  });
});
  