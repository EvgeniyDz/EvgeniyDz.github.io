;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;
			
			self.backToTopBtn({
			    transitionIn: 'bounceInRight',
			    transitionOut: 'bounceOutRight'
			});
			self.tabs();	
			self.navResp();		
		},

		windowLoad: function(){

			var self = this;			
	
			self.preloader();
			
		},

		/**
		**  Nav Resp
		**/

		navResp : function(){

            var self = this;

            self.w = $(window);


            $(".btn_nav").on('click', function () {

                $(this).toggleClass("active").next(".menu").slideToggle("medium");
          
            });

           if(self.w.width() < 992){

                $(document).on('click', function(event){

                   if(!$(event.target).closest('.navigation_menu').length){

                    $('.btn_nav').removeClass('active').next(".menu").slideUp("medium");
                   
                   }

              });

			}
			
			$(window).on('resize', function(){

				if(self.w.width() > 992){
					$('.menu').show();
				}
				else{
					$('.menu').hide();
				}

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
					   .find('#tabs_box')
					   .children()
					   .eq(ind)
					   .addClass('active')
					   .show()
					   .siblings()
					   .removeClass('active')
					   .hide();

				jQuery.fn.matchHeight._update();

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
		**	Responsive menu
		**/

		responsiveMenu: {

			init: function(){

				var self = this;

				self.w 		    = $(window);
				self.doc 		= $(document);
				self.nav        = $('#primary_nav');
				self.closeMenu  = $('.close_menu');

				self.appendBlock();
				self.toggleMenu();
				self.showMenu();
				// self.targetClickBody();

			},

			appendBlock : function(){

				var self = this;

				var window = self.w;

				if(window.width() <= 767){
				    $('.menu_item').each(function(){
					    if($(this).find('.dropdown_menu').length){
							$(this).prepend('<span class="dropdown_arrow"><i class="fa fa-angle-down"></i></span>');
					    }
				    });
			    }

			},

			toggleMenu : function(){

				var self = this;

				self.dropdownLink = $('.dropdown_arrow');
				
				self.dropdownLink.on('click', function(){
					$(this).closest('.menu_item').toggleClass('toggle').find('.dropdown_menu').slideToggle();
				});

			},

			showMenu: function(){

				var self = this;

				self.closeMenu.on('click', function(){
					self.nav.toggleClass('show');
				});

				
			},

			targetClickBody: function(){

				var self = this;

				self.doc.on("click ontouchstart", function(event) {

					if ($(event.target).closest("nav,.resp_btn").length) return;

					$("body").removeClass("show_menu");

					if(windowW <= 991){
						$(".menu_item").removeClass("active").find(".dropdown-menu").css("display","none");
					}

					event.stopPropagation();

			    });

			},

			// $('.menu_link').on('click ontouchstart',function(event){
			// 	if($("html").hasClass("md_no-touch"))return;

		 //        var windowWidth = $(window).width(),
		 //            $parent = $(this).parent('.menu_item');
		 //        if(windowWidth > 991){
		 //          // if($("html").hasClass("md_touch")){
		 //            if((!$parent.hasClass('active')) && $parent.find('.dropdown-menu').length){

		 //              event.preventDefault();

		 //              $parent.toggleClass('active')
		 //               .siblings()
		 //               .find('.menu_link')
		 //               .removeClass('active');
		 //            }
		 //          // }  
		 //        }
		        
		 //        else{
		            
		 //          if((!$parent.hasClass('active')) && $parent.find('.dropdown-menu').length){

		 //            event.preventDefault();

		 //            $parent.toggleClass('active')
		 //             .siblings()
		 //             .removeClass('active');
		 //            $parent.find(".dropdown-menu")
		 //             .slideToggle()
		 //             .parents('.menu_item')
		 //             .siblings()
		 //             .find(".dropdown-menu")
		 //             .slideUp();
		 //          }
		 //        }

		 //    });

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