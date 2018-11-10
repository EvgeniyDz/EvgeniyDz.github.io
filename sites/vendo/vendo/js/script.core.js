;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;
			
			self.backToTopBtn({
			    transitionIn: 'bounceInRight',
			    transitionOut: 'bounceOutRight'
			});
			// self.tabs();
			// self.includeScipts.init();			
			self.youtube();
			self.navResp();
			self.fileDelete();
		},

		windowLoad: function(){

			var self = this;
			
			// self.videoPlay();
			// self.videoPlay2();
			self.preloader();

		},

		/**
		**  File delete
		**/

		fileDelete: function(){

			var item = $('.file_input');	


			item.change(function () {
				$('.delete_btn').show();
			});

			$('.delete_btn').click(function(){
				event.preventDefault();				
				// item.val('');
				$('.jq-file__name').text('Файл не выбран');
				$(this).hide();
			})

		},

		/**
		**  Nav Resp
		**/

		navResp : function(){

            var self = this;

            self.w = $(window);


            $(".btn_nav").on('click', function () {

                $(this).toggleClass("active").next(".mobile_menu").slideToggle("medium");
          
            });

           if(self.w.width() < 992){

                $(document).on('click', function(event){

                   if(!$(event.target).closest('.header_top').length){

                    $('.btn_nav').removeClass('active').next(".mobile_menu").slideUp("medium");
                   
                   }

              });

            }

		},

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
		**	videoPlay
		**/

		videoPlay2: function(){

			var self = this;

			$('.video_btn').on('click',function(){

				var $this = $(this),
					videoBox = $this.closest('.video_box'),
					video = $("#my-video")[0];

				if(!videoBox.hasClass('pause')){

					videoBox.addClass('pause');
					$this.find('i').addClass('fa-pause').removeClass('fa-play');
					video.play();

				}
				else{

					videoBox.removeClass('pause');
					$this.find('i').addClass('fa-play').removeClass('fa-pause');
					video.pause();

				}

			});

		},

	   	/**
		**	Footer Bottom
		**/
		
		footerBottom: {

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