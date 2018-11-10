;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;
			
			// self.backToTopBtn({
			//     transitionIn: 'bounceInRight',
			//     transitionOut: 'bounceOutRight'
			// });
			self.openMenu();
			self.showFilter();
			self.animatedContent();
		},

		windowLoad: function(){

			var self = this;			

			self.preloader();
			
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
		**	Show filter
		**/

		showFilter: function(){

			$('.show_filter').click(function(){
				$('.eq_filter').addClass('eq_show_filter');
				$('body').addClass('no_sroll');
			});

			$('.close_filter').click(function(){
				$('.eq_filter').removeClass('eq_show_filter');
				$('body').removeClass('no_sroll');
			});

		},

		/**
		**	Open menu
		**/

		openMenu: function(){

			$('.menu_btn').click(function(){
				$(this).toggleClass('active');
				$('#header').toggleClass('menu_open');
				$('.header_nav').stop().slideToggle();
				$('body').toggleClass('no_sroll');
			});

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