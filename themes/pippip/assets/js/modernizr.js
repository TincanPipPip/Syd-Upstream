import Modernizr from 'modernizr';

/**
 * Fix for touchevents on Chrome Desktop - Modernizr 3.7.1
 * https://github.com/Modernizr/Modernizr/issues/2431
 */
Modernizr.addTest('touchevents', function() {
  if ('ontouchstart' in window) {
    return true;
  }

  return false;
});
