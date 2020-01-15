/**
 * Update Viewport Height
 * Used to fix viewport units on mobile
 * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
import Helpers from './Helpers';

class updateViewportHeight {
  constructor(elem, options) {
    this.config = Helpers.extendDefaultSettings(this.defaults(), options);
    this.init();
  }

  init() {
    this.start = 0;
    this.updateHeight(this.config);
    window.addEventListener('resize', this.throttler.bind(this));
  }

  updateHeight({ property }) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(property, `${vh}px`);
  }

  throttler() {
    if (!this.scrollStart) {
      this.start = true;
      window.requestAnimationFrame(this.updateHeight.bind(this, this.config));
      this.start = false;
    }
  }

  defaults() {
    return {
      property: '--vh',
    };
  }
}

export default updateViewportHeight;
