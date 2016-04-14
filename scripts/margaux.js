$(document).ready(function () {
  $(".play").on("click", function(e){
    e.preventDefault();
    if ($(this).hasClass("play")){
      $(this).attr("src", "images/pauseBlack.png");
      $(this).removeClass("play");
      $(this).addClass("pause");
    }
    else if ($(this).hasClass("pause")){
      $(this).attr("src", "images/playBlack.png");
      $(this).removeClass("pause");
      $(this).addClass("play");
    }
    });
  
  $(".playCover").hide();
  $("img").mouseover(function(){
    if ($(this).hasClass("cover")){
      $(this).addClass("coverHover");
      $(this).find(".playcover").slideDown();
    }
  });
  $("img").mouseleave(function(){
    if ($(this).hasClass("cover")){
      $(this).removeClass("coverHover");
      $(this).find(".playcover").slideUp();
    }
  });
  
  $(".music a").hide();
  $(".music").hover(
    function(){$(this).find("a").slideDown();},
    function(){$(this).find("a").slideUp();}
    );
  
}); 

