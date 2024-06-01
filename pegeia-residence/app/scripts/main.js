const mainSlider = () => {
  const swiper = new Swiper('#mainSlider', {
    direction: 'vertical',
    slidesPerView: 1,
    allowTouchMove: false,
    mousewheel: true,
    hashNavigation: {
      watchState: true,
    },
  });
};

const introSlider = () => {
  const swiper = new Swiper('#introSlider', {
    lazy: true,
    effect: 'fade',
    allowTouchMove: false,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
      // waitForTransition: true,
      // disableOnInteraction: false,
    },
    centeredSlides: true,
    pagination: {
      el: '.intro__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.intro__button-next',
      prevEl: '.intro__button-prev',
    },
  });
};

document.addEventListener('DOMContentLoaded', function() {
  new WOW().init();
  mainSlider();
  introSlider();
});