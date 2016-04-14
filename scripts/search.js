$(document).ready(function(){
	DZ.init({
		appId  : '1',
		channelUrl : '127.0.0.1'
	});

	$("#div_search").on("submit", function(e){
		e.preventDefault();
		searchBar();
	});

	$("#result").on("click", function(){
		$("#result").addClass("hide");
		var empti = $("#search").val("");
	});

	function searchBar(){
		var search = $("#search").val();
		var text = "";
		var currentTitle;
		var id = [];
		var same;
		var url;


		DZ.api("/search?q=" + search , function(response){
			for(var i = 0; i < response.data.length; i++){
				currentTitle = response.data[i].album.title;
				id[i] = response.data[i].album.title;
				if(text.toLowerCase().indexOf(currentTitle) < 0){
					same = 1;
					for(var j = 0; j < i; j++){
						if(id[j] == currentTitle){
							same = 0;
						} 
					}
					if(same == 1){
						url = response.data[i].album.cover;
						text += "<img src='" + url + "' alt='" + currentTitle + "' class='album'/></br>";
					}
				}
			}
			$("#result").removeClass("hide").html(text);
		});
	}
});