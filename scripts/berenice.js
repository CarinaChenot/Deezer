/****  Page d'accueil  ****/

/**  animation and play Flow  **/

// Quand on active le flow
$('.playButtonFlow').on('click', function(){
	$('.playButtonFlow').animate({
		left : '46%',
		opacity : '0',
		zIndex : '0'
	}, 1500);

	$('.pauseButtonFlow').animate({
		left : '46%',
		opacity : '1',
		zIndex : '14'
	}, 1500);
	$('.flowText').animate({ left : '42%'	}, 1500);
	$('.flowSong, .gif').delay(1100).animate({ opacity : '1' }, 2000);
	$('#accueilFlow span#prevMusFlow, #accueilFlow span#nextMusFlow').delay(1100).animate({
		opacity : '1',
		zIndex : '20'
	}, 2000);

	nextMusic();
	permut();
	playMusic();

});



// Quand on désactive le flow
$('.pauseButtonFlow').on('click', function(){
	$('.pauseButtonFlow').animate({ zIndex : '0' }, 1);
	$('.playButtonFlow').animate({ zIndex : '14' }, 1);
	$('.pauseButtonFlow').delay(1100).animate({
		left : '94%',
		opacity : '0'
	}, 1500);
	$('.playButtonFlow').delay(1100).animate({
		left : '94%',
		opacity : '1'
	}, 1500);

	$('.flowText').delay(1100).animate({ left : '89.5%'	}, 1500);
	$('.flowSong, .gif').animate({ opacity : '0' }, 1500);
	$('#accueilFlow span#prevMusFlow, #accueilFlow span#nextMusFlow').animate({
		opacity : '0',
		zIndex : '2'
	}, 500);

	pauseMusic();

});