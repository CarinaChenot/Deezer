$(document).ready(function () {
  
  //Page active menu
  $('header li').click(function () {
    $(this).toggleClass('activeMenu');
  });

/************************************************************

		Pour changer la couleur du body en fonction de l'heure

	************************************************************/

	/*var body = document.getElementById("body");

	// Récupération de l'heure
	var date = new Date;
	var daySecond = date.getSeconds();
	var dayTime = date.getHours();

	var forceJour = 0;
	var situation = 0; //0 pour le jour et 1 pour la nuit
	$("jour").on("click",function(){
		if(forceJour == 0){
			forceJour = 1;
			forceTime();
			clearInterval(changeColor);
		} else {
			forceJour = 0;
			changeColor = setInterval(function(){
				animation();
			},1000);
		}
	});

	function forceTime(){
		if(situation == 0){
			body.style.background = "#454545";
			situation = 1;
		}
		else{
			body.style.background = "#C8C8C8";
			situation = 0;
		}
	}	

	function changeTime(dayTime){
		if(dayTime > 18){
			body.style.background = "#454545";
			situation = 1;
		}
		else{
			body.style.background = "#C8C8C8";
			situation = 0;
		}
	}

	function animation(){
		daySecond++;
		if(daySecond%3600 == 0){dayTime++;}
		if(dayTime == 24){dayTime = 0;}
		changeTime(dayTime);
	}

	
	var body = $("#body");


	// Récupération de l'heure
	var date = new Date;
	var daySecond = date.getSeconds();
	var dayTime = date.getHours();

	var forceJour = 0;
	var situation = 0; //0 pour le jour et 1 pour la nuit
	$("jour").on("click",function(){
		if(forceJour == 0){
			forceJour = 1;
			forceTime();
			clearInterval(changeColor);
		} else {
			forceJour = 0;
			changeColor = setInterval(function(){
				animation();
			},1000);
		}
	});

	function forceTime(){
		if(situation == 0){
			body.css("background", "#454545");
			button.removeClass("jour").addClass("nuit");
			situation = 1;
		}
		else{
			body.css("background", "#C8C8C8");
			button.removeClass("nuit").addClass("jour");
			situation = 0;
		}
	}	

	function changeTime(dayTime){
		if(dayTime > 18){
			body.css("background", "#454545");
			button.removeClass("jour").addClass("nuit");
			situation = 1;
		}
		else{
			body.css("background", "#C8C8C8");
			button.removeClass("nuit").addClass("jour");
			situation = 0;
		}
	}

	function animation(){
		daySecond++;
		if(daySecond%3600 == 0){dayTime++;}
		if(dayTime == 24){dayTime = 0;}
		changeTime(dayTime);
	}
	var changeColor = setInterval(function(){
		animation();
	}, 1000);

	/************************************************************

								Fin de la fonction
		Pour changer la couleur du body en fonction de l'heure

 ************************************************************/
// Fonction pour dérouler la playlist
  $('#list-playlists').hide();
  $('#playlists').on('click', function(){
    $('#list-playlists').toggleClass('opened');
    if($('#list-playlists').hasClass('opened')){
      $('#list-playlists').show();
    } else{
      $('#list-playlists').hide();
    }
  });
});
