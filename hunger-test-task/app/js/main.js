$(function() {

  (function initSelect(){
    $('.select--name').customSelect({
      placeholder: '<span>People</span>'
    });
    $('.select--time').customSelect({
      placeholder: '<span>Time</span>'
    });
  })();

  (function initSlider(){
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });
  })();

  (function tabs() {
    $('.tabs-wrapper').each(function() {
      let ths = $(this);
      ths.find('.tab-item').not(':first').hide();
      ths.find('.tab').click(function() {
        ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
        ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass('active');
    });
  })();

  (function timer(){
    var timer2 = "13:59";
    var interval = setInterval(function() {
      var timer = timer2.split(':');
      //by parsing integer, I avoid all extra string processing
      var minutes = parseInt(timer[0], 10);
      var seconds = parseInt(timer[1], 10);
      --seconds;
      minutes = (seconds < 0) ? --minutes : minutes;
      if (minutes < 0) clearInterval(interval);
      seconds = (seconds < 0) ? 59 : seconds;
      seconds = (seconds < 10) ? '0' + seconds : seconds;
      //minutes = (minutes < 10) ?  minutes : minutes;
      $('#timer').html(minutes + ':' + seconds);
      timer2 = minutes + ':' + seconds;
    }, 1000);
  })();

  (function burger(){
    $('.burger-btn').click(function(){
      $(this).toggleClass('active');
      $('.menu__mobile').toggleClass('menu__mobile--active');
      $('body').toggleClass('overflow');
    });
  })();
  
});