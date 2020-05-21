;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.navResp();
			self.fileInput();

		},

		windowLoad: function(){

			var self = this;

			self.preloader();
			self.footerHeight.init();

		},
		/**
		**  fileInput
		**/

        fileInput: function(){

            $('.files_btn').on('click', function(){

                var $this = $(this),
                    input = $this.parent().find('input[type="file"]');

                input.trigger('click');
            
            });

            $('input[type="file"]').on('change',function(){

                var $this = $(this),
                    nameFileBox = $this.parent().find('.name_file'),
                    nameFile = $this.val();

                if(nameFile != ''){

                    nameFileBox.text(nameFile).css('display', 'block');
                    $this.parent().addClass('selected');
                }
                else{

                    nameFileBox.text(nameFile).css('display', 'none');
                    $this.parent().removeClass('selected');
                        
                }
    
            });

            $('.check').on('click', function(){
				$('.files_btn').prop('disabled', function(i, v) { return !v; });
            });
        
        },

		/**
		**  Nav Resp
		**/

		navResp : function(){

            var self = this;

            self.w = $(window);


            $(".btn_nav").unbind('click').click(function () {

                $(this).toggleClass("active").next(".header_content_right").slideToggle("medium");
          
            });

           if(self.w.width() < 768){

                $(document).on('click', function(event){

                   if(!$(event.target).closest('.header_wrap').length){

                    $('.btn_nav').removeClass('active').next(".header_content_right").slideUp("medium");
                   
                   }

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