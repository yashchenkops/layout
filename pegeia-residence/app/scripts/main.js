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
    watchOverflow: true,
  });

  const stagesSlider = new Swiper("#stagesSlider", {
    spaceBetween: 100,
    effect: "fade",
    allowTouchMove: false,
    thumbs: {
      swiper: stagesSliderThumbs,
    },
  });

  const sliderIds = [
    "#stageInnerSlider1",
    "#stageInnerSlider2",
    "#stageInnerSlider3",
    "#stageInnerSlider4",
    "#stageInnerSlider5",
    "#stageInnerSlider6",
    "#stageInnerSlider7",
    "#stageInnerSlider8",
    "#stageInnerSlider9",
  ];

  const innerSliders = sliderIds.map((id) => {
    return new Swiper(id, {
      effect: "fade",
      allowTouchMove: false,
    });
  });

  const nextButton = document.querySelector('.stages__button-next');
  const prevButton = document.querySelector('.stages__button-prev');

  nextButton.addEventListener('click', () => {
    const activeIndex = stagesSlider.activeIndex;
    const activeInnerSlider = innerSliders[activeIndex];

    if (activeInnerSlider.isEnd) {
      if (activeIndex < sliderIds.length - 1) {
        stagesSlider.slideNext();
      }
    } else {
      activeInnerSlider.slideNext();
    }
  });

  prevButton.addEventListener('click', () => {
    const activeIndex = stagesSlider.activeIndex;
    const activeInnerSlider = innerSliders[activeIndex];

    if (activeInnerSlider.isBeginning) {
      if (activeIndex > 0) {
        stagesSlider.slidePrev();
      }
    } else {
      activeInnerSlider.slidePrev();
    }
  });

  stagesSlider.on('slideChange', () => {
    const activeIndex = stagesSlider.activeIndex;
    innerSliders[activeIndex].slideTo(0, 0); // Скинути поточний внутрішній слайдер до першого слайду при зміні слайду в основному слайдері
  });

  // Вимкнути перетягування для внутрішніх слайдерів
  innerSliders.forEach((innerSlider) => {
    innerSlider.allowTouchMove = false;
  });
};

document.addEventListener('DOMContentLoaded', function() {
  new WOW().init();
  initMainSlider();
  initIntroSlider();
  initStagesSlider();
});