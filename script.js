$(document).ready(function(){
  $(".profile__container").fadeIn(2000);
});

$(window).scroll(function(){  
  var st = $(window).scrollTop();  
  if ($(window).width() <= '1220'){
    if ( st > 500 ) $(".experience__content").fadeIn(1000);
    if ( st > 1200 ) $(".education__content").fadeIn(1000);
    if ( st > 1600 ){ 
      $(".skills__content").fadeIn(1000).css("display", "flex");
      $(".html-per, .css-per").spincrement({
        from: 0,
        to: 80,
        duration: 2500
      });
      $(".ph-per, .en-per, .gulp-per").spincrement({
        from: 0,
        to: 60,
        duration: 2500
      });
      $(".jq-per, .scss-per").spincrement({
        from: 0,
        to: 70,
        duration: 2500
      });
      $(".git-per, .js-per, .react-per").spincrement({
        from: 0,
        to: 50,
        duration: 2500
      });
    }
  } else{
    if ( st > 700 ) $(".experience__content").fadeIn(1000);
    if ( st > 1500 ) $(".education__content").fadeIn(1000);
    if ( st > 2300 ){ 
      $(".skills__content").fadeIn(1000).css("display", "flex");
      $(".html-per, .css-per").spincrement({
        from: 0,
        to: 80,
        duration: 2500
      });
      $(".ph-per, .en-per, .gulp-per").spincrement({
        from: 0,
        to: 60,
        duration: 2500
      });
      $(".jq-per, .scss-per").spincrement({
        from: 0,
        to: 70,
        duration: 2500
      });
      $(".git-per, .js-per, .react-per").spincrement({
        from: 0,
        to: 50,
        duration: 2500
      });
    }
  }  
    });
    


  