
var wrapper = $('.wrapper');
var intro = $('.intro');
var portPage = $('.page__portfolio');
var blogPage = $('.page__blog');
var navLink = $('.nav__link');
var portLink = $('link--portfolio');
var blogLink = $('link--blog');
var headerName = $('.header__logo--name');

setTimeout(function() {
  $(intro).remove();
  $(portPage).css('display', 'flex');
  $( ".media" ).each(function() {
    $(this).css('animation', 'BuildIn .8s ease-out forwards');
  });
  // for (i = 0; i < mediaItems.length; i++) {
  //   mediaItems[i].style.animation = 'BuildIn .4s ease-out forwards';
  //   console.log(mediaItems[i]);
  // }
}, 8200);

$(navLink).on('click', function() {
  if (!$(this).hasClass('active-link')) {
    $(this).toggleClass('active-link')
           .siblings('.active-link')
           .removeClass('active-link');
    $(headerName).css('display', 'block');
  }
  if ($(this).hasClass('link--portfolio')) {
    $(portPage).css('display', 'flex');
    $(blogPage).css('display', 'none');
    $(headerName).css('display', 'block');
    $('h1.page__title').text('Portfolio').css({
        paddingLeft: '0',
        left: '6%'
      });
  }
  else if ($(this).hasClass('link--blog')) {
    $(blogPage).css('display', 'flex');
    $( ".blog__post" ).each(function() {
      $(this).css('animation', 'BuildIn .8s ease-out forwards');
    });
    $(portPage).css('display', 'none');
    $(headerName).css('display', 'block');
    $('h1.page__title').text('Blog').css({
        paddingLeft: '.5em',
        left: '5.5%'
      });
  }
});
