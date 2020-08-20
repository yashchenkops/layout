$(function () {

  // Прячем и показываем левое меню
  $('.menu__close').on('click', function () {
    $('.main__aside').animate({ 'left': '-255px' }, 300);
    $('.menu__open').animate({ 'left': '0px' }, 300);
    $('.main__info').animate({ 'margin': '40px 10px 0 70px' }, 300);
  });
  $('.menu__open').on('click', function () {
    $('.main__aside').animate({ 'left': '0px' }, 300);
    $('.menu__open').animate({ 'left': '-30px' }, 300);
    $('.main__info').animate({ 'margin': '40px 10px 0 280px' }, 300);
  });

  // Прячем и показываем верхнее меню
  $('.main__info-header-hide').on('click', function () {
    $('.main__info-header').animate({ 'top': '-60px' }, 300);
    $('.main__info-header-show').animate({ 'top': '40px' }, 300).css({ 'visibility': 'visible' });
    $('.main__info-nav-sub1').animate({ 'top': '-380px' }, 300);
    $('.main__info-items').animate({ 'top': '-50px' }, 300);
    $('.main__info-nav-wrapper').animate({ 'top': '-1350px' }, 300);
    $('.main__info-report').animate({ 'top': '-58px' }, 300);
    $('.main__info-alerts').animate({ 'top': '-58px' }, 300);
    $('.main__info-devices').animate({ 'top': '-58px' }, 300);
    $('.pagination').animate({ 'top': '-28px' }, 300);
  });
  $('.main__info-header-show').on('click', function () {
    $('.main__info-header').animate({ 'top': '0px' }, 300);
    $('.main__info-header-show').animate({ 'top': '18px' }, 300).css({ 'visibility': 'hidden' });
    $('.main__info-nav-sub1').animate({ 'top': '58px' }, 300);
    $('.main__info-items').animate({ 'top': '0px' }, 300);
    $('.main__info-nav-wrapper').animate({ 'top': '58px' }, 300);
    $('.main__info-report').animate({ 'top': '0px' }, 300);
    $('.main__info-alerts').animate({ 'top': '0px' }, 300);
    $('.main__info-devices').animate({ 'top': '0px' }, 300);
    $('.pagination').animate({ 'top': '0px' }, 300);
  });

  // Открываем и закрываем левое сабменю
  $('.menu > li > a').click(function(){
    if ($(this).attr('class') != 'active'){
      $('.left__sub-menu').slideUp();
      $(this).next().slideToggle();
    }
  });
  
  // Скрываем/показывает плашки(саб меню) на топ меню
  $('.tnav-on1').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('tnav-on1 tnav').addClass('tnav-off');
    $('.sub1').toggleClass('sub-active');
  });
  $('.tnav-on2').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('tnav-on2 tnav', [300]).addClass('tnav-off');
    $('.sub2').toggleClass('sub-active');
  });
  $('.tnav-on3').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('tnav-on3 tnav').addClass('tnav-off');
    $('.sub3').toggleClass('sub-active');
  });
  $('.tnav-on4').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('tnav-on4 tnav').addClass('tnav-off');
    $('.sub4').toggleClass('sub-active');
  });
  $('.tnav-on5').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('tnav-on5 tnav').addClass('tnav-off');
    $('.sub5').toggleClass('sub-active');
  });
  $('.tnav-on6').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('tnav-on6 tnav').addClass('tnav-off');
    $('.sub6').toggleClass('sub-active');
  });
  $('.tnav-on7').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('tnav-on7 tnav').addClass('tnav-off');
    $('.sub7').toggleClass('sub-active');
  });
  $('.tnav-on8').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('tnav-on1 tnav').addClass('tnav-off');
    $('.sub8').toggleClass('sub-active');
  });
  $('.tnav-on9').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('tnav-on9 tnav').addClass('tnav-off');
    $('.sub9').toggleClass('sub-active');
  });
  $('.tnav-on10').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('tnav-on10 tnav').addClass('tnav-off');
    $('.sub10').toggleClass('sub-active');
  });
  $('.tnav-on11').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('tnav-on11 tnav').addClass('tnav-off');
    $('.sub11').toggleClass('sub-active');
  });
  $('.tnav-on12').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('tnav-on12 tnav').addClass('tnav-off');
    $('.sub12').toggleClass('sub-active');
  });
  $('.tnav-on13').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('tnav-on13 tnav').addClass('tnav-off');
    $('.sub13').toggleClass('sub-active');
  });
  $('.tnav-on14').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('tnav-on14 tnav').addClass('tnav-off');
    $('.sub14').toggleClass('sub-active');
  });

  // Закрываем вкладки при клике вне блока
  $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".header-ico1"); // тут указываем ID элемента
		var div2 = $(".sub1"); // тут указываем ID элемента
		if (!div.is(e.target) /*если клик был не по нашему блоку*/ && !div2.is(e.target) /*и не по его дочерним элементам */ && div2.has(e.target).length === 0){ 
      $('.header-ico1').addClass('tnav-on1 tnav');
      $('.sub1').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){
		var div = $(".header-ico2");
		var div2 = $(".sub2");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico2').addClass('tnav-on2 tnav');
      $('.sub2').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){ 
		var div = $(".header-ico3"); 
		var div2 = $(".sub3");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico3').addClass('tnav-on3 tnav');
      $('.sub3').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){
		var div = $(".header-ico4");
		var div2 = $(".sub4");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico4').addClass('tnav-on4 tnav');
      $('.sub4').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){
		var div = $(".header-ico5");
		var div2 = $(".sub5");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico5').addClass('tnav-on5 tnav');
      $('.sub5').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){
		var div = $(".header-ico6");
		var div2 = $(".sub6");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico6').addClass('tnav-on6 tnav');
      $('.sub6').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){
		var div = $(".header-ico7");
		var div2 = $(".sub7");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico7').addClass('tnav-on7 tnav');
      $('.sub7').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){
		var div = $(".header-ico8");
		var div2 = $(".sub8");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico8').addClass('tnav-on8 tnav');
      $('.sub8').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){
		var div = $(".header-ico9");
		var div2 = $(".sub9");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico9').addClass('tnav-on9 tnav');
      $('.sub9').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){
		var div = $(".header-ico10");
		var div2 = $(".sub10");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico10').addClass('tnav-on10 tnav');
      $('.sub10').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){
		var div = $(".header-ico11");
		var div2 = $(".sub11");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico11').addClass('tnav-on11 tnav');
      $('.sub11').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){
		var div = $(".header-ico12");
		var div2 = $(".sub12");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico12').addClass('tnav-on12 tnav');
      $('.sub12').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){
		var div = $(".header-ico13");
		var div2 = $(".sub13");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico13').addClass('tnav-on13 tnav');
      $('.sub13').removeClass('sub-active');
		}
  });
  $(document).mouseup(function (e){
		var div = $(".header-ico14");
		var div2 = $(".sub14");
		if (!div.is(e.target) && !div2.is(e.target) && div2.has(e.target).length === 0){ 
      $('.header-ico14').addClass('tnav-on14 tnav');
      $('.sub14').removeClass('sub-active');
		}
  });

  // При клике на "Детальные настройки" открываем меню
  $('.main__info-settings').on('click', function(){
    $('.main__info-nav-wrapper').slideToggle(400);
    $('.gear-svg').toggleClass('rotate__settings');
  });

  // Бургер меню
  $('.main__info-burger').click(function(){
    $('#burger').toggleClass('open');
    $('.main__aside-mob').slideToggle();
  });

  // Табы
  $('.tab__top-left1, .hide-tab1').on('click', function(){
    $('.hide-tab1').toggleClass('show-tab');
    $('.slide__body1').slideToggle();
  });
  $('.tab__top-left2, .hide-tab2').on('click', function () {
    $('.hide-tab2').toggleClass('show-tab');
    $('.slide__body2').slideToggle();
  });

  // Фильтры local
  $(document).mouseup(function (e){
		var div = $('.local__main-name-search');
		if (!div.is(e.target) && div.has(e.target).length === 0){ 
      $('.local__main-name-search').hide(0);
		}
  });
  $('.local__main-name-menu').on('click', function(){
    $('.local__main-name-search').show(0);
  });
  $('.local-select').selectric({
    disableOnMobile: false,
    nativeOnMobile: false
  });
  $('.report-select').selectric({
    disableOnMobile: false,
    nativeOnMobile: false
  });
  $('.modal-select').selectric({
    disableOnMobile: false,
    nativeOnMobile: false
  });
  $('.custom-select').selectric({
    disableOnMobile: false,
    nativeOnMobile: false
  });

  // Archive tabs
  $("ul.tabs__caption").on("click", "li:not(.active)", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.tabs")
      .find("div.tabs__content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });

  // Добавить условие
  $('.action-item-main').on('click', function(){
    $(this).next('.add-area').toggleClass('add-area-active');
    $(this).next('.edit-area').toggleClass('edit-area-active');
  });

  // Ползунок на "Интервал времени 1"
  var custom_values = [1, 5, 10, 15, 20, 25, 30, 60];
  var my_from = custom_values.indexOf(1);
  var my_to = custom_values.indexOf(60);
  $(".range-slider1").ionRangeSlider({
    grid: true,
    from: my_from,
    to: my_to,
    values: custom_values
  });

  // Ползунок на "Интервал времени 2"
  $(".range-slider2").ionRangeSlider({
    grid: true,
    from: 0,
    values: [
      "min", "middle", "max"
    ]
  });

  // Ползунок на "Интервал времени 3"
  var custom_values = [1, 6, 12, 24, 72];
  var my_from = custom_values.indexOf(1);
  var my_to = custom_values.indexOf(72);
  $(".range-slider3").ionRangeSlider({
    grid: true,
    from: my_from,
    to: my_to,
    values: custom_values
  });

  // Таблица на "attantion-page"
  $('#alerts-table').DataTable({
    paging: false,
    info: false,
    responsive: true,
    bFilter: false,
    columnDefs: [{
      targets: [5],
      orderable: false
    }]
  });

  // Таблица на "report-all-page"
  var table2 = $('#alerts-table2').DataTable({
    info: false,
    responsive: true,
    bFilter: false,
    paging: false,
    'columnDefs': [
      { 
        targets: [0],
        orderable: false
      },
      { 
        targets: [1],
        orderable:false
      },
      {
        targets: [1],
        searchable:false,
        orderable:false,
        'className': 'dt-body-center',
        'render': function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' 
              + $('<div/>').text(data).html() + '">'},
      },
      { 
        targets: [10],
        orderable:false
      }
    ],
    'order': [1, 'asc']
  });
  // Handle click on "Select all" control
  $('#table2-select-all').on('click', function(){
      // Check/uncheck all checkboxes in the table
      var rows = table2.rows({ 'search': 'applied' }).nodes();
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  // Handle click on checkbox to set state of "Select all" control
  $('#alerts-table2 tbody').on('change', 'input[type="checkbox"]', function(){
      // If checkbox is not checked
      if(!this.checked){
        var el = $('#table2-select-all').get(0);
        // If "Select all" control is checked and has 'indeterminate' property
        if(el && el.checked && ('indeterminate' in el)){
            // Set visual state of "Select all" control 
            // as 'indeterminate'
            el.indeterminate = true;
        }
      }
  });

  // Таблица на "report-create"
  $('#alerts-table3').DataTable({
    paging: false,
    info: false,
    responsive: true,
    bFilter: false,
    columnDefs: [{
      targets: [8],
      orderable: false
    }]
  });

  // Таблица на "archive-user-page-for-admin"
  var table4 = $('#alerts-table4').DataTable({
    info: false,
    responsive: true,
    bFilter: false,
    paging: false,
    'columnDefs': [
      { 
        targets: [0],
        orderable: false
      },
      {
        targets: [1],
        searchable:false,
        orderable:false,
        'className': 'dt-body-center',
        'render': function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' 
              + $('<div/>').text(data).html() + '">'}
      },
      { 
        targets: [8],
        orderable:false
      }
    ],
    'order': [1, 'asc']
  });
  $('#table4-select-all').on('click', function(){
      var rows = table4.rows({ 'search': 'applied' }).nodes();
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  $('#alerts-table4 tbody').on('change', 'input[type="checkbox"]', function(){
      if(!this.checked){
        var el = $('#table4-select-all').get(0);
        if(el && el.checked && ('indeterminate' in el)){
            el.indeterminate = true;
        }
      }
  });

  // Таблица на "archive-reports-page"
  var table5 = $('#alerts-table5').DataTable({
    info: false,
    responsive: true,
    bFilter: false,
    paging: false,
    'columnDefs': [
      { 
        targets: [0],
        orderable: false
      },
      {
        targets: [1],
        searchable: false,
        orderable: false,
        'className': 'dt-body-center',
        'render': function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' 
              + $('<div/>').text(data).html() + '">'}
      },
      { 
        targets: [10],
        orderable:false
      }
    ],
    'order': [1, 'asc']
  });
  $('#table5-select-all').on('click', function(){
      var rows = table5.rows({ 'search': 'applied' }).nodes();
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  $('#alerts-table5 tbody').on('change', 'input[type="checkbox"]', function(){
      if(!this.checked){
        var el = $('#table5-select-all').get(0);
        if(el && el.checked && ('indeterminate' in el)){
            el.indeterminate = true;
        }
      }
  });

  // Таблица на "archive-alert-page"
  var table6 = $('#alerts-table6').DataTable({
    info: false,
    responsive: true,
    bFilter: false,
    paging: false,
    'columnDefs': [
      {
        targets: [1],
        searchable: false,
        orderable: false,
        'className': 'dt-body-center',
        'render': function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' 
              + $('<div/>').text(data).html() + '">'}
      },
      { 
        targets: [5],
        orderable: false
      }
    ],
    'order': [1, 'asc']
  });
  $('#table6-select-all').on('click', function(){
      var rows = table6.rows({ 'search': 'applied' }).nodes();
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  $('#alerts-table6 tbody').on('change', 'input[type="checkbox"]', function(){
      if(!this.checked){
        var el = $('#table6-select-all').get(0);
        if(el && el.checked && ('indeterminate' in el)){
            el.indeterminate = true;
        }
      }
  });

  // Таблица на "archive-automatic-page"
  var table7 = $('#alerts-table7').DataTable({
    info: false,
    responsive: true,
    bFilter: false,
    paging: false,
    'columnDefs': [
      {
        targets: [1],
        searchable:false,
        orderable:false,
        'className': 'dt-body-center',
        'render': function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' 
              + $('<div/>').text(data).html() + '">'}
      },
      { 
        targets: [5],
        orderable:false
      }
    ],
    'order': [1, 'asc']
  });
  $('#table7-select-all').on('click', function(){
      var rows = table7.rows({ 'search': 'applied' }).nodes();
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  $('#alerts-table7 tbody').on('change', 'input[type="checkbox"]', function(){
      if(!this.checked){
        var el = $('#table7-select-all').get(0);
        if(el && el.checked && ('indeterminate' in el)){
            el.indeterminate = true;
        }
      }
  });

  // Таблица на "automatization-script-page+new-script"
  var table8 = $('#alerts-table8').DataTable({
    info: false,
    responsive: true,
    bFilter: false,
    paging: false,
    'columnDefs': [
      {
        targets: [1],
        searchable:false,
        orderable:false,
        'className': 'dt-body-center',
        'render': function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' 
              + $('<div/>').text(data).html() + '">'}
      },
      { 
        targets: [6],
        orderable:false
      }
    ],
    'order': [1, 'asc']
  });
  $('#table8-select-all').on('click', function(){
      var rows = table8.rows({ 'search': 'applied' }).nodes();
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  $('#alerts-table8 tbody').on('change', 'input[type="checkbox"]', function(){
      if(!this.checked){
        var el = $('#table8-select-all').get(0);
        if(el && el.checked && ('indeterminate' in el)){
            el.indeterminate = true;
        }
      }
  });

  // Таблица на "automatization-script-page+new-script"
  var table9 = $('#alerts-table9').DataTable({
    info: false,
    responsive: true,
    bFilter: false,
    paging: false,
    'columnDefs': [
      {
        targets: [1],
        searchable:false,
        orderable:false,
        'className': 'dt-body-center',
        'render': function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' 
              + $('<div/>').text(data).html() + '">'}
      },
      { 
        targets: [6],
        orderable:false
      }
    ],
    'order': [1, 'asc']
  });
  $('#table9-select-all').on('click', function(){
      var rows = table9.rows({ 'search': 'applied' }).nodes();
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  $('#alerts-table9 tbody').on('change', 'input[type="checkbox"]', function(){
      if(!this.checked){
        var el = $('#table9-select-all').get(0);
        if(el && el.checked && ('indeterminate' in el)){
            el.indeterminate = true;
        }
      }
  });

  // Таблица на "automatization-page-new-nabor-ysloviy"
  var table10 = $('#alerts-table10').DataTable({
    info: false,
    responsive: true,
    bFilter: false,
    paging: false,
    'columnDefs': [
      {
        targets: [1],
        searchable:false,
        orderable:false,
        'className': 'dt-body-center',
        'render': function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' 
              + $('<div/>').text(data).html() + '">'}
      },
      { 
        targets: [5],
        orderable:false
      }
    ],
    'order': [1, 'asc']
  });
  $('#table10-select-all').on('click', function(){
      var rows = table10.rows({ 'search': 'applied' }).nodes();
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  $('#alerts-table10 tbody').on('change', 'input[type="checkbox"]', function(){
      if(!this.checked){
        var el = $('#table10-select-all').get(0);
        if(el && el.checked && ('indeterminate' in el)){
            el.indeterminate = true;
        }
      }
  });

  // Таблица на "automatization-alert-page+new"
  var table11 = $('#alerts-table11').DataTable({
    info: false,
    responsive: true,
    bFilter: false,
    paging: false,
    'columnDefs': [
      {
        targets: [1],
        searchable:false,
        orderable:false,
        'className': 'dt-body-center',
        'render': function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' 
              + $('<div/>').text(data).html() + '">'}
      },
      { 
        targets: [5],
        orderable:false
      }
    ],
    'order': [1, 'asc']
  });
  $('#table11-select-all').on('click', function(){
      var rows = table11.rows({ 'search': 'applied' }).nodes();
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  $('#alerts-table11 tbody').on('change', 'input[type="checkbox"]', function(){
      if(!this.checked){
        var el = $('#table11-select-all').get(0);
        if(el && el.checked && ('indeterminate' in el)){
            el.indeterminate = true;
        }
      }
  });

  // Таблица на "report-create"
  $('#alerts-table12').DataTable({
    paging: false,
    info: false,
    responsive: true,
    bFilter: false,
    columnDefs: [
      {
        targets: [2],
        orderable: false
      },
      {
        targets: [3],
        orderable: false
      },
      {
        targets: [4],
        orderable: false
      },
      {
        targets: [5],
        orderable: false
      },
      {
        targets: [6],
        orderable: false
      },
      {
        targets: [7],
        orderable: false
      }
  ]
  });

  // Slider
  $('.create-inputs-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    variableWidth: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  $('.popup-inputs-edit-items').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    variableWidth: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // Календарь
  var picker = new Lightpick({
      field: document.getElementById('datepicker'),
      singleDate: false,
      inline: true,
      lang: 'ru',
      locale: {
      tooltip: {
        one: 'день',
        few: 'дня',
        many: 'дней',
      },
      pluralize: function (i, locale) {
        if ('one' in locale && i % 10 === 1 && !(i % 100 === 11)) return locale.one;
        if ('few' in locale && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14)) return locale.few;
        if ('many' in locale && (i % 10 === 0 || i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 || i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)) return locale.many;
        if ('other' in locale) return locale.other;
        return '';
      }
    },
    onSelect: function (start, end) {
      var str = '';
      str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
      str += end ? end.format('Do MMMM YYYY') : '...';
      document.getElementById('datepicker').innerHTML = str;
    }
  });




});