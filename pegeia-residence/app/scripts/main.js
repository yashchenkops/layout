const initMobileMenu = () => {
  const mobileBurger = document.querySelector('.header__burger-button');
  const mobileMenu = document.querySelector('.header__mobile-inner');

  mobileBurger.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
  })
};

const initMainSlider = () => {
  let atTop = false;
  let touchStartY = 0;
  let touchEndY = 0;
  let isTouchMoving = false;

  const handleScroll = (event) => {
    const secondSlide = event.target;

    if (secondSlide.scrollTop === 0) {
      atTop = true;
    } else {
      atTop = false;
    }
  };

  const handleWheel = (event) => {
    if (atTop && event.deltaY < 0) {
      mainSlider.slideTo(0);
    }
  };

  const handleTouchStart = (event) => {
    touchStartY = event.touches[0].clientY;
    isTouchMoving = false;
  };

  const handleTouchMove = (event) => {
    isTouchMoving = true;
    const secondSlide = document.querySelector('.main__slide--main');
    touchEndY = event.touches[0].clientY;

    if (secondSlide.scrollTop === 0 && touchStartY < touchEndY) {
      atTop = true;
    } else {
      atTop = false;
    }
  };

  const handleTouchEnd = () => {
    if (isTouchMoving && atTop && touchStartY < touchEndY) {
      mainSlider.slideTo(0);
    }
  };

  const handleFirstSlideTouchMove = (event) => {
    const firstSlide = document.querySelector('.main__slide--intro');
    touchEndY = event.touches[0].clientY;

    if (touchStartY > touchEndY) {
      mainSlider.slideTo(1);
    }
  };

  const mainSlider = new Swiper('#mainSlider', {
    direction: 'vertical',
    slidesPerView: 1,
    allowTouchMove: false,
    mousewheel: true,
    hashNavigation: {
      watchState: true,
    },
    on: {
      slideChange: function () {
        const firstSlide = document.querySelector('.main__slide--intro');
        const secondSlide = document.querySelector('.main__slide--main');

        if (this.activeIndex === 1) {
          this.mousewheel.disable();

          secondSlide.addEventListener('scroll', handleScroll);
          secondSlide.addEventListener('wheel', handleWheel);
          secondSlide.addEventListener('touchstart', handleTouchStart);
          secondSlide.addEventListener('touchmove', handleTouchMove);
          secondSlide.addEventListener('touchend', handleTouchEnd);
        } else {
          this.mousewheel.enable();

          secondSlide.removeEventListener('scroll', handleScroll);
          secondSlide.removeEventListener('wheel', handleWheel);
          secondSlide.removeEventListener('touchstart', handleTouchStart);
          secondSlide.removeEventListener('touchmove', handleTouchMove);
          secondSlide.removeEventListener('touchend', handleTouchEnd);

          firstSlide.addEventListener('touchstart', handleTouchStart);
          firstSlide.addEventListener('touchmove', handleFirstSlideTouchMove);
        }
      }
    }
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
  const updatePagination = (swiper) => {
    const paginationEl = document.querySelector('.stages__inner-pagination');
    if (paginationEl) {
      const currentSlide = swiper.activeIndex + 1;
      const totalSlides = swiper.slides.length;
      paginationEl.textContent = `${currentSlide} / ${totalSlides}`;
    }
  };

  const stagesSliderThumbs = new Swiper("#stagesSliderThumbs", {
    spaceBetween: 35,
    slidesPerView: 2,
    watchSlidesProgress: true,
    watchOverflow: true,
    breakpoints: {
      // mobile + tablet - 320-990
      450: {
        slidesPerView: 3
      },
      620: {
        slidesPerView: 4
      },
      1023: {
        slidesPerView: 5
      }
    }
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
      on: {
        init: function() {
          updatePagination(this);
        },
        slideChange: function() {
          updatePagination(this);
        },
      },
    });
  });

  const currentInnerSlideIndices = Array(innerSliders.length).fill(0);

  const nextButton = document.querySelector('.stages__button-next');
  const prevButton = document.querySelector('.stages__button-prev');

  const autoplayInterval = 3000; // Інтервал автоплей
  let autoplay;

  const startAutoplay = () => {
    autoplay = setInterval(() => {
      const activeIndex = stagesSlider.activeIndex;
      const activeInnerSlider = innerSliders[activeIndex];

      if (activeInnerSlider.isEnd) {
        if (activeIndex < sliderIds.length - 1) {
          stagesSlider.slideNext();
          currentInnerSlideIndices[activeIndex] = 0;
          innerSliders[activeIndex + 1].slideTo(0, 0);
          updatePagination(innerSliders[activeIndex + 1]);
        } else {
          clearInterval(autoplay);
        }
      } else {
        activeInnerSlider.slideNext();
        currentInnerSlideIndices[activeIndex] = activeInnerSlider.activeIndex;
        updatePagination(activeInnerSlider);
      }
    }, autoplayInterval);
  };

  const stopAutoplay = () => {
    clearInterval(autoplay);
  };

  nextButton.addEventListener('click', () => {
    playButton.classList.add('is-active');
    stopButton.classList.remove('is-active');
    stopAutoplay();

    const activeIndex = stagesSlider.activeIndex;
    const activeInnerSlider = innerSliders[activeIndex];

    if (activeInnerSlider.isEnd) {
      if (activeIndex < sliderIds.length - 1) {
        stagesSlider.slideNext();
        currentInnerSlideIndices[activeIndex] = 0;
        innerSliders[activeIndex + 1].slideTo(0, 0);
        updatePagination(innerSliders[activeIndex + 1]);
      }
    } else {
      activeInnerSlider.slideNext();
      currentInnerSlideIndices[activeIndex] = activeInnerSlider.activeIndex;
      updatePagination(activeInnerSlider);
    }
  });

  prevButton.addEventListener('click', () => {
    playButton.classList.add('is-active');
    stopButton.classList.remove('is-active');
    stopAutoplay();

    const activeIndex = stagesSlider.activeIndex;
    const activeInnerSlider = innerSliders[activeIndex];

    if (activeInnerSlider.isBeginning) {
      if (activeIndex > 0) {
        stagesSlider.slidePrev();
        currentInnerSlideIndices[activeIndex] = innerSliders[activeIndex - 1].slides.length - 1;
        innerSliders[activeIndex - 1].slideTo(innerSliders[activeIndex - 1].slides.length - 1, 0);
        updatePagination(innerSliders[activeIndex - 1]);
      }
    } else {
      activeInnerSlider.slidePrev();
      currentInnerSlideIndices[activeIndex] = activeInnerSlider.activeIndex;
      updatePagination(activeInnerSlider);
    }
  });

  stagesSlider.on('slideChange', () => {
    const activeIndex = stagesSlider.activeIndex;
    innerSliders[activeIndex].slideTo(currentInnerSlideIndices[activeIndex], 0);
    updatePagination(innerSliders[activeIndex]);
  });

  innerSliders.forEach((innerSlider) => {
    innerSlider.allowTouchMove = false;
  });

  const activeIndex = stagesSlider.activeIndex;
  updatePagination(innerSliders[activeIndex]);

  const playButton = document.querySelector('.stages__slider-autoplay--play');
  const stopButton = document.querySelector('.stages__slider-autoplay--stop');

  playButton.addEventListener('click', () => {
    playButton.classList.remove('is-active');
    stopButton.classList.add('is-active');
    startAutoplay();
  });

  stopButton.addEventListener('click', () => {
    playButton.classList.add('is-active');
    stopButton.classList.remove('is-active');
    stopAutoplay();
  });
};

const initFancybox = () => {
  Fancybox.bind("[data-fancybox]", {
    Carousel: {
      infinite: false,
      dragToSlide: false,
    },
    Hash: false,
    compact: false,
    contentClick: "toggleCover",
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
    Images: {
      Panzoom: {
        panMode: "mousemove",
        mouseMoveFactor: 1.1,
        mouseMoveFriction: 0.12
      },
    },
    closeExisting: true,
    dragToClose: false,
    wheel: 'slide'
  });
};

document.addEventListener('DOMContentLoaded', function() {
  new WOW().init();
  initMobileMenu();
  initMainSlider();
  initIntroSlider();
  initStagesSlider();
  initFancybox();
});