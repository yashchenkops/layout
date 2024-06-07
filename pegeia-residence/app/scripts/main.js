const initMainSlider = () => {
  const mainSlider = new Swiper('#mainSlider', {
    direction: 'vertical',
    slidesPerView: 1,
    allowTouchMove: false,
    mousewheel: true,
    hashNavigation: {
      watchState: true,
    },
  });
};

const initIntroSlider = () => {
  const introSlider = new Swiper('#introSlider', {
    lazy: true,
    effect: 'fade',
    allowTouchMove: false,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
      waitForTransition: true,
      disableOnInteraction: false,
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

const initStagesSlider = () => {
  const stagesSliderThumbs = new Swiper("#stagesSliderThumbs", {
    spaceBetween: 35,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const stagesSlider = new Swiper('#stagesSlider', {
    spaceBetween: 100,
    effect: "fade",
    allowTouchMove: false,
    thumbs: {
      swiper: stagesSliderThumbs,
    },
  });
};

const initStagesInnerSliders = () => {
  const sliderSelectors = [
    "#stageInnerSlider1",
    "#stageInnerSlider2",
    "#stageInnerSlider3",
    "#stageInnerSlider4",
    "#stageInnerSlider5",
    "#stageInnerSlider6",
    "#stageInnerSlider7",
    "#stageInnerSlider8",
    "#stageInnerSlider9"
  ];

  sliderSelectors.forEach(selector => {
    new Swiper(selector, {
      effect: "fade",
    });
  });
};

document.addEventListener('DOMContentLoaded', function() {
  new WOW().init();
  initMainSlider();
  initIntroSlider();
  initStagesSlider();
  initStagesInnerSliders();
});