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
  
  $(".music a").hide();
  $(".music").hover(
    function(){$(this).find("a").fadeIn();},
    function(){$(this).find("a").fadeOut();}
    );
  
}); 

