var w = $(window).width(),
toggle 		= $('.navbar__mobile-toggle'),
nav 		= $('.navbar__menu'),
nav_dropdowns = $('.navbar__menu-item--dropdown');

$(function() {
	$(toggle).on('click', function() {
		nav.toggleClass('is-active');
	});
	
	$(nav_dropdowns).on('click', function(e) {
		e.preventDefault();
		var self = $(this)
		,	dropdown = self.find('.navbar__dropdown');
		dropdown.toggleClass('is-active');
	});
});

$(window).resize(function(){
	if(w > 320 && nav.is(':hidden')) {
		nav.removeClass('is-active');}
});

