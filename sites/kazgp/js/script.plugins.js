;(function($){

	"use strict";


			var matchheight = $("[data-mh]"),
			owl = $(".owl"),
			inputForm = $("input"),
			// selectForm = $("select"),
			dataTables = $(".price-table table"),
			modal = $(".modal_btn"),
			mask	   	= $('input[type="tel"]'),
		  windowW = $(window).width(),
			windowH = $(window).height();


			if(matchheight.length){
					include("plugins/jquery.matchHeight-min.js");
			}
			if(mask.length){
				include("plugins/inputmask/inputmask.js");
				include("plugins/inputmask/inputmask.phone.extensions.js");
				include("plugins/inputmask/jquery.inputmask.js");
			}
			
			// if(owl.length){
			// 		include('plugins/owl-carousel/owl.carousel.js');
			// }
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
		Inputmask START
		------------------------------------------------ */

		if(mask.length){

			mask.inputmask({
				"mask": "+7 (999) 999-9999",
				'showMaskOnHover': false,
				"clearIncomplete": true,
				'oncomplete': function(){
					// console.log('Ввод завершен');
				},
				'onincomplete': function(){
					// console.log('Заполнено не до конца');
				},
				'oncleared': function(){
					// console.log('Очищено');
				}
			});

		}

		/* ------------------------------------------------
		Inputmask END
		------------------------------------------------ */

		/* ------------------------------------------------
				dataTables
		------------------------------------------------ */

		if($(dataTables).length){			 
			$(dataTables).DataTable({
				// "paging": false,
				// "searching": false,
				// "info": false
			});

			$("body").on('click', ".search_btn", function(){
				var btnText = $(this).text();
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
        $(this).closest('section').find('.table_search').DataTable().column( 1 ).search(
            btnText
				).draw();				
    	});
		}

    /* ------------------------------------------------
				End of dataTables
		------------------------------------------------ */

		/* ------------------------------------------------
				Popup
		------------------------------------------------ */

		if($(modal).length){			 
			$(modal).fancybox({
				autoFocus: false,
				touch:false
			});

		}

    /* ------------------------------------------------
				End of Popup
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