(function ($) {
	"use strict";
	
	$(function($){		
		//Portfolio Popup
		$('.magnific-popup').magnificPopup({type:'image'});
		
		
		//Portfolio container			
		var $container = $('.portfolioContainer .row');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
 
		$('.portfolioFilter a').on('click', function(){
			$('.portfolioFilter a').removeClass('current');
			$(this).addClass('current');
	 
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		}); 
		
		
		//Testimonial
		$('.testimonials-cont').owlCarousel({
                loop: true,
                margin: 30,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: false
                  },
                  600: {
                    items: 1,
                    nav: false
                  },
                  1000: {
                    items: 1,
                    nav: false,
                 
                  }
                }
		});
		
		

    });


		 
}(jQuery));	