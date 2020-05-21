;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.navResp();
			self.tabs();
			self.popup();
			self.submenu();

		},

		windowLoad: function(){

			var self = this;

			self.preloader();
			self.animatedContent();
			self.footerHeight.init();

		},
		/**
		**  Submenu
		**/

		submenu : function(){
			$('.navigation a').on('click', function(){
				if($(window).width() < 991 && $(this).parent().hasClass("has_submenu") && !$(this).parent().hasClass("submenu_opened")) {
					event.preventDefault();
					$(this).next().slideDown();
					$(this).parent().addClass('submenu_opened');
					console.log('ok')
				}
			});

			$(document).click(function(event){
				if ($(event.target).closest(".navigation").length) return;
				$('.navigation a').next().slideUp();
				$('.navigation a').parent().removeClass('submenu_opened');			
			});
		},

		/**
		**  Popup
		**/

		popup : function(){

			$('.popup-open').on('click', function(){
				$('body').addClass('modal');
				$('.popup').removeClass('active');
				var el=$(this).attr('data-el');
				$('.popup-' + el).addClass('active');
				return false;
			});

			$('.popup_close, .overlay').on('click', function(){
				$('body').removeClass('modal');
				$('.popup').removeClass('active');
			});

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
		**	Tabs
		**/

		tabs: function(){

			$('.tabs_wrapp').each(function(){

				var $this = $(this),
					active = $this.children('.tabs_list').find("li.active").length ? $this.children('.tabs_list').find("li.active") : $this.children('.tabs_list').find('li:first-child').addClass('active'),
					index = active.index();

				$this.find('.tabs_content').children("div").eq(index).show().addClass('active');
				
			});

			$('.tabs_list').on('click', 'li', function(){

				var ind = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				$(this).closest('.tabs_wrapp')
					   .find('.tabs_content')
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
		**  Nav Resp
		**/

		navResp : function(){

            var self = this;

            self.w = $(window);


            $(".btn_nav").on('click', function () {

				$(this).toggleClass("active");
				$(".nav_wrap").toggleClass("show_menu");
				$('body').toggleClass("no_scroll");
          
			});
			

        //    if(self.w.width() < 768){

        //         $(document).on('click', function(event){

        //            if(!$(event.target).closest('.resp_nav_wr').length){

        //             $('.btn_nav').removeClass('active').next(".header_resp_nav").slideUp("medium");
                   
        //            }

        //       });

        //     }

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

		/**
		**	Footer Height
		**/

		footerHeight: {

			init: function(){

				var self = this;

				self.footer = $('#footer');
				self.page = $('.page_wrap');

				self.calculation();

				$(window).on('resize', function(){

					self.calculation();

				});

			},

			calculation : function(){

				var self = this;
				
			    var footerHeight = self.footer.outerHeight();

			    self.page.css({
			    	'padding-bottom': footerHeight 
			    });

			}

		},

	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});


})(jQuery);