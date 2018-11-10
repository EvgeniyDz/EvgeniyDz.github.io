//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins START  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================*/





		var maxhheight 	= $("[data-mh]"),
			validate   	= $('.validate'),
			mask	   	= $('input[type="tel"]'),
			styler 		= $(".styler"),
			swiperBox   = $('.swiper-container'),
			owl 		= $(".owl-carousel"),
			range       = $('.range_box'),
			popup 		= $("[data-popup]");



			if(swiperBox .length){
				include("plugins/swiper/js/swiper.js");
			}
			if(maxhheight.length){
					include("plugins/jquery.matchHeight-min.js");
			}
			if(styler.length){
				include("plugins/jQueryFormStyler/jquery.formstyler.min.js");
			}
			if(owl.length){
				include('plugins/owl-carousel/owl.carousel.js');
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
			// if(mask.length){
			// 		include("plugins/inputmask/inputmask.js");
			// 		include("plugins/inputmask/inputmask.phone.extensions.js");
			// 		include("plugins/inputmask/jquery.inputmask.js");
			// }

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
			Range slider START
			------------------------------------------------ */

			if (range.length){
				var $this 	  	= $(range),
					$range 		= $this.find('input.range'),
					$valueFrom 	= $this.find('#val_from'),
					$valueTo	= $this.find('#val_to'),
					$interval   = $range.data('interval'),
					$rangeVal  	= $range.data('val');

				$($range).ionRangeSlider({
					type: "double",							
					min: $rangeVal.min,
					max: $rangeVal.max,
					from: $rangeVal.from,
					to: $rangeVal.to,
					hide_min_max: true,
					hide_from_to: true,
					min_interval: $interval,
					onStart: function(){
						$valueFrom.val($rangeVal.from);
						$valueTo.val($rangeVal.to);
					},

					onChange: function (data) {
						$valueFrom.val(data.from);
						$valueTo.val(data.to);	
					}
				});
				// console.log($valueTo);

				var rangeSlider = $range.data("ionRangeSlider");
	

				$valueFrom.change(function(){

					if($valueFrom.val() >= $valueTo.val()){
						$valueFrom.val(parseInt($valueTo.val())-$interval);
						rangeSlider.update({
							from: $valueFrom.val()								
						});
					}

					else if($valueFrom.val().indexOf("-") != '-1'){
						$valueFrom.val(0);
						rangeSlider.update({
							from: $valueFrom.val()								
						});
					}

					else{
						rangeSlider.update({
							from: $valueFrom.val()								
						});
					}							
				});

				$valueTo.change(function(){

					if($valueTo.val().indexOf("-") != '-1'){
						$valueTo.val(0);
						rangeSlider.update({
							to: $valueTo.val()								
						});
					}
					else if( $valueTo.val() <= $valueFrom.val() ){
						$valueTo.val(parseInt($valueFrom.val()) + $interval);
						rangeSlider.update({
							to: $valueTo.val()								
						});
						// console.log($valueTo.val());
					}

					else{
						rangeSlider.update({
							to: $valueTo.val()								
						});
					}		
				});
			}

			/* ------------------------------------------------
			Range slider END
			------------------------------------------------ */

			/* ------------------------------------------------
			OWL START
			------------------------------------------------ */

			if(owl.length){
				owl.owlCarousel({
					items : 5,
					margin: 13,
					loop: true,
					center: true,
					dots: false,
					// smartSpeed:1000,
					nav: true,					
					navText: [ '', '' ],
					// autoHeight:true
					responsive:{
						1200:{
							items:5
						},
						768:{
							items:3
						},
						320: {
							items:1
						}
					}
				});
			}


			/* ------------------------------------------------
			OWL END
			------------------------------------------------ */

			/* ------------------------------------------------
			Swiper START
			------------------------------------------------ */

			if (swiperBox .length){

				var swiperMain = new Swiper('.swiper_main' , {
					// scrollbar: {
					// 	el: '.main-scrollbar',	
					// 	snapOnRelease: true					
					// },
					//   navigation: {
					// 	nextEl: '.swiper-main-next',
					// 	prevEl: '.swiper-main-prev',
					// },
					slidesPerView: 4,
					spaceBetween: 30,
					freeMode: true,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					breakpoints: {						
						990: {
						  slidesPerView: 3,
						  spaceBetween: 20
						},
						768: {
							slidesPerView: 2							
						},
						576: {
							slidesPerView: 1
						}
					}
				});	
				var swiperFirst = new Swiper('.swiper_first' , {
					scrollbar: {
						el: '.main-scrollbar',	
						// snapOnRelease: true					
					},
					  navigation: {
						nextEl: '.swiper-main-next',
						prevEl: '.swiper-main-prev',
					},
					thumbs: {
						swiper: swiperMain
					},
					// slidesPerView: 4,
					// spaceBetween: 30
				});

				var galleryThumbs = new Swiper('.swiper_project_thumb', {
					spaceBetween: 10,
					slidesPerView: 3,
					freeMode: true,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					breakpoints: {
						768: {
							slidesPerView: 2							
						},
					}
				});
				var swiperProjectMain = new Swiper('.swiper_project_main' , {
					thumbs: {
						swiper: galleryThumbs
					},
					scrollbar: {
						el: '.thumb-scrollbar',						
					},
					  navigation: {
						nextEl: '.swiper-thumb-next',
						prevEl: '.swiper-thumb-prev',
					},
				});	

				var itemThumbs = new Swiper('.swiper_item_thumb', {
					spaceBetween: 20,
					slidesPerView: 4,
					freeMode: true,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					breakpoints: {
						768: {
							slidesPerView: 3,
							spaceBetween: 10,							
						},
					}
				});
				var itemMain = new Swiper('.swiper_item_main' , {
					thumbs: {
						swiper: itemThumbs
					},	
					effect: "fade",
					fadeEffect: {
						crossFade: true
					  },
				});	

				var abautThumbs = new Swiper('.swiper_abaut_thumb', {
					spaceBetween: 10,
					slidesPerView: 1,
					// freeMode: true,
					// watchSlidesVisibility: true,
					// watchSlidesProgress: true,
					// loop: true,
					// centeredSlides: true,
					navigation: {
						nextEl: '.swiper-abaut-next',
						prevEl: '.swiper-abaut-prev',
					},
					effect: "fade",
					fadeEffect: {
						crossFade: true
					  },
					// breakpoints: {
					// 	768: {
					// 		slidesPerView: 3,
					// 		spaceBetween: 10,							
					// 	},
					// }
				});
				// var abautMain = new Swiper('.swiper_abaut_main' , {
				// 	thumbs: {
				// 		swiper: abautThumbs
				// 	},	
				// 	// spaceBetween: 10,
				// 	slidesPerView: 1,
				// 	simulateTouch: false,
				// 	navigation: {
				// 		nextEl: '.swiper-abaut-next',
				// 		prevEl: '.swiper-abaut-prev',
				// 	},
				// 	centeredSlides: true,
				// 	loop: true
				// });	
			};

			/* ------------------------------------------------
			Swiper END
			------------------------------------------------ */




			/* ------------------------------------------------
			Inputmask START
			------------------------------------------------ */

			// if(mask.length){

			// 	mask.inputmask({
			// 		"mask": "+7 (999) 999-9999",
			// 		'showMaskOnHover': false,
			// 		"clearIncomplete": true,
			// 		'oncomplete': function(){ 
			// 			// console.log('Ввод завершен'); 
			// 		}, 
			// 		'onincomplete': function(){ 
			// 			// console.log('Заполнено не до конца'); 
			// 		},
			// 		'oncleared': function(){ 
			// 			// console.log('Очищено'); 
			// 		}
			// 	});

			// }

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
