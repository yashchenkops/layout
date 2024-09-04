const addedLazyLoadImages = () => {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazyload ",
    load_delay: 0
  });
  
  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }
};

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
    speed: 5,
    waitUntilVisible: true,
    cursor: false,
  }).go();
};

document.addEventListener('DOMContentLoaded', function() {
  new WOW().init();
  addedLazyLoadImages();
  initMobileMenu();
  initAccordion();
  initTypingText();
});