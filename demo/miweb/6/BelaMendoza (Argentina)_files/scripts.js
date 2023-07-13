(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away
        
        $(window).on('scroll', function() {
            if ($(document).scrollTop() > 80) {
                $('.main-menu').addClass('fixed-top');
            } else {
                $('.main-menu').removeClass('fixed-top');
            }
        });
        
        $('.smooth-scroll a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                var hHeader = $("header").height() + 50;
                
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - hHeader
                    }, 750);
                        return false;
                }
            }
        });

        // Copy Right Year Update
        $("#currentYear").text( (new Date).getFullYear() );
        
        $('.sf-menu').mobileMenu();
		
	});
	
})(jQuery, this);