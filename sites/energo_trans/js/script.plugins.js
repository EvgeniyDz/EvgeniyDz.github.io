;(function($){

	"use strict";


			var matchheight = $("[data-mh]"),
			owl = $(".owl-carousel"),
			inputForm = $("input"),
			selectForm = $("select"),
		    windowW = $(window).width(),
			windowH = $(window).height();


			if(matchheight.length){
					include("plugins/jquery.matchHeight-min.js");
			}
			
			if(owl.length){
					include('plugins/owl-carousel/owl.carousel.js');
			}
			if(inputForm.length){
					include('plugins/jQueryFormStyler/jquery.formstyler.min.js');
			}
			if(selectForm.length){
					include('plugins/jQueryFormStyler/jquery.formstyler.min.js');
			}

					include("plugins/modernizr.js");
					include("plugins/retina.js");



			function include(url){ 

					document.write('<script src="'+ url + '"></script>'); 

			}


	$(document).ready(function(){

		/* ------------------------------------------------
				Owl
		------------------------------------------------ */

		if(owl.length){ 
			owl.owlCarousel({
				items : 1,
				loop: false,
				// smartSpeed:1000,
				nav: false,
				dots: true,
				// navText: [ '', '' ],
				// autoHeight:true
			});

		}

        /* ------------------------------------------------
				End of Owl
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