
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

const initTypingText = () => {
  new TypeIt('#typingTextAbout', {
    strings: "“Great Affiliates of the World Spread the Impressario’s Word!”",
    speed: 50,
    waitUntilVisible: true,
    cursor: false,
  }).go();
};

document.addEventListener('DOMContentLoaded', function() {
  new WOW().init();
  initMobileMenu();
  initTypingText();
});