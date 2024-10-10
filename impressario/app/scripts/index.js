const initMobileMenu = () => {
  const mobileBurger = document.querySelector('.header__burger-button');
  const mobileMenuInner = document.querySelector('.header__mobile-inner');
  const menuLinks = document.querySelectorAll('.header__menu-link');
  const closeCross = document.querySelector('.header__menu-close');

  const openMenu = () => {
    mobileMenuInner.classList.add('is-active');
    document.body.classList.add('scroll-block')
  };

  const closeMenu = () => {
    mobileMenuInner.classList.remove('is-active');
    document.body.classList.remove('scroll-block');
  };

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuInner.classList.remove('is-active');
      document.body.classList.remove('scroll-block');
    });
  });

  mobileBurger.addEventListener('click', openMenu);
  closeCross.addEventListener('click', closeMenu);
};

const initAccordion = () => {
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: false,
  });
};

const initTypingText = () => {
  new TypeIt('#typingText', {
    strings: "“Great Affiliates of the World Spread the Impressario’s Word!”",
    speed: 10,
    waitUntilVisible: true,
    cursor: false,
  }).go();
};

const initFormSending = () => {
  const mailPath = 'mail.php';

  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let th = this;
    let params = new FormData(this);
    let request = new XMLHttpRequest();

    request.open('POST', mailPath, true);
    request.send(params);

    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        setTimeout(function() {
          th.reset();
        }, 1000);
        alert('Thank you!');
      }
    };
  });
};

const initTestimonialsSlider = () => {
  const swiper = new Swiper('#testimonialsSlider', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

document.addEventListener('DOMContentLoaded', function() {
  new WOW().init();
  initMobileMenu();
  initAccordion();
  initTypingText();
  initFormSending();
  initTestimonialsSlider();
});