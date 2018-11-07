;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;
			self.tel.init();
			self.scroll();
			self.map();
			self.label();
			self.showMenu();
			self.navResp();
			self.formScript.init();
		},

		windowLoad: function(){

			var self = this;
			
			self.calculateBenefits.init();
			
		},


		formScript: {

			init: function(){

				var self = this;

				self.event();
			},

			event: function(){

				var self = this;


				$(".cf_name").bind('change keyup input click', function() {

					var val = $(this).val();
					
					if (val.match(/[^а-яА-Я]/g)) {
						val = val.replace(/[^а-яА-Я]/g, '');
						$(this).val(val);
					}
					
				});

				$(".cf_email").bind('change keyup input click', function() {

					var val = $(this).val();
					
					if (val.match(/[^a-zA-Z0-9$@&?\.]/g)) {
						val = val.replace(/[^a-zA-Z0-9$@&?\.]/g, '');
						$(this).val(val);
					}
					
				});
			}

		},

		calculateBenefits:{

			init:  function(){

				var self = this;

				self.w = $(window);
				self.withoutCard = $('#withoutCardObi');
				self.withCard = $('#withCardObi');
				self.yourBenefit = $('#yourBenefit');
				self.calArr = {
					"00":{
						withoutCard: "0",
						withCard: "600",
						yourBenefit: "600",
					},
					"01":{
						withoutCard: "0",
						withCard: "1 500",
						yourBenefit: "1 500",
					},
					"02":{
						withoutCard: "0",
						withCard: "5 000",
						yourBenefit: "5 000",
					},
					"03":{
						withoutCard: "0",
						withCard: "14 000",
						yourBenefit: "14 000",
					},
					"04":{
						withoutCard: "0",
						withCard: "20 000",
						yourBenefit: "20 000",
					},




					"10":{
						withoutCard: "800",
						withCard: "1000",
						yourBenefit: "200",
					},
					"11":{
						withoutCard: "2 000",
						withCard: "2 500",
						yourBenefit: "500",
					},
					"12":{
						withoutCard: "4 000",
						withCard: "5 000",
						yourBenefit: "1 000",
					},
					"13":{
						withoutCard: "8 000",
						withCard: "14 000",
						yourBenefit: "6 000",
					},
					"14":{
						withoutCard: "8 000",
						withCard: "20 000",
						yourBenefit: "12 000",
					},




					"20":{
						withoutCard: "1 200",
						withCard: "1 400",
						yourBenefit: "200",
					},
					"21":{
						withoutCard: "3 000",
						withCard: "3 500",
						yourBenefit: "500",
					},
					"22":{
						withoutCard: "6 000",
						withCard: "7 000",
						yourBenefit: "1 000",
					},
					"23":{
						withoutCard: "12 000",
						withCard: "14 000",
						yourBenefit: "2 000",
					},
					"24":{
						withoutCard: "12 000",
						withCard: "20 000",
						yourBenefit: "8 000",
					},




					"30":{
						withoutCard: "1 400",
						withCard: "2 000",
						yourBenefit: "600",
					},
					"31":{
						withoutCard: "3 500",
						withCard: "5 000",
						yourBenefit: "1 500",
					},
					"32":{
						withoutCard: "7 000",
						withCard: "10 000",
						yourBenefit: "3 000",
					},
					"33":{
						withoutCard: "14 000",
						withCard: "20 000",
						yourBenefit: "6 000",
					},
					"34":{
						withoutCard: "14 000",
						withCard: "20 000",
						yourBenefit: "6 000",
					}

				};
				self.calculate();
				self.event();
			
			},

			event: function(){

				var self = this;

				$('.calc_select').on('change', function(){
					self.calculate();
				});

				$('[name="availability_card"]').on('change', function(){

					if($('#availability_card1').prop('checked')){
						$('.calc_new_disc_left').removeClass('disable');
						$('.title_sale').removeClass('disable');
						$('#percent').prop('disabled', false).trigger('refresh');
					}
					else{
						$('.calc_new_disc_left').addClass('disable');
						$('.title_sale').addClass('disable');
						$('#percent').prop('disabled', 'disabled').trigger('refresh');
					}

				});
				
			},

			calculate: function(){

				var self = this,
					$percent = $('#percent').val(),
					$budget = $('#budget').val(),
					nameObj = ''+ $percent + $budget;

				self.withoutCard.text(self.calArr[nameObj].withoutCard)
				self.withCard.text(self.calArr[nameObj].withCard)
				self.yourBenefit.text(self.calArr[nameObj].yourBenefit)

			}


		},

		tel: {

			init: function(){

				var self = this;
					self.telephone = $('.js-tel-hide');

				self.changeNumber();

			},

			changeNumber: function(){
				
				var self = this;

				self.telephone.each(function(index, el) {
            		
	            	var telNumber = $(this).text(),
	            	telDel = telNumber.substring( 0, telNumber.length - 2 ),
	            	appendSpan = "<span class='js-wrap-tel' data-number='"+ telNumber +"'></span>",
					appendText = "<span class='js-show_tel'>Показать номер</span><span class='two_dots'></span>";



	            	$(this).text(telDel);
	            	$(this).wrap(appendSpan).closest('.js-wrap-tel').append(appendText);

					
	            	$('.js-show_tel').on('click', function(event) {
						event.preventDefault();
						// self.dataNumb = $(this).closest('.js-wrap-tel').attr('data-number');
						
						// $(this).closest('.js-wrap-tel').find('.js-tel-hide').text(self.dataNumb);
						$(this).closest('.js-wrap-tel').find('.js-tel-hide').text(telNumber);
						$(this).closest('.js-wrap-tel').addClass('active').find('.js-show_tel, .two_dots').remove();

					});
	            });

			}

        },


		/**
		**	Map
		**/

		map: function(){

    	    var myMap,
    	    	clusterer,
    	    	dataJson,
    	    	markers = [];

			ymaps.ready(function () {


				// 	map.geoObjects.add(myPlacemark); 
				// 	map.hint.open([55.8, 37.8], '<div class="map_hint"><p>Улица Родины, 33Ак4</p></div>');


				self.w = $(window);
				self.wrapper = $('.map');
				


				var myMap = new ymaps.Map('map', {
					center: [59.868930,30.350459],
					zoom: 8,
					controls: []
				});	
			
    	        // Поведение карты
    		    myMap.behaviors
		        	// .disable(['scrollZoom']) //отключает поведение
		        	.enable(['drag', 'dblClickZoom', 'multiTouch']); //включает поведение


    		    // Подгоним размер карты под новый размер контейнера
    			// (например, если изменилась верстка страницы или карта была инициализирована
    			// в скрытом состоянии)
    			myMap.container.fitToViewport();
		    	
		    	var objectManager = new ymaps.ObjectManager({
		            // Чтобы метки начали кластеризоваться, выставляем опцию.
		            //clusterize: true,
		            // ObjectManager принимает те же опции, что и кластеризатор.
		            gridSize: 32,
		            clusterDisableClickZoom: true
		        });
				
			    // Чтобы задать опции одиночным объектам и кластерам,
			    // обратимся к дочерним коллекциям ObjectManager.
			    objectManager.objects.options.set({'iconLayout': 'default#image','iconImageHref': '/images/marker.png','iconImageSize': [48, 48]});
			    objectManager.clusters.options.set('preset', 'islands#orangeClusterIcons');
			    myMap.geoObjects.add(objectManager);

			    $.ajax({
			        url: "data/1.json"
			    }).done(function(data) {

			        objectManager.add(data);
			        dataJson = data;
			        markers = data.features;

			    });


			});
		},

		/**
		**	Scroll
		**/

		scroll: function(){
			
			$(".scroll_box").click(function () {
				var elementClick = $(this).attr("href");
				var destination = $(elementClick).offset().top;
	
				$('html').animate({ scrollTop: destination }, 1100);
				
				
			});

		},

		/**
		**	Show menu
		**/

		showMenu: function(){
			
			$('.open_menu').on('click', function(){

				if($(this).hasClass('active')){
					$(this).removeClass('active');
					$('.header_container_2').removeClass('menu_show');
				} else{
					$(this).addClass('active');
					$('.header_container_2').addClass('menu_show');
				}

			});
		},


		/**
		**  Nav Resp
		**/

		navResp : function(){

            var self = this;

            self.w = $(window);


            $(".btn_nav").on('click', function () {

                $(this).toggleClass("active").next(".header_resp").slideToggle("medium");
          
            });

           if(self.w.width() < 768){

                $(document).on('click', function(event){

                   if(!$(event.target).closest('.resp_nav_wr').length){

                    $('.btn_nav').removeClass('active').next(".header_resp").slideUp("medium");
                   
                   }

              });

            }

        },
	

		/**
		**	Show Label
		**/

		label: function(){
			
			$('.form_input').focusin(function(){
				$(this).siblings('.form_label').show();				
			});
			$('.form_input').focusout(function(){
				$(this).siblings('.form_label').hide();				
			});

		},
			




	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});

})(jQuery);