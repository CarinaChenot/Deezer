$(document).ready(function () {

  //Régler la taille de la page
  $('.page').css('width', parseInt($('.page').css('width')) - 370);
  $('.page').css('width', $(window).width() - 370);
  $('#player').css('width', $(window).width() - 150);
  $(window).resize(function () {
    $('.page').css('width', $(window).width() - 370);
    $('#player').css('width', $(window).width() - 150);
  });

  //Fonction pour rétracter le menu gauche
  $('#hamburger').on('click', function () {
    $('#left').toggleClass('reduced');
    if ($('#left').hasClass('reduced')) {
      $('.page').css('width', $(window).width() - 203);
      $('.page').css('left', '53px');
      $('#left').css('width', '53');
      $('#left').css('height', $(window).height() - 35);
    } else {
      $('#left').css('width', '220');
      $('.page').css('width', $(window).width() - 370);
      $('#left').css('height', $(window).height());
      $('.page').css('left', '220px');
    }
  });
	$('#hamburger').on('click', function () {
		$('#left').toggleClass('reduced');

  //Fonction pour changer couleur icones hover
  $("#menuNav li").hover(
    function () {
      $('a', this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '-active.png)');
    },
    function () {
      $('a', this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '.png)');
    }
  );
		//animation du menu de grand à petit
		if ($('#left').hasClass('reduced')) {
			$('.reduced #logo').fadeOut('slow');
			$('.reduced #hamburger').animate({
				"margin-top": "10px",
				"margin-left": "10px"
			}, 'slow');
			$('.reduced #searchBar').fadeOut('slow');
			$('.reduced #menuNav').animate({
				"margin-top": "20px"
			}, 'slow');
			$('.reduced #menuNav a').animate({
				"color": "#FFFFFF"
			}, 'slow');
			$('.reduced #flow').fadeOut('slow');
			$('.reduced #personnaliser').fadeOut('slow');
			$('.reduced #playing').fadeOut('slow');
			$('.page').animate({
				'width': $(window).width() - 203,
				'left': "53px"
			}, 1000);
			$('#left').animate({
				'width': '53',
				'height': $(window).height() - 35
			}, 1000);
			$('#playing-small').show('slow');

  //Fonction pour la navigation des pages
  $('#menuNav li').click(function () {
    $('#menuNav li').removeClass('activeMenu');
    $('#menuNav li').each(function () {
      $('a', this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '.png)');
    });
    $('a', this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '-active.png)');
    $('.page').css('display', 'none');
    $(this).addClass('activeMenu');
    $('#page-' + $(this).attr('id')).css('display', 'block');
  });
			//animation du menu de petit à grand
		} else {
			$('#logo').fadeIn('slow');
			$('#hamburger').animate({
				"margin-top": "0",
				"margin-left": "0"
			}, 'slow');
			$('#searchBar').fadeIn('slow');
			$('#menuNav').animate({
				"margin-top": "0px"
			}, 'slow');
			$('#menuNav a').animate({
				"color": "#c1c1c9"
			}, 'slow');
			$('#flow').fadeIn('slow');
			$('#personnaliser').fadeIn('slow');
			$('#playing').fadeIn('slow');
			$('.page').animate({
				'left': "220px",
				'width': $(window).width() - 370,
			}, 1000);
			$('#left').animate({
				'width': '220',
				'height': $(window).height()
			}, 1000);
			$('#playing-small').hide('slow');
		}
	});

  // Fonction pour dérouler la playlist
  $('#list-playlists').hide();
  $('#playlists').on('click', function () {
    $('#list-playlists').toggleClass('opened');
    if ($('#list-playlists').hasClass('opened')) {
      $('#list-playlists').show();
    } else {
      $('#list-playlists').hide();
    }
  });

  //Fonction pour tourner flèche playlist
  $("#playlists a").on('click', function () {
    if ($('#arrow').css("transform") == 'none') {
      $('#arrow').css("transform", "rotate(180deg)");
    } else {
      $('#arrow').css("transform", "");
    }
  });

  //Fonction pour faire scroll le texte
  var resetHTML;
  var intervalID;
  $(".scrollthis").hover(function () {
    resetHTML = $(this).html();
    var $this = $(this);
    intervalID = setInterval(function () {
      scroll($this);
    }, 100);
  }, function () {
    clearInterval(intervalID);
  });

  $(".scrollthis").mouseout(function () {
    $(this).html(resetHTML);
  });

  function scroll(ele) {
    ele.text(function (i, val) {
      return val.substr(1) + val.substr(0, 1);
    });
  }
}); //Fin document ready