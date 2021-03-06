$(document).ready(function () {

  /************************************************************

  		Pour changer la couleur du body en fonction de l'heure

  	************************************************************/

  var body = $("#body");
  var section = $(".page");
  var button = $("button#theme");

  // Récupération de l'heure
  var date = new Date;
  var daySecond = date.getSeconds();
  var dayTime = date.getHours();

  var forceJour = 0;
  var situation = 0; //0 pour le jour et 1 pour la nuit
  $("#jour").on("click", function () {
    if (forceJour == 0) {
      forceJour = 1;
      forceTime();
      clearInterval(changeColor);
    } else {
      forceJour = 0;
      changeColor = setInterval(function () {
        animation();
      }, 1000);
    }
  });

  function forceTime() {
    if (situation == 0) {
      body.css("background", "#454545");
      section.css("background", "#454545");
      button.removeClass("jour").addClass("nuit");
      situation = 1;
    } else {
      body.css("background", "#FFF");
      section.css("background", "#FFF");
      button.removeClass("nuit").addClass("jour");
      situation = 0;
    }
  }

  function changeTime(dayTime) {
    if (dayTime > 18) {
      if (dayTime > 18 || dayTime < 8) {
        body.css("background", "#454545");
        section.css("background", "#454545");
        button.removeClass("jour").addClass("nuit");
        situation = 1;
      } else {
        body.css("background", "#FFF");
        section.css("background", "#FFF");
        button.removeClass("nuit").addClass("jour");
        situation = 0;
      }
    }
  }

  function animation() {
    daySecond++;
    if (daySecond % 3600 == 0) {
      dayTime++;
    }
    if (dayTime == 24) {
      dayTime = 0;
    }
    changeTime(dayTime);
  }
  var changeColor = setInterval(function () {
    animation();
  }, 1000);

  /************************************************************

  								Fin de la fonction
  		Pour changer la couleur du body en fonction de l'heure

   ************************************************************/

  $("#share").on("click", function () {
    $("#option").toggleClass("active");
    $("#option").toggleClass("hide");
  });

});