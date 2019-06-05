console.log('JS loaded');
$(document).ready(function(){
  console.log('DOM ready');
});
document.addEventListener('deviceready', function(){
  console.log('Device ready, all ready...');
  navigator.geolocation.getCurrentPosition(function(coords){
    $('<div>').html(coords.latitude + '/' + coords.longitude).appendTo('body');

  }, function(){
    $('<div>').html('Error no position').appendTo('body')
  })

});
