;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;
			
			self.backToTopBtn({
			    transitionIn: 'bounceInRight',
			    transitionOut: 'bounceOutRight'
			});
	
			self.accordeon();		
			self.tabs();
			self.map();

		},

		windowLoad: function(){

			var self = this;
			self.preloader();
			// if($('.gmap').length){

			// 	self.googleMaps();

			// }
			
		},

		/**
		**	Map
		**/

		map: function(){

			ymaps.ready(function () {


			// 	map.geoObjects.add(myPlacemark); 
			// 	map.hint.open([55.8, 37.8], '<div class="map_hint"><p>Улица Родины, 33Ак4</p></div>');


			self.w = $(window);
			self.wrapper = $('.map_small_wrap');

			
				if(w.width() < 768){
					var myMap = new ymaps.Map('map', {
						center: [55.761916, 49.198065],
						zoom: 16,
						controls: []
					});
				} else if (wrapper.width() < 768){
					var myMap = new ymaps.Map('map', {
						center: [55.761916, 49.198065],
						zoom: 16,
						controls: []
					});
				}				
				else{
					var myMap = new ymaps.Map('map', {
						center: [55.761211, 49.193259],
						zoom: 16,
						controls: []
					});
				} 

	
		
			// Поиск координат центра Нижнего Новгорода.
			ymaps.geocode('улица Родины, 33Ак4 Россия, Республика Татарстан, Казань', {
				/**
				 * Опции запроса
				 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode.xml
				 */
				// Сортировка результатов от центра окна карты.
				// boundedBy: myMap.getBounds(),
				// strictBounds: true,
				// Вместе с опцией boundedBy будет искать строго внутри области, указанной в boundedBy.
				// Если нужен только один результат, экономим трафик пользователей.
				results: 1
			}).then(function (res) {
					// Выбираем первый результат геокодирования.
					var firstGeoObject = res.geoObjects.get(0),
						// Координаты геообъекта.
						coords = firstGeoObject.geometry.getCoordinates(),
						// Область видимости геообъекта.
						bounds = firstGeoObject.properties.get('boundedBy');
		
					firstGeoObject.options.set('preset', 'islands#redDotIcon');
					// Получаем строку с адресом и выводим в иконке геообъекта.
					firstGeoObject.properties.set('iconCaption', [firstGeoObject.getThoroughfare(),  firstGeoObject.getPremiseNumber()]);
					
					// firstGeoObject.properties.set('iconCaption', firstGeoObject.getPremiseNumber());
		
					// Добавляем первый найденный геообъект на карту.
					myMap.geoObjects.add(firstGeoObject);	
					// Масштабируем карту на область видимости геообъекта.
					// myMap.setBounds(bounds, {
					// 	// Проверяем наличие тайлов на данном масштабе.
					// 	checkZoomRange: true
					// });
		
				});
			  });
		},

		/**
		**	Tabs
		**/

		tabs: function(){

			$('.js-tabs').each(function(){

				var $this = $(this),
					active = $this.find('.tabs_list').find("li.active").length ? $this.find('.tabs_list').find("li.active") : $this.find('.tabs_list').find('li:first-child').addClass('active'),
					index = active.index();

				$this.find('.tabs_content').children("div").eq(index).addClass('active').show();
				
			});

			$('.tabs_list').on('click', 'li', function(){

				var $this = $(this),
					ind = $this.index();

				$(this)
					.addClass('active')
					.siblings()
					.removeClass('active')
					.closest('.js-tabs')
					.find('.tabs_content')
					.children("div")
					.eq(ind)
					.addClass('active')
					.show()
					.siblings()
					.removeClass('active')
					.hide();

			});

		},


		/**
		**	Accorderon
		**/

		accordeon: function(){
			$('.js_ac_open').click(function(){
				$(this).siblings('.ac_content').stop().slideToggle();
				$(this).parent('li').toggleClass('active');
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