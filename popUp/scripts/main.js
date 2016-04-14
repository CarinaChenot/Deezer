$(document).ready(function(){
	
	$(".abo").on("click", function(e){
		e.preventDefault;
		$("#abonnement").removeClass("hide");
		$("#cache").removeClass("hide");
	});
	
	$("#abonnement, #cache").on("click", function(){
		$("#abonnement").addClass("hide");
		$("#cache").addClass("hide");
	});
	
	$("#wel").on("click", function(e){
		e.preventDefault;
		$("#welcome").addClass("hide");
		$("#cache").addClass("hide");
	});
		
});