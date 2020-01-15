import 'objectFitPolyfill';
import 'focus-visible';
import 'picturefill';

import baguetteBox from 'baguettebox.js';
//import Choices from 'choices.js';
import zenscroll from 'zenscroll';
import LazyLoad from 'vanilla-lazyload';
import Accordions from 'van11y-accessible-accordion-aria';
import FocusWithin from 'focus-within';
import UpdateViewportHeight from './components/UpdateViewportHeight';

// Global function to toggle states
window.toggleState = function(el, dataname, on, off) {
  el.setAttribute(`data-${dataname}`, el.getAttribute(`data-${dataname}`) === on ? off : on);
};

new UpdateViewportHeight();

/**
 * Focus within polyfill
 */
FocusWithin(document, {
  attr: false,
  className: 'focus-within',
});

/*
  Image galleries
  url: https://www.npmjs.com/package/flickity
  -----------------------------------------------

  Usage:
  <div class="gallery">
      <a href="path-to-large-image" data-caption="">
          <img src="path-to-thumbnail" alt="" />
      </a>
  </div>

  Note: If not using, remove @import "../../node_modules/baguettebox.js/src/baguetteBox"; from `assets/sass/global.scss`
*/

if (document.querySelectorAll('.gallery')) {
  baguetteBox.run('.gallery');
}

/*
  Better <select> elements
  url: https://www.npmjs.com/package/choices.js
  -----------------------------------------------

  Usage:
  Selects all <select> elements by default

  Note: If not using, remove @import "../../node_modules/choices.js/assets/styles/scss/choices"; from `assets/sass/global.scss`
*/
// if (document.querySelectorAll('select').length > 0) {
//   const selectElements = new Choices('select');
// }

/*
        Menu burger
    */
const menuBurgerBtn = document.querySelector('.a-nav-toggle');

if (menuBurgerBtn) {
  menuBurgerBtn.addEventListener('click', function(e) {
    toggleState(document.body, 'nav', 'open', 'closed');
  });
}

/*
  Automatically open external links in new tab
*/
const links = document.links;

for (let i = 0, linksLength = links.length; i < linksLength; i++) {
  if (links[i].hostname != window.location.hostname) {
    links[i].target = '_blank';
  }
}

// LazyLoad
const lazyLoadImages = new LazyLoad();
