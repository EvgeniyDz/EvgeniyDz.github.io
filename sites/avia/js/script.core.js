;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.navResp();
			self.accordion();			

		},

		windowLoad: function(){

			var self = this;

			self.preloader();
			self.footerHeight.init();

		},

		/**
		**  Nav Resp
		**/

		navResp : function(){

            var self = this;

            self.w = $(window);


            $(".btn_nav").on('click', function () {

                $(this).toggleClass("active").next(".nav_list_wrap").slideToggle("medium");
          
            });

           if(self.w.width() < 992){

                $(document).on('click', function(event){

                   if(!$(event.target).closest('.resp_nav_wr').length){

                    $('.btn_nav').removeClass('active').next(".nav_list_wrap").slideUp("medium");
                   
                   }

              });

            }

		},	


		/**
        **  Accordion
        **/	 
	   accordion: function(){		   		
		
		if($(window).width() < 768){

		$(".open_table").on("click", function(){
		  if($(this).hasClass('active')){
			$(this).removeClass("active");
			$(this).siblings('.open_table ~ td').slideUp(500);			
		  }else{
			$(".open_table").removeClass("active");
			$(this).addClass("active");
			$('.open_table ~ td').slideUp(500);
			$(this).siblings('.open_table ~ td').slideDown(500).css('display', 'block');
		  }
		});
		} else{
			$(".catalog_table").css('display', 'table');
		}  
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