// Fixed header
const fixedHeader = () => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
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

const cabinetTabs = () => {
  $('.tab-link').click(function () {
    const tabID = $(this).attr('data-tab');

    $(this).addClass('active').siblings().removeClass('active');
    $('#tab-' + tabID)
      .addClass('active')
      .siblings()
      .removeClass('active');
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

const darkMode = () => {
  $('.form-cabinet-item--switch input[type="checkbox"]').on('click', function () {
    if ($(this).is(':checked')) {
      $('.profile__user-inner-wrapper').slideToggle();
    } else {
      $('.profile__user-inner-wrapper').slideToggle();
    }
  });

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

const customSelect = () => {
  $('select').selectric({
    disableOnMobile: false,
  });

  $('select').on('selectric-select', function () {
    $(this).closest('.selectric-wrapper').addClass('selectric-selected');
  });

  $('button[type="reset"]').on('click', function () {
    $('select').selectric('refresh');
    $('.selectric span').text('Choose');
    $('.selectric-scroll ul li').removeClass('selected');
    $('.selectric-scroll ul li:first-child').addClass('selected');
  });
};

const customSelectFIle = () => {
  const fileInputs = document.querySelectorAll('input[type="file"]');

  fileInputs.forEach(function (fileInput) {
    fileInput.addEventListener('change', function () {
      const labelElement = document.querySelector('label[for="' + this.id + '"]');
      if (this.files && this.files[0]) {
        var fileName = this.files[0].name;
        labelElement.textContent = fileName;
        labelElement.classList.add('form-cabinet--uploaded');
      } else {
        labelElement.textContent = 'Select file';
        labelElement.classList.remove('form-cabinet--uploaded');
      }
    });
  });
};

const withdrawDivision = () => {
  const availableAmountElement = document.querySelector('.cabinet-item-available-title span');
  const withdrawAmountInput = document.querySelector(
    '.cabinet__buy-withdrawal .form-cabinet-input',
  );
  const buttons = document.querySelectorAll('.cabinet-item-available-item');

  const initialAvailableAmount = parseFloat(availableAmountElement.textContent);

  function calculateAndSetWithdrawAmount(percentage) {
    const inputAmount = parseFloat(withdrawAmountInput.value.replace(',', '.'));

    let withdrawAmount;
    if (!isNaN(inputAmount) && inputAmount >= 1 && inputAmount <= 9) {
      withdrawAmount = Math.min(inputAmount, initialAvailableAmount);
    } else {
      withdrawAmount = initialAvailableAmount * percentage;
    }

    withdrawAmountInput.value = withdrawAmount.toFixed(2);

    const remainingAmount = initialAvailableAmount - withdrawAmount;
    availableAmountElement.textContent = remainingAmount.toFixed(2) + ' USD';
  }

  buttons[0].addEventListener('click', () => calculateAndSetWithdrawAmount(0.25));
  buttons[1].addEventListener('click', () => calculateAndSetWithdrawAmount(0.5));
  buttons[2].addEventListener('click', () => calculateAndSetWithdrawAmount(0.75));
  buttons[3].addEventListener('click', () => calculateAndSetWithdrawAmount(1));

  withdrawAmountInput.addEventListener('input', function () {
    const inputValue = this.value.replace(',', '.');

    if (
      inputValue === '' ||
      (inputValue >= 1 && inputValue <= 9) ||
      /^\d+\.\d+$/.test(inputValue)
    ) {
      calculateAndSetWithdrawAmount(0);
    } else {
      this.value = '';
    }
  });
};

const formTechnicalSupport = () => {
  $('.cabinet__support-button').click(function () {
    $('.cabinet__support-form').slideDown();
  });
};

const headerButtonsAction = () => {
  $('.header__cards-action button').on('click', function () {
    $(this).parent().next().slideToggle();
  });
};

(function () {
  fixedHeader();
  desktopMenu();
  mobileMenu();
  cabinetTabs();
  showPassword();
  darkMode();
  customSelect();
  customSelectFIle();
  if ($('.cabinet__buy-withdrawal').length) {
    withdrawDivision();
  }
  formTechnicalSupport();
  headerButtonsAction();
})();
