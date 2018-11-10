//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins START  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================*/





var maxhheight 	= $("[data-mh]"),
validate   	= $('.validate'),
// mask	   	= $('input[type="tel"]'),
styler 		= $(".styler"),		    
tooltip    	= $('.tooltip_btn'),			
popup 		= $("[data-popup]"),
swiperBox   = $('.swiper-container');


if(swiperBox .length){
		include("plugins/swiper/js/swiper.min.js");
}
if(maxhheight.length){
		include("plugins/jquery.matchHeight-min.js");
}
if(popup.length){
		include("plugins/arcticmodal/jquery.arcticmodal-0.3.min.js");
}
if(styler.length){
	include("plugins/jQueryFormStyler/jquery.formstyler.min.js");
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
	// var slides = $('.swiper-container').data("slides");;

	var swiper = new Swiper('.swiper-container' , {
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		// slidesPerView: slides,
	  });

	var swiper = new Swiper('.swiper_product' , {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 3,
	// spaceBetween: 30,
	breakpoints: {
		991: {
			slidesPerView: 2			
		},
		768: {
			slidesPerView: 1
		}
	}
	});

	var swiper = new Swiper('.swiper_services' , {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 4,
		breakpoints: {
			991: {
				slidesPerView: 2			
			},
			768: {
				slidesPerView: 1
			}
		}
		});
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
				"selectVisibleOptions": 5
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
				$(modal).arcticmodal({
					afterOpen: function() {
						styler.trigger('refresh');
					},
				});
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
