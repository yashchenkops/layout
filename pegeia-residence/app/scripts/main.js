const initMainSlider = () => {
  let atTop = false;
  let touchStartY = 0;
  let touchStartX = 0;
  let touchEndY = 0;
  let touchEndX = 0;
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
    const secondSlide = document.querySelector('.main__slide--main');
    if (secondSlide.scrollTop === 0 && event.deltaY < 0) {
      mainSlider.slideTo(0);
    }
  };

  const handleTouchStart = (event) => {
    touchStartY = event.touches[0].clientY;
    touchStartX = event.touches[0].clientX;
    isTouchMoving = false;
  };

  const handleTouchMove = (event) => {
    isTouchMoving = true;
    const secondSlide = document.querySelector('.main__slide--main');
    touchEndY = event.touches[0].clientY;
    touchEndX = event.touches[0].clientX;

    const diffY = touchStartY - touchEndY;
    const diffX = touchStartX - touchEndX;

    if (secondSlide.scrollTop === 0 && Math.abs(diffX) < Math.abs(diffY)) {
      if (touchStartY < touchEndY) {
        atTop = true;
      } else {
        atTop = false;
      }
    }
  };

  const handleTouchEnd = () => {
    const secondSlide = document.querySelector('.main__slide--main');
    const diffY = touchStartY - touchEndY;
    const diffX = touchStartX - touchEndX;

    if (isTouchMoving && secondSlide.scrollTop === 0 && Math.abs(diffX) < Math.abs(diffY) && touchStartY < touchEndY) {
      mainSlider.slideTo(0);
    }
  };

  const handleFirstSlideTouchStart = (event) => {
    touchStartY = event.touches[0].clientY;
    touchStartX = event.touches[0].clientX;
  };

  const handleFirstSlideTouchMove = (event) => {
    touchEndY = event.touches[0].clientY;
    touchEndX = event.touches[0].clientX;

    const diffY = touchStartY - touchEndY;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffX) < Math.abs(diffY) && touchStartY > touchEndY) {
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
      init: function () {
        const firstSlide = document.querySelector('.main__slide--intro');
        const secondSlide = document.querySelector('.main__slide--main');

        firstSlide.addEventListener('touchstart', handleFirstSlideTouchStart);
        firstSlide.addEventListener('touchmove', handleFirstSlideTouchMove);

        secondSlide.addEventListener('scroll', handleScroll);
        secondSlide.addEventListener('wheel', handleWheel);
        secondSlide.addEventListener('touchstart', handleTouchStart);
        secondSlide.addEventListener('touchmove', handleTouchMove);
        secondSlide.addEventListener('touchend', handleTouchEnd);
      },
      slideChange: function () {
        const firstSlide = document.querySelector('.main__slide--intro');
        const secondSlide = document.querySelector('.main__slide--main');

        if (this.activeIndex === 1) {
          this.mousewheel.disable();

          firstSlide.removeEventListener('touchstart', handleFirstSlideTouchStart);
          firstSlide.removeEventListener('touchmove', handleFirstSlideTouchMove);
        } else {
          this.mousewheel.enable();

          firstSlide.addEventListener('touchstart', handleFirstSlideTouchStart);
          firstSlide.addEventListener('touchmove', handleFirstSlideTouchMove);
        }
      }
    }
  });

  mainSlider.init(); // Ініціалізація слайдера з додаванням обробників подій
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

  const autoplayInterval = 3000;
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

const initMobileMenu = () => {
  const mobileBurger = document.querySelector('.header__burger-button');
  const mobileBurgerPlate = document.querySelector('.header__burger-button .plate');
  const mobileMenuHeader = document.querySelector('.header__mobile-top');
  const mobileMenuInner = document.querySelector('.header__mobile-inner');
  const menuLinks = document.querySelectorAll('.header__menu-link');

  const toggleMenu = () => {
    mobileMenuInner.classList.toggle('is-active');
    mobileMenuHeader.classList.toggle('is-active');
  };

  mobileBurger.addEventListener('click', toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuInner.classList.remove('is-active');
      mobileMenuHeader.classList.remove('is-active');
      mobileBurgerPlate.classList.remove('active');
    });
  });
};

const showMoreThumbsDescription = () => {
  document.querySelectorAll('.thumbs__item-more').forEach(function(button) {
    button.addEventListener('click', function() {
      const description = this.previousElementSibling;
      description.classList.toggle('is-active');
      
      if (description.classList.contains('is-active')) {
        this.textContent = 'Show less';
      } else {
        this.textContent = 'Learn more';
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', function() {
  new WOW().init();
  initMainSlider();
  initIntroSlider();
  initStagesSlider();
  initFancybox();
  initMobileMenu();
  showMoreThumbsDescription();
});