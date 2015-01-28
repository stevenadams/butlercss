		var w = $(window).width(),
    toggle 		= $('#toggle-menu'),
    menu 		= $('nav ul'),
    hasChild = $('.has-child'),
    dropdown = $('.dropdown');

$(function() {
  $(toggle).on('click', function(e) {
    e.preventDefault();
    menu.toggleClass('is-active');
  });
  
  $(hasChild).click(function(e) {
    e.preventDefault();
    dropdown.toggle();
  });
});

$(window).resize(function(){
  if(w > 320 && menu.is(':hidden')) {
    menu.removeAttr('style');}
});

