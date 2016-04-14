$(document).ready(function(){
	
	//localStorage.setItem("first", 0);
	var aboOn;
	
	if(localStorage.getItem("first") <= 0){
		localStorage.setItem("first", 0);
		$("#welcome").removeClass("hide");
		$("#cache").removeClass("hide");
		aboOn = 0;
	} else if(localStorage.getItem("first") == 1){
		$("#welcome").addClass("hide");
		$("#cache").addClass("hide");	
	}

	$(".abo").on("click", function(e){
		e.preventDefault;
		$("#abonnement").removeClass("hide");
		$("#cache").removeClass("hide");
	});

	$("#abonnement, #cache").on("click", function(){
		$("#abonnement").addClass("hide");
		if(aboOn == 1)
		$("#cache").addClass("hide");
	});

	$("#wel").on("click", function(e){
		e.preventDefault;
		$("#welcome").addClass("hide");
		$("#cache").addClass("hide");
		localStorage.setItem("first", 1);
		aboOn = 1;
	});

});