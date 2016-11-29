
var wrapper = document.querySelector('.wrapper');
var intro = document.querySelector('.intro');
var portPage = document.querySelector('.page__portfolio');
var mediaItems = [];

setTimeout(function() {
  wrapper.removeChild(intro);
  portPage.style.display = 'flex';
  $( ".media" ).each(function( i ) {
    console.log($(this));
    $(this).css('animation', 'BuildIn .8s ease-out .6s forwards');
  });
  // for (i = 0; i < mediaItems.length; i++) {
  //   mediaItems[i].style.animation = 'BuildIn .4s ease-out forwards';
  //   console.log(mediaItems[i]);
  // }
}, 8200);
