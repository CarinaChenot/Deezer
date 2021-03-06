$(document).ready(function () {

	//changement dans le player de l'album, titre et artist affiché
	function updateAllPlayer() {
		player.pause();
		player.currentTime = 0;
		player.setAttribute("src", music[id_music].url);
		albumCover.setAttribute("src", music[id_music].albumCover);

		artistPlayer.innerHTML = music[id_music].artist;
		titlePlayer.innerHTML = music[id_music].title;
		albumPlayer.innerHTML = music[id_music].albumName;
		player.play();
	}

	//playlists accueil lecture
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
			getSong("a", 'span.title');
			updateAllPlayer();
			permut();
		} else if ($(this).hasClass("pause")) {
			getSong("a", 'span.title');
			pauseMusic();
			$(".currentlyPlaying").attr("src", "images/playBlack.png");
			$(this).removeClass("currentlyPlaying");
			//$(this).attr("src", "images/playBlack.png");
			$(this).addClass("play");
			$(this).removeClass("pause");
		}
	});
	
	$(".pauseMusic").hide();

	$("#page-nouveautes .playMusic, #page-mix .playMusic").on("click", function (e) {
		$(this).fadeOut("slow");
		$(this).next(".pauseMusic").delay(600).fadeIn("slow");
		$(".playMusic").remove("currentlyPlaying");
		$(this).addClass("currentlyPlaying");
		e.preventDefault();
		getSongNouveautes();
		updateAllPlayer();
		permut();
	});

	$("#page-nouveautes .pauseMusic, #page-mix .pauseMusic").on("click", function (e) {
		$(this).fadeOut("slow");
		$(this).prev(".playMusic").delay(600).fadeIn("slow");
		e.preventDefault();
		getSongNouveautes();
		pauseMusic();
		$(this).removeClass("currentlyPlaying");
		//permut();
	});

	/*if ($(this).hasClass("playMusic")) {
			$(".currentlyPlaying").attr("src", "images/playBlack.png");
			$(".pause").addClass("playMusic");
			$(".pause").removeClass("currentlyPlaying");
			$(".pause").removeClass("pauseMusic");
			$(this).addClass("pauseMusic");
			$(this).attr("src", "images/pauseBlack.png");
			$(this).addClass("currentlyPlaying");
			$(this).removeClass("playMusic");
			getSongNouveautes();
			updateAllPlayer();
			permut();
		} else if ($(this).hasClass("pauseMusic")) {
			getSongNouveautes();
			pauseMusic();
			$(".currentlyPlaying").attr("src", "images/playBlack.png");
			$(this).removeClass("currentlyPlaying");
			//$(this).attr("src", "images/playBlack.png");
			$(this).addClass("playMusic");
			$(this).removeClass("pauseMusic");
}
									});*/

	$(".music a").hide();
	$(".music").hover(
		function () {
			$(this).find("a").fadeIn();
		},
		function () {
			$(this).find("a").fadeOut();
		}
	);

	//tri par ambiances, genres, artistes,...
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
		$("#selected-nouveautés").html(genreSelectionné);
	});

	$(".select").on("click", function(e){
		e.preventDefault();
		var genre = $(this).text();
		localStorage.setItem("genre_selectionné", genre);
		var genreSelectionné = localStorage.getItem("genre_selectionné");
		$("#selected-mix").html(genreSelectionné);
	});
});