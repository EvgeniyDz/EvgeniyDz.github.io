;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.navResp();
			// self.openProgram();
			self.youtube();
			self.scrollto();
			self.headerPos();
			self.accordeon();
			self.preloader();
		},

		windowLoad: function(){

			var self = this;

			
			self.footerHeight.init();
			self.backToTopBtn();
			self.animatedContent();
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
	    **  header position
	    **/

		headerPos: function(){

	      var self = this;

	      	$(window).scroll(function() {
		        if($(this).scrollTop() != 0) {
					$('.fixed').addClass("fixed_active");
				} else {
					$('.fixed').removeClass("fixed_active");
				}
			});
	    },

		/**
		**	Preloader
		**/

		preloader: function(){

			var self = this;

			setTimeout(function(){

			    self.preloader = $('#page-preloader');
		        self.spinner   = self.preloader.find('.preloader');

			    self.spinner.fadeOut();
			    self.preloader.delay(350).fadeOut('slow');

		    },1000);

			
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

		/**
        **  Back to top
        **/

        backToTopBtn: function(config){

            config = $.extend({
                offset: 350,
                transitionIn: 'bounceInRight',
                transitionOut: 'bounceOutRight'
            }, config);

            var btn = $('.back_to_top'),
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
		**	Open program
		**/

		// openProgram: function(){
		// 	$(".btn_open_top").click(function(){
		// 		$(this).toggleClass("active").parents(".program_item").find(".open_box").slideToggle("medium");
		// 	});
		// },



		/**
		**	Youtube
		**/

		youtube: function(){
			$(".youtube").each(function() {
                // Based on the YouTube ID, we can easily find the thumbnail image
                $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
  
                // Overlay the Play icon to make it look like a video player
                $(this).append($('<div/>', {'class': 'play'}));
  
                $(document).delegate('#'+this.id, 'click', function() {
                    // Create an iFrame with autoplay set to true
                    var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
                    if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
  
                    // The height and width of the iFrame should be the same as parent
                    var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })
  
                    // Replace the YouTube thumbnail with YouTube HTML5 Player
                    $(this).replaceWith(iframe);
                });
            });
		},

		/**
	    **  Scroll To
	    **/

		scrollto: function(){

	      var self = this;
	      var wh_header = $("#header").height();

	      	$("a.scrollto").click(function() {
	          var elementClick = $(this).attr("href")
	          var destination = $(elementClick).offset().top - wh_header;
	          jQuery("html:not(:animated),body:not(:animated)").animate({
	            scrollTop: destination
	          }, 800);
	          return false;
	        });

	    },

	    /**
		**	Accordeon
		**/

		accordeon: function(){
			$(".acc_open").on("click", function(){
				if($(this).hasClass('active')){
				  $(this).removeClass("active");
				  $(this).siblings('.accordion-content').slideUp(200);				  
				}else{				  
				  $(".acc_open").removeClass("active");
				  $(this).addClass("active");
				  $('.accordion-content').slideUp(200);
				  $(this).siblings('.accordion-content').slideDown(200);
				}
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