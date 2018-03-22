    
//Services
    $('.services-slider').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: $('.services-right'),
        prevArrow: $('.services-left'),
        respondTo: 'slider'
      });
//Brands
      $('.brands-content').slick({        
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: $('.brands-header_right'),
        prevArrow: $('.brands-header_left'),
        respondTo: 'slider'
      });

//Features
      $('.slider').slick({        
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,        
        respondTo: 'slider',
        dots: true,
        arrows: false       
      });


//Search
$(".header-search").click( function() {
    var InPut = $(".searh-input"); 
    var Search = $(".shearch-header"); 
    var Cross = $(".shearch-cross");  
    InPut.addClass("displayed");
    Search.addClass("displayed");
    Cross.addClass("displayed");        
});
$(".shearch-cross").click( function(){
    var InPut = $(".searh-input"); 
    var Search = $(".shearch-header"); 
    var Cross = $(".shearch-cross"); 
    InPut.removeClass("displayed");
    Search.removeClass("displayed");
    Cross.removeClass("displayed"); 
});


//Services plus
$('.maintence').mouseover( function() {
    $('.maintence').addClass("services-back");
});
$('.maintence').mouseout( function() {
    $('.maintence').removeClass("services-back");
});

$('.schedule').mouseover( function() {
    $('.schedule').addClass("services-back");
});
$('.schedule').mouseout( function() {
    $('.schedule').removeClass("services-back");
});

$('.preventive').mouseover( function() {
    $('.preventive').addClass("services-back");
});
$('.preventive').mouseout( function() {
    $('.preventive').removeClass("services-back");
});

$('.tire').mouseover( function() {
    $('.tire').addClass("services-back");
});
$('.tire').mouseout( function() {
    $('.tire').removeClass("services-back");
});

$('.repair').mouseover( function() {
    $('.repair').addClass("services-back");
});
$('.repair').mouseout( function() {
    $('.repair').removeClass("services-back");
});

$('.wheel').mouseover( function() {
    $('.wheel').addClass("services-back");
});
$('.wheel').mouseout( function() {
    $('.wheel').removeClass("services-back");
});

//Products
$('.pc1').mouseover( function() {
    $('.pd1').addClass("display");
});
$('.pc2').mouseover( function() {
    $('.pd2').addClass("display");
});
$('.pc3').mouseover( function() {
    $('.pd3').addClass("display");
});
$('.pc4').mouseover( function() {
    $('.pd4').addClass("display");
});
$('.prod-cart').mouseout( function() {
    $('.products-add').removeClass("display");
});

//Accordion
$('.panel-1').click( function(){
    $('.panel-1_plus').addClass('pp-active');
    $('.panel-1_title').addClass('pt-active');
    $('.plus-1').addClass('icon-minus');
    $('.panel-1_text').slideDown(800);
    
    $('.panel-2_plus').removeClass('pp-active');
    $('.panel-2_title').removeClass('pt-active');
    $('.plus-2').removeClass('icon-minus');
    $('.panel-2_text').slideUp(800);

    $('.panel-3_plus').removeClass('pp-active');
    $('.panel-3_title').removeClass('pt-active');
    $('.plus-3').removeClass('icon-minus');
    $('.panel-3_text').slideUp(800);

    $('.panel-4_plus').removeClass('pp-active');
    $('.panel-4_title').removeClass('pt-active');
    $('.plus-4').removeClass('icon-minus');
    $('.panel-4_text').slideUp(800);
});

$('.panel-2').click( function(){
    $('.panel-2_plus').addClass('pp-active');
    $('.panel-2_title').addClass('pt-active');
    $('.plus-2').addClass('icon-minus');
    $('.panel-2_text').slideDown(800);
    
    $('.panel-1_plus').removeClass('pp-active');
    $('.panel-1_title').removeClass('pt-active');
    $('.plus-1').removeClass('icon-minus');
    $('.panel-1_text').slideUp(800);

    $('.panel-3_plus').removeClass('pp-active');
    $('.panel-3_title').removeClass('pt-active');
    $('.plus-3').removeClass('icon-minus');
    $('.panel-3_text').slideUp(800);

    $('.panel-4_plus').removeClass('pp-active');
    $('.panel-4_title').removeClass('pt-active');
    $('.plus-4').removeClass('icon-minus');
    $('.panel-4_text').slideUp(800);
});

$('.panel-3').click( function(){
    $('.panel-3_plus').addClass('pp-active');
    $('.panel-3_title').addClass('pt-active');
    $('.plus-3').addClass('icon-minus');
    $('.panel-3_text').slideDown(800);
    
    $('.panel-2_plus').removeClass('pp-active');
    $('.panel-2_title').removeClass('pt-active');
    $('.plus-2').removeClass('icon-minus');
    $('.panel-2_text').slideUp(800);;

    $('.panel-1_plus').removeClass('pp-active');
    $('.panel-1_title').removeClass('pt-active');
    $('.plus-1').removeClass('icon-minus');
    $('.panel-1_text').slideUp(800);

    $('.panel-4_plus').removeClass('pp-active');
    $('.panel-4_title').removeClass('pt-active');
    $('.plus-4').removeClass('icon-minus');
    $('.panel-4_text').slideUp(800);
});

$('.panel-4').click( function(){
    $('.panel-4_plus').addClass('pp-active');
    $('.panel-4_title').addClass('pt-active');
    $('.plus-4').addClass('icon-minus');
    $('.panel-4_text').slideDown(800);
    
    $('.panel-2_plus').removeClass('pp-active');
    $('.panel-2_title').removeClass('pt-active');
    $('.plus-2').removeClass('icon-minus');
    $('.panel-2_text').slideUp(800);

    $('.panel-3_plus').removeClass('pp-active');
    $('.panel-3_title').removeClass('pt-active');
    $('.plus-3').removeClass('icon-minus');
    $('.panel-3_text').slideUp(800);

    $('.panel-1_plus').removeClass('pp-active');
    $('.panel-1_title').removeClass('pt-active');
    $('.plus-1').removeClass('icon-minus');
    $('.panel-1_text').slideUp(800);
});

//Toggles
$('.togl-1_plus').click( function() {
    $('.togl-1_plus').toggleClass('pp-active');
    $('.togl-1_title').toggleClass('pt-active');
    $('.tplus-1').toggleClass('icon-minus');
    $('.togl-1_text').slideToggle(800);
});

$('.togl-2_plus').click( function() {
    $('.togl-2_plus').toggleClass('pp-active');
    $('.togl-2_title').toggleClass('pt-active');
    $('.tplus-2').toggleClass('icon-minus');
    $('.togl-2_text').slideToggle(800);
});

$('.togl-3_plus').click( function() {
    $('.togl-3_plus').toggleClass('pp-active');
    $('.togl-3_title').toggleClass('pt-active');
    $('.tplus-3').toggleClass('icon-minus');
    $('.togl-3_text').slideToggle(800);
});

$('.togl-4_plus').click( function() {
    $('.togl-4_plus').toggleClass('pp-active');
    $('.togl-4_title').toggleClass('pt-active');
    $('.tplus-4').toggleClass('icon-minus');
    $('.togl-4_text').slideToggle(800);
});


//Tabs
$('.tab-btn-1').click( function() {
    $('.tab-btn-1').addClass('tab-btn-active');
    $('.tab-btn-2').removeClass('tab-btn-active');
    $('.tab-btn-3').removeClass('tab-btn-active');
    $('.tab-content').fadeIn(800);
    $('.tab-content-2').css('display', 'none');
})

$('.tab-btn-2').click( function() {
    $('.tab-btn-2').addClass('tab-btn-active');
    $('.tab-btn-1').removeClass('tab-btn-active');
    $('.tab-btn-3').removeClass('tab-btn-active');
    $('.tab-content-2').fadeIn(800);
    $('.tab-content').css('display', 'none');
   
})

$('.tab-btn-3').click( function() {
    $('.tab-btn-3').addClass('tab-btn-active');
    $('.tab-btn-2').removeClass('tab-btn-active');
    $('.tab-btn-1').removeClass('tab-btn-active');
    $('.tab-content').fadeIn(800);
    $('.tab-content-2').css('display', 'none');
})


//Tour
$('.tour-btn-1').click( function() {
    $('.tour-btn-1').addClass('tour-btn-active');
    $('.tour-btn-2').removeClass('tour-btn-active');
    $('.tour-btn-3').removeClass('tour-btn-active');
    $('.tour-btn-4').removeClass('tour-btn-active');    
    $('.tour-content-wrapper').slideDown(800);
    $('.tour-content').slideDown(800);
    $('.tour-content-2').css('display', 'none');
})

$('.tour-btn-2').click( function() {
    $('.tour-btn-2').addClass('tour-btn-active');
    $('.tour-btn-1').removeClass('tour-btn-active');
    $('.tour-btn-3').removeClass('tour-btn-active');
    $('.tour-btn-4').removeClass('tour-btn-active');    
    $('.tour-content-wrapper').slideDown(800);
    $('.tour-content-2').slideDown(800);
    $('.tour-content').css('display', 'none');
})

$('.tour-btn-3').click( function() {
    $('.tour-btn-3').addClass('tour-btn-active');
    $('.tour-btn-1').removeClass('tour-btn-active');
    $('.tour-btn-2').removeClass('tour-btn-active');
    $('.tour-btn-4').removeClass('tour-btn-active');    
    $('.tour-content-wrapper').slideDown(800);
    $('.tour-content').slideDown(800);
    $('.tour-content-2').css('display', 'none');
})

$('.tour-btn-4').click( function() {
    $('.tour-btn-4').addClass('tour-btn-active');
    $('.tour-btn-1').removeClass('tour-btn-active');
    $('.tour-btn-2').removeClass('tour-btn-active');
    $('.tour-btn-3').removeClass('tour-btn-active');    
    $('.tour-content-wrapper').slideDown(800);
    $('.tour-content-2').slideDown(800);
    $('.tour-content').css('display', 'none');
})

//About slider
$('.projects-slider').slick({    
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $('.brands-header_right'),
    prevArrow: $('.brands-header_left'),
    respondTo: 'slider'
  });