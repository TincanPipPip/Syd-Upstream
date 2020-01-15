/* global Modernizr */

class Helpers {
  static extendDefaultSettings(defaults, settings) {
    for (var key in settings) {
      if (settings.hasOwnProperty(key)) {
        defaults[key] = settings[key];
      }
    }

    return defaults;
  }

  /**
   * Extend
   * Works similar to jQuery $.extend method.
   * Shallow Merge: extend(obj1, obj2);
   * Deep Merge: extend(true, obj1, obj2);
   */
  static extend() {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
    var merge = function(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          // If property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = Helpers.extend(extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for (; i < arguments.length; i++) {
      merge(arguments[i]);
    }

    return extended;
  }

  /**
   * Has Property
   * Checks whether an object contains a property
   * @param {string} prop
   * @param {object} settings
   * @return {bool}
   */
  static hasProperty(prop, settings) {
    for (var key in settings) {
      if (settings.hasOwnProperty(key)) {
        if (key == prop) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Matches Element
   * Checks whether an element matches a selector
   * @param {object} elem
   * @param {string} selector
   * @return {bool}
   */
  static matchesElement(elem, selector) {
    let p = Element.prototype;
    let f =
      p.matches ||
      p.webkitMatchesSelector ||
      p.mozMatchesSelector ||
      p.msMatchesSelector ||
      function(s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
      };
    return f.call(elem, selector);
  }

  /**
    http://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
    * Get closest DOM element up the tree that contains a class, ID, or data attribute
    * @param  {Node} elem The base element
    * @param  {String} selector The class, id, data attribute, or tag to look for
    * @return {Node} Null if no match
    */
  static getClosest(elem, selector) {
    var firstChar = selector.charAt(0);

    // Get closest match
    for (; elem && elem !== document; elem = elem.parentNode) {
      // If selector is a class
      if (firstChar === '.') {
        if (elem.classList.contains(selector.substr(1))) {
          return elem;
        }
      }

      // If selector is an ID
      if (firstChar === '#') {
        if (elem.id === selector.substr(1)) {
          return elem;
        }
      }

      // If selector is a data attribute
      if (firstChar === '[') {
        if (elem.hasAttribute(selector.substr(1, selector.length - 2))) {
          return elem;
        }
      }

      // If selector is a tag
      if (elem.tagName.toLowerCase() === selector) {
        return elem;
      }
    }

    return false;
  }

  /**
   * Is element in viewport
   * Checks if an element is within the viewport
   * Optionally specifiy if partially in view
   * @param {Node} el
   * @param {boolean} partially
   * @return {boolean}
   */
  static isElementInViewport(el, partially = false) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    if (partially) {
      var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
      var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
      return vertInView && horInView;
    } else {
      return rect.left >= 0 && rect.top >= 0 && rect.left + rect.width <= windowWidth && rect.top + rect.height <= windowHeight;
    }
  }

  /**
   * Get Siblings
   * Returns the siblings of an element.
   * @param {Node} el
   */
  static getSiblings(el) {
    return Array.prototype.filter.call(el.parentNode.children, function(child) {
      return child !== el;
    });
  }

  /**
   * Is Element
   * Checks whether the current element is a DOM Element or
   * a node list.
   * @param {Node} elem
   */
  static isElement(elem) {
    if (NodeList.prototype.isPrototypeOf(elem)) {
      return true;
    }

    return elem !== null && elem instanceof HTMLElement;
  }

  /**
   * Convert Em to Px
   * @param {string} breakpoint
   * @return {float}
   */
  static convertEmToPx(breakpoint) {
    return parseFloat(breakpoint) * 16;
  }

  /**
   * Has Callback
   * Checks if object is a valid function.
   * @param {object} styleProperty
   * @return {boolean}
   */
  static hasCallback(callback) {
    return callback && typeof callback === 'function';
  }

  /**
   * Timer
   * Timer using requestAnimationFrame fires
   * a callback after a specified duration.
   * @param {number} start
   * @param {number} duration
   * @param {object} callback
   * @param {number} timestamp
   * @return {object}
   */
  static timer(start, duration, callback, timestamp) {
    if (!start) start = timestamp;
    let progress = parseInt(timestamp - start);

    if (progress <= duration) {
      window.requestAnimationFrame(Helpers.timer.bind(this, start, duration, callback));
    } else {
      Helpers.hasCallback(callback) && callback.call();
    }
  }

  /**
   * Add Modernizr Touch Events
   * Fix for touchevents on Chrome Desktop - Modernizr 3.7.1
   * https://github.com/Modernizr/Modernizr/issues/2431
   * @return {object}
   */
  static addModernizrTouchEvents() {
    if (window.Modernizr) {
      Modernizr.addTest('touchevents', function() {
        if ('ontouchstart' in window) {
          return true;
        }

        return false;
      });
    }
  }
}

export default Helpers;
