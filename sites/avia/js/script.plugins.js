;(function($){

	"use strict";


			var matchheight = $("[data-mh]"),
			owl = $(".owl"),
			// inputForm = $("input"),
			// selectForm = $("select"),
		    windowW = $(window).width(),
			windowH = $(window).height();


			if(matchheight.length){
					include("plugins/jquery.matchHeight-min.js");
			}
			
			if(owl.length){
					include('plugins/owl-carousel/owl.carousel.js');
			}
			// if(inputForm.length){
			// 		include('plugins/jQueryFormStyler/jquery.formstyler.min.js');
			// }
			// if(selectForm.length){
			// 		include('plugins/jQueryFormStyler/jquery.formstyler.min.js');
			// }

					include("plugins/modernizr.js");
					include("plugins/retina.js");



			function include(url){ 

					document.write('<script src="'+ url + '"></script>'); 

			}


	$(document).ready(function(){

		/* ------------------------------------------------
				Name pudin
		------------------------------------------------ */

		if($('.script').length){ 


		}

        /* ------------------------------------------------
				End of Name pudin
		------------------------------------------------ */

		/* ------------------------------------------------
				Swiper
		------------------------------------------------ */
		var swiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			slidesPerView: 1,
			loop: true,
			speed: 1000,
			//lazy: true,
			preloadImages: false,
			loadOnTransitionStart: true,					
			effect: "fade",
			mousewheel: true,	
		});

        /* ------------------------------------------------
				End of Swiper
		------------------------------------------------ */

	});

	$(window).load(function(){

		/* ------------------------------------------------
				Name pudin
		------------------------------------------------ */


        /* ------------------------------------------------
				End of Name pudin
		------------------------------------------------ */

	});

})(jQuery);