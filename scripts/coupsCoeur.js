if (typeof(Storage) !== "undefined") {
	// Store
	var all_Id;
	var coeur;
	var writing = $("#page-likes");
    var src = $("#playing-cover").attr('src');
  console.log(src);

	// Retrieve


	$("#wanted").on("click", function(){
		coeur += id_music + ",";
		localStorage.setItem("listMusic", coeur);
		afficheNext(id_music);
	});


	function afficheNext(id){
      
		$("#nouveauLike").append("<div class='col-lg-3 music' data-key='"+ id +"'><span class='artist'>" + music[id].artist + "</span><span class='song'>" + music[id].title + "</span><img src='" + music[id].albumCover + "' alt='poadcast' class='cover'><a href='#' class='textCover' style='text-decoration:none;'><img src='images/iconePlay.png' alt='play' class='playMusic'></a></div>");
	}
  

	function afficheCoupsCoeur(){
		
		var text;
		var id;
		for(var i = 0; i < coeur.length/2; i++) {
			id = parseInt(all_Id[i])
            
			$("#nouveauLike").append("<div class='col-lg-3 music' data-key='"+ id +"'><span class='artist'>" + music[id].artist + "</span><span class='song'>" + music[id].title + "</span><img src='" + music[id].albumCover + "' alt='poadcast' class='cover'><a href='#' class='textCover' style='text-decoration:none;'><img src='images/iconePlay.png' alt='play' class='playMusic'></a></div>");
		}  
	}

	if(localStorage.getItem("listMusic") <= 0){
		localStorage.setItem("listMusic", "");
		coeur = localStorage.getItem("listMusic");
		all_Id = coeur.split("");
	} else {
		coeur = localStorage.getItem("listMusic");
		all_Id = coeur.split(",");
		afficheCoupsCoeur();
	}
	
	$(".music").on("click", function(){
		var id = $(this).dataKey;
	});

} else {
	document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}