(function () {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 600) {
      $(".header").css({"top": "0"})
    } else {
      $(".header").css({"top": "-80px"})
    }
  });
	
  var rellax = new Rellax('.parallax');
  new WOW().init();
})();
//\\//\\//\\//\\ End jQuery //\\//\\//\\//\\
