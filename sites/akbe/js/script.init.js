//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins START  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================*/
;(function($){

	"use strict";

	var maxhheight 	= $("[data-mh]"),
		validate   	= $('.validate'),
		mask	   	= $('input[type="tel"]'),
	    styler 		= $("select"),
	    owl 		= $(".owl-carousel"),
	    tooltip    	= $('.tooltip_btn'),
		popup 		= $("[data-popup]"),
		map 	  	= $('.gmap');	


		if(maxhheight.length){
				include("plugins/jquery.matchHeight-min.js");
		}
		if(styler.length){
				include("plugins/jQueryFormStyler/jquery.formstyler.min.js");
		}
		if(popup.length){
				include("plugins/arcticmodal/jquery.arcticmodal-0.3.min.js");
		}
		if(owl.length){
				include('plugins/owl-carousel/owl.carousel.js');
		}
		// if(validate.length){
		// 		include("plugins/jquery.validate/jquery.validate.min.js");
		// }
		// if(tooltip.length){
		// 		include("plugins/tooltip/jBox.js");
		// }
		// if(mask.length){
		// 		include("plugins/inputmask/inputmask.js");
		// 		include("plugins/inputmask/inputmask.phone.extensions.js");
		// 		include("plugins/inputmask/jquery.inputmask.js");
		// }
		// if(map.length){
		// 		include("https://maps.googleapis.com/maps/api/js?key=AIzaSyAfb5zjZrMY-38hJL-rB3HX1OVWev_cwK8&callback=initMap");
		// 		// include("plugins/map/maplace-0.1.3.min.js");
		// }



		function include(url){ 

				document.write('<script src="'+ url + '"></script>'); 

		}

		function includeCss(href){

				var href = '<link rel="stylesheet" media="screen" href="' + href +'">';

				if($("[href*='style.css']").length){

					$("[href*='style.css']").before(href);

				}
				else{

					$("head").append(href);

				}

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
			Validate START
			------------------------------------------------ */

				if(validate.length){

					validate.validate({

						rules:{

							cf_name: {
								required: true,
								minlength: 2
							},

							cf_email: {
								required: true,
								email: true
							},

							cf_tel: {
								required: true
							},

						},

						messages:{

							cf_name: {
								required: "Поле обязательно для заполнения",
								minlength: 'Введите не менее 2 символов.'
							},

							cf_email: {
								required: "Поле обязательно для заполнения",
								email: "Не верный email."
							},

							cf_tel: {
								required: "Поле обязательно для заполнения",
								inlength: "Введите не менее 10 символов."
							},

						}

					});	

					// <form class="validate">
					//     <input type="text" class="form_input" name="cf_name"> 
					//     <input type="text" class="form_input" name="cf_email">
					//     <input type="tel" class="form_input" name="cf_tel">   
					//     <button class="form_btn btn_red_bd" data-btn-size="m">ОТПРАВИТЬ</button>
					// </form>

				}

			/* ------------------------------------------------
			Validate END
			------------------------------------------------ */



			/* ------------------------------------------------
			Tooltip START
			------------------------------------------------ */
				
				if(tooltip.length){
					tooltip.each(function(){
							var $this = $(this),
								positionX = $this.data('position-x'),
						      	positionY = $this.data('position-y');

							if ($('html').hasClass('md_touch')) {
							    var tooltipOptions = "click",
							    	closeClick = 'box';
							}
							else if (!$('html').hasClass('md_touch')) {
							    var tooltipOptions =  "mouseenter",
						      		closeClick = false;
							}

						new jBox('Tooltip', {
							attach: $this,
							trigger: tooltipOptions,
							adjustTracker: true, 
							width: 420,
							fade: 500,
							closeOnClick: closeClick,
							animation: "move", 
							getContent:"data-tooltip-content",
							delayOpen: 0,
							delayClose: 0,
							position: { 
								x: positionX,
								y: positionY 
							}, 
							outside: "x",
							onOpen: function() { 
								
							}, 
							onClose: function() { 
								
							}, 
						});

					});

					// <div class="tooltip_box">
				   //              <div class="tooltip_btn" data-position-x="right" data-position-y="center" data-tooltip-content="<div class='tooltip_content'>Удобная  </div>">
				   //              </div>
				   //          </div>

				}

			/* ------------------------------------------------
			Tooltip END
			------------------------------------------------ */




			/* ------------------------------------------------
			FORMSTYLER START
			------------------------------------------------ */

				if (styler.length){
					styler.styler({
						selectVisibleOptions: 4,
					});
				}

			/* ------------------------------------------------
			FORMSTYLER END
			------------------------------------------------ */

			/* ------------------------------------------------
			OWL START
			------------------------------------------------ */

				if(owl.length){
					owl.owlCarousel({
						items : 1,
						// loop: true,
						// smartSpeed:1000,
						nav: true,
						dots: true,
						navText: [ '', '' ],
						// autoHeight:true
					});
				}

				// if(owl.length){
				//     owl.each(function(){
				//     	var $this = $(this),
				//       		items = $this.data('items');

				//     	$this.owlCarousel({
				// 			items : 1,
				// 			// loop: true,
				// 			smartSpeed:1000,
				// 			// autoHeight:true,
				//     		dots:false,
				//     		nav: true,
				//             navText: [ '', '' ],
				//             // margin: 30,
				//             responsive : items
				//     	});
				//     });
				// }
				// <div class="owl-carousel" data-items='{  "0":{"items":1},   "480":{"items":2},   "991":{"items":3}  }'></div>

			/* ------------------------------------------------
			OWL END
			------------------------------------------------ */


			/* ------------------------------------------------
			POPUP START
			------------------------------------------------ */

				if(popup.length){
					popup.on('click',function(){
					    var modal = $(this).data("popup");
					    $(modal).arcticmodal();
					});
				};

			/* ------------------------------------------------
			POPUP END
			------------------------------------------------ */

			/* ------------------------------------------------
			POPUP START
			------------------------------------------------ */

			// if(map.length){
			// 	function initMap() {
			// 		var element = $('.map_cont'),
			// 			options = {
			// 				zoom: 5,
			// 				center: {lat: -28.024, lng: 140.887}
			// 			}
				
			// 		var bigMap = new google.maps.Map(element, options);
			// 		console.log(options);
			// 	}
			// };

			/* ------------------------------------------------
			POPUP END
			------------------------------------------------ */




		});

		
		$(window).load(function(){

			

		});


})(jQuery);


//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins END    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================
