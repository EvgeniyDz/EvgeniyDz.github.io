//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins START  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================*/





var maxhheight 	= $("[data-mh]"),
validate   	= $('.validate'),
mask	   	= $('.input_tel'),
// styler 		= $(".styler"),		
slick 		= $(".slick-carousel"),
range       = $('.range_box'),
modal = $(".modal_btn"),
// img_slider 		= $(".map_carousel"),
// auto      = $(".auto_input"),
popup 		= $("[data-popup]");



if(maxhheight.length){
		include("plugins/jquery.matchHeight-min.js");
}
// if(styler.length){
// 		include("plugins/formstyler/formstyler.js");
// }
// if(popup.length){
// 		include("plugins/arcticmodal/jquery.arcticmodal.js");
// }
// if(img_slider.length){
// 		include('plugins/flip/jquery.flipping_gallery.js');
// }
if(slick.length){
	include('plugins/slick/slick.min.js');
}
if(range.length){
	include("plugins/ion.rangeSlider-2.2.0/js/ion-rangeSlider/ion.rangeSlider.min.js");
}
// if(auto.length){
// 	include('plugins/EasyAutocomplete/jquery.easy-autocomplete.min.js');
// }
if(validate.length){
	include("plugins/jquery.validate/jquery.validate.min.js");
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

	$.parallaxify();

	if($('.datepicker-here').length){
		var myDatepicker = $('.datepicker-here').datepicker().data('datepicker');
		$('.datepicker-here').datepicker({
			// Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
			minDate: new Date(),
			onSelect: function(){				
				myDatepicker.hide();
			}
		})
	}
	

/* ------------------------------------------------
			Popup
------------------------------------------------ */

	if($(modal).length){			 
		$(modal).fancybox({
			autoFocus: false,
			touch: false,
		});

		$('.modal_btn_table').fancybox({
			beforeShow: function(){
				$('.popup_slider_for').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					smartSpeed:1000,
					arrows: false,
					dots: false,
					asNavFor: $('.popup_slider_nav')
				});	
				$('.popup_slider_nav').slick({
					slidesToShow: $('.popup_slider_nav .popup_nav_slide').length,
					slidesToScroll: 1,
					infinite: false,
					smartSpeed:1000,
					arrows: false,
					dots: false,
					focusOnSelect: true,
					asNavFor: $('.popup_slider_for')
				});
			},
			afterClose: function(){
				$('.popup_slider_for').slick('unslick');
				$('.popup_slider_nav').slick('unslick');
			}
		})

	}

	if($('.galery_item').length){
		// var caption = $('.galery_item').data('caption');
		// console.log($(this));		
		$('.galery_item').fancybox({
			loop: true,
			infobar: false,
			arrows: false,
			buttons: false,
			baseClass: "galery_fancy",
			afterLoad : function( instance, current ) {

				// console.log(current.opts.txt);
				
				if ( instance.group.length > 1 && current.$content ) {
				  current.$content.append('<a data-fancybox-next class="galery_next" href="javascript:;">→</a><a data-fancybox-prev class="galery_previous" href="javascript:;">←</a>');
				}
				
				current.$content.append('<a data-fancybox-close class="galery_close" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg></a>');
				current.$content.append('<div class = "galery_item_txt">' + current.opts.txt + '</div>');
			  }
			
		});
	}

/* ------------------------------------------------
			End of Popup
------------------------------------------------ */


/* ------------------------------------------------
Range slider START
------------------------------------------------ */

if (range.length){

	$('.range_box').each(function(index, el){

		var $this 	  	= $(el),
			$range 		= $this.find('input.range');
		
		$range.ionRangeSlider({
			type: "double",							
			min: 6,
			max: 12,
			from: 7.5,
			to: 12,
			step: 0.5,
			grid: true,
			prefix: "Weight: ",
			postfix: " million pounds",
			decorate_both: true,
			values_separator: "-",
			hide_min_max: true,
			hide_from_to: true,
			min_interval: 0.5,
			onStart: function (data) {
				$( ".val_from" ).text(data.from);
				$( ".val_to" ).text(data.to);
			},
			onChange: function (data) {
				$( ".val_from" ).text(data.from);
				$( ".val_to" ).text(data.to);
			}

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
Auto START
------------------------------------------------ */

// if(auto.length){

// 	var options = {

// 		url: "../data/items.json",
	
// 		getValue: "name",
	
// 		list: {	
// 			match: {
// 				enabled: true
// 			}
// 		},
	
// 		theme: "square"
// 	};

// 	auto.easyAutocomplete(options);

// }

/* ------------------------------------------------
Auto END
------------------------------------------------ */




/* ------------------------------------------------
Validate START
------------------------------------------------ */

if(validate.length){

	$('.main_form').validate({

		rules:{

			name: {
				required: true
			},

			tel: {
				required: true
			},

			date: {
				required: true
			},

			check: {
				required: true
			}

		},

		messages:{

			name: {
				required: "Заполните поле"
			},

			tel: {
				required: "Заполните поле"
			},

			date: {
				required: "Выберите дату"
			},

			check: {
				required: "Подтвердите согласие"
			}

		}

	});	

	$('.main_form_popup').validate({

		rules:{

			name: {
				required: true
			},

			tel: {
				required: true
			},

			date: {
				required: true
			},

			check: {
				required: true
			}

		},

		messages:{

			name: {
				required: "Заполните поле"
			},

			tel: {
				required: "Заполните поле"
			},

			date: {
				required: "Выберите дату"
			},

			check: {
				required: "Подтвердите согласие"
			}

		}

	});	

	$('.call_form').validate({

		rules:{

			name: {
				required: true
			},

			tel: {
				required: true
			}

		},

		messages:{

			name: {
				required: "Заполните поле"
			},

			tel: {
				required: "Заполните поле"
			}

		}

	});	

}

/* ------------------------------------------------
Validate END
------------------------------------------------ */


/* ------------------------------------------------
FORMSTYLER START
------------------------------------------------ */

		// if (styler.length){
		// 	styler.styler({
		// 		// selectSmartPositioning: true
		// 	});
		// }

/* ------------------------------------------------
FORMSTYLER END
------------------------------------------------ */

/* ------------------------------------------------
Slick START
------------------------------------------------ */

if(slick.length){
	$('.main_carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		smartSpeed:1000,
		arrows: true,
		adaptiveHeight: true,
		dots: false
	});	

}



/* ------------------------------------------------
Slick END
------------------------------------------------ */

/* ------------------------------------------------
img_slider START
------------------------------------------------ */

// if(img_slider.length){
// 	$('.map_carousel').flipping_gallery({
// 		flipDirection: "left"
// 	});

	
// $(".btn_next").click(function() {
// 	$(".map_carousel").flipForward();
// 	return false;
// });

// $(".btn_prev").click(function() {
// 	$(".map_carousel").flipBackward();
// 	return false;
// });

// }

/* ------------------------------------------------
img_slider END
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
