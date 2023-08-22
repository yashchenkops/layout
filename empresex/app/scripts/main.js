// Fixed header
const fixedHeader = () => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header__desktop, .header__mobile').addClass('is-fixed');
    } else {
      $('.header__desktop, .header__mobile').removeClass('is-fixed');
    }
  });
};

// Burger menu
const desktopMenu = () => {
  $('.header__desktop .menu__burger').click(function () {
    $('.header__desktop-inner').toggleClass('is-active');
    $(this).toggleClass('close');
  });
};

// Burger menu mobile
const mobileMenu = () => {
  $('.header__mobile .menu__burger').click(function () {
    $('.header__mobile').addClass('is-active');
    $(this).addClass('close');
    $('body').addClass('scroll-block');
    $('.dark-mode').hide();
  });

  $('.header__mobile-inner-top-close').click(function () {
    $('.header__mobile').removeClass('is-active');
    $(this).removeClass('close');
    $('body').removeClass('scroll-block');
    $('.dark-mode').show();
  });
};

// Lottie anim
const sectionAnimations = () => {
  bodymovin.loadAnimation({
    container: document.querySelector('#contactButtonAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/animations/contact-us.json',
  });

  bodymovin.loadAnimation({
    container: document.querySelector('#openingAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/animations/opening.json',
  });

  bodymovin.loadAnimation({
    container: document.querySelector('#loaderAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'scripts/animations/loader.json',
  });
};

const checkboxInit = () => {
  //dark mode + cookie
  const darkModeCheckbox = $('#darkmode-toggle');

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
  }

  function getCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
  }

  function enableDarkMode() {
    $('body').addClass('dark');
  }

  function disableDarkMode() {
    $('body').removeClass('dark');
  }

  function handleDarkModeToggle() {
    if (darkModeCheckbox.is(':checked')) {
      enableDarkMode();
      setCookie('darkModeEnabled', 'true', 30);
    } else {
      disableDarkMode();
      setCookie('darkModeEnabled', 'false', 30);
    }
  }

  const darkModeEnabled = getCookie('darkModeEnabled');
  if (darkModeEnabled === 'true') {
    darkModeCheckbox.prop('checked', true);
    enableDarkMode();
  } else {
    darkModeCheckbox.prop('checked', false);
    disableDarkMode();
  }

  darkModeCheckbox.on('click', handleDarkModeToggle);
};

const mediaTabs = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const cardItems = document.querySelectorAll('.media__cards-item');
    const subtitleItems = document.querySelectorAll('.media__info-subtitles-item');

    cardItems.forEach((card, index) => {
      card.addEventListener('click', () => {
        cardItems.forEach((item) => item.classList.remove('active'));
        subtitleItems.forEach((item) => item.classList.remove('active'));

        card.classList.add('active');
        subtitleItems[index].classList.add('active');
      });
    });
  });
};

const reviewSlider = () => {
  $('#review').slick({
    dots: true,
    arrows: true,
    fade: true,
  });
};

const accordion = () => {
  const panelTitle = $('.accordion__title');
  const visibilityMode = 'single';
  const isInitialized = 'init';
  const transitionTime = 170;

  if (isInitialized === 'init') {
    function hidePanels() {
      const activeTitles = panelTitle.filter(function () {
        return $(this).attr('aria-selected') === 'true';
      });

      $.each(activeTitles, function () {
        $(this).attr('aria-selected', 'false');
        $(this).attr('aria-expanded', 'false');
        $(this).parent().removeClass('is-active');
        $(this).next().slideUp(transitionTime);
      });
    }

    $.each(panelTitle, function () {
      const isOpen = $(this).attr('aria-selected');

      if (isOpen === 'true') {
        $(this).next().slideDown(transitionTime);
      } else {
        $(this).next().slideUp(transitionTime);
      }
    });

    if (visibilityMode === 'single') {
      panelTitle.on('click keydown', function () {
        const title = $(this);
        const panel = $(this).next();
        panelTitle.removeAttr('style');

        if (event.type === 'click') {
          $(this).css('outline', 'none');
        }

        if (event.which !== 9 || event.keyCode !== 9) {
          event.preventDefault();
        }

        if (event.which === 13 || event.keyCode === 13 || event.type === 'click') {
          if (panel.length) {
            if (panel.is(':visible')) {
              $.each(panelTitle, function () {
                hidePanels();
                $(this).parent().removeClass('is-active');
              });
            } else {
              hidePanels();
              title.attr('aria-selected', 'true');
              title.attr('aria-expanded', 'true');
              panel.slideDown(transitionTime);
              $(this).parent().addClass('is-active');
              $(panel).focus();
              $(panel).attr('tabindex', '0');
            }
          }
        }
      });
    } else if (visibilityMode === 'multiply') {
      panelTitle.on('click', function () {
        const panel = $(this).next();

        if (panel.length) {
          panel.slideDown(transitionTime);
        } else {
          panel.slideUp(transitionTime);
        }
      });
    }
  } else {
    $(panelTitle).unbind('click');
  }
};

const showMoreFaq = () => {
  $('.faq__button-learn-more').on('click', function () {
    $('.faq__hidden-blocks').slideToggle(300);

    $(this).toggleClass('is-active');
    if ($(this).hasClass('is-active')) {
      $(this).text('Show less');
    } else {
      $(this).text('Learn more');
    }
  });
};

const landingTabs = () => {
  $('.tab-link').click(function () {
    const tabID = $(this).attr('data-tab');

    $(this).addClass('active').siblings().removeClass('active');
    $('#tab-' + tabID)
      .addClass('active')
      .siblings()
      .removeClass('active');
  });
};

const contactUs = () => {
  const contactButton = document.querySelector('.contact__button');
  const contactForm = document.querySelector('.contact');

  $(contactButton).on('click', function () {
    $(contactForm).toggleClass('is-active');
  });
};

const showPassword = () => {
  $('.password-visibility').on('click', function () {
    var inputPassword = $(this).closest('.form-cabinet-item--password').find('input')[0];
    if ($(inputPassword).attr('type') == 'password') {
      $(this).addClass('view');
      $(inputPassword).attr('type', 'text');
    } else {
      $(this).removeClass('view');
      $(inputPassword).attr('type', 'password');
    }
  });
};

const openingAnimation = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const openingAnimation = document.getElementById('openingAnim');
    const anotherAnimation = document.getElementById('loaderAnim');

    const isFirstVisit = localStorage.getItem('firstVisit') === null;

    if (isFirstVisit) {
      openingAnimation.style.display = 'block';

      setTimeout(() => {
        openingAnimation.style.display = 'none';
      }, 3050);

      localStorage.setItem('firstVisit', 'false');
    } else {
      openingAnimation.style.display = 'none';
    }

    window.addEventListener('beforeunload', function () {
      anotherAnimation.style.display = 'block';
    });
  });
};

(function () {
  new WOW().init();

  fixedHeader();
  desktopMenu();
  mobileMenu();
  sectionAnimations();
  checkboxInit();
  mediaTabs();
  reviewSlider();
  accordion();
  showMoreFaq();
  landingTabs();
  contactUs();
  showPassword();
  openingAnimation();
})();
