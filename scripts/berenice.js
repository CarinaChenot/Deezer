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
	$('.flowSong').delay(1100).animate({ opacity : '1' }, 2000);
	$('.gif').delay(1100).animate({ opacity : '1' }, 2000);
});

$('.pauseButtonFlow').on('click', function(){
	$('.pauseButtonFlow').animate({ zIndex : '0' }, 1);
	$('.playButtonFlow').animate({ zIndex : '14' }, 1);
	$('.pauseButtonFlow').animate({
		left : '94%',
		opacity : '0'
	}, 1500);
	$('.playButtonFlow').animate({
		left : '94%',
		opacity : '1'
	}, 1500);
		
	$('.flowText').animate({ left : '89.5%'	}, 1500);
	$('.flowSong').animate({ opacity : '0' }, 1500);
	$('.gif').animate({ opacity : '0' }, 1500);
});