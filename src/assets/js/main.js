(function ($) {
	"use strict";

    $(document).ready(function($){
		
		

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
		
		

		//Fixed nav on scroll
		$(document).on('scroll',function(){
			var scrollTop = $(document).scrollTop();
			if(scrollTop > $('nav').height()){
				$('.btco-hover-menu').addClass('navbar-fixed-top');
				$('#logo').attr('src', 'images/logo-2.png');
			}
			else {
				$('.btco-hover-menu').removeClass('navbar-fixed-top');
				$('#logo').attr('src', 'images/logo-1.png');
			}
		});
		
		//Search
		$("#addClass").on('click',function () {
          $('#qnimate').addClass('popup-box-on');
        });
          
        $("#removeClass").on('click',function () {
          $('#qnimate').removeClass('popup-box-on');
        });
		
		
		
		

		
		


    });


    $(window).on('load',function(){
		
		//Preloader
		$('.preloader').delay(200).fadeOut('slow');
		$('body').delay(200).css({'overflow':'visible'});
		
		
		
		
		//WOW js
		new WOW().init();
        
    });
	

}(jQuery));	