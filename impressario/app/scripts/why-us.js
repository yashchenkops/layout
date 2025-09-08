
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

const initBannerClose = () => {
  const banner = document.querySelector('.banner')
  const bannerClose = document.querySelector('.banner__close');

  bannerClose.addEventListener('click', () => {
    banner.classList.add('is-hidden');
  });
};

document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initBannerClose();
});