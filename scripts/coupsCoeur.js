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
      src = $("#playing-cover").attr('src');
      $("#nouveauLike").after("<img src='"+src+"' alt='poadcast' class='cover'>");
	}

	function afficheCoupsCoeur(){
		
		var text;
		var id;
		for(var i = 0; i < coeur.length/2; i++) {
			id = parseInt(all_Id[i])
      $("#nouveauLike").after("<img src='images/cover_playlist10.png' alt='poadcast' class='cover loveCover'>");
			console.log(i);
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

} else {
	document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}