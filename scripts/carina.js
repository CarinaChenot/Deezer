$(document).ready(function () {

  //Régler la taille de la page
  $('.page').css('width', parseInt($('.page').css('width')) - 370);
  $('.page').css('width', $(window).width() - 370);
  $(window).resize(function () {
    $('.page').css('width', $(window).width() - 370);
  });

  //Fonction pour rétracter le menu gauche
  $('#hamburger').on('click', function () {
    $('#left').toggle("slide");
    $('#left').toggleClass('reduced');
    if ($('#left').hasClass('reduced')) {
      console.log('test');
      $('#reducedleft').css('display', 'block');
    }
  });

  //Fonction pour la navigation des pages
  $('#menuNav li').click(function () {
    $('#menuNav li').removeClass('activeMenu');
    $('#menuNav li').each(function(){
      $('a', this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '.png)');
    });
    $('a', this).css('background-image', 'url(images/icones-menu/' + $(this).attr('id') + '-active.png)');
    $('.page').css('display', 'none');
    $(this).addClass('activeMenu');
    $('#page-' + $(this).attr('id')).css('display', 'block');
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