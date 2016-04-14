$(document).ready(function () {
	function updateAllPlayer() {
		player.pause();
		player.currentTime = 0;
		player.setAttribute("src", music[id_music].url);
		albumCover.setAttribute("src", music[id_music].albumCover);

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
	$(".play").on("click", function (e) {
		e.preventDefault();
		if ($(this).hasClass("play")) {
			$(".currentlyPlaying").attr("src", "images/playBlack.png");
			$(".pause").addClass("play");
			$(".pause").removeClass("currentlyPlaying");
			$(".pause").removeClass("pause");
			$(this).addClass("pause");
			$(this).attr("src", "images/pauseBlack.png");
			$(this).addClass("currentlyPlaying");
			$(this).removeClass("play");
			getSong();
			updateAllPlayer();
			permut();
		} else if ($(this).hasClass("pause")) {
			getSong();
			pauseMusic();
			$(".currentlyPlaying").attr("src", "images/playBlack.png");
			$(this).removeClass("currentlyPlaying");
			//$(this).attr("src", "images/playBlack.png");
			$(this).addClass("play");
			$(this).removeClass("pause");
		}
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
  
  $("#electro").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".electro").show();
  });
  
  $("#chanson_française").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".chanson_française").show();
  });
  
  $("#musique_classique").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".classique").show();
  });
  
    $("#tous").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".genre").show();
  });
      
    $("#pop").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".pop").show();
  });
      
    $("#rap").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".rap").show();
  });
      
    $("#rock").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".rock").show();
  });
      
    $("#jazz").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
  });
      
    $("#reggae").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
  });
      
    $("#soul").on("click", function () {
    $(".artistes").hide();
    $(".genre").hide();
    $(".ambiance").hide();
    $(".soul").show();
  });
  
  $(".select").on("click", function(e){
    e.preventDefault();
    var genre = $(this).text();
    localStorage.setItem("genre_selectionné", genre);
    var genreSelectionné = localStorage.getItem("genre_selectionné");
    $("#selected-mix").html(genreSelectionné);
  });
});