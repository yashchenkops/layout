$(function(){
// SLICK SLIDER 3
  $('.slider1__inner').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    prevArrow: "<img src='images/icons/prev.svg' class='prev'>",
    nextArrow: "<img src='images/icons/next.svg' class='next'>",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 645,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
// SLICK SLIDER 1 END

// SLICK SLIDER 2
  $('.slider2__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    prevArrow: "<img src='images/icons/prev2.svg' class='prev2'>",
    nextArrow: "<img src='images/icons/next2.svg' class='next2'>",
    autoplay: true,
    autoplaySpeed: 2000
  });
// SLICK SLIDER 2 END

// SLICK SLIDER 3
  $('.slider3__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false
  });
// SLICK SLIDER 3 END

// SLICK SLIDER 4
  $('.slider4__inner').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    prevArrow: "<img src='images/icons/prev.svg' class='prev'>",
    nextArrow: "<img src='images/icons/next.svg' class='next'>",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 645,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
// SLICK SLIDER 4 END

// VALIDATE FORM
  $("form").each(function () {
    $(this).validate({
      rules: {
        FirstName: {
          required: true,
          minlength: 3
        },
        Skype: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        Phone: {
          required: true
        },
        Message: {
          required: true,
          minlength: 10
        },
      },
      messages: {
        FirstName: {
          required: "This field is required",
          minlength: jQuery.validator.format("Min {0} symbols")
        },
        Skype: {
          required: "This field is required",
          minlength: jQuery.validator.format("Min {0} symbols")
        },
        email: {
          required: "This field is required",
          email: "Wrong Email format"
        },
        Phone: {
          required: "This field is required"
        },
        Message: {
          required: "This field is required",
          minlength: jQuery.validator.format("Min 10 symbols")
        },
      }
    });
  });
// VALIDATE FORM

// MENU BURGER
    $(".header__burger").click(function () {
      $(this).toggleClass("header__burger--on");
      $(".header__main-menu").slideToggle();
    });
    $('.arrow-mob').click(function () {
      $(this).toggleClass('arrow-mob--on');
      $('.drop__list-mob').slideToggle();
    });
// MENU BURGER END

// BACK TO TOP
  function backToTop() {
    let button = $('.top-btn');
    $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 1000) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });
    button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({ scrollTop: 0 }, 500);
    })
  }
  backToTop();
// BACK TO TOP END

});