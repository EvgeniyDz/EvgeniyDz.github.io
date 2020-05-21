;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;
			
			// self.backToTopBtn({
			//     transitionIn: 'bounceInRight',
			//     transitionOut: 'bounceOutRight'
			// });
			self.mainMenu();
			self.map();

			// self.tabs();
			// self.includeScipts.init();			
			// self.headerHeight();
		},

		windowLoad: function(){

			var self = this;			

			self.preloader();
			self.animatedContent();

			
		},


		/**
		**	Include Scipts
		**/

		includeScipts:{

			init: function(){

				var self = this;

				self.body = $("body");
				self.maxhheight = $("[data-mh]");


				if(self.maxhheight.length){
					self.include("jquery.matchHeight-min.js");
				}


			},

			include: function(url){
				
				var self = this;

				self.body.append('<script src="/bitrix/templates/shared_files/'+ url + '"></script>'); 

			}
		},

		/**
        **  Animated Content
        **/

	   animatedContent : function(){

		$("[data-animation]").each(function() {

			var $this = $(this);

			if($(window).width() > 767) {

				$this.appear(function() {

					var delay = ($this.attr("data-animation-delay") ? $this.attr("data-animation-delay") : 1);

					if(delay > 1) $this.css("animation-delay", delay + "ms");
					$this.removeClass('transparent').addClass("visible " + $this.attr("data-animation"));   

				}, {accX: 0, accY: -100});

			}
			else {

				$this.removeClass("transparent").addClass("visible");

			}

		});

	},

		/**
		**	Map
		**/

		map: function(){

			ymaps.ready(function () {


			// var myMap = new ymaps.Map('map', {
			// 	center: [54.441240, 36.516364],
			// 	zoom: 16,
			// 	controls: []
			// });	

			var myMap = new ymaps.Map('map', {
				center: [54.441240, 36.516364],
				zoom: 16,
				controls: []
			}),	

	
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'Собственный значок метки',
				balloonContent: 'Это красивая метка'
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: '../images/marker.png',
				// Размеры метки.
				iconImageSize: [30, 42],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-5, -38]
			});
	
		myMap.geoObjects
			.add(myPlacemark);
	
		});

		},

		/**
		**	Tabs
		**/

		tabs: function(){

			$('#js-tabs').each(function(){

				var $this = $(this),
					active = $this.children('.tabs_list').find("li.active").length ? $this.children('.tabs_list').find("li.active") : $this.children('.tabs_list').find('li:first-child').addClass('active'),
					index = active.index();

				$this.find('#tabs_box').children("div").eq(index).show();
				
			});

			$('.tabs_list').on('click', 'li', function(){

				var ind = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				$(this).closest('#js-tabs')
					   .find('.tabs_box')
					   .children()
					   .eq(ind)
					   .addClass('active')
					   .show()
					   .siblings()
					   .removeClass('active')
					   .hide();

			});

		},


		/**
		**	Back to top
		**/

		backToTopBtn: function(config){

			config = $.extend({
				offset: 350,
				transitionIn: 'bounceInRight',
				transitionOut: 'bounceOutRight'
			}, config);

			var btn = $('<button></button>', {
				class: 'back_to_top animated hide',
				html: '<i class="fa fa-angle-up"></i>'
			}).appendTo($('body')),

			$wd = $(window),
			$html = $('html'),
			$body = $('body');

			$wd.on('scroll.back_to_top', function(){

				if($wd.scrollTop() > config.offset){

					btn.removeClass('hide '+config.transitionOut).addClass(config.transitionIn);

				}
				else{

					btn.removeClass(config.transitionIn).addClass(config.transitionOut);

				}

			});

			btn.on('click', function(){

				$html.add($body).animate({

					scrollTop: 0

				});

			});

		},
		   
		/**
		**	Header Height
		**/

		headerHeight: function(){

			console.log($('.first_screen_section').height())
			$('.header1').css("padding-bottom", $(".first_screen_section").height() - $('.header1').outerHeight());

		},


		/**
		**	Main Menu
		**/

		mainMenu: function(){

			$('.menu_btn').on('click', function(){				
				$('.header_right').addClass('open');
			});

			$('.close_btn').on('click', function(){				
				$('.header_right').removeClass('open');
			});

		},


		/**
		**	Preloader
		**/

		preloader: function(){

			var self = this;

			self.preloader = $('#page-preloader');
	        self.spinner   = self.preloader.find('.preloader');

		    self.spinner.fadeOut();
		    self.preloader.delay(350).fadeOut('slow');
		},

	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});

})(jQuery);