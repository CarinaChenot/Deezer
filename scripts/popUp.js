$(document).ready(function(){
	var aboOn = 0; //permet de vérifier si la popUp Abonnement est active ou pas

	$(".abo").on("click", function(e){
		e.preventDefault;
		$("#abonnement").removeClass("hide");
		$("#cache").removeClass("hide");
	});

	$("#abonnement, #cache").on("click", function(){
		$("#abonnement").addClass("hide");
		if(aboOn == 1){
			$("#cache").addClass("hide");
		}
	});

	$("#wel").on("click", function(e){
		e.preventDefault;
		$("#welcome").addClass("hide");
		$("#cache").addClass("hide");
		aboOn = 1;
	});

});