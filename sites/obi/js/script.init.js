//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins START  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================*/





		var maxhheight 	= $("[data-mh]"),
			validate   	= $('.validate'),
			mask	   	= $('input[type="tel"]'),		    		
			popup 		= $("[data-popup]"),			
			range       = $('.range_box'),
			datePick    = $('.datepicker_input'),
			styler 		= $("select"),
			data_birth	= $('.data_birth');


			if(maxhheight.length){
					include("plugins/jquery.matchHeight-min.js");
			}
			if(range.length){
				include("plugins/ion.rangeSlider-2.2.0/js/ion-rangeSlider/ion.rangeSlider.min.js");
			}
			if(datePick.length){
				include("plugins/air-datepicker-master/js/datepicker.min.js");
			}
			if(popup.length){
					include("plugins/arcticmodal/jquery.arcticmodal-0.3.min.js");
			}

			if(validate.length){
					include("plugins/jquery.validate/jquery.validate.min.js");
			}
			if(data_birth.length){
					include("plugins/date.validation.js");
			}
			if(styler.length){
				include("plugins/jQueryFormStyler/jquery.formstyler.min.js");
			}
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
			DatePick START
			------------------------------------------------ */

			if (datePick.length){	
				
				var d = new Date();
				d.setFullYear(d.getFullYear()-18);
		
				$(datePick).datepicker({
					autoClose: true,
					maxDate: d
				});
				

			}


			/* ------------------------------------------------
			DatePick END
			------------------------------------------------ */




			/* ------------------------------------------------
			Inputmask START
			------------------------------------------------ */

			if(mask.length){

				$(mask).inputmask({
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

			if($('.data_birth').length){ 

				$('.data_birth').inputmask({
					"mask": "99.99.9999",
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

						cf_data: {
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
						cf_data: {
							required: "Поле обязательно для заполнения",
						},

					}

				});	

				jQuery.validator.addMethod("alphabetsAndSpacesOnly", function (value, element) {
			    return this.optional(element) || /^[а-яА-Я]+$/.test(value); });

			    $(".cf_name").rules("add", {
			        alphabetsAndSpacesOnly: true,
			        messages: { alphabetsAndSpacesOnly: "Только русские буквы" }
			    });

			    jQuery.validator.addMethod("alphabetsAndSpacesOnlyEmail", function (value, element) {
			    return this.optional(element) || /^[a-zA-Z0-9$@&?\.]+$/.test(value); });

			    $(".cf_email").rules("add", {
			        alphabetsAndSpacesOnlyEmail: true,
			        messages: { alphabetsAndSpacesOnlyEmail: "Только английские символы" }
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
			FORMSTYLER START
			------------------------------------------------ */

			if (styler.length){
				styler.styler({
					// selectVisibleOptions: 4,
					// selectSearch: true,
					// selectSearchLimit: 5

				});
			}

		/* ------------------------------------------------
		FORMSTYLER END
		------------------------------------------------ */




		});

		
		$(window).load(function(){

			

		});




//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins END    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================
