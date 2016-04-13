var player = document.getElementById("myMusic");
var playliste = document.getElementById("playliste");

//Les bouttons des options
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var prevMus = document.getElementById("prevMus");
var nextMus = document.getElementById("nextMus");
var progressBar = document.getElementById("progressBarControl");
var alea = document.getElementById("alea");

//Le son
var id_sound = 1;
var soudUp = document.getElementById("soundUp");
var soundMute = document.getElementById("mute");
var plus = document.getElementById("plus");
var less = document.getElementById("minus");

//les évènements 
play.addEventListener("click", playMusic);
pause.addEventListener("click", pauseMusic);
prevMus.addEventListener("click", nextMusic);
nextMus.addEventListener("click", prevMusic);
progressBar.addEventListener("click", function(){
	clickProgress(player, this, event);
});
soundMute.addEventListener("click", mute);
soudUp.addEventListener("click", mute);
plus.addEventListener("click", soundMore);
less.addEventListener("click", soundLess);
alea.addEventListener("click", aleaMusic);

var id_music = 1; // l'indice dans le tableau
var textPlaylist = "";


var duration;    // Durée totale
var time; // Temps écoulé
var fraction;
var percent = 0;

//permet d'initialiser les classes
play.className = "active";
pause.className = "hide";

function changeMusic(){
	player.pause();
	player.currentTime = 0;
	player.setAttribute("src", music[id_music].url);
	player.play();
	changeSound();
}

function playMusic(){ // Met le player en play 
	var yes = document.getElementById("cache");
	if(yes.className == "hide"){
		if(player.hasAttribute("src")){
			player.play();
		} else {
			changeMusic();
		}
		permut();
	}
} 

function pauseMusic() { // Met le player en pause
	player.pause();
	permut();
}

function nextMusic(){ // Met la prochaine musique
	id_music = (id_music + 1) % music.length;
	changeMusic();
}

function prevMusic(){ //Met la musique précédente
	if(id_music == 0){
		id_music = music.length - 1;
		changeMusic();
	} else {
		id_music--;
		changeMusic();
	}
}

function permut(){
	if(play.className == "active"){
		play.className = "hide";
		pause.className = "active";
	} else {
		play.className = "active";
		pause.className = "hide";
	}
}

//Le controle du son

function soundMore(){
	if(id_sound < 1){
		id_sound = id_sound + 0.2;
		changeSound();
	}
}

function soundLess(){
	if(id_sound > 0){
		id_sound = id_sound - 0.2;
		changeSound();
	}
}

function mute(){
	if(soundMute.className == "hide"){
		player.volume = 0;
		soundMute.className = "active";
		soudUp.className = "hide";
	}
	else {
		changeSound();
	}
}

function changeSound(){
	if(id_sound > 0){
		soundMute.className = "hide";
		soudUp.className = "active";
	} else{
		soundMute.className = "active";
		soudUp.className = "hide";
	}
	player.volume = id_sound;
}

function aleaMusic(){
	id_music = Math.floor(Math.random()*music.length);
	console.log(id_music);
	changeMusic();
}

//Pour Le calcule de la durée de la musique
function formatTime(time) {
	var hours = Math.floor(time / 3600);
	var mins  = Math.floor((time % 3600) / 60);
	var secs  = Math.floor(time % 60);

	if (secs < 10) {
		secs = "0" + secs;
	}

	if(mins < 10){
		mins = "0" + mins;
	}

	if (hours) {
		if (mins < 10) {
			mins = "0" + mins;
		}
		return hours + ":" + mins + ":" + secs; // hh:mm:ss
	} else {
		return mins + ":" + secs; // mm:ss
	}
}

//La bar de progression
function update(player) {
	var duration = player.duration;    // Durée totale
	var time     = player.currentTime; // Temps écoulé
	var fraction = time / duration;
	var percent  = Math.ceil(fraction * 100);

	var displayTime = document.getElementById("time");

	var progress = document.querySelector('#progressBar');

	document.querySelector('#progressTime').textContent = formatTime(time);

	progress.style.width = percent + '%';

	if(percent > 0){
		progress.style.background = "#FFF";
	}
	if(percent == 100){
		id_music = (id_music + 1) % music.length;
		changeMusic();
	}
}


function getMousePosition(event) {
	return {
		x: event.pageX,
		y: event.pageY
	};
}

function getPosition(element){
	var top = 0, left = 0;

	do {
		top  += element.offsetTop;
		left += element.offsetLeft;
	} while (element = element.offsetParent);

	return { x: left, y: top };
}

//permet de reculer le bar de progression au click
function clickProgress(idPlayer, control, event) {
	var parent = getPosition(control);    // La position absolue de la progressBar
	var target = getMousePosition(event); // L'endroit de la progressBar où on a cliqué

	var x = target.x - parent.x; 
	var wrapperWidth = document.querySelector('#progressBarControl').offsetWidth;

	var percent = Math.ceil((x / wrapperWidth) * 100);    
	var duration = player.duration;

	player.currentTime = (duration * percent) / 100;
}