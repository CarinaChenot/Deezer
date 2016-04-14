$(document).ready(function () {
  $(".play").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("play")) {
      $(this).attr("src", "images/pauseBlack.png");
      $(this).removeClass("play");
      $(this).addClass("pause");
    } else if ($(this).hasClass("pause")) {
      $(this).attr("src", "images/playBlack.png");
      $(this).removeClass("pause");
      $(this).addClass("play");
    }
  });

  $(".music a").hide();
  $(".music").hover(
    function () {
      $(this).find("a").fadeIn();
    },
    function () {
      $(this).find("a").fadeOut();
    }
  );

  $("#ambiances-playlists").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".ambiance").show();
  });

  $("#genres-playlists").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".genre").show();
  });
  
    $("#ambiances-mix").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".ambiance").show();
  });

  $("#genres-mix").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".genre").show();
  });

  $("#artistes-mix").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".artistes").show();
  });
  
  $("#podcast-infos").on("click", function () {
    $(".podcast").hide();
    $(".emission").hide();
    $(".podcast").show();
  });
  
  $("#emission-infos").on("click", function () {
    $(".podcast").hide();
    $(".emission").hide();
    $(".emission").show();
  });
  
  $(".select").on("click", function(e){
    e.preventDefault();
    var genre = $(this).text();
    localStorage.setItem("genre_selectionné", genre);
    var genreSelectionné = localStorage.getItem("genre_selectionné");
    $("#selected-mix").html(genreSelectionné);
  });
});