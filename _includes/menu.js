$(document).ready(function () {
  const body = $('body');
  $('#menu-button').click(function() {
    $(body).toggleClass('open');
    if ($(body).hasClass('open')) {
      $('#menu-button').attr('aria-expanded', 'true');
      $('.mobile-nav nav ul').fadeIn(300,function(){
        $(this).children().each(function(i) {
          $(this).delay((i++) * 150).animate({opacity: 1, 'padding-left': '0'});
        });
      });
    } else if (!$(body).hasClass('open')) {
      $('#menu-button').attr('aria-expanded', 'false');
      $('.mobile-nav nav ul').fadeOut(function(){
        $(this).children().each(function(i) {
          $(this).animate({opacity: 0, 'padding-left': '5rem'});
        });
      });
    }
  });
});
