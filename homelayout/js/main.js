$(function() {

  (function toggle(){
    $('.personal__add').on('click', function(){
      $('.personal__form-more').toggleClass('display-block');
      $('.personal__add-img').toggleClass('active-arrow');
    });
    $('.experiences__form-title').on('click', function(){
      $(this).find('.experiences__form-title-arrow img').toggleClass('active-arrow');
      $(this).next().slideToggle(0);
    });
    $('.plate').on('click', function(){
      $('.mobile__menu').slideToggle();
      $('.header').toggleClass('full-opacity');
    });
    $('.header__mobile-ico').on('click', function(){
      $('.header__mobile-menu').animate({ 'top': '0vh' }, 300);
      $('body').addClass('no-scroll');
    });
    $('.header__mobile-menu-close').on('click', function(){
      $('.header__mobile-menu').animate({ 'top': '-100vh' }, 300);
      $('body').removeClass('no-scroll');
    });
    $('.contact-us__btn').on('click', function(){
      $('.contact-us__left_wrapper').fadeOut(300);
      setTimeout(function(){
        $('.contact-us__left_success').fadeIn(300);
      },400);
      setTimeout(function(){
        $('.contact-us__left_success').fadeOut(300);
      },5000);
      setTimeout(function(){
        $('.contact-us__left_wrapper').fadeIn(300);
      },5300);
      
    });
  })();

  (function dropDown() {
    $(".drop-down-link").on("click", function () {
      $(this).next().toggle();
    });
    $(document).mouseup(function (e) {
      if ($(".drop-down").is(":visible")) {
        var dropDown = $(".drop-down");
        if (
          !dropDown.is(e.target) &&
          dropDown.has(e.target).length === 0 &&
          e.target != $(".drop-down-link")[0]
        ) {
          $(".drop-down").hide();
        }
      }
    });
  })();

  (function showPassword() {
    $(".password-visibility").on("click", function() {
      var inputPassword = $(this).closest(".password").find("input")[0];
      if ($(inputPassword).attr('type') == 'password'){
        $(this).addClass('view');
        $(inputPassword).attr('type', 'text');
      } else {
        $(this).removeClass('view');
        $(inputPassword).attr('type', 'password');
      }
    })
  })();

  (function stickyHeader() {
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 900) {
        $('.header__sticky').addClass('header-active');
      }
      else{
        $('.header__sticky').removeClass('header-active');
      }
    });
  })();

  (function chooseCategory() {
    $('.component-roofing').on('click', function(event){
      event.preventDefault();
      $(this).addClass('component1-active');
      $('.component1').not(this).removeClass('component1-active');
      $('.steps__home_house_roof').removeClass('roof-visibility');
      $('.house-items').not('.roofing').removeClass('house-items-visible');
      $('.roofing').addClass('house-items-visible');
    });
    $('.component-solar').on('click', function(event){
      event.preventDefault();
      $(this).addClass('component1-active');
      $('.component1').not(this).removeClass('component1-active');
      $('.steps__home_house_roof').removeClass('roof-visibility');
      $('.house-items').not('.solar').removeClass('house-items-visible');
      $('.solar').addClass('house-items-visible');
    });
    $('.component-bathroom').on('click', function(event){
      event.preventDefault();
      $(this).addClass('component1-active');
      $('.component1').not(this).removeClass('component1-active');
      $('.steps__home_house_roof').addClass('roof-visibility');
      $('.house-items').not('.bathroom').removeClass('house-items-visible');
      $('.bathroom').addClass('house-items-visible');
    });
    $('.component-hvac').on('click', function(event){
      event.preventDefault();
      $(this).addClass('component1-active');
      $('.component1').not(this).removeClass('component1-active');
      $('.steps__home_house_roof').addClass('roof-visibility');
      $('.house-items').not('.hvac').removeClass('house-items-visible');
      $('.hvac').addClass('house-items-visible');
    });
    $('.component-windows').on('click', function(event){
      event.preventDefault();
      $(this).addClass('component1-active');
      $('.component1').not(this).removeClass('component1-active');
      $('.steps__home_house_roof').addClass('roof-visibility');
      $('.house-items').not('.windows').removeClass('house-items-visible');
      $('.windows').addClass('house-items-visible');
    });
  })();

  (function checkboxImg() {
    $('.steps__checkbox_img_item').on('click', function(){
      $(this).toggleClass('steps__checkbox_img_item_active');
    });
  })();

  (function modalThanks() {
    $('#modal-btn-step').on('click', function(){
      $('.modal_main').hide(500);
      $('.modal_success').show(300);
    });
  })();

});

new Swiper('.reviews__slider', {
  slidesPerView: 'auto',
  spaceBetween: 13,
  watchOverflow: true,
  pagination: {
    el: '.reviews__slider_pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.reviews__slider_prev',
    nextEl: '.reviews__slider_next'
  }
});