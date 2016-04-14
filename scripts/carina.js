$(document).ready(function () {

  //Régler la taille de la page
  $('.page').css('width', parseInt($('.page').css('width')) - 370);
  $('.page').css('width', $(window).width() - 370);
  $('#player').css('width', $(window).width() - 150);
  $(window).resize(function () {
    $('.page').css('width', $(window).width() - 370);
    $('#player').css('width', $(window).width() - 150);
  });

  $('#hamburger').on('click', function () {
    $('#left').toggleClass('reduced');

    //animation du menu de grand à petit
    if ($('#left').hasClass('reduced')) {
      $('#menuNav a').removeClass('menuBig');
      $('#menuNav a').addClass('menuSmall');
      $('.reduced #menuNav a').html('');
      $('.reduced #logo').fadeOut('slow');
      $('.reduced #hamburger').animate({
        "margin-top": "10px",
        "margin-left": "14px"
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

      //animation du menu de petit à grand
    } else {
      $('#accueil a').html('Accueil');
      $('#a_ecouter a').html('À Écouter');
      $('#nouveautes a').html('Nouveautés');
      $('#top_playlists a').html('Top Playlists');
      $('#mix a').html('Mix');
      $('#infos a').html('Infos & Divertissements');
      $('#menuNav a').removeClass('menuSmall');
      $('#menuNav a').addClass('menuBig');
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

  //Fonction pour la navigation des pages
  $('#menuNav li').click(function () {
    $('#menuNav li').removeClass('activeMenu');
    $('#menuNav li').each(function () {
      $(this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '.png)');
    });
    $(this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '-active.png)');
    $('.page').css('display', 'none');
    $(this).addClass('activeMenu');
    $('#page-' + $(this).attr('id')).css('display', 'block');
  });
  
  //Fonction navigation page likes
  $('#likes').on('click', function(){
    $('#menuNav li').removeClass('activeMenu');
    $('#menuNav li').each(function () {
      $(this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '.png)');
    });
    $('.page').css('display', 'none');
    $(this).addClass('activeMenu');
    $('#page-' + $(this).attr('id')).css('display', 'block');
  });


  //Fonction pour navigation page Nouveautés accueil
  $('#nouveautesTitle').on('click', function () {
    $('#menuNav li').removeClass('activeMenu');
    $('#menuNav li').each(function () {
      $(this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '.png)');
    });
    $('.page').css('display', 'none');
    $('#nouveautes').addClass('activeMenu');
    $('#nouveautes').css('background-image', 'url(images/icones-menu/nouveautes-active.png)');
    $('#page-nouveautes').css('display', 'block');
  });

  //Fonction pour navigation page Mix accueil
  $('#mixTitle').on('click', function () {
    $('#menuNav li').removeClass('activeMenu');
    $('#menuNav li').each(function () {
      $(this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '.png)');
    });
    $('.page').css('display', 'none');
    $('#mix').addClass('activeMenu');
    $('#mix').css('background-image', 'url(images/icones-menu/mix-active.png)');
    $('#page-mix').css('display', 'block');
  });

  //Fonction pour navigation page top_playlists accueil
  $('#topPlaylisitsTitle').on('click', function () {
    $('#menuNav li').removeClass('activeMenu');
    $('#menuNav li').each(function () {
      $(this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '.png)');
    });
    $('.page').css('display', 'none');
    $('#top_playlists').addClass('activeMenu');
    $('#top_playlists').css('background-image', 'url(images/icones-menu/top_playlists-active.png)');
    $('#page-top_playlists').css('display', 'block');
  });

  //Fonction pour changer couleur icones hover
  $("#menuNav li").hover(
    function () {
      $(this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '-active.png)');
    },
    function () {
      $(this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '.png)');
    }
  );

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

  //Fonction pour sauvegarder couleurs
  for (var i = 0; i < music.length; i++) {
    if (music[i]["like"] == 1) {
      $('.fa-heart').attr('data', i).css('color', 'red');
    }
  }

  //Fonction pour changer couleur
  $('.fa-heart').on('click', function () {
    $(this).toggleClass('liked');
    if ($(this).hasClass('liked')) {
      music[$(this).attr('data')]["like"] = 1;
      console.log(music[$(this).attr('data')]["like"]);
    } else {
      music[$(this).attr('data')]["like"] = 0;
      console.log(music[$(this).attr('data')]["like"]);
    }

  });
}); //Fin document ready