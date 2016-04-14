if (typeof(Storage) !== "undefined") {
	// Store
	var all_Id;
	var coeur;
	var writing = $("#coeur");

	if(localStorage.getItem("listMusic") <= 0){
		localStorage.setItem("listMusic", "");
		coeur = localStorage.getItem("listMusic");
		all_Id = coeur.split("");
	} else {
		coeur = localStorage.getItem("listMusic");
		all_Id = coeur.split("");
		affiche();
	}

	// Retrieve

	$("#wanted").on("click", function(){
		coeur += id_music;
		localStorage.setItem("listMusic", coeur);
	});

	
	function afficheNext(id){
		writing.html(writing.html() + "<li><span class='artist'>" + music[id].artist + "</span><span class='song'>" + music[id].title + "</span><span class='closed'>X</span></li>");
	}
	
	function affiche(){
		var text;
		for(i = 0; i< coeur.length; i++){
			text += "<li><span class='artist'>" + music[parseFloat(coeur[i])].artist + "</span><span class='song'>" + music[parseFloat(coeur[i])].title + "</span><span class='closed'>X</span></li>"
		}
		writing.html(text);
	}

} else {
	document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}