;(function($){

	"use strict";



	$(document).ready(function(){

        /* ------------------------------------------------
                mask
        ------------------------------------------------ */

        if($('.phone').length){
            $(".phone").mask("+7 (999) 999-99-99");
        }

        /* ------------------------------------------------
                End of mask
        ------------------------------------------------ */

		/* ------------------------------------------------
				Name pudin
		------------------------------------------------ */

		if($('.prlx').length){ 

			$.parallaxify();
		}

        /* ------------------------------------------------
				End of Name pudin
		------------------------------------------------ */
		
		/* ------------------------------------------------
                validateform
        ------------------------------------------------ */

        
        if($('.validateform1').length){ 
            
            $(".validateform1").validate({
                   rules:{

                        name:{ 
                            required: true,
                        },
                        email:{  
                            required: true,
                            email: true
                        },
                        text:{  
                            required: true,
                        }, 
                   },

                   messages:{  

                        name:{  
                            required: "Введите имя",
                        },              
                        email:{  
                            required: "Укажите e-mail",
                            email: "Неправильно введен адрес",
                        },
                        text:{  
                            required: "Введите ваш вопрос",
                        },             
                   },
                
            });
        }

        if($('.validateform2').length){ 
            
            $(".validateform2").validate({
                   rules:{

                        tel:{ 
                            required: true,
                        },

                   },

                   messages:{  

                        tel:{  
                            required: "Введите номер телефона",
                        },                          
                   },
                
            });
        }
        if($('.validateform3').length){ 
            
            $(".validateform3").validate({
                   rules:{

                        name:{ 
                            required: true,
                        },
                        email:{  
                            required: true,
                            email: true
                        },
                        text:{  
                            required: true,
                        }, 
                        tel:{ 
                            required: true,
                        },
                   },

                   messages:{  

                        name:{  
                            required: "Введите имя",
                        },              
                        email:{  
                            required: "Укажите e-mail",
                            email: "Неправильно введен адрес",
                        },
                        text:{  
                            required: "Введите ваш вопрос",
                        },   
                        tel:{  
                            required: "Введите номер телефона",
                        },          
                   },
                
            });
        }
        /* ------------------------------------------------
                End of validateform
        ------------------------------------------------ */

        /* ------------------------------------------------
                Tooltip
        ------------------------------------------------ */

        if($('.tooltip').length){ 
            $('.tooltip').tooltipster({
                side: 'bottom',            
                distance: 5,
                maxWidth: 300 ,
                //trigger: 'click',
                contentAsHTML: true ,
                arrow: false                   
            }); 
        }

        if($('.tooltip2').length){ 

            if( $(document).width() >= 768){

                $('.tooltip2').tooltipster({
                    side: 'top', 
                    animation: 'grow',        
                    distance: 5,
                    maxWidth: 260,
                    // trigger: 'click',
                    contentAsHTML: true ,
                    arrow: true
                }); 

            } else {

                $('.tooltip2').tooltipster({
                    side: 'top', 
                    animation: 'grow',        
                    distance: 5,
                    maxWidth: 260,
                    trigger: 'click',
                    contentAsHTML: true ,
                    arrow: true
                }); 

            }

        }

        /* ------------------------------------------------
                End of Tooltip
        ------------------------------------------------ */

       

        /* ------------------------------------------------
                Arcticmodal
        ------------------------------------------------ */

        if($('.modal_btn').length){ 

            $(".modal_btn").on("click",function(event){

                event.preventDefault();
    
                var id = $(this).attr("data-modal"),
                    src = $(this).attr("data-src");
    
                $('#'+id).arcticmodal({
                    
                    beforeOpen : function(){
    
                        $('#'+id).find("iframe").attr("src", src+"?wmode=transparent");
    
                    }
    
                });
    
            });  

        }

        $('.video_btn').click(function(event){
            console.log($(event.target).attr('data-video'));
            $('.youtube_box').html('<iframe width="100%" height="100%" src="'+$(event.target).attr('data-video')+'"></iframe>');
        });

        /* ------------------------------------------------
                End of Arcticmodal
        ------------------------------------------------ */

        
        /* ------------------------------------------------
                Timer
        ------------------------------------------------ */

        if($('.time_count').length){ 
            $('.time_count').timeTo({
                timeTo: new Date(new Date('Mon May 28 2018 09:00:00 GMT+0300 (Финляндия (лето))')),
                displayDays: 2,
                theme: "black",
                displayCaptions: true,
                fontSize: 39,
                captionSize: 13,
                lang: 'ru'
            });
        }

        /* ------------------------------------------------
                End of Timer
        ------------------------------------------------ */

	});

	$(window).load(function(){

		/* ------------------------------------------------
                Masonry
        ------------------------------------------------ */

        if($('.grid').length){ 
            $('.grid').isotope({
                // columnWidth: '.grid-sizer',
                itemSelector: '.grid_item',
                horizontalOrder: true, 
                percentPosition: true,
                layoutMode: 'packery', 
                // masonry: {
                //     columnWidth: '.grid-sizer'
                //   }           
            }); 
        }

        /* ------------------------------------------------
                End of Masonry
        ------------------------------------------------ */ 

	});

})(jQuery);