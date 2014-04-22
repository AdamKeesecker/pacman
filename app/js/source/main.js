(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#start').click(start);
    $('body').on('keydown', checkMove);
  }


  var x;
  var y;

  var x2;
  var y2;

  var pac2;
  var dot2;


  function start(){
    if($('td').hasClass('pacman') || $('td').hasClass('dot')){
      return;
    }
    else{
      x = Math.floor(Math.random()*2);
      y = Math.floor(Math.random()*3);

      x2 = Math.floor(Math.random()*2);
      y2 = Math.floor(Math.random()*3);

      pac2 = $('td[data-x='+x+'][data-y='+y+']');
      dot2 = $('td[data-x='+x2+'][data-y='+y2+']');

      paint();
      dot2.addClass('dot');
    }
  }

  function paint(){
    $(pac2).removeClass('pacman');
    pac2 = $('td[data-x='+x+'][data-y='+y+']');
    pac2.addClass('pacman');
  }


  function checkMove(event){
    switch(event.keyCode){
      case 38:
        // up
        y--;
        paint();
        break;
      case 40:
        // down
        y++;
        paint();
        break;
      case 37:
        // left
        x--;
        paint();
        break;
      case 39:
        // right
        x++;
        paint();
    }
  }













})();
