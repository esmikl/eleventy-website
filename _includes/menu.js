$(document).ready(function () {
  const body = $('body');
  $('#menu-button').click(function() {
    let lastActiveElement = document.activeElement;
    $(body).toggleClass('open');
    if ($(body).hasClass('open')) {
      openMenu();
    } else if (!$(body).hasClass('open')) {
      closeMenu(lastActiveElement);
    }
  });
  $('.mobile-nav').keydown(function(e) {
    let lastActiveElement = document.activeElement;
    if (e.key === 'enter') {
      $(body).toggleClass('open');
      if ($(body).hasClass('open')) {
        openMenu();
      } else if (!$(body).hasClass('open')) {
        closeMenu(lastActiveElement);
      }
    }
  });
});

function openMenu() {
  $('#menu-button').attr('aria-expanded', 'true');
  $('#menu-button span:first-child').text('Close Menu');
  $('.home-link img').attr('src', '/images/M_pink.svg');
  $('.mobile-nav nav ul').fadeIn(300,function(){
    $(this).children().each(function(i) {
      $(this).delay((i++) * 150).animate({opacity: 1, 'padding-left': '0'});
    });
  });
  createFocusTrap();
}

function closeMenu(lastActiveEl) {
  $('#menu-button').attr('aria-expanded', 'false');
  $('#menu-button span:first-child').text('Open Menu');
  $('.home-link img').attr('src', '/images/M.svg');
  $('.mobile-nav nav ul').fadeOut(function(){
    $(this).children().each(function(i) {
      $(this).animate({opacity: 0, 'padding-left': '5rem'});
    });
  });
  lastActiveEl.focus();
}

function createFocusTrap() {
  const  focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const modal = document.querySelector('#dialog');

  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
  const focusableContent = modal.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

  firstFocusableElement.focus();

  document.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab' || e.key == 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });

  firstFocusableElement.focus();
}
