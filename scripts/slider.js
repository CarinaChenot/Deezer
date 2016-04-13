
  var autoSwap = setInterval(swap, 3500);
  $('ul, span').hover(
    function (){
      clearInterval(autoSwap);
    },
    function (){
      autoSwap = setInterval(swap, 3500);
    });
  var items = [];
  var startItem = 1;
  var position = 0;
  var itemCount = $('.carousel li.items').length;
  var leftpos = itemCount;
  var resetCount = itemCount;
  $('li.items').each(function (index){
    items[index] = $(this).text();
  });
  function swap(action){
    var direction = action;
    if (direction == 'counter-clockwise') {
      var leftitem = $('.left-pos').attr('id') - 1;
      if (leftitem == 0){
        leftitem = itemCount;
      }
      $('.right-pos').removeClass('right-pos').addClass('back-pos');
      $('.main-pos').removeClass('main-pos').addClass('right-pos');
      $('.left-pos').removeClass('left-pos').addClass('main-pos');
      $('#' + leftitem + '').removeClass('back-pos').addClass('left-pos');

      startItem--;
      if (startItem < 1){
        startItem = itemCount;
      }
    }
    if (direction == 'clockwise' || direction == '' || direction == null) {
      function pos(positionvalue){
        if (positionvalue != 'leftposition'){
          position++;
          if ((startItem + position) > resetCount){
            position = 1 - startItem;
          }
        }
        if (positionvalue == 'leftposition'){
          position = startItem - 1;
          if (position < 1) {
            position = itemCount;
          }
        }
        return position;
      }
      $('#' + startItem + '').removeClass('main-pos').addClass('left-pos');
      $('#' + (startItem + pos()) + '').removeClass('right-pos').addClass('main-pos');
      $('#' + (startItem + pos()) + '').removeClass('back-pos').addClass('right-pos');
      $('#' + pos('leftposition') + '').removeClass('left-pos').addClass('back-pos');
      startItem++;
      position = 0;
      if (startItem > itemCount){
        startItem = 1;
      }
    }
  }
  $('#next').click(function (){
    swap('clockwise');
  });
  $('#prev').click(function (){
    swap('counter-clockwise');
  });
  $('li').click(function (){
    if ($(this).attr('class') == 'items left-pos'){
      swap('counter-clockwise');
    } else {
      swap('clockwise');
    }
  });