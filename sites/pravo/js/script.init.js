//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins START  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================*/





		var maxhheight 	= $("[data-mh]"),
			validate   	= $('.validate'),
			mask	   	= $('input[type="tel"]'),
		    styler 		= $(".styler"),		    
		    tooltip    	= $('.tooltip_btn'),			
			popup 		= $("[data-popup]"),
			range       = $('.range_box'),
			swiperBox   = $('.swiper-container');


			if(swiperBox .length){
					include("plugins/swiper/js/swiper.min.js");
			}
			if(maxhheight.length){
					include("plugins/jquery.matchHeight-min.js");
			}
			if(range.length){
				include("plugins/ion.rangeSlider-2.2.0/js/ion-rangeSlider/ion.rangeSlider.min.js");
			}
			// if(popup.length){
			// 		include("plugins/arcticmodal/jquery.arcticmodal.js");
			// }
			// if(validate.length){
			// 		include("plugins/jquery.validate/jquery.validate.min.js");
			// }
			// if(tooltip.length){
			// 		include("plugins/tooltip/jBox.js");
			// }
			if(mask.length){
					include("plugins/inputmask/inputmask.js");
					include("plugins/inputmask/inputmask.phone.extensions.js");
					include("plugins/inputmask/jquery.inputmask.js");
			}

			// 		include("plugins/modernizr.js");



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
			Swiper START
			------------------------------------------------ */

			if (swiperBox .length){
				var slideLenght = $('.swiper-slide').length;				

				var swiper = new Swiper('.swiper_main' , {
					pagination: {
					  el: '.swiper-pagination',
					  type: 'progressbar',				  
					},
					slidesPerView: 1,
					on: {
						slideChangeTransitionStart: function () {
						  var slideIndex = $('.swiper-slide-active').index();

						  $('.slide_lenght').text(slideLenght);
						  $('.slide_number').text(slideIndex + 1);						 				  					  
						},
						init: function () {
							$('.slide_lenght').text(slideLenght);
						},
					},
					autoplay: {
						delay: 5000,
						disableOnInteraction: false,
					  },
					navigation: {
					  nextEl: '.swiper-button-next',
					  prevEl: '.swiper-button-prev',
					},
				  });
				 var swiperRev = new Swiper('.rev_slider' , {
					navigation: {
					  nextEl: '.swiper-button-next',
					  prevEl: '.swiper-button-prev',
					},
				  });
			};

			/* ------------------------------------------------
			Swiper END
			------------------------------------------------ */

			/* ------------------------------------------------
			Range slider START
			------------------------------------------------ */

			if (range.length){
					
				range.each(function(index, el){

					var $this = $(el),
						$max = $this.data('max');
						// $postfix = $this.data('postfix'),
						// $rangeVal = $this.prevAll('.range_val');
						
						$(el).ionRangeSlider({
							min: 0,
							max: $max,							
							// postfix: $postfix,
		
							// onChange: function () {
							// 	var text = $this.prev().find('.irs-single').text();
							// 	// console.log(text);						
							// 	$($rangeVal).text(text);
							// }
						});

				});		
				
			}

	
			/* ------------------------------------------------
			Range slider END
			------------------------------------------------ */


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
    //                 <input type="text" class="form_input" name="cf_name"> 
    //                 <input type="text" class="form_input" name="cf_email">
    //                 <input type="tel" class="form_input" name="cf_tel">   
    //                 <button class="form_btn btn_red_bd" data-btn-size="m">ОТПРАВИТЬ</button>
    //             </form>

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
							// selectSmartPositioning: true
						});
					}

			/* ------------------------------------------------
			FORMSTYLER END
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




		});

		
		$(window).load(function(){

			

		});




//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins END    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================
