//LogIn

$(".login").click( function(){
    var popup = $(".login-menu");
    var LogIn = $(".login");
    LogIn.toggleClass("active");
    popup.toggleClass("displayed");
});

$(this).keydown(function(e){
    if (e.keyCode == 27) {
        $(".login-menu").removeClass("displayed");
        $(".login").removeClass("active");        
        $(".search-input").removeClass("displayed");         
        $(".search").removeClass("search-active"); 
        $("div.cart").css({'box-shadow':'none', 'order': '2'});
    }; 
});

//Search

$(".search").click( function() {
    var InPut = $(".search-input");
    var Search = $(".search");
    InPut.toggleClass("displayed");
    Search.toggleClass("search-active");

});

$(".search-input").keydown(function(e){
    var SearchValue = $(this).val();            
        if (e.keyCode == 13)
        $("div.cart").css({'box-shadow':'none', 'order': '2'});
        if (e.keyCode == 13) 
        $("div.cart:contains("+SearchValue+")").css({'box-shadow': '0px 0px 20px #000', 'order': '1'});                       
});

//Filter button
$( document ).ready(function() {
    $(".btn-1").addClass("btn-1-active");
    $(".btn-4").addClass("btn-4-active");
    $(".btn-5").addClass("btn-5-active");
});

$(".btn-1").click( function() {
    if ($(".btn-1").hasClass("btn-1-active")){
        $(".btn-1").removeClass("btn-1-active");
        $(".house-cart").css("display", "none");
        $(".big").css("display", "none");
    } else {
        $(".btn-1").addClass("btn-1-active");        
        $(".house-cart").css("display", "block");
        $(".big").css("display", "flex");
    }
});

$(".btn-4").click( function() {
    if ($(".btn-4").hasClass("btn-4-active")){
        $(".btn-4").removeClass("btn-4-active");
        $(".music-cart").css("display", "none");
        $(".music-cart-big").css("display", "none");
    } else {
        $(".btn-4").addClass("btn-4-active");        
        $(".music-cart").css("display", "block");
        $(".music-cart-big").css("display", "flex");        
    }
});

$(".btn-5").click( function() {
    if ($(".btn-5").hasClass("btn-5-active")){
        $(".btn-5").removeClass("btn-5-active");
        $(".bus-cart").css("display", "none");        
    } else {
        $(".btn-5").addClass("btn-5-active");        
        $(".bus-cart").css("display", "block");               
    }
});

//Filter order

$(".late").click( function() {
    if ($(".rec").hasClass("checked")){
        $(".rec").removeClass("checked");
        $(".late").addClass("checked");
        $(".cart").css("order", "2");  
        $(".first").css("order", "1");
        $(".music-cart-big").css("order", "1");
    } else if ($(".high").hasClass("checked")) {
        $(".high").removeClass("checked");
        $(".late").addClass("checked");
        $(".cart").css("order", "2");  
        $(".first").css("order", "1");
        $(".music-cart-big").css("order", "1");
    }   
});

$(".rec").click( function() {
    if ($(".late").hasClass("checked")){
        $(".late").removeClass("checked");
        $(".rec").addClass("checked");
        $(".cart").css("order", "2");        
    } else if ($(".high").hasClass("checked")) {
        $(".high").removeClass("checked");
        $(".rec").addClass("checked");
        $(".cart").css("order", "2");        
    }   
});

$(".high").click( function() {
    if ($(".late").hasClass("checked")){
        $(".late").removeClass("checked");
        $(".high").addClass("checked");
        $(".cart").css("order", "2");  
        $(".second").css("order", "1");
        $(".bus-cart").css("order", "1");       
    } else if ($(".rec").hasClass("checked")) {
        $(".rec").removeClass("checked");
        $(".high").addClass("checked");
        $(".cart").css("order", "2");  
        $(".second").css("order", "1");
        $(".bus-cart").css("order", "1");      
    }   
});

// Catalog

//house -cart
$('.cart:nth-child(1)').mouseover( function() {
    $('.cart:nth-child(1) .back-hover-house').css("display", "block");
});
$('.house-cart').mouseout( function() {
    $('.back-hover-house').css("display", "none");
});
$('.cart:nth-child(4)').mouseover( function() {
    $('.cart:nth-child(4) .back-hover-house').css("display", "block");
});
$('.cart:nth-child(7)').mouseover( function() {
    $('.cart:nth-child(7) .back-hover-house').css("display", "block");
});
$('.cart:nth-child(10)').mouseover( function() {
    $('.cart:nth-child(10) .back-hover-house').css("display", "block");
});
$('.cart:nth-child(12)').mouseover( function() {
    $('.cart:nth-child(12) .back-hover-house').css("display", "block");
});
$('.cart:nth-child(14)').mouseover( function() {
    $('.cart:nth-child(14) .back-hover-house').css("display", "block");
});

//bus-cart
$('.cart:nth-child(3)').mouseover( function() {
    $('.cart:nth-child(3) .back-hover-bus').css("display", "block");
});
$('.bus-cart').mouseout( function() {
    $('.back-hover-bus').css("display", "none");
});
$('.cart:nth-child(9)').mouseover( function() {
    $('.cart:nth-child(9) .back-hover-bus').css("display", "block");
});
$('.cart:nth-child(15)').mouseover( function() {
    $('.cart:nth-child(15) .back-hover-bus').css("display", "block");
});
$('.cart:nth-child(17)').mouseover( function() {
    $('.cart:nth-child(17) .back-hover-bus').css("display", "block");
});

//music-cart
$('.cart:nth-child(2)').mouseover( function() {
    $('.cart:nth-child(2) .back-hover-music').css("display", "block");
});
$('.music-cart').mouseout( function() {
    $('.back-hover-music').css("display", "none");
});
$('.cart:nth-child(8)').mouseover( function() {
    $('.cart:nth-child(8) .back-hover-music').css("display", "block");
});
$('.cart:nth-child(13)').mouseover( function() {
    $('.cart:nth-child(13) .back-hover-music').css("display", "block");
});
$('.cart:nth-child(15)').mouseover( function() {
    $('.cart:nth-child(15) .back-hover-music').css("display", "block");
});
$('.cart:nth-child(18)').mouseover( function() {
    $('.cart:nth-child(18) .back-hover-music').css("display", "block");
});

//load
$('.more').click(function(event){
    event.preventDefault();
    $('.new').removeClass('no-display');
    $('.more').addClass('no-display');
});


//Features

var FirstP = 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi gravida tellus in purus pharetra, vel  dignissim mauris viverra. Maecenas vitae risus  est. In hendrerit, massa at.';
var SecondP = 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi gravida tellus in purus pharetra, vel dignissim mauris viverra. Maecenas vitae risus est. In hendrerit, massa at.';
var FirstPNew = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, rem nesciunt? Repellat accusamus eveniet eius, tempore molestias magni asperiores architecto iure beatae natus recusandae officia error minima quis id ipsum.';
var SecondPNew = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, incidunt. Cupiditate ea nostrum hic, aut error, blanditiis ipsam consequatur quam amet magnam sint. Voluptatum  nostrum, sequi nobis explicabo reiciendis architecto.'

$( document ).ready(function() {
    $('.features-btn-1').addClass('features-btn-1-active');    
});

$('.features-btn-2').click(function(){
    $('.features-btn-2').addClass('features-btn-2-active');
    $('.features-btn-1').removeClass('features-btn-1-active'); 
    $('.features-btn-3').removeClass('features-btn-3-active'); 
    $('.features-btn-4').removeClass('features-btn-4-active'); 
    $('.features-btn-5').removeClass('features-btn-5-active'); 
    $('.1-p').text(FirstPNew).animate({opacity: "0"}, 500).animate({opacity: "1"}, 500);
    $('.2-p').text(SecondPNew).animate({opacity: "0"}, 500).animate({opacity: "1"}, 500);
});

$('.features-btn-1').click(function(){
    $('.features-btn-1').addClass('features-btn-1-active');
    $('.features-btn-2').removeClass('features-btn-2-active'); 
    $('.features-btn-3').removeClass('features-btn-3-active'); 
    $('.features-btn-4').removeClass('features-btn-4-active'); 
    $('.features-btn-5').removeClass('features-btn-5-active');
    $('.1-p').text(FirstP).animate({opacity: "0"}, 500).animate({opacity: "1"}, 500);
    $('.2-p').text(SecondP).animate({opacity: "0"}, 500).animate({opacity: "1"}, 500);
});

$('.features-btn-3').click(function(){
    $('.features-btn-3').addClass('features-btn-3-active');
    $('.features-btn-2').removeClass('features-btn-2-active'); 
    $('.features-btn-1').removeClass('features-btn-1-active'); 
    $('.features-btn-4').removeClass('features-btn-4-active'); 
    $('.features-btn-5').removeClass('features-btn-5-active');
    $('.1-p').text(FirstP).animate({opacity: "0"}, 500).animate({opacity: "1"}, 500);
    $('.2-p').text(SecondP).animate({opacity: "0"}, 500).animate({opacity: "1"}, 500);
});

$('.features-btn-4').click(function(){
    $('.features-btn-4').addClass('features-btn-4-active');
    $('.features-btn-1').removeClass('features-btn-1-active'); 
    $('.features-btn-3').removeClass('features-btn-3-active'); 
    $('.features-btn-2').removeClass('features-btn-2-active'); 
    $('.features-btn-5').removeClass('features-btn-5-active'); 
    $('.1-p').text(FirstPNew).animate({opacity: "0"}, 500).animate({opacity: "1"}, 500);
    $('.2-p').text(SecondPNew).animate({opacity: "0"}, 500).animate({opacity: "1"}, 500);   
});

$('.features-btn-5').click(function(){
    $('.features-btn-5').addClass('features-btn-5-active');
    $('.features-btn-2').removeClass('features-btn-2-active'); 
    $('.features-btn-1').removeClass('features-btn-1-active'); 
    $('.features-btn-4').removeClass('features-btn-4-active'); 
    $('.features-btn-3').removeClass('features-btn-3-active');
    $('.1-p').text(FirstP).animate({opacity: "0"}, 500).animate({opacity: "1"}, 500);
    $('.2-p').text(SecondP).animate({opacity: "0"}, 500).animate({opacity: "1"}, 500);
});









