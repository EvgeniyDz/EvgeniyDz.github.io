$(document).ready(function(){
  $(".profile__container").fadeIn(2000);
});

$(window).scroll(function(){  
  var st = $("html").scrollTop();
  console.log(st); 
  if ($(window).width() <= '1220'){
    if ( st > 500 ) $(".experience__content").fadeIn(2000);
    if ( st > 1200 ) $(".education__content").fadeIn(2000);
    if ( st > 1600 ){ 
      $(".skills__content").fadeIn(2000).css("display", "flex");
      $(".html-per, .css-per").spincrement({
        from: 0,
        to: 80,
        duration: 2500
      });
      $(".js-per, .ph-per, .en-per").spincrement({
        from: 0,
        to: 60,
        duration: 2500
      });
      $(".jq-per, .scss-per, .gulp-per, .git-per").spincrement({
        from: 0,
        to: 70,
        duration: 2500
      });
      $(".react-per").spincrement({
        from: 0,
        to: 50,
        duration: 2500
      });
    }
  } else{
    if ( st > 700 ) $(".experience__content").fadeIn(2000);
    if ( st > 1500 ) $(".education__content").fadeIn(2000);
    if ( st > 2300 ){ 
      $(".skills__content").fadeIn(2000).css("display", "flex");
      $(".html-per, .css-per").spincrement({
        from: 0,
        to: 80,
        duration: 2500
      });
      $(".js-per, .ph-per, .en-per").spincrement({
        from: 0,
        to: 60,
        duration: 2500
      });
      $(".jq-per, .scss-per, .gulp-per, .git-per").spincrement({
        from: 0,
        to: 70,
        duration: 2500
      });
      $(".react-per").spincrement({
        from: 0,
        to: 50,
        duration: 2500
      });
    }
  }  
    });
    


  