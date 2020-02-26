/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/components/Helpers.js":
/*!*****************************************!*\
  !*** ./assets/js/components/Helpers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global Modernizr */
var Helpers =
/*#__PURE__*/
function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }

  _createClass(Helpers, null, [{
    key: "extendDefaultSettings",
    value: function extendDefaultSettings(defaults, settings) {
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

  }, {
    key: "extend",
    value: function extend() {
      // Variables
      var extended = {};
      var deep = false;
      var i = 0; // Check if a deep merge

      if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0];
        i++;
      } // Merge the object into the extended object


      var merge = function merge(obj) {
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
      }; // Loop through each object and conduct a merge


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

  }, {
    key: "hasProperty",
    value: function hasProperty(prop, settings) {
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

  }, {
    key: "matchesElement",
    value: function matchesElement(elem, selector) {
      var p = Element.prototype;

      var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
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

  }, {
    key: "getClosest",
    value: function getClosest(elem, selector) {
      var firstChar = selector.charAt(0); // Get closest match

      for (; elem && elem !== document; elem = elem.parentNode) {
        // If selector is a class
        if (firstChar === '.') {
          if (elem.classList.contains(selector.substr(1))) {
            return elem;
          }
        } // If selector is an ID


        if (firstChar === '#') {
          if (elem.id === selector.substr(1)) {
            return elem;
          }
        } // If selector is a data attribute


        if (firstChar === '[') {
          if (elem.hasAttribute(selector.substr(1, selector.length - 2))) {
            return elem;
          }
        } // If selector is a tag


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

  }, {
    key: "isElementInViewport",
    value: function isElementInViewport(el) {
      var partially = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
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

  }, {
    key: "getSiblings",
    value: function getSiblings(el) {
      return Array.prototype.filter.call(el.parentNode.children, function (child) {
        return child !== el;
      });
    }
    /**
     * Is Element
     * Checks whether the current element is a DOM Element or
     * a node list.
     * @param {Node} elem
     */

  }, {
    key: "isElement",
    value: function isElement(elem) {
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

  }, {
    key: "convertEmToPx",
    value: function convertEmToPx(breakpoint) {
      return parseFloat(breakpoint) * 16;
    }
    /**
     * Has Callback
     * Checks if object is a valid function.
     * @param {object} styleProperty
     * @return {boolean}
     */

  }, {
    key: "hasCallback",
    value: function hasCallback(callback) {
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

  }, {
    key: "timer",
    value: function timer(start, duration, callback, timestamp) {
      if (!start) start = timestamp;
      var progress = parseInt(timestamp - start);

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

  }, {
    key: "addModernizrTouchEvents",
    value: function addModernizrTouchEvents() {
      if (window.Modernizr) {
        Modernizr.addTest('touchevents', function () {
          if ('ontouchstart' in window) {
            return true;
          }

          return false;
        });
      }
    }
  }]);

  return Helpers;
}();

/* harmony default export */ __webpack_exports__["default"] = (Helpers);

/***/ }),

/***/ "./assets/js/components/UpdateViewportHeight.js":
/*!******************************************************!*\
  !*** ./assets/js/components/UpdateViewportHeight.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helpers */ "./assets/js/components/Helpers.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Update Viewport Height
 * Used to fix viewport units on mobile
 * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */


var updateViewportHeight =
/*#__PURE__*/
function () {
  function updateViewportHeight(elem, options) {
    _classCallCheck(this, updateViewportHeight);

    this.config = _Helpers__WEBPACK_IMPORTED_MODULE_0__["default"].extendDefaultSettings(this.defaults(), options);
    this.init();
  }

  _createClass(updateViewportHeight, [{
    key: "init",
    value: function init() {
      this.start = 0;
      this.updateHeight(this.config);
      window.addEventListener('resize', this.throttler.bind(this));
    }
  }, {
    key: "updateHeight",
    value: function updateHeight(_ref) {
      var property = _ref.property;
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty(property, "".concat(vh, "px"));
    }
  }, {
    key: "throttler",
    value: function throttler() {
      if (!this.scrollStart) {
        this.start = true;
        window.requestAnimationFrame(this.updateHeight.bind(this, this.config));
        this.start = false;
      }
    }
  }, {
    key: "defaults",
    value: function defaults() {
      return {
        property: '--vh'
      };
    }
  }]);

  return updateViewportHeight;
}();

/* harmony default export */ __webpack_exports__["default"] = (updateViewportHeight);

/***/ }),

/***/ "./assets/js/defaults.js":
/*!*******************************!*\
  !*** ./assets/js/defaults.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-visible */ "./node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! picturefill */ "./node_modules/picturefill/dist/picturefill.js");
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(picturefill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baguettebox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baguettebox.js */ "./node_modules/baguettebox.js/dist/baguetteBox.min.js");
/* harmony import */ var baguettebox_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baguettebox_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var van11y_accessible_accordion_aria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! van11y-accessible-accordion-aria */ "./node_modules/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js");
/* harmony import */ var van11y_accessible_accordion_aria__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(van11y_accessible_accordion_aria__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var focus_within__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! focus-within */ "./node_modules/focus-within/index.mjs");
/* harmony import */ var _components_UpdateViewportHeight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/UpdateViewportHeight */ "./assets/js/components/UpdateViewportHeight.js");


 //import Choices from 'choices.js';





 // Global function to toggle states

window.toggleState = function (el, dataname, on, off) {
  el.setAttribute("data-".concat(dataname), el.getAttribute("data-".concat(dataname)) === on ? off : on);
};

new _components_UpdateViewportHeight__WEBPACK_IMPORTED_MODULE_7__["default"]();
/**
 * Focus within polyfill
 */

Object(focus_within__WEBPACK_IMPORTED_MODULE_6__["default"])(document, {
  attr: false,
  className: 'focus-within'
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
  baguettebox_js__WEBPACK_IMPORTED_MODULE_2___default.a.run('.gallery');
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


var menuBurgerBtn = document.querySelector('.a-nav-toggle');

if (menuBurgerBtn) {
  menuBurgerBtn.addEventListener('click', function (e) {
    toggleState(document.body, 'nav', 'open', 'closed');
  });
}
/*
  Automatically open external links in new tab
*/


var links = document.links;

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
  if (links[i].hostname != window.location.hostname) {
    links[i].target = '_blank';
  }
} // LazyLoad


var lazyLoadImages = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_4___default.a();

/***/ }),

/***/ "./assets/sass/global.scss":
/*!*********************************!*\
  !*** ./assets/sass/global.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/sass/print.scss":
/*!********************************!*\
  !*** ./assets/sass/print.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/baguettebox.js/dist/baguetteBox.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/baguettebox.js/dist/baguetteBox.min.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.11.0
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(e,t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){"use strict";var s,l,u,c,d,f='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',g='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',p='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',b={},m={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},v={},h=[],o=0,n=!1,i={},a=!1,y=/.+\.(gif|jpe?g|png|webp)/i,w={},k=[],r=null,x=function(e){-1!==e.target.id.indexOf("baguette-img")&&j()},C=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,D()},E=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,X()},B=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,j()},T=function(e){i.count++,1<i.count&&(i.multitouch=!0),i.startX=e.changedTouches[0].pageX,i.startY=e.changedTouches[0].pageY},N=function(e){if(!a&&!i.multitouch){e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.touches[0]||e.changedTouches[0];40<t.pageX-i.startX?(a=!0,D()):t.pageX-i.startX<-40?(a=!0,X()):100<i.startY-t.pageY&&j()}},L=function(){i.count--,i.count<=0&&(i.multitouch=!1),a=!1},A=function(){L()},P=function(e){"block"===s.style.display&&s.contains&&!s.contains(e.target)&&(e.stopPropagation(),Y())};function S(e){if(w.hasOwnProperty(e)){var t=w[e].galleries;[].forEach.call(t,function(e){[].forEach.call(e,function(e){W(e.imageElement,"click",e.eventHandler)}),h===e&&(h=[])}),delete w[e]}}function F(e){switch(e.keyCode){case 37:D();break;case 39:X();break;case 27:j();break;case 36:!function t(e){e&&e.preventDefault();return M(0)}(e);break;case 35:!function n(e){e&&e.preventDefault();return M(h.length-1)}(e)}}function H(e,t){if(h!==e){for(h=e,function r(e){e||(e={});for(var t in m)b[t]=m[t],"undefined"!=typeof e[t]&&(b[t]=e[t]);l.style.transition=l.style.webkitTransition="fadeIn"===b.animation?"opacity .4s ease":"slideIn"===b.animation?"":"none","auto"===b.buttons&&("ontouchstart"in window||1===h.length)&&(b.buttons=!1);u.style.display=c.style.display=b.buttons?"":"none";try{s.style.backgroundColor=b.overlayBackgroundColor}catch(n){}}(t);l.firstChild;)l.removeChild(l.firstChild);for(var n,o=[],i=[],a=k.length=0;a<e.length;a++)(n=J("div")).className="full-image",n.id="baguette-img-"+a,k.push(n),o.push("baguetteBox-figure-"+a),i.push("baguetteBox-figcaption-"+a),l.appendChild(k[a]);s.setAttribute("aria-labelledby",o.join(" ")),s.setAttribute("aria-describedby",i.join(" "))}}function I(e){b.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==s.style.display&&(U(document,"keydown",F),i={count:0,startX:null,startY:null},q(o=e,function(){z(o),V(o)}),R(),s.style.display="block",b.fullScreen&&function t(){s.requestFullscreen?s.requestFullscreen():s.webkitRequestFullscreen?s.webkitRequestFullscreen():s.mozRequestFullScreen&&s.mozRequestFullScreen()}(),setTimeout(function(){s.className="visible",b.bodyClass&&document.body.classList&&document.body.classList.add(b.bodyClass),b.afterShow&&b.afterShow()},50),b.onChange&&b.onChange(o,k.length),r=document.activeElement,Y(),n=!0)}function Y(){b.buttons?u.focus():d.focus()}function j(){b.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==s.style.display&&(W(document,"keydown",F),s.className="",setTimeout(function(){s.style.display="none",document.fullscreen&&function e(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}(),b.bodyClass&&document.body.classList&&document.body.classList.remove(b.bodyClass),b.afterHide&&b.afterHide(),r&&r.focus(),n=!1},500))}function q(t,n){var e=k[t],o=h[t];if(void 0!==e&&void 0!==o)if(e.getElementsByTagName("img")[0])n&&n();else{var i=o.imageElement,a=i.getElementsByTagName("img")[0],r="function"==typeof b.captions?b.captions.call(h,i):i.getAttribute("data-caption")||i.title,s=function d(e){var t=e.href;if(e.dataset){var n=[];for(var o in e.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=e.dataset[o]);for(var i=Object.keys(n).sort(function(e,t){return parseInt(e,10)<parseInt(t,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,r=0;r<i.length-1&&i[r]<a;)r++;t=n[i[r]]||t}return t}(i),l=J("figure");if(l.id="baguetteBox-figure-"+t,l.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',b.captions&&r){var u=J("figcaption");u.id="baguetteBox-figcaption-"+t,u.innerHTML=r,l.appendChild(u)}e.appendChild(l);var c=J("img");c.onload=function(){var e=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");l.removeChild(e),!b.async&&n&&n()},c.setAttribute("src",s),c.alt=a&&a.alt||"",b.titleTag&&r&&(c.title=r),l.appendChild(c),b.async&&n&&n()}}function X(){return M(o+1)}function D(){return M(o-1)}function M(e,t){return!n&&0<=e&&e<t.length?(H(t,b),I(e),!0):e<0?(b.animation&&O("left"),!1):e>=k.length?(b.animation&&O("right"),!1):(q(o=e,function(){z(o),V(o)}),R(),b.onChange&&b.onChange(o,k.length),!0)}function O(e){l.className="bounce-from-"+e,setTimeout(function(){l.className=""},400)}function R(){var e=100*-o+"%";"fadeIn"===b.animation?(l.style.opacity=0,setTimeout(function(){v.transforms?l.style.transform=l.style.webkitTransform="translate3d("+e+",0,0)":l.style.left=e,l.style.opacity=1},400)):v.transforms?l.style.transform=l.style.webkitTransform="translate3d("+e+",0,0)":l.style.left=e}function z(e){e-o>=b.preload||q(e+1,function(){z(e+1)})}function V(e){o-e>=b.preload||q(e-1,function(){V(e-1)})}function U(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent("on"+t,function(e){(e=e||window.event).target=e.target||e.srcElement,n(e)})}function W(e,t,n,o){e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent("on"+t,n)}function G(e){return document.getElementById(e)}function J(e){return document.createElement(e)}return[].forEach||(Array.prototype.forEach=function(e,t){for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),[].filter||(Array.prototype.filter=function(e,t,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)e.call(t,n[i],i,n)&&o.push(n[i]);return o}),{run:function K(e,t){return v.transforms=function n(){var e=J("div");return"undefined"!=typeof e.style.perspective||"undefined"!=typeof e.style.webkitPerspective}(),v.svg=function o(){var e=J("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(e.firstChild&&e.firstChild.namespaceURI)}(),v.passiveEvents=function i(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}(),function a(){if(s=G("baguetteBox-overlay"))return l=G("baguetteBox-slider"),u=G("previous-button"),c=G("next-button"),void(d=G("close-button"));(s=J("div")).setAttribute("role","dialog"),s.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(s),(l=J("div")).id="baguetteBox-slider",s.appendChild(l),(u=J("button")).setAttribute("type","button"),u.id="previous-button",u.setAttribute("aria-label","Previous"),u.innerHTML=v.svg?f:"&lt;",s.appendChild(u),(c=J("button")).setAttribute("type","button"),c.id="next-button",c.setAttribute("aria-label","Next"),c.innerHTML=v.svg?g:"&gt;",s.appendChild(c),(d=J("button")).setAttribute("type","button"),d.id="close-button",d.setAttribute("aria-label","Close"),d.innerHTML=v.svg?p:"&times;",s.appendChild(d),u.className=c.className=d.className="baguetteBox-button",function t(){var e=v.passiveEvents?{passive:!0}:null;U(s,"click",x),U(u,"click",C),U(c,"click",E),U(d,"click",B),U(l,"contextmenu",A),U(s,"touchstart",T,e),U(s,"touchmove",N,e),U(s,"touchend",L),U(document,"focus",P,!0)}()}(),S(e),function r(e,a){var t=document.querySelectorAll(e),n={galleries:[],nodeList:t};return w[e]=n,[].forEach.call(t,function(e){a&&a.filter&&(y=a.filter);var t=[];if(t="A"===e.tagName?[e]:e.getElementsByTagName("a"),0!==(t=[].filter.call(t,function(e){if(-1===e.className.indexOf(a&&a.ignoreClass))return y.test(e.href)})).length){var i=[];[].forEach.call(t,function(e,t){var n=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,H(i,a),I(t)},o={eventHandler:n,imageElement:e};U(e,"click",n),i.push(o)}),n.galleries.push(i)}}),n.galleries}(e,t)},show:M,showNext:X,showPrevious:D,hide:j,destroy:function e(){!function t(){var e=v.passiveEvents?{passive:!0}:null;W(s,"click",x),W(u,"click",C),W(c,"click",E),W(d,"click",B),W(l,"contextmenu",A),W(s,"touchstart",T,e),W(s,"touchmove",N,e),W(s,"touchend",L),W(document,"focus",P,!0)}(),function n(){for(var e in w)w.hasOwnProperty(e)&&S(e)}(),W(document,"keydown",F),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),w={},h=[],o=0}}});

/***/ }),

/***/ "./node_modules/focus-visible/dist/focus-visible.js":
/*!**********************************************************!*\
  !*** ./node_modules/focus-visible/dist/focus-visible.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory() :
  undefined;
}(this, (function () { 'use strict';

  /**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */
  function applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;

    var inputTypesWhitelist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      'datetime-local': true
    };

    /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */
    function isValidFocusTarget(el) {
      if (
        el &&
        el !== document &&
        el.nodeName !== 'HTML' &&
        el.nodeName !== 'BODY' &&
        'classList' in el &&
        'contains' in el.classList
      ) {
        return true;
      }
      return false;
    }

    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */
    function focusTriggersKeyboardModality(el) {
      var type = el.type;
      var tagName = el.tagName;

      if (tagName == 'INPUT' && inputTypesWhitelist[type] && !el.readOnly) {
        return true;
      }

      if (tagName == 'TEXTAREA' && !el.readOnly) {
        return true;
      }

      if (el.isContentEditable) {
        return true;
      }

      return false;
    }

    /**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */
    function addFocusVisibleClass(el) {
      if (el.classList.contains('focus-visible')) {
        return;
      }
      el.classList.add('focus-visible');
      el.setAttribute('data-focus-visible-added', '');
    }

    /**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */
    function removeFocusVisibleClass(el) {
      if (!el.hasAttribute('data-focus-visible-added')) {
        return;
      }
      el.classList.remove('focus-visible');
      el.removeAttribute('data-focus-visible-added');
    }

    /**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */
    function onKeyDown(e) {
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }

      if (isValidFocusTarget(scope.activeElement)) {
        addFocusVisibleClass(scope.activeElement);
      }

      hadKeyboardEvent = true;
    }

    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */
    function onPointerDown(e) {
      hadKeyboardEvent = false;
    }

    /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */
    function onFocus(e) {
      // Prevent IE from focusing the document or HTML element.
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
        addFocusVisibleClass(e.target);
      }
    }

    /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */
    function onBlur(e) {
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (
        e.target.classList.contains('focus-visible') ||
        e.target.hasAttribute('data-focus-visible-added')
      ) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
          hadFocusVisibleRecently = false;
          window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        }, 100);
        removeFocusVisibleClass(e.target);
      }
    }

    /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */
    function onVisibilityChange(e) {
      if (document.visibilityState == 'hidden') {
        // If the tab becomes active again, the browser will handle calling focus
        // on the element (Safari actually calls it twice).
        // If this tab change caused a blur on an element with focus-visible,
        // re-apply the class when the user switches back to the tab.
        if (hadFocusVisibleRecently) {
          hadKeyboardEvent = true;
        }
        addInitialPointerMoveListeners();
      }
    }

    /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */
    function addInitialPointerMoveListeners() {
      document.addEventListener('mousemove', onInitialPointerMove);
      document.addEventListener('mousedown', onInitialPointerMove);
      document.addEventListener('mouseup', onInitialPointerMove);
      document.addEventListener('pointermove', onInitialPointerMove);
      document.addEventListener('pointerdown', onInitialPointerMove);
      document.addEventListener('pointerup', onInitialPointerMove);
      document.addEventListener('touchmove', onInitialPointerMove);
      document.addEventListener('touchstart', onInitialPointerMove);
      document.addEventListener('touchend', onInitialPointerMove);
    }

    function removeInitialPointerMoveListeners() {
      document.removeEventListener('mousemove', onInitialPointerMove);
      document.removeEventListener('mousedown', onInitialPointerMove);
      document.removeEventListener('mouseup', onInitialPointerMove);
      document.removeEventListener('pointermove', onInitialPointerMove);
      document.removeEventListener('pointerdown', onInitialPointerMove);
      document.removeEventListener('pointerup', onInitialPointerMove);
      document.removeEventListener('touchmove', onInitialPointerMove);
      document.removeEventListener('touchstart', onInitialPointerMove);
      document.removeEventListener('touchend', onInitialPointerMove);
    }

    /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */
    function onInitialPointerMove(e) {
      // Work around a Safari quirk that fires a mousemove on <html> whenever the
      // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
      if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
        return;
      }

      hadKeyboardEvent = false;
      removeInitialPointerMoveListeners();
    }

    // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:
    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('visibilitychange', onVisibilityChange, true);

    addInitialPointerMoveListeners();

    // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:
    scope.addEventListener('focus', onFocus, true);
    scope.addEventListener('blur', onBlur, true);

    // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only cared
    // about the native implementation, we could just check if the scope was
    // an instance of a ShadowRoot.
    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
      // Since a ShadowRoot is a special kind of DocumentFragment, it does not
      // have a root element to add a class to. So, we add this attribute to the
      // host element instead:
      scope.host.setAttribute('data-js-focus-visible', '');
    } else if (scope.nodeType === Node.DOCUMENT_NODE) {
      document.documentElement.classList.add('js-focus-visible');
    }
  }

  // It is important to wrap all references to global window and document in
  // these checks to support server-side rendering use cases
  // @see https://github.com/WICG/focus-visible/issues/199
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Make the polyfill helper globally available. This can be used as a signal
    // to interested libraries that wish to coordinate with the polyfill for e.g.,
    // applying the polyfill to a shadow root:
    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

    // Notify interested libraries of the polyfill's presence, in case the
    // polyfill was loaded lazily:
    var event;

    try {
      event = new CustomEvent('focus-visible-polyfill-ready');
    } catch (error) {
      // IE11 does not support using CustomEvent as a constructor directly:
      event = document.createEvent('CustomEvent');
      event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
    }

    window.dispatchEvent(event);
  }

  if (typeof document !== 'undefined') {
    // Apply the polyfill to the global document, so that no JavaScript
    // coordination is required to use the polyfill in the top-level document:
    applyFocusVisiblePolyfill(document);
  }

})));


/***/ }),

/***/ "./node_modules/focus-within/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/focus-within/index.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function focusWithin(document, opts) {
  const className = Object(opts).className;
  const attr = Object(opts).attr || 'focus-within';
  const force = Object(opts).force;
  const lastElements = [];

  try {
    document.querySelector(':focus-within');

    if (!force) {
      return initialize;
    }
  } catch (ignoredError) {
    /* do nothing and continue */
  }

  function onfocuschange() {
    let lastElement;

    while (lastElement = lastElements.pop()) {
      if (attr) {
        lastElement.removeAttribute(attr);
      }

      if (className) {
        lastElement.classList.remove(className);
      }
    }

    let activeElement = document.activeElement; // only add focus if it has not been added and is not the document element

    if (!/^(#document|HTML|BODY)$/.test(Object(activeElement).nodeName)) {
      while (activeElement && activeElement.nodeType === 1) {
        if (attr) {
          activeElement.setAttribute(attr, '');
        }

        if (className) {
          activeElement.classList.add(className);
        }

        lastElements.push(activeElement);
        activeElement = activeElement.parentNode;
      }
    }
  }

  function initialize() {
    document.addEventListener('focus', onfocuschange, true);
    document.addEventListener('blur', onfocuschange, true);
  }
  /**
  * Callback wrapper for check loaded state
  */

  /* eslint-disable */


  !function load() {
    if (/m/.test(document.readyState)) {
      document.removeEventListener('readystatechange', load) | initialize();
    } else {
      document.addEventListener('readystatechange', load);
    }
  }();
  /* eslint-enable */

  return initialize;
}

/* harmony default export */ __webpack_exports__["default"] = (focusWithin);
//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/picturefill/dist/picturefill.js":
/*!******************************************************!*\
  !*** ./node_modules/picturefill/dist/picturefill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function(window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if ( window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) ) {
		addEventListener("resize", (function() {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function() {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function() {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function() {
				onResize();

				if (mq && mq.addListener) {
					mq.addListener(onResize);
				}
			};

			dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

			if (/^[c|i]|d$/.test(document.readyState || "")) {
				init();
			} else {
				document.addEventListener("DOMContentLoaded", init);
			}

			return onResize;
		})());
	}
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function( window, document, undefined ) {
	// Enable strict mode
	"use strict";

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
	document.createElement( "picture" );

	var warn, eminpx, alwaysCheckWDescriptor, evalId;
	// local object for method references and testing exposure
	var pf = {};
	var isSupportTestReady = false;
	var noop = function() {};
	var image = document.createElement( "img" );
	var getImgAttr = image.getAttribute;
	var setImgAttr = image.setAttribute;
	var removeImgAttr = image.removeAttribute;
	var docElem = document.documentElement;
	var types = {};
	var cfg = {
		//resource selection:
		algorithm: ""
	};
	var srcAttr = "data-pfsrc";
	var srcsetAttr = srcAttr + "set";
	// ua sniffing is done for undetectable img loading features,
	// to do some non crucial perf optimizations
	var ua = navigator.userAgent;
	var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35 );
	var curSrcProp = "currentSrc";
	var regWDesc = /\s+\+?\d+(e\d+)?w/;
	var regSize = /(\([^)]+\))?\s*(.+)/;
	var setOptions = window.picturefillCFG;
	/**
	 * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
	 */
	// baseStyle also used by getEmValue (i.e.: width: 1em is important)
	var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
	var fsCss = "font-size:100%!important;";
	var isVwDirty = true;

	var cssCache = {};
	var sizeLengthCache = {};
	var DPR = window.devicePixelRatio;
	var units = {
		px: 1,
		"in": 96
	};
	var anchor = document.createElement( "a" );
	/**
	 * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
	 * @type {boolean}
	 */
	var alreadyRun = false;

	// Reusable, non-"g" Regexes

	// (Don't use \s, to avoid matching non-breaking space.)
	var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
	    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
	    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
	    regexTrailingCommas = /[,]+$/,
	    regexNonNegativeInteger = /^\d+$/,

	    // ( Positive or negative or unsigned integers or decimals, without or without exponents.
	    // Must include at least one digit.
	    // According to spec tests any decimal point must be followed by a digit.
	    // No leading plus sign is allowed.)
	    // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
	    regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

	var on = function(obj, evt, fn, capture) {
		if ( obj.addEventListener ) {
			obj.addEventListener(evt, fn, capture || false);
		} else if ( obj.attachEvent ) {
			obj.attachEvent( "on" + evt, fn);
		}
	};

	/**
	 * simple memoize function:
	 */

	var memoize = function(fn) {
		var cache = {};
		return function(input) {
			if ( !(input in cache) ) {
				cache[ input ] = fn(input);
			}
			return cache[ input ];
		};
	};

	// UTILITY FUNCTIONS

	// Manual is faster than RegEx
	// http://jsperf.com/whitespace-character/5
	function isSpace(c) {
		return (c === "\u0020" || // space
		        c === "\u0009" || // horizontal tab
		        c === "\u000A" || // new line
		        c === "\u000C" || // form feed
		        c === "\u000D");  // carriage return
	}

	/**
	 * gets a mediaquery and returns a boolean or gets a css length and returns a number
	 * @param css mediaqueries or css length
	 * @returns {boolean|number}
	 *
	 * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
	 */
	var evalCSS = (function() {

		var regLength = /^([\d\.]+)(em|vw|px)$/;
		var replace = function() {
			var args = arguments, index = 0, string = args[0];
			while (++index in args) {
				string = string.replace(args[index], args[++index]);
			}
			return string;
		};

		var buildStr = memoize(function(css) {

			return "return " + replace((css || "").toLowerCase(),
				// interpret `and`
				/\band\b/g, "&&",

				// interpret `,`
				/,/g, "||",

				// interpret `min-` as >=
				/min-([a-z-\s]+):/g, "e.$1>=",

				// interpret `max-` as <=
				/max-([a-z-\s]+):/g, "e.$1<=",

				//calc value
				/calc([^)]+)/g, "($1)",

				// interpret css values
				/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
				//make eval less evil
				/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, ""
			) + ";";
		});

		return function(css, length) {
			var parsedLength;
			if (!(css in cssCache)) {
				cssCache[css] = false;
				if (length && (parsedLength = css.match( regLength ))) {
					cssCache[css] = parsedLength[ 1 ] * units[parsedLength[ 2 ]];
				} else {
					/*jshint evil:true */
					try{
						cssCache[css] = new Function("e", buildStr(css))(units);
					} catch(e) {}
					/*jshint evil:false */
				}
			}
			return cssCache[css];
		};
	})();

	var setResolution = function( candidate, sizesattr ) {
		if ( candidate.w ) { // h = means height: || descriptor.type === 'h' do not handle yet...
			candidate.cWidth = pf.calcListLength( sizesattr || "100vw" );
			candidate.res = candidate.w / candidate.cWidth ;
		} else {
			candidate.res = candidate.d;
		}
		return candidate;
	};

	/**
	 *
	 * @param opt
	 */
	var picturefill = function( opt ) {

		if (!isSupportTestReady) {return;}

		var elements, i, plen;

		var options = opt || {};

		if ( options.elements && options.elements.nodeType === 1 ) {
			if ( options.elements.nodeName.toUpperCase() === "IMG" ) {
				options.elements =  [ options.elements ];
			} else {
				options.context = options.elements;
				options.elements =  null;
			}
		}

		elements = options.elements || pf.qsa( (options.context || document), ( options.reevaluate || options.reselect ) ? pf.sel : pf.selShort );

		if ( (plen = elements.length) ) {

			pf.setupRun( options );
			alreadyRun = true;

			// Loop through all elements
			for ( i = 0; i < plen; i++ ) {
				pf.fillImg(elements[ i ], options);
			}

			pf.teardownRun( options );
		}
	};

	/**
	 * outputs a warning for the developer
	 * @param {message}
	 * @type {Function}
	 */
	warn = ( window.console && console.warn ) ?
		function( message ) {
			console.warn( message );
		} :
		noop
	;

	if ( !(curSrcProp in image) ) {
		curSrcProp = "src";
	}

	// Add support for standard mime types.
	types[ "image/jpeg" ] = true;
	types[ "image/gif" ] = true;
	types[ "image/png" ] = true;

	function detectTypeSupport( type, typeUri ) {
		// based on Modernizr's lossless img-webp test
		// note: asynchronous
		var image = new window.Image();
		image.onerror = function() {
			types[ type ] = false;
			picturefill();
		};
		image.onload = function() {
			types[ type ] = image.width === 1;
			picturefill();
		};
		image.src = typeUri;
		return "pending";
	}

	// test svg support
	types[ "image/svg+xml" ] = document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" );

	/**
	 * updates the internal vW property with the current viewport width in px
	 */
	function updateMetrics() {

		isVwDirty = false;
		DPR = window.devicePixelRatio;
		cssCache = {};
		sizeLengthCache = {};

		pf.DPR = DPR || 1;

		units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
		units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

		units.vw = units.width / 100;
		units.vh = units.height / 100;

		evalId = [ units.height, units.width, DPR ].join("-");

		units.em = pf.getEmValue();
		units.rem = units.em;
	}

	function chooseLowRes( lowerValue, higherValue, dprValue, isCached ) {
		var bonusFactor, tooMuch, bonus, meanDensity;

		//experimental
		if (cfg.algorithm === "saveData" ){
			if ( lowerValue > 2.7 ) {
				meanDensity = dprValue + 1;
			} else {
				tooMuch = higherValue - dprValue;
				bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

				bonus = tooMuch * bonusFactor;

				if (isCached) {
					bonus += 0.1 * bonusFactor;
				}

				meanDensity = lowerValue + bonus;
			}
		} else {
			meanDensity = (dprValue > 1) ?
				Math.sqrt(lowerValue * higherValue) :
				lowerValue;
		}

		return meanDensity > dprValue;
	}

	function applyBestCandidate( img ) {
		var srcSetCandidates;
		var matchingSet = pf.getSet( img );
		var evaluated = false;
		if ( matchingSet !== "pending" ) {
			evaluated = evalId;
			if ( matchingSet ) {
				srcSetCandidates = pf.setRes( matchingSet );
				pf.applySetCandidate( srcSetCandidates, img );
			}
		}
		img[ pf.ns ].evaled = evaluated;
	}

	function ascendingSort( a, b ) {
		return a.res - b.res;
	}

	function setSrcToCur( img, src, set ) {
		var candidate;
		if ( !set && src ) {
			set = img[ pf.ns ].sets;
			set = set && set[set.length - 1];
		}

		candidate = getCandidateForSrc(src, set);

		if ( candidate ) {
			src = pf.makeUrl(src);
			img[ pf.ns ].curSrc = src;
			img[ pf.ns ].curCan = candidate;

			if ( !candidate.res ) {
				setResolution( candidate, candidate.set.sizes );
			}
		}
		return candidate;
	}

	function getCandidateForSrc( src, set ) {
		var i, candidate, candidates;
		if ( src && set ) {
			candidates = pf.parseSet( set );
			src = pf.makeUrl(src);
			for ( i = 0; i < candidates.length; i++ ) {
				if ( src === pf.makeUrl(candidates[ i ].url) ) {
					candidate = candidates[ i ];
					break;
				}
			}
		}
		return candidate;
	}

	function getAllSourceElements( picture, candidates ) {
		var i, len, source, srcset;

		// SPEC mismatch intended for size and perf:
		// actually only source elements preceding the img should be used
		// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
		var sources = picture.getElementsByTagName( "source" );

		for ( i = 0, len = sources.length; i < len; i++ ) {
			source = sources[ i ];
			source[ pf.ns ] = true;
			srcset = source.getAttribute( "srcset" );

			// if source does not have a srcset attribute, skip
			if ( srcset ) {
				candidates.push( {
					srcset: srcset,
					media: source.getAttribute( "media" ),
					type: source.getAttribute( "type" ),
					sizes: source.getAttribute( "sizes" )
				} );
			}
		}
	}

	/**
	 * Srcset Parser
	 * By Alex Bell |  MIT License
	 *
	 * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
	 *
	 * Based super duper closely on the reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	 */

	// 1. Let input be the value passed to this algorithm.
	// (TO-DO : Explain what "set" argument is here. Maybe choose a more
	// descriptive & more searchable name.  Since passing the "set" in really has
	// nothing to do with parsing proper, I would prefer this assignment eventually
	// go in an external fn.)
	function parseSrcset(input, set) {

		function collectCharacters(regEx) {
			var chars,
			    match = regEx.exec(input.substring(pos));
			if (match) {
				chars = match[ 0 ];
				pos += chars.length;
				return chars;
			}
		}

		var inputLength = input.length,
		    url,
		    descriptors,
		    currentDescriptor,
		    state,
		    c,

		    // 2. Let position be a pointer into input, initially pointing at the start
		    //    of the string.
		    pos = 0,

		    // 3. Let candidates be an initially empty source set.
		    candidates = [];

		/**
		* Adds descriptor properties to a candidate, pushes to the candidates array
		* @return undefined
		*/
		// (Declared outside of the while loop so that it's only created once.
		// (This fn is defined before it is used, in order to pass JSHINT.
		// Unfortunately this breaks the sequencing of the spec comments. :/ )
		function parseDescriptors() {

			// 9. Descriptor parser: Let error be no.
			var pError = false,

			// 10. Let width be absent.
			// 11. Let density be absent.
			// 12. Let future-compat-h be absent. (We're implementing it now as h)
			    w, d, h, i,
			    candidate = {},
			    desc, lastChar, value, intVal, floatVal;

			// 13. For each descriptor in descriptors, run the appropriate set of steps
			// from the following list:
			for (i = 0 ; i < descriptors.length; i++) {
				desc = descriptors[ i ];

				lastChar = desc[ desc.length - 1 ];
				value = desc.substring(0, desc.length - 1);
				intVal = parseInt(value, 10);
				floatVal = parseFloat(value);

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0077 LATIN SMALL LETTER W character
				if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

					// If width and density are not both absent, then let error be yes.
					if (w || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes.
					// Otherwise, let width be the result.
					if (intVal === 0) {pError = true;} else {w = intVal;}

				// If the descriptor consists of a valid floating-point number followed by
				// a U+0078 LATIN SMALL LETTER X character
				} else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

					// If width, density and future-compat-h are not all absent, then let error
					// be yes.
					if (w || d || h) {pError = true;}

					// Apply the rules for parsing floating-point number values to the descriptor.
					// If the result is less than zero, let error be yes. Otherwise, let density
					// be the result.
					if (floatVal < 0) {pError = true;} else {d = floatVal;}

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0068 LATIN SMALL LETTER H character
				} else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

					// If height and density are not both absent, then let error be yes.
					if (h || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes. Otherwise, let future-compat-h
					// be the result.
					if (intVal === 0) {pError = true;} else {h = intVal;}

				// Anything else, Let error be yes.
				} else {pError = true;}
			} // (close step 13 for loop)

			// 15. If error is still no, then append a new image source to candidates whose
			// URL is url, associated with a width width if not absent and a pixel
			// density density if not absent. Otherwise, there is a parse error.
			if (!pError) {
				candidate.url = url;

				if (w) { candidate.w = w;}
				if (d) { candidate.d = d;}
				if (h) { candidate.h = h;}
				if (!h && !d && !w) {candidate.d = 1;}
				if (candidate.d === 1) {set.has1x = true;}
				candidate.set = set;

				candidates.push(candidate);
			}
		} // (close parseDescriptors fn)

		/**
		* Tokenizes descriptor properties prior to parsing
		* Returns undefined.
		* (Again, this fn is defined before it is used, in order to pass JSHINT.
		* Unfortunately this breaks the logical sequencing of the spec comments. :/ )
		*/
		function tokenize() {

			// 8.1. Descriptor tokeniser: Skip whitespace
			collectCharacters(regexLeadingSpaces);

			// 8.2. Let current descriptor be the empty string.
			currentDescriptor = "";

			// 8.3. Let state be in descriptor.
			state = "in descriptor";

			while (true) {

				// 8.4. Let c be the character at position.
				c = input.charAt(pos);

				//  Do the following depending on the value of state.
				//  For the purpose of this step, "EOF" is a special character representing
				//  that position is past the end of input.

				// In descriptor
				if (state === "in descriptor") {
					// Do the following, depending on the value of c:

				  // Space character
				  // If current descriptor is not empty, append current descriptor to
				  // descriptors and let current descriptor be the empty string.
				  // Set state to after descriptor.
					if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}

					// U+002C COMMA (,)
					// Advance position to the next character in input. If current descriptor
					// is not empty, append current descriptor to descriptors. Jump to the step
					// labeled descriptor parser.
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// U+0028 LEFT PARENTHESIS (()
					// Append c to current descriptor. Set state to in parens.
					} else if (c === "\u0028") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";

					// EOF
					// If current descriptor is not empty, append current descriptor to
					// descriptors. Jump to the step labeled descriptor parser.
					} else if (c === "") {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}
				// (end "in descriptor"

				// In parens
				} else if (state === "in parens") {

					// U+0029 RIGHT PARENTHESIS ())
					// Append c to current descriptor. Set state to in descriptor.
					if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";

					// EOF
					// Append current descriptor to descriptors. Jump to the step labeled
					// descriptor parser.
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}

				// After descriptor
				} else if (state === "after descriptor") {

					// Do the following, depending on the value of c:
					// Space character: Stay in this state.
					if (isSpace(c)) {

					// EOF: Jump to the step labeled descriptor parser.
					} else if (c === "") {
						parseDescriptors();
						return;

					// Anything else
					// Set state to in descriptor. Set position to the previous character in input.
					} else {
						state = "in descriptor";
						pos -= 1;

					}
				}

				// Advance position to the next character in input.
				pos += 1;

			// Repeat this step.
			} // (close while true loop)
		}

		// 4. Splitting loop: Collect a sequence of characters that are space
		//    characters or U+002C COMMA characters. If any U+002C COMMA characters
		//    were collected, that is a parse error.
		while (true) {
			collectCharacters(regexLeadingCommasOrSpaces);

			// 5. If position is past the end of input, return candidates and abort these steps.
			if (pos >= inputLength) {
				return candidates; // (we're done, this is the sole return path)
			}

			// 6. Collect a sequence of characters that are not space characters,
			//    and let that be url.
			url = collectCharacters(regexLeadingNotSpaces);

			// 7. Let descriptors be a new empty list.
			descriptors = [];

			// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
			//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
			//         more than one character, that is a parse error.
			if (url.slice(-1) === ",") {
				url = url.replace(regexTrailingCommas, "");
				// (Jump ahead to step 9 to skip tokenization and just push the candidate).
				parseDescriptors();

			//	Otherwise, follow these substeps:
			} else {
				tokenize();
			} // (close else of step 8)

		// 16. Return to the step labeled splitting loop.
		} // (Close of big while loop.)
	}

	/*
	 * Sizes Parser
	 *
	 * By Alex Bell |  MIT License
	 *
	 * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
	 *
	 * Reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
	 *
	 * Most comments are copied in directly from the spec
	 * (except for comments in parens).
	 *
	 * Grammar is:
	 * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
	 * <source-size> = <media-condition> <source-size-value>
	 * <source-size-value> = <length>
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
	 *
	 * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
	 * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
	 *
	 * Returns the first valid <css-length> with a media condition that evaluates to true,
	 * or "100vw" if all valid media conditions evaluate to false.
	 *
	 */

	function parseSizes(strValue) {

		// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
		// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
		// CSS allows a single optional plus or minus sign:
		// http://www.w3.org/TR/CSS2/syndata.html#numbers
		// CSS is ASCII case-insensitive:
		// http://www.w3.org/TR/CSS2/syndata.html#characters )
		// Spec allows exponential notation for <number> type:
		// http://dev.w3.org/csswg/css-values/#numbers
		var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

		// (This is a quick and lenient test. Because of optional unlimited-depth internal
		// grouping parens and strict spacing rules, this could get very complicated.)
		var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

		var i;
		var unparsedSizesList;
		var unparsedSizesListLength;
		var unparsedSize;
		var lastComponentValue;
		var size;

		// UTILITY FUNCTIONS

		//  (Toy CSS parser. The goals here are:
		//  1) expansive test coverage without the weight of a full CSS parser.
		//  2) Avoiding regex wherever convenient.
		//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
		//  Returns an array of arrays.)
		function parseComponentValues(str) {
			var chrctr;
			var component = "";
			var componentArray = [];
			var listArray = [];
			var parenDepth = 0;
			var pos = 0;
			var inComment = false;

			function pushComponent() {
				if (component) {
					componentArray.push(component);
					component = "";
				}
			}

			function pushComponentArray() {
				if (componentArray[0]) {
					listArray.push(componentArray);
					componentArray = [];
				}
			}

			// (Loop forwards from the beginning of the string.)
			while (true) {
				chrctr = str.charAt(pos);

				if (chrctr === "") { // ( End of string reached.)
					pushComponent();
					pushComponentArray();
					return listArray;
				} else if (inComment) {
					if ((chrctr === "*") && (str[pos + 1] === "/")) { // (At end of a comment.)
						inComment = false;
						pos += 2;
						pushComponent();
						continue;
					} else {
						pos += 1; // (Skip all characters inside comments.)
						continue;
					}
				} else if (isSpace(chrctr)) {
					// (If previous character in loop was also a space, or if
					// at the beginning of the string, do not add space char to
					// component.)
					if ( (str.charAt(pos - 1) && isSpace( str.charAt(pos - 1) ) ) || !component ) {
						pos += 1;
						continue;
					} else if (parenDepth === 0) {
						pushComponent();
						pos +=1;
						continue;
					} else {
						// (Replace any space character with a plain space for legibility.)
						chrctr = " ";
					}
				} else if (chrctr === "(") {
					parenDepth += 1;
				} else if (chrctr === ")") {
					parenDepth -= 1;
				} else if (chrctr === ",") {
					pushComponent();
					pushComponentArray();
					pos += 1;
					continue;
				} else if ( (chrctr === "/") && (str.charAt(pos + 1) === "*") ) {
					inComment = true;
					pos += 2;
					continue;
				}

				component = component + chrctr;
				pos += 1;
			}
		}

		function isValidNonNegativeSourceSizeValue(s) {
			if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {return true;}
			if (regexCssCalc.test(s)) {return true;}
			// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
			// "-0 is equivalent to 0 and is not a negative number." which means that
			// unitless zero and unitless negative zero must be accepted as special cases.)
			if ((s === "0") || (s === "-0") || (s === "+0")) {return true;}
			return false;
		}

		// When asked to parse a sizes attribute from an element, parse a
		// comma-separated list of component values from the value of the element's
		// sizes attribute (or the empty string, if the attribute is absent), and let
		// unparsed sizes list be the result.
		// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

		unparsedSizesList = parseComponentValues(strValue);
		unparsedSizesListLength = unparsedSizesList.length;

		// For each unparsed size in unparsed sizes list:
		for (i = 0; i < unparsedSizesListLength; i++) {
			unparsedSize = unparsedSizesList[i];

			// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
			// ( parseComponentValues() already omits spaces outside of parens. )

			// If unparsed size is now empty, that is a parse error; continue to the next
			// iteration of this algorithm.
			// ( parseComponentValues() won't push an empty array. )

			// 2. If the last component value in unparsed size is a valid non-negative
			// <source-size-value>, let size be its value and remove the component value
			// from unparsed size. Any CSS function other than the calc() function is
			// invalid. Otherwise, there is a parse error; continue to the next iteration
			// of this algorithm.
			// http://dev.w3.org/csswg/css-syntax/#parse-component-value
			lastComponentValue = unparsedSize[unparsedSize.length - 1];

			if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
				size = lastComponentValue;
				unparsedSize.pop();
			} else {
				continue;
			}

			// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
			// size. If unparsed size is now empty, return size and exit this algorithm.
			// If this was not the last item in unparsed sizes list, that is a parse error.
			if (unparsedSize.length === 0) {
				return size;
			}

			// 4. Parse the remaining component values in unparsed size as a
			// <media-condition>. If it does not parse correctly, or it does parse
			// correctly but the <media-condition> evaluates to false, continue to the
			// next iteration of this algorithm.
			// (Parsing all possible compound media conditions in JS is heavy, complicated,
			// and the payoff is unclear. Is there ever an situation where the
			// media condition parses incorrectly but still somehow evaluates to true?
			// Can we just rely on the browser/polyfill to do it?)
			unparsedSize = unparsedSize.join(" ");
			if (!(pf.matchesMedia( unparsedSize ) ) ) {
				continue;
			}

			// 5. Return size and exit this algorithm.
			return size;
		}

		// If the above algorithm exhausts unparsed sizes list without returning a
		// size value, return 100vw.
		return "100vw";
	}

	// namespace
	pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

	// srcset support test
	pf.supSrcset = "srcset" in image;
	pf.supSizes = "sizes" in image;
	pf.supPicture = !!window.HTMLPictureElement;

	// UC browser does claim to support srcset and picture, but not sizes,
	// this extended test reveals the browser does support nothing
	if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
		(function(image2) {
			image.srcset = "data:,a";
			image2.src = "data:,a";
			pf.supSrcset = image.complete === image2.complete;
			pf.supPicture = pf.supSrcset && pf.supPicture;
		})(document.createElement("img"));
	}

	// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
	if (pf.supSrcset && !pf.supSizes) {

		(function() {
			var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
			var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
			var img = document.createElement("img");
			var test = function() {
				var width = img.width;

				if (width === 2) {
					pf.supSizes = true;
				}

				alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

				isSupportTestReady = true;
				// force async
				setTimeout(picturefill);
			};

			img.onload = test;
			img.onerror = test;
			img.setAttribute("sizes", "9px");

			img.srcset = width1 + " 1w," + width2 + " 9w";
			img.src = width1;
		})();

	} else {
		isSupportTestReady = true;
	}

	// using pf.qsa instead of dom traversing does scale much better,
	// especially on sites mixing responsive and non-responsive images
	pf.selShort = "picture>img,img[srcset]";
	pf.sel = pf.selShort;
	pf.cfg = cfg;

	/**
	 * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
	 */
	pf.DPR = (DPR  || 1 );
	pf.u = units;

	// container of supported mime types that one might need to qualify before using
	pf.types =  types;

	pf.setSize = noop;

	/**
	 * Gets a string and returns the absolute URL
	 * @param src
	 * @returns {String} absolute URL
	 */

	pf.makeUrl = memoize(function(src) {
		anchor.href = src;
		return anchor.href;
	});

	/**
	 * Gets a DOM element or document and a selctor and returns the found matches
	 * Can be extended with jQuery/Sizzle for IE7 support
	 * @param context
	 * @param sel
	 * @returns {NodeList|Array}
	 */
	pf.qsa = function(context, sel) {
		return ( "querySelector" in context ) ? context.querySelectorAll(sel) : [];
	};

	/**
	 * Shortcut method for matchMedia ( for easy overriding in tests )
	 * wether native or pf.mMQ is used will be decided lazy on first call
	 * @returns {boolean}
	 */
	pf.matchesMedia = function() {
		if ( window.matchMedia && (matchMedia( "(min-width: 0.1em)" ) || {}).matches ) {
			pf.matchesMedia = function( media ) {
				return !media || ( matchMedia( media ).matches );
			};
		} else {
			pf.matchesMedia = pf.mMQ;
		}

		return pf.matchesMedia.apply( this, arguments );
	};

	/**
	 * A simplified matchMedia implementation for IE8 and IE9
	 * handles only min-width/max-width with px or em values
	 * @param media
	 * @returns {boolean}
	 */
	pf.mMQ = function( media ) {
		return media ? evalCSS(media) : true;
	};

	/**
	 * Returns the calculated length in css pixel from the given sourceSizeValue
	 * http://dev.w3.org/csswg/css-values-3/#length-value
	 * intended Spec mismatches:
	 * * Does not check for invalid use of CSS functions
	 * * Does handle a computed length of 0 the same as a negative and therefore invalid value
	 * @param sourceSizeValue
	 * @returns {Number}
	 */
	pf.calcLength = function( sourceSizeValue ) {

		var value = evalCSS(sourceSizeValue, true) || false;
		if (value < 0) {
			value = false;
		}

		return value;
	};

	/**
	 * Takes a type string and checks if its supported
	 */

	pf.supportsType = function( type ) {
		return ( type ) ? types[ type ] : true;
	};

	/**
	 * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
	 * @param sourceSizeStr
	 * @returns {*}
	 */
	pf.parseSize = memoize(function( sourceSizeStr ) {
		var match = ( sourceSizeStr || "" ).match(regSize);
		return {
			media: match && match[1],
			length: match && match[2]
		};
	});

	pf.parseSet = function( set ) {
		if ( !set.cands ) {
			set.cands = parseSrcset(set.srcset, set);
		}
		return set.cands;
	};

	/**
	 * returns 1em in css px for html/body default size
	 * function taken from respondjs
	 * @returns {*|number}
	 */
	pf.getEmValue = function() {
		var body;
		if ( !eminpx && (body = document.body) ) {
			var div = document.createElement( "div" ),
				originalHTMLCSS = docElem.style.cssText,
				originalBodyCSS = body.style.cssText;

			div.style.cssText = baseStyle;

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.cssText = fsCss;
			body.style.cssText = fsCss;

			body.appendChild( div );
			eminpx = div.offsetWidth;
			body.removeChild( div );

			//also update eminpx before returning
			eminpx = parseFloat( eminpx, 10 );

			// restore the original values
			docElem.style.cssText = originalHTMLCSS;
			body.style.cssText = originalBodyCSS;

		}
		return eminpx || 16;
	};

	/**
	 * Takes a string of sizes and returns the width in pixels as a number
	 */
	pf.calcListLength = function( sourceSizeListStr ) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//
		//                           or (min-width:30em) calc(30% - 15px)
		if ( !(sourceSizeListStr in sizeLengthCache) || cfg.uT ) {
			var winningLength = pf.calcLength( parseSizes( sourceSizeListStr ) );

			sizeLengthCache[ sourceSizeListStr ] = !winningLength ? units.width : winningLength;
		}

		return sizeLengthCache[ sourceSizeListStr ];
	};

	/**
	 * Takes a candidate object with a srcset property in the form of url/
	 * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
	 *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
	 *     "images/pic-small.png"
	 * Get an array of image candidates in the form of
	 *      {url: "/foo/bar.png", resolution: 1}
	 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
	 * If sizes is specified, res is calculated
	 */
	pf.setRes = function( set ) {
		var candidates;
		if ( set ) {

			candidates = pf.parseSet( set );

			for ( var i = 0, len = candidates.length; i < len; i++ ) {
				setResolution( candidates[ i ], set.sizes );
			}
		}
		return candidates;
	};

	pf.setRes.res = setResolution;

	pf.applySetCandidate = function( candidates, img ) {
		if ( !candidates.length ) {return;}
		var candidate,
			i,
			j,
			length,
			bestCandidate,
			curSrc,
			curCan,
			candidateSrc,
			abortCurSrc;

		var imageData = img[ pf.ns ];
		var dpr = pf.DPR;

		curSrc = imageData.curSrc || img[curSrcProp];

		curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

		// if we have a current source, we might either become lazy or give this source some advantage
		if ( curCan && curCan.set === candidates[ 0 ].set ) {

			// if browser can abort image request and the image has a higher pixel density than needed
			// and this image isn't downloaded yet, we skip next part and try to save bandwidth
			abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);

			if ( !abortCurSrc ) {
				curCan.cached = true;

				// if current candidate is "best", "better" or "okay",
				// set it to bestCandidate
				if ( curCan.res >= dpr ) {
					bestCandidate = curCan;
				}
			}
		}

		if ( !bestCandidate ) {

			candidates.sort( ascendingSort );

			length = candidates.length;
			bestCandidate = candidates[ length - 1 ];

			for ( i = 0; i < length; i++ ) {
				candidate = candidates[ i ];
				if ( candidate.res >= dpr ) {
					j = i - 1;

					// we have found the perfect candidate,
					// but let's improve this a little bit with some assumptions ;-)
					if (candidates[ j ] &&
						(abortCurSrc || curSrc !== pf.makeUrl( candidate.url )) &&
						chooseLowRes(candidates[ j ].res, candidate.res, dpr, candidates[ j ].cached)) {

						bestCandidate = candidates[ j ];

					} else {
						bestCandidate = candidate;
					}
					break;
				}
			}
		}

		if ( bestCandidate ) {

			candidateSrc = pf.makeUrl( bestCandidate.url );

			imageData.curSrc = candidateSrc;
			imageData.curCan = bestCandidate;

			if ( candidateSrc !== curSrc ) {
				pf.setSrc( img, bestCandidate );
			}
			pf.setSize( img );
		}
	};

	pf.setSrc = function( img, bestCandidate ) {
		var origWidth;
		img.src = bestCandidate.url;

		// although this is a specific Safari issue, we don't want to take too much different code paths
		if ( bestCandidate.set.type === "image/svg+xml" ) {
			origWidth = img.style.width;
			img.style.width = (img.offsetWidth + 1) + "px";

			// next line only should trigger a repaint
			// if... is only done to trick dead code removal
			if ( img.offsetWidth + 1 ) {
				img.style.width = origWidth;
			}
		}
	};

	pf.getSet = function( img ) {
		var i, set, supportsType;
		var match = false;
		var sets = img [ pf.ns ].sets;

		for ( i = 0; i < sets.length && !match; i++ ) {
			set = sets[i];

			if ( !set.srcset || !pf.matchesMedia( set.media ) || !(supportsType = pf.supportsType( set.type )) ) {
				continue;
			}

			if ( supportsType === "pending" ) {
				set = supportsType;
			}

			match = set;
			break;
		}

		return match;
	};

	pf.parseSets = function( element, parent, options ) {
		var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

		var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
		var imageData = element[ pf.ns ];

		if ( imageData.src === undefined || options.src ) {
			imageData.src = getImgAttr.call( element, "src" );
			if ( imageData.src ) {
				setImgAttr.call( element, srcAttr, imageData.src );
			} else {
				removeImgAttr.call( element, srcAttr );
			}
		}

		if ( imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset ) {
			srcsetAttribute = getImgAttr.call( element, "srcset" );
			imageData.srcset = srcsetAttribute;
			srcsetParsed = true;
		}

		imageData.sets = [];

		if ( hasPicture ) {
			imageData.pic = true;
			getAllSourceElements( parent, imageData.sets );
		}

		if ( imageData.srcset ) {
			imageSet = {
				srcset: imageData.srcset,
				sizes: getImgAttr.call( element, "sizes" )
			};

			imageData.sets.push( imageSet );

			isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

			// add normal src as candidate, if source has no w descriptor
			if ( !isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x ) {
				imageSet.srcset += ", " + imageData.src;
				imageSet.cands.push({
					url: imageData.src,
					d: 1,
					set: imageSet
				});
			}

		} else if ( imageData.src ) {
			imageData.sets.push( {
				srcset: imageData.src,
				sizes: null
			} );
		}

		imageData.curCan = null;
		imageData.curSrc = undefined;

		// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
		// or has a w descriptor (and does not support sizes) set support to false to evaluate
		imageData.supported = !( hasPicture || ( imageSet && !pf.supSrcset ) || (isWDescripor && !pf.supSizes) );

		if ( srcsetParsed && pf.supSrcset && !imageData.supported ) {
			if ( srcsetAttribute ) {
				setImgAttr.call( element, srcsetAttr, srcsetAttribute );
				element.srcset = "";
			} else {
				removeImgAttr.call( element, srcsetAttr );
			}
		}

		if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) ||  element.src !== pf.makeUrl(imageData.src))) {
			if (imageData.src === null) {
				element.removeAttribute("src");
			} else {
				element.src = imageData.src;
			}
		}

		imageData.parsed = true;
	};

	pf.fillImg = function(element, options) {
		var imageData;
		var extreme = options.reselect || options.reevaluate;

		// expando for caching data on the img
		if ( !element[ pf.ns ] ) {
			element[ pf.ns ] = {};
		}

		imageData = element[ pf.ns ];

		// if the element has already been evaluated, skip it
		// unless `options.reevaluate` is set to true ( this, for example,
		// is set to true when running `picturefill` on `resize` ).
		if ( !extreme && imageData.evaled === evalId ) {
			return;
		}

		if ( !imageData.parsed || options.reevaluate ) {
			pf.parseSets( element, element.parentNode, options );
		}

		if ( !imageData.supported ) {
			applyBestCandidate( element );
		} else {
			imageData.evaled = evalId;
		}
	};

	pf.setupRun = function() {
		if ( !alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio) ) {
			updateMetrics();
		}
	};

	// If picture is supported, well, that's awesome.
	if ( pf.supPicture ) {
		picturefill = noop;
		pf.fillImg = noop;
	} else {

		 // Set up picture polyfill by polling the document
		(function() {
			var isDomReady;
			var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

			var run = function() {
				var readyState = document.readyState || "";

				timerId = setTimeout(run, readyState === "loading" ? 200 :  999);
				if ( document.body ) {
					pf.fillImgs();
					isDomReady = isDomReady || regReady.test(readyState);
					if ( isDomReady ) {
						clearTimeout( timerId );
					}

				}
			};

			var timerId = setTimeout(run, document.body ? 9 : 99);

			// Also attach picturefill on resize and readystatechange
			// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
			var debounce = function(func, wait) {
				var timeout, timestamp;
				var later = function() {
					var last = (new Date()) - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func();
					}
				};

				return function() {
					timestamp = new Date();

					if (!timeout) {
						timeout = setTimeout(later, wait);
					}
				};
			};
			var lastClientWidth = docElem.clientHeight;
			var onResize = function() {
				isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
				lastClientWidth = docElem.clientHeight;
				if ( isVwDirty ) {
					pf.fillImgs();
				}
			};

			on( window, "resize", debounce(onResize, 99 ) );
			on( document, "readystatechange", run );
		})();
	}

	pf.picturefill = picturefill;
	//use this internally for easy monkey patching/performance testing
	pf.fillImgs = picturefill;
	pf.teardownRun = noop;

	/* expose methods for testing */
	picturefill._ = pf;

	window.picturefillCFG = {
		pf: pf,
		push: function(args) {
			var name = args.shift();
			if (typeof pf[name] === "function") {
				pf[name].apply(pf, args);
			} else {
				cfg[name] = args[0];
				if (alreadyRun) {
					pf.fillImgs( { reselect: true } );
				}
			}
		}
	};

	while (setOptions && setOptions.length) {
		window.picturefillCFG.push(setOptions.shift());
	}

	/* expose picturefill */
	window.picturefill = picturefill;

	/* expose picturefill */
	if (  true && typeof module.exports === "object" ) {
		// CommonJS, just export
		module.exports = picturefill;
	} else if ( true ) {
		// AMD support
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return picturefill; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// IE8 evals this sync, so it must be the last thing we do
	if ( !pf.supPicture ) {
		types[ "image/webp" ] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==" );
	}

} )( window, document );


/***/ }),

/***/ "./node_modules/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * van11y-accessible-accordion-aria - ES2015 accessible accordion system, using ARIA (compatible IE9+ when transpiled)
 * @version v3.0.1
 * @link https://van11y.net/accessible-accordion/
 * @license MIT : https://github.com/nico3333fr/van11y-accessible-accordion-aria/blob/master/LICENSE
 */
function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},loadConfig=function(){var e={},t=function(t,r){e[t]=r},r=function(t){return e[t]},n=function(t){return e[t]};return{set:t,get:r,remove:n}},DATA_HASH_ID="data-hashaccordion-id",pluginConfig=loadConfig(),findById=function(e,t){return document.querySelector("#"+e+"["+DATA_HASH_ID+'="'+t+'"]')},addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},hasClass=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},setAttributes=function(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})},searchParentHashId=function(e,t){for(var r=!1,n=e;1===n.nodeType&&n&&r===!1;)n.hasAttribute(t)===!0?r=!0:n=n.parentNode;return r===!0?n.getAttribute(t):""},searchParent=function(e,t,r){for(var n=!1,A=e;A&&n===!1;)hasClass(A,t)===!0&&A.getAttribute(DATA_HASH_ID)===r?n=!0:A=A.parentNode;return n===!0?A.getAttribute("id"):""},unSelectHeaders=function(e,t){e.forEach(function(e){setAttributes(e,_defineProperty({},t,"false"))})},selectHeader=function(e,t){e.setAttribute(t,!0)},selectHeaderInList=function(e,t,r){var n=void 0;e.forEach(function(e,t){"true"===e.getAttribute(r)&&(n=t)}),"next"===t&&(selectHeader(e[n+1]),setTimeout(function(){e[n+1].focus()},0)),"prev"===t&&(selectHeader(e[n-1]),setTimeout(function(){e[n-1].focus()},0))},plugin=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=_extends({ACCORDION_JS:"js-accordion",ACCORDION_JS_HEADER:"js-accordion__header",ACCORDION_JS_PANEL:"js-accordion__panel",ACCORDION_DATA_PREFIX_CLASS:"data-accordion-prefix-classes",ACCORDION_DATA_OPENED:"data-accordion-opened",ACCORDION_DATA_MULTISELECTABLE:"data-accordion-multiselectable",ACCORDION_DATA_COOL_SELECTORS:"data-accordion-cool-selectors",ACCORDION_PREFIX_IDS:"accordion",ACCORDION_BUTTON_ID:"_tab",ACCORDION_PANEL_ID:"_panel",ACCORDION_STYLE:"accordion",ACCORDION_TITLE_STYLE:"accordion__title",ACCORDION_HEADER_STYLE:"accordion__header",ACCORDION_PANEL_STYLE:"accordion__panel",ACCORDION_ROLE_TABLIST:"tablist",ACCORDION_ROLE_TAB:"tab",ACCORDION_ROLE_TABPANEL:"tabpanel",ATTR_ROLE:"role",ATTR_MULTISELECTABLE:"aria-multiselectable",ATTR_EXPANDED:"aria-expanded",ATTR_LABELLEDBY:"aria-labelledby",ATTR_HIDDEN:"aria-hidden",ATTR_CONTROLS:"aria-controls",ATTR_SELECTED:"aria-selected"},e),r=Math.random().toString(32).slice(2,12);pluginConfig.set(r,t);var n=function(){var e=arguments.length<=0||void 0===arguments[0]?document:arguments[0];return[].slice.call(e.querySelectorAll("."+t.ACCORDION_JS))},A=function(e){n(e).forEach(function(e){var n="z"+Math.random().toString(32).slice(2,12),A=e.hasAttribute(t.ACCORDION_DATA_PREFIX_CLASS)===!0?e.getAttribute(t.ACCORDION_DATA_PREFIX_CLASS)+"-":"",a=e.hasAttribute(t.ACCORDION_DATA_COOL_SELECTORS)===!0;"none"===e.getAttribute(t.ACCORDION_DATA_MULTISELECTABLE)?e.setAttribute(t.ATTR_MULTISELECTABLE,"false"):e.setAttribute(t.ATTR_MULTISELECTABLE,"true"),e.setAttribute(t.ATTR_ROLE,t.ACCORDION_ROLE_TABLIST),e.setAttribute("id",n),e.setAttribute(DATA_HASH_ID,r),addClass(e,A+t.ACCORDION_STYLE);var i=[].slice.call(e.querySelectorAll("."+t.ACCORDION_JS_HEADER));i.forEach(function(i,_){var o,T;if(i.parentNode===e||a!==!1){var E=_+1,s=i.nextElementSibling,C=i.innerHTML,c=document.createElement("BUTTON"),D=i.hasAttribute(t.ACCORDION_DATA_OPENED)===!0?i.getAttribute(t.ACCORDION_DATA_OPENED):"";c.innerHTML=C,addClass(c,t.ACCORDION_JS_HEADER),addClass(c,A+t.ACCORDION_HEADER_STYLE),setAttributes(c,(o={},_defineProperty(o,t.ATTR_ROLE,t.ACCORDION_ROLE_TAB),_defineProperty(o,"id",t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_BUTTON_ID+E),_defineProperty(o,t.ATTR_CONTROLS,t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_PANEL_ID+E),_defineProperty(o,t.ATTR_SELECTED,"false"),_defineProperty(o,"type","button"),_defineProperty(o,DATA_HASH_ID,r),o)),i.innerHTML="",i.appendChild(c),addClass(i,A+t.ACCORDION_TITLE_STYLE),removeClass(i,t.ACCORDION_JS_HEADER),addClass(s,A+t.ACCORDION_PANEL_STYLE),setAttributes(s,(T={},_defineProperty(T,t.ATTR_ROLE,t.ACCORDION_ROLE_TABPANEL),_defineProperty(T,t.ATTR_LABELLEDBY,t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_BUTTON_ID+E),_defineProperty(T,"id",t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_PANEL_ID+E),_defineProperty(T,DATA_HASH_ID,r),T)),"true"===D?(c.setAttribute(t.ATTR_EXPANDED,"true"),i.removeAttribute(t.ACCORDION_DATA_OPENED),s.setAttribute(t.ATTR_HIDDEN,"false")):(c.setAttribute(t.ATTR_EXPANDED,"false"),s.setAttribute(t.ATTR_HIDDEN,"true"))}})})};return{attach:A}},main=function(){return["click","keydown","focus"].forEach(function(e){document.body.addEventListener(e,function(t){var r=searchParentHashId(t.target,DATA_HASH_ID);""!==r&&!function(){var n=pluginConfig.get(r);hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"focus"===e&&!function(){var e=t.target,A=findById(searchParent(e,n.ACCORDION_JS,r),r),a=A.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,i=[].slice.call(A.querySelectorAll("."+n.ACCORDION_JS_HEADER));a===!1&&(i=i.filter(function(e){return e.parentNode.parentNode===A})),unSelectHeaders(i,n.ATTR_SELECTED),selectHeader(e,n.ATTR_SELECTED)}(),hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"click"===e&&!function(){var e=t.target,A=findById(searchParent(e,n.ACCORDION_JS,r),r),a=A.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,i=[].slice.call(A.querySelectorAll("."+n.ACCORDION_JS_HEADER)),_=A.getAttribute(n.ATTR_MULTISELECTABLE),o=findById(e.getAttribute(n.ATTR_CONTROLS),r),T=e.getAttribute(n.ATTR_EXPANDED);a===!1&&(i=i.filter(function(e){return e.parentNode.parentNode===A})),"false"===T?(e.setAttribute(n.ATTR_EXPANDED,!0),o.removeAttribute(n.ATTR_HIDDEN)):(e.setAttribute(n.ATTR_EXPANDED,!1),o.setAttribute(n.ATTR_HIDDEN,!0)),"false"===_&&i.forEach(function(t){var A=findById(t.getAttribute(n.ATTR_CONTROLS),r);t!==e?(t.setAttribute(n.ATTR_SELECTED,!1),t.setAttribute(n.ATTR_EXPANDED,!1),A.setAttribute(n.ATTR_HIDDEN,!0)):t.setAttribute(n.ATTR_SELECTED,!0)}),setTimeout(function(){e.focus()},0),t.preventDefault()}(),hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"keydown"===e&&!function(){var e=t.target,A=searchParent(e,n.ACCORDION_JS,r),a=findById(A,r),i=a.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,_=[].slice.call(a.querySelectorAll("."+n.ACCORDION_JS_HEADER));i===!1&&(_=_.filter(function(e){return e.parentNode.parentNode===a})),36===t.keyCode?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[0],n.ATTR_SELECTED),setTimeout(function(){_[0].focus()},0),t.preventDefault()):35===t.keyCode?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[_.length-1],n.ATTR_SELECTED),setTimeout(function(){_[_.length-1].focus()},0),t.preventDefault()):37!==t.keyCode&&38!==t.keyCode||t.ctrlKey?40!==t.keyCode&&39!==t.keyCode||t.ctrlKey||("true"===_[_.length-1].getAttribute(n.ATTR_SELECTED)?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[0],n.ATTR_SELECTED),setTimeout(function(){_[0].focus()},0),t.preventDefault()):(selectHeaderInList(_,"next",n.ATTR_SELECTED),t.preventDefault())):"true"===_[0].getAttribute(n.ATTR_SELECTED)?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[_.length-1],n.ATTR_SELECTED),setTimeout(function(){_[_.length-1].focus()},0),t.preventDefault()):(selectHeaderInList(_,"prev",n.ATTR_SELECTED),t.preventDefault())}()}()},!0)}),plugin};window.van11yAccessibleAccordionAria=main();var onLoad=function e(){var t=window.van11yAccessibleAccordionAria();t.attach(),document.removeEventListener("DOMContentLoaded",e)};document.addEventListener("DOMContentLoaded",onLoad);

/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,r=t&&"classList"in document.createElement("p"),o={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_poster:"poster",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,r=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:r}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:r})}window.dispatchEvent(n)};var i=function(t,e){return t.getAttribute("data-"+e)},s=function(t,e,n){var r="data-"+e;null!==n?t.setAttribute(r,n):t.removeAttribute(r)},c=function(t){return"true"===i(t,"was-processed")},l=function(t,e){return s(t,"ll-timeout",e)},u=function(t){return i(t,"ll-timeout")},d=function(t,e,n,r){t&&(void 0===r?void 0===n?t(e):t(e,n):t(e,n,r))},f=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&d(t._settings.callback_finish,t)},_=function(t){for(var e,n=[],r=0;e=t.children[r];r+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},b=function(t,e){v(t,"sizes",i(t,e.data_sizes)),v(t,"srcset",i(t,e.data_srcset)),v(t,"src",i(t,e.data_src))},m={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){b(t,e)});b(t,e)},IFRAME:function(t,e){v(t,"src",i(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",i(t,e.data_src))}),v(t,"poster",i(t,e.data_poster)),v(t,"src",i(t,e.data_src)),t.load()}},p=function(t,e){var n,r,o=e._settings,a=t.tagName,s=m[a];if(s)return s(t,o),f(e,1),void(e._elements=(n=e._elements,r=t,n.filter(function(t){return t!==r})));!function(t,e){var n=i(t,e.data_src),r=i(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),r&&(t.style.backgroundImage=r)}(t,o)},g=function(t,e){r?t.classList.add(e):t.className+=(t.className?" ":"")+e},y=function(t,e){r?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},h=function(t,e,n){t.addEventListener(e,n)},E=function(t,e,n){t.removeEventListener(e,n)},w=function(t,e,n){E(t,"load",e),E(t,"loadeddata",e),E(t,"error",n)},A=function(t,e,n){var r=n._settings,o=e?r.class_loaded:r.class_error,a=e?r.callback_loaded:r.callback_error,i=t.target;y(i,r.class_loading),g(i,o),d(a,i,n),f(n,-1)},I=function(t,e){var n=function n(o){A(o,!0,e),w(t,n,r)},r=function r(o){A(o,!1,e),w(t,n,r)};!function(t,e,n){h(t,"load",e),h(t,"loadeddata",e),h(t,"error",n)}(t,n,r)},k=["IMG","IFRAME","VIDEO"],L=function(t,e){var n=e._observer;S(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},O=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},x=function(t,e){var n=e._settings.load_delay,r=u(t);r||(r=setTimeout(function(){L(t,e),O(t)},n),l(t,r))},S=function(t,e,n){var r=e._settings;!n&&c(t)||(k.indexOf(t.tagName)>-1&&(I(t,e),g(t,r.class_loading)),p(t,e),function(t){s(t,"was-processed","true")}(t),d(r.callback_reveal,t,e),d(r.callback_set,t,e))},z=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e,n){var r=n._settings;d(r.callback_enter,t,e,n),r.load_delay?x(t,n):L(t,n)}(e.target,e,t):function(t,e,n){var r=n._settings;d(r.callback_exit,t,e,n),r.load_delay&&O(t)}(e.target,e,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},C=["IMG","IFRAME"],N=function(t,e){return function(t){return t.filter(function(t){return!c(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},M=function(t){var e=t._settings;_toConsumableArray(e.container.querySelectorAll("."+e.class_error)).forEach(function(t){y(t,e.class_error),function(t){s(t,"was-processed",null)}(t)}),t.update()},R=function(e,n){var r;this._settings=function(t){return _extends({},o,t)}(e),this._loadingCount=0,z(this),this.update(n),r=this,t&&window.addEventListener("online",function(t){M(r)})};return R.prototype={update:function(t){var n,r=this,o=this._settings;(this._elements=N(t,o),!e&&this._observer)?(function(t){return t.use_native&&"loading"in HTMLImageElement.prototype}(o)&&((n=this)._elements.forEach(function(t){-1!==C.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),S(t,n))}),this._elements=N(t,o)),this._elements.forEach(function(t){r._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){S(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){L(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,r=0;n=e[r];r+=1)a(t,n);else a(t,e)}(R,window.lazyLoadOptions),R});
//# sourceMappingURL=lazyload.min.js.map


/***/ }),

/***/ "./node_modules/zenscroll/zenscroll.js":
/*!*********************************************!*\
  !*** ./node_modules/zenscroll/zenscroll.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Zenscroll 4.0.2
 * https://github.com/zengabor/zenscroll/
 *
 * Copyright 2015–2018 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org>
 * 
 */

/*jshint devel:true, asi:true */

/*global define, module */


(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory()),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	} else {}
}(this, function () {
	"use strict"


	// Detect if the browser already supports native smooth scrolling (e.g., Firefox 36+ and Chrome 49+) and it is enabled:
	var isNativeSmoothScrollEnabledOn = function (elem) {
		return elem && "getComputedStyle" in window &&
			window.getComputedStyle(elem)["scroll-behavior"] === "smooth"
	}


	// Exit if it’s not a browser environment:
	if (typeof window === "undefined" || !("document" in window)) {
		return {}
	}


	var makeScroller = function (container, defaultDuration, edgeOffset) {

		// Use defaults if not provided
		defaultDuration = defaultDuration || 999 //ms
		if (!edgeOffset && edgeOffset !== 0) {
			// When scrolling, this amount of distance is kept from the edges of the container:
			edgeOffset = 9 //px
		}

		// Handling the life-cycle of the scroller
		var scrollTimeoutId
		var setScrollTimeoutId = function (newValue) {
			scrollTimeoutId = newValue
		}

		/**
		 * Stop the current smooth scroll operation immediately
		 */
		var stopScroll = function () {
			clearTimeout(scrollTimeoutId)
			setScrollTimeoutId(0)
		}

		var getTopWithEdgeOffset = function (elem) {
			return Math.max(0, container.getTopOf(elem) - edgeOffset)
		}

		/**
		 * Scrolls to a specific vertical position in the document.
		 *
		 * @param {targetY} The vertical position within the document.
		 * @param {duration} Optionally the duration of the scroll operation.
		 *        If not provided the default duration is used.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToY = function (targetY, duration, onDone) {
			stopScroll()
			if (duration === 0 || (duration && duration < 0) || isNativeSmoothScrollEnabledOn(container.body)) {
				container.toY(targetY)
				if (onDone) {
					onDone()
				}
			} else {
				var startY = container.getY()
				var distance = Math.max(0, targetY) - startY
				var startTime = new Date().getTime()
				duration = duration || Math.min(Math.abs(distance), defaultDuration);
				(function loopScroll() {
					setScrollTimeoutId(setTimeout(function () {
						// Calculate percentage:
						var p = Math.min(1, (new Date().getTime() - startTime) / duration)
						// Calculate the absolute vertical position:
						var y = Math.max(0, Math.floor(startY + distance*(p < 0.5 ? 2*p*p : p*(4 - p*2)-1)))
						container.toY(y)
						if (p < 1 && (container.getHeight() + y) < container.body.scrollHeight) {
							loopScroll()
						} else {
							setTimeout(stopScroll, 99) // with cooldown time
							if (onDone) {
								onDone()
							}
						}
					}, 9))
				})()
			}
		}

		/**
		 * Scrolls to the top of a specific element.
		 *
		 * @param {elem} The element to scroll to.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToElem = function (elem, duration, onDone) {
			scrollToY(getTopWithEdgeOffset(elem), duration, onDone)
		}

		/**
		 * Scrolls an element into view if necessary.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollIntoView = function (elem, duration, onDone) {
			var elemHeight = elem.getBoundingClientRect().height
			var elemBottom = container.getTopOf(elem) + elemHeight
			var containerHeight = container.getHeight()
			var y = container.getY()
			var containerBottom = y + containerHeight
			if (getTopWithEdgeOffset(elem) < y || (elemHeight + edgeOffset) > containerHeight) {
				// Element is clipped at top or is higher than screen.
				scrollToElem(elem, duration, onDone)
			} else if ((elemBottom + edgeOffset) > containerBottom) {
				// Element is clipped at the bottom.
				scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone)
			} else if (onDone) {
				onDone()
			}
		}

		/**
		 * Scrolls to the center of an element.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {offset} Optionally the offset of the top of the element from the center of the screen.
		 *        A value of 0 is ignored.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToCenterOf = function (elem, duration, offset, onDone) {
			scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight()/2 + (offset || elem.getBoundingClientRect().height/2)), duration, onDone)
		}

		/**
		 * Changes default settings for this scroller.
		 *
		 * @param {newDefaultDuration} Optionally a new value for default duration, used for each scroll method by default.
		 *        Ignored if null or undefined.
		 * @param {newEdgeOffset} Optionally a new value for the edge offset, used by each scroll method by default. Ignored if null or undefined.
		 * @returns An object with the current values.
		 */
		var setup = function (newDefaultDuration, newEdgeOffset) {
			if (newDefaultDuration === 0 || newDefaultDuration) {
				defaultDuration = newDefaultDuration
			}
			if (newEdgeOffset === 0 || newEdgeOffset) {
				edgeOffset = newEdgeOffset
			}
			return {
				defaultDuration: defaultDuration,
				edgeOffset: edgeOffset
			}
		}

		return {
			setup: setup,
			to: scrollToElem,
			toY: scrollToY,
			intoView: scrollIntoView,
			center: scrollToCenterOf,
			stop: stopScroll,
			moving: function () { return !!scrollTimeoutId },
			getY: container.getY,
			getTopOf: container.getTopOf
		}

	}


	var docElem = document.documentElement
	var getDocY = function () { return window.scrollY || docElem.scrollTop }

	// Create a scroller for the document:
	var zenscroll = makeScroller({
		body: document.scrollingElement || document.body,
		toY: function (y) { window.scrollTo(0, y) },
		getY: getDocY,
		getHeight: function () { return window.innerHeight || docElem.clientHeight },
		getTopOf: function (elem) { return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop }
	})


	/**
	 * Creates a scroller from the provided container element (e.g., a DIV)
	 *
	 * @param {scrollContainer} The vertical position within the document.
	 * @param {defaultDuration} Optionally a value for default duration, used for each scroll method by default.
	 *        Ignored if 0 or null or undefined.
	 * @param {edgeOffset} Optionally a value for the edge offset, used by each scroll method by default. 
	 *        Ignored if null or undefined.
	 * @returns A scroller object, similar to `zenscroll` but controlling the provided element.
	 */
	zenscroll.createScroller = function (scrollContainer, defaultDuration, edgeOffset) {
		return makeScroller({
			body: scrollContainer,
			toY: function (y) { scrollContainer.scrollTop = y },
			getY: function () { return scrollContainer.scrollTop },
			getHeight: function () { return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight) },
			getTopOf: function (elem) { return elem.offsetTop }
		}, defaultDuration, edgeOffset)
	}


	// Automatic link-smoothing on achors
	// Exclude IE8- or when native is enabled or Zenscroll auto- is disabled
	if ("addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {

		var isHistorySupported = "history" in window && "pushState" in history
		var isScrollRestorationSupported = isHistorySupported && "scrollRestoration" in history

		// On first load & refresh make sure the browser restores the position first
		if (isScrollRestorationSupported) {
			history.scrollRestoration = "auto"
		}

		window.addEventListener("load", function () {

			if (isScrollRestorationSupported) {
				// Set it to manual
				setTimeout(function () { history.scrollRestoration = "manual" }, 9)
				window.addEventListener("popstate", function (event) {
					if (event.state && "zenscrollY" in event.state) {
						zenscroll.toY(event.state.zenscrollY)
					}
				}, false)
			}

			// Add edge offset on first load if necessary
			// This may not work on IE (or older computer?) as it requires more timeout, around 100 ms
			if (window.location.hash) {
				setTimeout(function () {
					// Adjustment is only needed if there is an edge offset:
					var edgeOffset = zenscroll.setup().edgeOffset
					if (edgeOffset) {
						var targetElem = document.getElementById(window.location.href.split("#")[1])
						if (targetElem) {
							var targetY = Math.max(0, zenscroll.getTopOf(targetElem) - edgeOffset)
							var diff = zenscroll.getY() - targetY
							// Only do the adjustment if the browser is very close to the element:
							if (0 <= diff && diff < 9 ) {
								window.scrollTo(0, targetY)
							}
						}
					}
				}, 9)
			}

		}, false)

		// Handling clicks on anchors
		var RE_noZensmooth = new RegExp("(^|\\s)noZensmooth(\\s|$)")
		window.addEventListener("click", function (event) {
			var anchor = event.target
			while (anchor && anchor.tagName !== "A") {
				anchor = anchor.parentNode
			}
			// Let the browser handle the click if it wasn't with the primary button, or with some modifier keys:
			if (!anchor || event.which !== 1 || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
				return
			}
			// Save the current scrolling position so it can be used for scroll restoration:
			if (isScrollRestorationSupported) {
				var historyState = history.state && typeof history.state === "object" ? history.state : {}
				historyState.zenscrollY = zenscroll.getY()
				try {
					history.replaceState(historyState, "")
				} catch (e) {
					// Avoid the Chrome Security exception on file protocol, e.g., file://index.html
				}
			}
			// Find the referenced ID:
			var href = anchor.getAttribute("href") || ""
			if (href.indexOf("#") === 0 && !RE_noZensmooth.test(anchor.className)) {
				var targetY = 0
				var targetElem = document.getElementById(href.substring(1))
				if (href !== "#") {
					if (!targetElem) {
						// Let the browser handle the click if the target ID is not found.
						return
					}
					targetY = zenscroll.getTopOf(targetElem)
				}
				event.preventDefault()
				// By default trigger the browser's `hashchange` event...
				var onDone = function () { window.location = href }
				// ...unless there is an edge offset specified
				var edgeOffset = zenscroll.setup().edgeOffset
				if (edgeOffset) {
					targetY = Math.max(0, targetY - edgeOffset)
					if (isHistorySupported) {
						onDone = function () { history.pushState({}, "", href) }
					}
				}
				zenscroll.toY(targetY, null, onDone)
			}
		}, false)

	}


	return zenscroll


}));


/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ./assets/js/defaults.js ./assets/sass/global.scss ./assets/sass/print.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/harry/Work/Tincan/_pantheon/syd/themes/pippip/assets/js/defaults.js */"./assets/js/defaults.js");
__webpack_require__(/*! /home/harry/Work/Tincan/_pantheon/syd/themes/pippip/assets/sass/global.scss */"./assets/sass/global.scss");
module.exports = __webpack_require__(/*! /home/harry/Work/Tincan/_pantheon/syd/themes/pippip/assets/sass/print.scss */"./assets/sass/print.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9VcGRhdGVWaWV3cG9ydEhlaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nhc3MvZ2xvYmFsLnNjc3M/M2YzOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9wcmludC5zY3NzP2FlOTAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhZ3VldHRlYm94LmpzL2Rpc3QvYmFndWV0dGVCb3gubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb2N1cy12aXNpYmxlL2Rpc3QvZm9jdXMtdmlzaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9jdXMtd2l0aGluL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGljdHVyZWZpbGwvZGlzdC9waWN0dXJlZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEvZGlzdC92YW4xMXktYWNjZXNzaWJsZS1hY2NvcmRpb24tYXJpYS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtbGF6eWxvYWQvZGlzdC9sYXp5bG9hZC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plbnNjcm9sbC96ZW5zY3JvbGwuanMiXSwibmFtZXMiOlsiSGVscGVycyIsImRlZmF1bHRzIiwic2V0dGluZ3MiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImV4dGVuZGVkIiwiZGVlcCIsImkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJhcmd1bWVudHMiLCJtZXJnZSIsIm9iaiIsInByb3AiLCJleHRlbmQiLCJsZW5ndGgiLCJlbGVtIiwic2VsZWN0b3IiLCJwIiwiRWxlbWVudCIsImYiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJzIiwiaW5kZXhPZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZpcnN0Q2hhciIsImNoYXJBdCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInN1YnN0ciIsImlkIiwiaGFzQXR0cmlidXRlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiZWwiLCJwYXJ0aWFsbHkiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInZlcnRJblZpZXciLCJ0b3AiLCJoZWlnaHQiLCJob3JJblZpZXciLCJsZWZ0Iiwid2lkdGgiLCJBcnJheSIsImZpbHRlciIsImNoaWxkcmVuIiwiY2hpbGQiLCJOb2RlTGlzdCIsImlzUHJvdG90eXBlT2YiLCJIVE1MRWxlbWVudCIsImJyZWFrcG9pbnQiLCJwYXJzZUZsb2F0IiwiY2FsbGJhY2siLCJzdGFydCIsImR1cmF0aW9uIiwidGltZXN0YW1wIiwicHJvZ3Jlc3MiLCJwYXJzZUludCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiYmluZCIsImhhc0NhbGxiYWNrIiwiTW9kZXJuaXpyIiwiYWRkVGVzdCIsInVwZGF0ZVZpZXdwb3J0SGVpZ2h0Iiwib3B0aW9ucyIsImNvbmZpZyIsImV4dGVuZERlZmF1bHRTZXR0aW5ncyIsImluaXQiLCJ1cGRhdGVIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwidGhyb3R0bGVyIiwicHJvcGVydHkiLCJ2aCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJzY3JvbGxTdGFydCIsInRvZ2dsZVN0YXRlIiwiZGF0YW5hbWUiLCJvbiIsIm9mZiIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsIlVwZGF0ZVZpZXdwb3J0SGVpZ2h0IiwiRm9jdXNXaXRoaW4iLCJhdHRyIiwiY2xhc3NOYW1lIiwiYmFndWV0dGVCb3giLCJydW4iLCJtZW51QnVyZ2VyQnRuIiwicXVlcnlTZWxlY3RvciIsImUiLCJib2R5IiwibGlua3MiLCJsaW5rc0xlbmd0aCIsImhvc3RuYW1lIiwibG9jYXRpb24iLCJ0YXJnZXQiLCJsYXp5TG9hZEltYWdlcyIsIkxhenlMb2FkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtJQUVNQSxPOzs7Ozs7Ozs7MENBQ3lCQyxRLEVBQVVDLFEsRUFBVTtBQUMvQyxXQUFLLElBQUlDLEdBQVQsSUFBZ0JELFFBQWhCLEVBQTBCO0FBQ3hCLFlBQUlBLFFBQVEsQ0FBQ0UsY0FBVCxDQUF3QkQsR0FBeEIsQ0FBSixFQUFrQztBQUNoQ0Ysa0JBQVEsQ0FBQ0UsR0FBRCxDQUFSLEdBQWdCRCxRQUFRLENBQUNDLEdBQUQsQ0FBeEI7QUFDRDtBQUNGOztBQUVELGFBQU9GLFFBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7NkJBTWdCO0FBQ2Q7QUFDQSxVQUFJSSxRQUFRLEdBQUcsRUFBZjtBQUNBLFVBQUlDLElBQUksR0FBRyxLQUFYO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHLENBQVIsQ0FKYyxDQU1kOztBQUNBLFVBQUlDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCQyxTQUFTLENBQUMsQ0FBRCxDQUF4QyxNQUFpRCxrQkFBckQsRUFBeUU7QUFDdkVOLFlBQUksR0FBR00sU0FBUyxDQUFDLENBQUQsQ0FBaEI7QUFDQUwsU0FBQztBQUNGLE9BVmEsQ0FZZDs7O0FBQ0EsVUFBSU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBU0MsR0FBVCxFQUFjO0FBQ3hCLGFBQUssSUFBSUMsSUFBVCxJQUFpQkQsR0FBakIsRUFBc0I7QUFDcEIsY0FBSUEsR0FBRyxDQUFDVixjQUFKLENBQW1CVyxJQUFuQixDQUFKLEVBQThCO0FBQzVCO0FBQ0EsZ0JBQUlULElBQUksSUFBSUUsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JHLEdBQUcsQ0FBQ0MsSUFBRCxDQUFsQyxNQUE4QyxpQkFBMUQsRUFBNkU7QUFDM0VWLHNCQUFRLENBQUNVLElBQUQsQ0FBUixHQUFpQmYsT0FBTyxDQUFDZ0IsTUFBUixDQUFlWCxRQUFRLENBQUNVLElBQUQsQ0FBdkIsRUFBK0JELEdBQUcsQ0FBQ0MsSUFBRCxDQUFsQyxDQUFqQjtBQUNELGFBRkQsTUFFTztBQUNMVixzQkFBUSxDQUFDVSxJQUFELENBQVIsR0FBaUJELEdBQUcsQ0FBQ0MsSUFBRCxDQUFwQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLE9BWEQsQ0FiYyxDQTBCZDs7O0FBQ0EsYUFBT1IsQ0FBQyxHQUFHSyxTQUFTLENBQUNLLE1BQXJCLEVBQTZCVixDQUFDLEVBQTlCLEVBQWtDO0FBQ2hDTSxhQUFLLENBQUNELFNBQVMsQ0FBQ0wsQ0FBRCxDQUFWLENBQUw7QUFDRDs7QUFFRCxhQUFPRixRQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztnQ0FPbUJVLEksRUFBTWIsUSxFQUFVO0FBQ2pDLFdBQUssSUFBSUMsR0FBVCxJQUFnQkQsUUFBaEIsRUFBMEI7QUFDeEIsWUFBSUEsUUFBUSxDQUFDRSxjQUFULENBQXdCRCxHQUF4QixDQUFKLEVBQWtDO0FBQ2hDLGNBQUlBLEdBQUcsSUFBSVksSUFBWCxFQUFpQjtBQUNmLG1CQUFPLElBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBTyxLQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OzttQ0FPc0JHLEksRUFBTUMsUSxFQUFVO0FBQ3BDLFVBQUlDLENBQUMsR0FBR0MsT0FBTyxDQUFDWixTQUFoQjs7QUFDQSxVQUFJYSxDQUFDLEdBQ0hGLENBQUMsQ0FBQ0csT0FBRixJQUNBSCxDQUFDLENBQUNJLHFCQURGLElBRUFKLENBQUMsQ0FBQ0ssa0JBRkYsSUFHQUwsQ0FBQyxDQUFDTSxpQkFIRixJQUlBLFVBQVNDLENBQVQsRUFBWTtBQUNWLGVBQU8sR0FBR0MsT0FBSCxDQUFXakIsSUFBWCxDQUFnQmtCLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJILENBQTFCLENBQWhCLEVBQThDLElBQTlDLE1BQXdELENBQUMsQ0FBaEU7QUFDRCxPQVBIOztBQVFBLGFBQU9MLENBQUMsQ0FBQ1gsSUFBRixDQUFPTyxJQUFQLEVBQWFDLFFBQWIsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7K0JBT2tCRCxJLEVBQU1DLFEsRUFBVTtBQUNoQyxVQUFJWSxTQUFTLEdBQUdaLFFBQVEsQ0FBQ2EsTUFBVCxDQUFnQixDQUFoQixDQUFoQixDQURnQyxDQUdoQzs7QUFDQSxhQUFPZCxJQUFJLElBQUlBLElBQUksS0FBS1csUUFBeEIsRUFBa0NYLElBQUksR0FBR0EsSUFBSSxDQUFDZSxVQUE5QyxFQUEwRDtBQUN4RDtBQUNBLFlBQUlGLFNBQVMsS0FBSyxHQUFsQixFQUF1QjtBQUNyQixjQUFJYixJQUFJLENBQUNnQixTQUFMLENBQWVDLFFBQWYsQ0FBd0JoQixRQUFRLENBQUNpQixNQUFULENBQWdCLENBQWhCLENBQXhCLENBQUosRUFBaUQ7QUFDL0MsbUJBQU9sQixJQUFQO0FBQ0Q7QUFDRixTQU51RCxDQVF4RDs7O0FBQ0EsWUFBSWEsU0FBUyxLQUFLLEdBQWxCLEVBQXVCO0FBQ3JCLGNBQUliLElBQUksQ0FBQ21CLEVBQUwsS0FBWWxCLFFBQVEsQ0FBQ2lCLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBaEIsRUFBb0M7QUFDbEMsbUJBQU9sQixJQUFQO0FBQ0Q7QUFDRixTQWJ1RCxDQWV4RDs7O0FBQ0EsWUFBSWEsU0FBUyxLQUFLLEdBQWxCLEVBQXVCO0FBQ3JCLGNBQUliLElBQUksQ0FBQ29CLFlBQUwsQ0FBa0JuQixRQUFRLENBQUNpQixNQUFULENBQWdCLENBQWhCLEVBQW1CakIsUUFBUSxDQUFDRixNQUFULEdBQWtCLENBQXJDLENBQWxCLENBQUosRUFBZ0U7QUFDOUQsbUJBQU9DLElBQVA7QUFDRDtBQUNGLFNBcEJ1RCxDQXNCeEQ7OztBQUNBLFlBQUlBLElBQUksQ0FBQ3FCLE9BQUwsQ0FBYUMsV0FBYixPQUErQnJCLFFBQW5DLEVBQTZDO0FBQzNDLGlCQUFPRCxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLEtBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozt3Q0FRMkJ1QixFLEVBQXVCO0FBQUEsVUFBbkJDLFNBQW1CLHVFQUFQLEtBQU87QUFDaEQsVUFBSUMsSUFBSSxHQUFHRixFQUFFLENBQUNHLHFCQUFILEVBQVg7QUFDQSxVQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQmxCLFFBQVEsQ0FBQ21CLGVBQVQsQ0FBeUJDLFlBQWxFO0FBQ0EsVUFBSUMsV0FBVyxHQUFHSixNQUFNLENBQUNLLFVBQVAsSUFBcUJ0QixRQUFRLENBQUNtQixlQUFULENBQXlCSSxXQUFoRTs7QUFFQSxVQUFJVixTQUFKLEVBQWU7QUFDYixZQUFJVyxVQUFVLEdBQUdWLElBQUksQ0FBQ1csR0FBTCxJQUFZVCxZQUFaLElBQTRCRixJQUFJLENBQUNXLEdBQUwsR0FBV1gsSUFBSSxDQUFDWSxNQUFoQixJQUEwQixDQUF2RTtBQUNBLFlBQUlDLFNBQVMsR0FBR2IsSUFBSSxDQUFDYyxJQUFMLElBQWFQLFdBQWIsSUFBNEJQLElBQUksQ0FBQ2MsSUFBTCxHQUFZZCxJQUFJLENBQUNlLEtBQWpCLElBQTBCLENBQXRFO0FBQ0EsZUFBT0wsVUFBVSxJQUFJRyxTQUFyQjtBQUNELE9BSkQsTUFJTztBQUNMLGVBQU9iLElBQUksQ0FBQ2MsSUFBTCxJQUFhLENBQWIsSUFBa0JkLElBQUksQ0FBQ1csR0FBTCxJQUFZLENBQTlCLElBQW1DWCxJQUFJLENBQUNjLElBQUwsR0FBWWQsSUFBSSxDQUFDZSxLQUFqQixJQUEwQlIsV0FBN0QsSUFBNEVQLElBQUksQ0FBQ1csR0FBTCxHQUFXWCxJQUFJLENBQUNZLE1BQWhCLElBQTBCVixZQUE3RztBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7Z0NBS21CSixFLEVBQUk7QUFDckIsYUFBT2tCLEtBQUssQ0FBQ2xELFNBQU4sQ0FBZ0JtRCxNQUFoQixDQUF1QmpELElBQXZCLENBQTRCOEIsRUFBRSxDQUFDUixVQUFILENBQWM0QixRQUExQyxFQUFvRCxVQUFTQyxLQUFULEVBQWdCO0FBQ3pFLGVBQU9BLEtBQUssS0FBS3JCLEVBQWpCO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7QUFFRDs7Ozs7Ozs7OzhCQU1pQnZCLEksRUFBTTtBQUNyQixVQUFJNkMsUUFBUSxDQUFDdEQsU0FBVCxDQUFtQnVELGFBQW5CLENBQWlDOUMsSUFBakMsQ0FBSixFQUE0QztBQUMxQyxlQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFPQSxJQUFJLEtBQUssSUFBVCxJQUFpQkEsSUFBSSxZQUFZK0MsV0FBeEM7QUFDRDtBQUVEOzs7Ozs7OztrQ0FLcUJDLFUsRUFBWTtBQUMvQixhQUFPQyxVQUFVLENBQUNELFVBQUQsQ0FBVixHQUF5QixFQUFoQztBQUNEO0FBRUQ7Ozs7Ozs7OztnQ0FNbUJFLFEsRUFBVTtBQUMzQixhQUFPQSxRQUFRLElBQUksT0FBT0EsUUFBUCxLQUFvQixVQUF2QztBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7MEJBVWFDLEssRUFBT0MsUSxFQUFVRixRLEVBQVVHLFMsRUFBVztBQUNqRCxVQUFJLENBQUNGLEtBQUwsRUFBWUEsS0FBSyxHQUFHRSxTQUFSO0FBQ1osVUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNGLFNBQVMsR0FBR0YsS0FBYixDQUF2Qjs7QUFFQSxVQUFJRyxRQUFRLElBQUlGLFFBQWhCLEVBQTBCO0FBQ3hCeEIsY0FBTSxDQUFDNEIscUJBQVAsQ0FBNkIxRSxPQUFPLENBQUMyRSxLQUFSLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsRUFBeUJQLEtBQXpCLEVBQWdDQyxRQUFoQyxFQUEwQ0YsUUFBMUMsQ0FBN0I7QUFDRCxPQUZELE1BRU87QUFDTHBFLGVBQU8sQ0FBQzZFLFdBQVIsQ0FBb0JULFFBQXBCLEtBQWlDQSxRQUFRLENBQUN6RCxJQUFULEVBQWpDO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7Ozs7OENBTWlDO0FBQy9CLFVBQUltQyxNQUFNLENBQUNnQyxTQUFYLEVBQXNCO0FBQ3BCQSxpQkFBUyxDQUFDQyxPQUFWLENBQWtCLGFBQWxCLEVBQWlDLFlBQVc7QUFDMUMsY0FBSSxrQkFBa0JqQyxNQUF0QixFQUE4QjtBQUM1QixtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsaUJBQU8sS0FBUDtBQUNELFNBTkQ7QUFPRDtBQUNGOzs7Ozs7QUFHWTlDLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFBBOzs7OztBQUtBOztJQUVNZ0Ysb0I7OztBQUNKLGdDQUFZOUQsSUFBWixFQUFrQitELE9BQWxCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtDLE1BQUwsR0FBY2xGLGdEQUFPLENBQUNtRixxQkFBUixDQUE4QixLQUFLbEYsUUFBTCxFQUE5QixFQUErQ2dGLE9BQS9DLENBQWQ7QUFDQSxTQUFLRyxJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLZixLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtnQixZQUFMLENBQWtCLEtBQUtILE1BQXZCO0FBQ0FwQyxZQUFNLENBQUN3QyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLQyxTQUFMLENBQWVYLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEM7QUFDRDs7O3VDQUUwQjtBQUFBLFVBQVpZLFFBQVksUUFBWkEsUUFBWTtBQUN6QixVQUFJQyxFQUFFLEdBQUczQyxNQUFNLENBQUNDLFdBQVAsR0FBcUIsSUFBOUI7QUFDQWxCLGNBQVEsQ0FBQ21CLGVBQVQsQ0FBeUIwQyxLQUF6QixDQUErQkMsV0FBL0IsQ0FBMkNILFFBQTNDLFlBQXdEQyxFQUF4RDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFJLENBQUMsS0FBS0csV0FBVixFQUF1QjtBQUNyQixhQUFLdkIsS0FBTCxHQUFhLElBQWI7QUFDQXZCLGNBQU0sQ0FBQzRCLHFCQUFQLENBQTZCLEtBQUtXLFlBQUwsQ0FBa0JULElBQWxCLENBQXVCLElBQXZCLEVBQTZCLEtBQUtNLE1BQWxDLENBQTdCO0FBQ0EsYUFBS2IsS0FBTCxHQUFhLEtBQWI7QUFDRDtBQUNGOzs7K0JBRVU7QUFDVCxhQUFPO0FBQ0xtQixnQkFBUSxFQUFFO0FBREwsT0FBUDtBQUdEOzs7Ozs7QUFHWVIsbUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBbEMsTUFBTSxDQUFDK0MsV0FBUCxHQUFxQixVQUFTcEQsRUFBVCxFQUFhcUQsUUFBYixFQUF1QkMsRUFBdkIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQ25EdkQsSUFBRSxDQUFDd0QsWUFBSCxnQkFBd0JILFFBQXhCLEdBQW9DckQsRUFBRSxDQUFDeUQsWUFBSCxnQkFBd0JKLFFBQXhCLE9BQXdDQyxFQUF4QyxHQUE2Q0MsR0FBN0MsR0FBbURELEVBQXZGO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJSSx3RUFBSjtBQUVBOzs7O0FBR0FDLDREQUFXLENBQUN2RSxRQUFELEVBQVc7QUFDcEJ3RSxNQUFJLEVBQUUsS0FEYztBQUVwQkMsV0FBUyxFQUFFO0FBRlMsQ0FBWCxDQUFYO0FBS0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBLElBQUl6RSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFVBQTFCLENBQUosRUFBMkM7QUFDekN5RSx1REFBVyxDQUFDQyxHQUFaLENBQWdCLFVBQWhCO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFHQSxJQUFNQyxhQUFhLEdBQUc1RSxRQUFRLENBQUM2RSxhQUFULENBQXVCLGVBQXZCLENBQXRCOztBQUVBLElBQUlELGFBQUosRUFBbUI7QUFDakJBLGVBQWEsQ0FBQ25CLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFVBQVNxQixDQUFULEVBQVk7QUFDbERkLGVBQVcsQ0FBQ2hFLFFBQVEsQ0FBQytFLElBQVYsRUFBZ0IsS0FBaEIsRUFBdUIsTUFBdkIsRUFBK0IsUUFBL0IsQ0FBWDtBQUNELEdBRkQ7QUFHRDtBQUVEOzs7OztBQUdBLElBQU1DLEtBQUssR0FBR2hGLFFBQVEsQ0FBQ2dGLEtBQXZCOztBQUVBLEtBQUssSUFBSXRHLENBQUMsR0FBRyxDQUFSLEVBQVd1RyxXQUFXLEdBQUdELEtBQUssQ0FBQzVGLE1BQXBDLEVBQTRDVixDQUFDLEdBQUd1RyxXQUFoRCxFQUE2RHZHLENBQUMsRUFBOUQsRUFBa0U7QUFDaEUsTUFBSXNHLEtBQUssQ0FBQ3RHLENBQUQsQ0FBTCxDQUFTd0csUUFBVCxJQUFxQmpFLE1BQU0sQ0FBQ2tFLFFBQVAsQ0FBZ0JELFFBQXpDLEVBQW1EO0FBQ2pERixTQUFLLENBQUN0RyxDQUFELENBQUwsQ0FBUzBHLE1BQVQsR0FBa0IsUUFBbEI7QUFDRDtBQUNGLEMsQ0FFRDs7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLElBQUlDLHVEQUFKLEVBQXZCLEM7Ozs7Ozs7Ozs7O0FDbEZBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYSxLQUFxQyxDQUFDLG9DQUFPLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FBQyxDQUFDLFNBQTZELENBQUMsaUJBQWlCLGFBQWEsaWlCQUFpaUIsSUFBSSw2TkFBNk4sS0FBSyxtQkFBbUIsd0NBQXdDLDJCQUEyQiw4Q0FBOEMsZUFBZSw0REFBNEQsZUFBZSw0REFBNEQsZUFBZSw0REFBNEQsZUFBZSw2R0FBNkcsZUFBZSxzQkFBc0IscURBQXFELHdDQUF3QywwRkFBMEYsY0FBYyw2Q0FBNkMsY0FBYyxJQUFJLGVBQWUseUZBQXlGLGNBQWMsd0JBQXdCLHFCQUFxQiw4QkFBOEIsOEJBQThCLHlDQUF5QyxnQkFBZ0IsZUFBZSxjQUFjLGtCQUFrQixZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSx1QkFBdUIsc0JBQXNCLFlBQVksSUFBSSxNQUFNLHVCQUF1QixzQkFBc0IscUJBQXFCLEtBQUssZ0JBQWdCLFVBQVUsc0JBQXNCLFFBQVEsRUFBRSwrREFBK0Qsb01BQW9NLG9EQUFvRCxJQUFJLGlEQUFpRCxXQUFXLElBQUksYUFBYSw2QkFBNkIsaUNBQWlDLFdBQVcsaUtBQWlLLDhGQUE4RixjQUFjLGtLQUFrSyxnQ0FBZ0Msa0JBQWtCLFVBQVUseURBQXlELGlKQUFpSix5QkFBeUIsZ0lBQWdJLDJFQUEyRSxhQUFhLDhCQUE4QixhQUFhLCtMQUErTCx5REFBeUQsNktBQTZLLGtJQUFrSSxPQUFPLGdCQUFnQixrQkFBa0IscUVBQXFFLEtBQUsscUtBQXFLLGFBQWEsY0FBYyxTQUFTLDhHQUE4Ryw0Q0FBNEMsMENBQTBDLGtEQUFrRCxxQkFBcUIsS0FBSyxhQUFhLFNBQVMsa0JBQWtCLGlNQUFpTSxzQkFBc0IsZ0VBQWdFLGlCQUFpQixlQUFlLG9CQUFvQix5RUFBeUUsa0NBQWtDLHlHQUF5RyxhQUFhLGNBQWMsYUFBYSxjQUFjLGdCQUFnQix1SUFBdUksVUFBVSw2Q0FBNkMsY0FBYyxtREFBbUQsZUFBZSxNQUFNLGFBQWEsaUJBQWlCLGdFQUFnRSxpSEFBaUgsc0dBQXNHLGNBQWMsaUNBQWlDLE9BQU8sRUFBRSxjQUFjLGlDQUFpQyxPQUFPLEVBQUUsb0JBQW9CLDhFQUE4RSx1REFBdUQsRUFBRSxvQkFBb0IsMkVBQTJFLGNBQWMsa0NBQWtDLGNBQWMsaUNBQWlDLHlEQUF5RCxZQUFZLGNBQWMsNkJBQTZCLHlEQUF5RCxvQkFBb0IsV0FBVyxxQ0FBcUMsU0FBUyxHQUFHLG9CQUFvQixpQ0FBaUMsZUFBZSw2RkFBNkYsc0JBQXNCLGVBQWUscUdBQXFHLGdDQUFnQyxTQUFTLElBQUksOEJBQThCLFlBQVksZUFBZSxNQUFNLEVBQUUsdUNBQXVDLFVBQVUsU0FBUyxnQkFBZ0IsbUlBQW1JLDBUQUEwVCxpSkFBaUosc0pBQXNKLHlGQUF5Rix1QkFBdUIsV0FBVyxNQUFNLHVLQUF1SyxHQUFHLHdCQUF3QixzQ0FBc0MseUJBQXlCLDRDQUE0QywwQkFBMEIsU0FBUyx5RkFBeUYsb0VBQW9FLFdBQVcsU0FBUyxnQ0FBZ0Msa0JBQWtCLGlFQUFpRSxJQUFJLCtCQUErQix5QkFBeUIsdUJBQXVCLGNBQWMsTUFBTSw4REFBOEQsY0FBYyx1QkFBdUIsV0FBVyxNQUFNLHVLQUF1SyxnQkFBZ0IseUNBQXlDLG9JQUFvSSxZQUFZLEU7Ozs7Ozs7Ozs7O0FDTjlxUztBQUNBLEVBQUUsS0FBNEQ7QUFDOUQsRUFBRSxTQUNXO0FBQ2IsQ0FBQyxxQkFBcUI7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2VEQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRWUsMEVBQVcsRUFBQztBQUMzQjs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0E7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU8sa0JBQWtCLGNBQWMsVUFBVSxZQUFZLGNBQWMsVUFBVSxnQkFBZ0I7QUFDekksdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFDQUFxQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBLGVBQWUsd0JBQXdCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWUsT0FBTzs7QUFFOUM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWUsT0FBTzs7QUFF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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYywyQkFBMkI7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7O0FBR0E7OztBQUdBLENBQUMiLCJmaWxlIjoiL2pzL2RlZmF1bHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIGdsb2JhbCBNb2Rlcm5penIgKi9cblxuY2xhc3MgSGVscGVycyB7XG4gIHN0YXRpYyBleHRlbmREZWZhdWx0U2V0dGluZ3MoZGVmYXVsdHMsIHNldHRpbmdzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHNldHRpbmdzKSB7XG4gICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBkZWZhdWx0c1trZXldID0gc2V0dGluZ3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICAvKipcbiAgICogRXh0ZW5kXG4gICAqIFdvcmtzIHNpbWlsYXIgdG8galF1ZXJ5ICQuZXh0ZW5kIG1ldGhvZC5cbiAgICogU2hhbGxvdyBNZXJnZTogZXh0ZW5kKG9iajEsIG9iajIpO1xuICAgKiBEZWVwIE1lcmdlOiBleHRlbmQodHJ1ZSwgb2JqMSwgb2JqMik7XG4gICAqL1xuICBzdGF0aWMgZXh0ZW5kKCkge1xuICAgIC8vIFZhcmlhYmxlc1xuICAgIHZhciBleHRlbmRlZCA9IHt9O1xuICAgIHZhciBkZWVwID0gZmFsc2U7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgLy8gQ2hlY2sgaWYgYSBkZWVwIG1lcmdlXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHNbMF0pID09PSAnW29iamVjdCBCb29sZWFuXScpIHtcbiAgICAgIGRlZXAgPSBhcmd1bWVudHNbMF07XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgdGhlIG9iamVjdCBpbnRvIHRoZSBleHRlbmRlZCBvYmplY3RcbiAgICB2YXIgbWVyZ2UgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAvLyBJZiBwcm9wZXJ0eSBpcyBhbiBvYmplY3QsIG1lcmdlIHByb3BlcnRpZXNcbiAgICAgICAgICBpZiAoZGVlcCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW3Byb3BdKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAgICAgIGV4dGVuZGVkW3Byb3BdID0gSGVscGVycy5leHRlbmQoZXh0ZW5kZWRbcHJvcF0sIG9ialtwcm9wXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4dGVuZGVkW3Byb3BdID0gb2JqW3Byb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBvYmplY3QgYW5kIGNvbmR1Y3QgYSBtZXJnZVxuICAgIGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBtZXJnZShhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiBleHRlbmRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYXMgUHJvcGVydHlcbiAgICogQ2hlY2tzIHdoZXRoZXIgYW4gb2JqZWN0IGNvbnRhaW5zIGEgcHJvcGVydHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BcbiAgICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzXG4gICAqIEByZXR1cm4ge2Jvb2x9XG4gICAqL1xuICBzdGF0aWMgaGFzUHJvcGVydHkocHJvcCwgc2V0dGluZ3MpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc2V0dGluZ3MpIHtcbiAgICAgIGlmIChzZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmIChrZXkgPT0gcHJvcCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdGNoZXMgRWxlbWVudFxuICAgKiBDaGVja3Mgd2hldGhlciBhbiBlbGVtZW50IG1hdGNoZXMgYSBzZWxlY3RvclxuICAgKiBAcGFyYW0ge29iamVjdH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAgICogQHJldHVybiB7Ym9vbH1cbiAgICovXG4gIHN0YXRpYyBtYXRjaGVzRWxlbWVudChlbGVtLCBzZWxlY3Rvcikge1xuICAgIGxldCBwID0gRWxlbWVudC5wcm90b3R5cGU7XG4gICAgbGV0IGYgPVxuICAgICAgcC5tYXRjaGVzIHx8XG4gICAgICBwLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgcC5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgIHAubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcmV0dXJuIFtdLmluZGV4T2YuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHMpLCB0aGlzKSAhPT0gLTE7XG4gICAgICB9O1xuICAgIHJldHVybiBmLmNhbGwoZWxlbSwgc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAgaHR0cDovL2dvbWFrZXRoaW5ncy5jb20vY2xpbWJpbmctdXAtYW5kLWRvd24tdGhlLWRvbS10cmVlLXdpdGgtdmFuaWxsYS1qYXZhc2NyaXB0L1xuICAgICogR2V0IGNsb3Nlc3QgRE9NIGVsZW1lbnQgdXAgdGhlIHRyZWUgdGhhdCBjb250YWlucyBhIGNsYXNzLCBJRCwgb3IgZGF0YSBhdHRyaWJ1dGVcbiAgICAqIEBwYXJhbSAge05vZGV9IGVsZW0gVGhlIGJhc2UgZWxlbWVudFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBzZWxlY3RvciBUaGUgY2xhc3MsIGlkLCBkYXRhIGF0dHJpYnV0ZSwgb3IgdGFnIHRvIGxvb2sgZm9yXG4gICAgKiBAcmV0dXJuIHtOb2RlfSBOdWxsIGlmIG5vIG1hdGNoXG4gICAgKi9cbiAgc3RhdGljIGdldENsb3Nlc3QoZWxlbSwgc2VsZWN0b3IpIHtcbiAgICB2YXIgZmlyc3RDaGFyID0gc2VsZWN0b3IuY2hhckF0KDApO1xuXG4gICAgLy8gR2V0IGNsb3Nlc3QgbWF0Y2hcbiAgICBmb3IgKDsgZWxlbSAmJiBlbGVtICE9PSBkb2N1bWVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSkge1xuICAgICAgLy8gSWYgc2VsZWN0b3IgaXMgYSBjbGFzc1xuICAgICAgaWYgKGZpcnN0Q2hhciA9PT0gJy4nKSB7XG4gICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3Rvci5zdWJzdHIoMSkpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgc2VsZWN0b3IgaXMgYW4gSURcbiAgICAgIGlmIChmaXJzdENoYXIgPT09ICcjJykge1xuICAgICAgICBpZiAoZWxlbS5pZCA9PT0gc2VsZWN0b3Iuc3Vic3RyKDEpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgc2VsZWN0b3IgaXMgYSBkYXRhIGF0dHJpYnV0ZVxuICAgICAgaWYgKGZpcnN0Q2hhciA9PT0gJ1snKSB7XG4gICAgICAgIGlmIChlbGVtLmhhc0F0dHJpYnV0ZShzZWxlY3Rvci5zdWJzdHIoMSwgc2VsZWN0b3IubGVuZ3RoIC0gMikpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgc2VsZWN0b3IgaXMgYSB0YWdcbiAgICAgIGlmIChlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIElzIGVsZW1lbnQgaW4gdmlld3BvcnRcbiAgICogQ2hlY2tzIGlmIGFuIGVsZW1lbnQgaXMgd2l0aGluIHRoZSB2aWV3cG9ydFxuICAgKiBPcHRpb25hbGx5IHNwZWNpZml5IGlmIHBhcnRpYWxseSBpbiB2aWV3XG4gICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICogQHBhcmFtIHtib29sZWFufSBwYXJ0aWFsbHlcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0VsZW1lbnRJblZpZXdwb3J0KGVsLCBwYXJ0aWFsbHkgPSBmYWxzZSkge1xuICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIGlmIChwYXJ0aWFsbHkpIHtcbiAgICAgIHZhciB2ZXJ0SW5WaWV3ID0gcmVjdC50b3AgPD0gd2luZG93SGVpZ2h0ICYmIHJlY3QudG9wICsgcmVjdC5oZWlnaHQgPj0gMDtcbiAgICAgIHZhciBob3JJblZpZXcgPSByZWN0LmxlZnQgPD0gd2luZG93V2lkdGggJiYgcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCA+PSAwO1xuICAgICAgcmV0dXJuIHZlcnRJblZpZXcgJiYgaG9ySW5WaWV3O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVjdC5sZWZ0ID49IDAgJiYgcmVjdC50b3AgPj0gMCAmJiByZWN0LmxlZnQgKyByZWN0LndpZHRoIDw9IHdpbmRvd1dpZHRoICYmIHJlY3QudG9wICsgcmVjdC5oZWlnaHQgPD0gd2luZG93SGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgU2libGluZ3NcbiAgICogUmV0dXJucyB0aGUgc2libGluZ3Mgb2YgYW4gZWxlbWVudC5cbiAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgKi9cbiAgc3RhdGljIGdldFNpYmxpbmdzKGVsKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbC5wYXJlbnROb2RlLmNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkICE9PSBlbDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJcyBFbGVtZW50XG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSBjdXJyZW50IGVsZW1lbnQgaXMgYSBET00gRWxlbWVudCBvclxuICAgKiBhIG5vZGUgbGlzdC5cbiAgICogQHBhcmFtIHtOb2RlfSBlbGVtXG4gICAqL1xuICBzdGF0aWMgaXNFbGVtZW50KGVsZW0pIHtcbiAgICBpZiAoTm9kZUxpc3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoZWxlbSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtICE9PSBudWxsICYmIGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IEVtIHRvIFB4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBicmVha3BvaW50XG4gICAqIEByZXR1cm4ge2Zsb2F0fVxuICAgKi9cbiAgc3RhdGljIGNvbnZlcnRFbVRvUHgoYnJlYWtwb2ludCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGJyZWFrcG9pbnQpICogMTY7XG4gIH1cblxuICAvKipcbiAgICogSGFzIENhbGxiYWNrXG4gICAqIENoZWNrcyBpZiBvYmplY3QgaXMgYSB2YWxpZCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtvYmplY3R9IHN0eWxlUHJvcGVydHlcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBoYXNDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHJldHVybiBjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogVGltZXJcbiAgICogVGltZXIgdXNpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZpcmVzXG4gICAqIGEgY2FsbGJhY2sgYWZ0ZXIgYSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFxuICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAgICogQHBhcmFtIHtvYmplY3R9IGNhbGxiYWNrXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIHRpbWVyKHN0YXJ0LCBkdXJhdGlvbiwgY2FsbGJhY2ssIHRpbWVzdGFtcCkge1xuICAgIGlmICghc3RhcnQpIHN0YXJ0ID0gdGltZXN0YW1wO1xuICAgIGxldCBwcm9ncmVzcyA9IHBhcnNlSW50KHRpbWVzdGFtcCAtIHN0YXJ0KTtcblxuICAgIGlmIChwcm9ncmVzcyA8PSBkdXJhdGlvbikge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShIZWxwZXJzLnRpbWVyLmJpbmQodGhpcywgc3RhcnQsIGR1cmF0aW9uLCBjYWxsYmFjaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBIZWxwZXJzLmhhc0NhbGxiYWNrKGNhbGxiYWNrKSAmJiBjYWxsYmFjay5jYWxsKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBNb2Rlcm5penIgVG91Y2ggRXZlbnRzXG4gICAqIEZpeCBmb3IgdG91Y2hldmVudHMgb24gQ2hyb21lIERlc2t0b3AgLSBNb2Rlcm5penIgMy43LjFcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzLzI0MzFcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGFkZE1vZGVybml6clRvdWNoRXZlbnRzKCkge1xuICAgIGlmICh3aW5kb3cuTW9kZXJuaXpyKSB7XG4gICAgICBNb2Rlcm5penIuYWRkVGVzdCgndG91Y2hldmVudHMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBlcnM7XG4iLCIvKipcbiAqIFVwZGF0ZSBWaWV3cG9ydCBIZWlnaHRcbiAqIFVzZWQgdG8gZml4IHZpZXdwb3J0IHVuaXRzIG9uIG1vYmlsZVxuICogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS90aGUtdHJpY2stdG8tdmlld3BvcnQtdW5pdHMtb24tbW9iaWxlL1xuICovXG5pbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnO1xuXG5jbGFzcyB1cGRhdGVWaWV3cG9ydEhlaWdodCB7XG4gIGNvbnN0cnVjdG9yKGVsZW0sIG9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IEhlbHBlcnMuZXh0ZW5kRGVmYXVsdFNldHRpbmdzKHRoaXMuZGVmYXVsdHMoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc3RhcnQgPSAwO1xuICAgIHRoaXMudXBkYXRlSGVpZ2h0KHRoaXMuY29uZmlnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy50aHJvdHRsZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICB1cGRhdGVIZWlnaHQoeyBwcm9wZXJ0eSB9KSB7XG4gICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIGAke3ZofXB4YCk7XG4gIH1cblxuICB0aHJvdHRsZXIoKSB7XG4gICAgaWYgKCF0aGlzLnNjcm9sbFN0YXJ0KSB7XG4gICAgICB0aGlzLnN0YXJ0ID0gdHJ1ZTtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVIZWlnaHQuYmluZCh0aGlzLCB0aGlzLmNvbmZpZykpO1xuICAgICAgdGhpcy5zdGFydCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wZXJ0eTogJy0tdmgnLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlVmlld3BvcnRIZWlnaHQ7XG4iLCJpbXBvcnQgJ2ZvY3VzLXZpc2libGUnO1xuaW1wb3J0ICdwaWN0dXJlZmlsbCc7XG5cbmltcG9ydCBiYWd1ZXR0ZUJveCBmcm9tICdiYWd1ZXR0ZWJveC5qcyc7XG4vL2ltcG9ydCBDaG9pY2VzIGZyb20gJ2Nob2ljZXMuanMnO1xuaW1wb3J0IHplbnNjcm9sbCBmcm9tICd6ZW5zY3JvbGwnO1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3ZhbmlsbGEtbGF6eWxvYWQnO1xuaW1wb3J0IEFjY29yZGlvbnMgZnJvbSAndmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEnO1xuaW1wb3J0IEZvY3VzV2l0aGluIGZyb20gJ2ZvY3VzLXdpdGhpbic7XG5pbXBvcnQgVXBkYXRlVmlld3BvcnRIZWlnaHQgZnJvbSAnLi9jb21wb25lbnRzL1VwZGF0ZVZpZXdwb3J0SGVpZ2h0JztcblxuLy8gR2xvYmFsIGZ1bmN0aW9uIHRvIHRvZ2dsZSBzdGF0ZXNcbndpbmRvdy50b2dnbGVTdGF0ZSA9IGZ1bmN0aW9uKGVsLCBkYXRhbmFtZSwgb24sIG9mZikge1xuICBlbC5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtkYXRhbmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtkYXRhbmFtZX1gKSA9PT0gb24gPyBvZmYgOiBvbik7XG59O1xuXG5uZXcgVXBkYXRlVmlld3BvcnRIZWlnaHQoKTtcblxuLyoqXG4gKiBGb2N1cyB3aXRoaW4gcG9seWZpbGxcbiAqL1xuRm9jdXNXaXRoaW4oZG9jdW1lbnQsIHtcbiAgYXR0cjogZmFsc2UsXG4gIGNsYXNzTmFtZTogJ2ZvY3VzLXdpdGhpbicsXG59KTtcblxuLypcbiAgSW1hZ2UgZ2FsbGVyaWVzXG4gIHVybDogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZmxpY2tpdHlcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBVc2FnZTpcbiAgPGRpdiBjbGFzcz1cImdhbGxlcnlcIj5cbiAgICAgIDxhIGhyZWY9XCJwYXRoLXRvLWxhcmdlLWltYWdlXCIgZGF0YS1jYXB0aW9uPVwiXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJwYXRoLXRvLXRodW1ibmFpbFwiIGFsdD1cIlwiIC8+XG4gICAgICA8L2E+XG4gIDwvZGl2PlxuXG4gIE5vdGU6IElmIG5vdCB1c2luZywgcmVtb3ZlIEBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvYmFndWV0dGVib3guanMvc3JjL2JhZ3VldHRlQm94XCI7IGZyb20gYGFzc2V0cy9zYXNzL2dsb2JhbC5zY3NzYFxuKi9cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5JykpIHtcbiAgYmFndWV0dGVCb3gucnVuKCcuZ2FsbGVyeScpO1xufVxuXG4vKlxuICBCZXR0ZXIgPHNlbGVjdD4gZWxlbWVudHNcbiAgdXJsOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9jaG9pY2VzLmpzXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgVXNhZ2U6XG4gIFNlbGVjdHMgYWxsIDxzZWxlY3Q+IGVsZW1lbnRzIGJ5IGRlZmF1bHRcblxuICBOb3RlOiBJZiBub3QgdXNpbmcsIHJlbW92ZSBAaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nob2ljZXMuanMvYXNzZXRzL3N0eWxlcy9zY3NzL2Nob2ljZXNcIjsgZnJvbSBgYXNzZXRzL3Nhc3MvZ2xvYmFsLnNjc3NgXG4qL1xuLy8gaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpLmxlbmd0aCA+IDApIHtcbi8vICAgY29uc3Qgc2VsZWN0RWxlbWVudHMgPSBuZXcgQ2hvaWNlcygnc2VsZWN0Jyk7XG4vLyB9XG5cbi8qXG4gICAgICAgIE1lbnUgYnVyZ2VyXG4gICAgKi9cbmNvbnN0IG1lbnVCdXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYS1uYXYtdG9nZ2xlJyk7XG5cbmlmIChtZW51QnVyZ2VyQnRuKSB7XG4gIG1lbnVCdXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgdG9nZ2xlU3RhdGUoZG9jdW1lbnQuYm9keSwgJ25hdicsICdvcGVuJywgJ2Nsb3NlZCcpO1xuICB9KTtcbn1cblxuLypcbiAgQXV0b21hdGljYWxseSBvcGVuIGV4dGVybmFsIGxpbmtzIGluIG5ldyB0YWJcbiovXG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LmxpbmtzO1xuXG5mb3IgKGxldCBpID0gMCwgbGlua3NMZW5ndGggPSBsaW5rcy5sZW5ndGg7IGkgPCBsaW5rc0xlbmd0aDsgaSsrKSB7XG4gIGlmIChsaW5rc1tpXS5ob3N0bmFtZSAhPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpIHtcbiAgICBsaW5rc1tpXS50YXJnZXQgPSAnX2JsYW5rJztcbiAgfVxufVxuXG4vLyBMYXp5TG9hZFxuY29uc3QgbGF6eUxvYWRJbWFnZXMgPSBuZXcgTGF6eUxvYWQoKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvKiFcbiAqIGJhZ3VldHRlQm94LmpzXG4gKiBAYXV0aG9yICBmZWltb3NpXG4gKiBAdmVyc2lvbiAxLjExLjBcbiAqIEB1cmwgaHR0cHM6Ly9naXRodWIuY29tL2ZlaW1vc2kvYmFndWV0dGVCb3guanNcbiAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10KCk6ZS5iYWd1ZXR0ZUJveD10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgcyxsLHUsYyxkLGY9Jzxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjYwXCI+PHBvbHlsaW5lIHBvaW50cz1cIjMwIDEwIDEwIDMwIDMwIDUwXCIgc3Ryb2tlPVwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIgc3Ryb2tlLXdpZHRoPVwiNFwic3Ryb2tlLWxpbmVjYXA9XCJidXR0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz48L3N2Zz4nLGc9Jzxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjYwXCI+PHBvbHlsaW5lIHBvaW50cz1cIjE0IDEwIDM0IDMwIDE0IDUwXCIgc3Ryb2tlPVwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIgc3Ryb2tlLXdpZHRoPVwiNFwic3Ryb2tlLWxpbmVjYXA9XCJidXR0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz48L3N2Zz4nLHA9Jzxzdmcgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCI+PGcgc3Ryb2tlPVwicmdiKDE2MCwxNjAsMTYwKVwiIHN0cm9rZS13aWR0aD1cIjRcIj48bGluZSB4MT1cIjVcIiB5MT1cIjVcIiB4Mj1cIjI1XCIgeTI9XCIyNVwiLz48bGluZSB4MT1cIjVcIiB5MT1cIjI1XCIgeDI9XCIyNVwiIHkyPVwiNVwiLz48L2c+PC9zdmc+JyxiPXt9LG09e2NhcHRpb25zOiEwLGJ1dHRvbnM6XCJhdXRvXCIsZnVsbFNjcmVlbjohMSxub1Njcm9sbGJhcnM6ITEsYm9keUNsYXNzOlwiYmFndWV0dGVCb3gtb3BlblwiLHRpdGxlVGFnOiExLGFzeW5jOiExLHByZWxvYWQ6MixhbmltYXRpb246XCJzbGlkZUluXCIsYWZ0ZXJTaG93Om51bGwsYWZ0ZXJIaWRlOm51bGwsb25DaGFuZ2U6bnVsbCxvdmVybGF5QmFja2dyb3VuZENvbG9yOlwicmdiYSgwLDAsMCwuOClcIn0sdj17fSxoPVtdLG89MCxuPSExLGk9e30sYT0hMSx5PS8uK1xcLihnaWZ8anBlP2d8cG5nfHdlYnApL2ksdz17fSxrPVtdLHI9bnVsbCx4PWZ1bmN0aW9uKGUpey0xIT09ZS50YXJnZXQuaWQuaW5kZXhPZihcImJhZ3VldHRlLWltZ1wiKSYmaigpfSxDPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uP2Uuc3RvcFByb3BhZ2F0aW9uKCk6ZS5jYW5jZWxCdWJibGU9ITAsRCgpfSxFPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uP2Uuc3RvcFByb3BhZ2F0aW9uKCk6ZS5jYW5jZWxCdWJibGU9ITAsWCgpfSxCPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uP2Uuc3RvcFByb3BhZ2F0aW9uKCk6ZS5jYW5jZWxCdWJibGU9ITAsaigpfSxUPWZ1bmN0aW9uKGUpe2kuY291bnQrKywxPGkuY291bnQmJihpLm11bHRpdG91Y2g9ITApLGkuc3RhcnRYPWUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVgsaS5zdGFydFk9ZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWX0sTj1mdW5jdGlvbihlKXtpZighYSYmIWkubXVsdGl0b3VjaCl7ZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMTt2YXIgdD1lLnRvdWNoZXNbMF18fGUuY2hhbmdlZFRvdWNoZXNbMF07NDA8dC5wYWdlWC1pLnN0YXJ0WD8oYT0hMCxEKCkpOnQucGFnZVgtaS5zdGFydFg8LTQwPyhhPSEwLFgoKSk6MTAwPGkuc3RhcnRZLXQucGFnZVkmJmooKX19LEw9ZnVuY3Rpb24oKXtpLmNvdW50LS0saS5jb3VudDw9MCYmKGkubXVsdGl0b3VjaD0hMSksYT0hMX0sQT1mdW5jdGlvbigpe0woKX0sUD1mdW5jdGlvbihlKXtcImJsb2NrXCI9PT1zLnN0eWxlLmRpc3BsYXkmJnMuY29udGFpbnMmJiFzLmNvbnRhaW5zKGUudGFyZ2V0KSYmKGUuc3RvcFByb3BhZ2F0aW9uKCksWSgpKX07ZnVuY3Rpb24gUyhlKXtpZih3Lmhhc093blByb3BlcnR5KGUpKXt2YXIgdD13W2VdLmdhbGxlcmllcztbXS5mb3JFYWNoLmNhbGwodCxmdW5jdGlvbihlKXtbXS5mb3JFYWNoLmNhbGwoZSxmdW5jdGlvbihlKXtXKGUuaW1hZ2VFbGVtZW50LFwiY2xpY2tcIixlLmV2ZW50SGFuZGxlcil9KSxoPT09ZSYmKGg9W10pfSksZGVsZXRlIHdbZV19fWZ1bmN0aW9uIEYoZSl7c3dpdGNoKGUua2V5Q29kZSl7Y2FzZSAzNzpEKCk7YnJlYWs7Y2FzZSAzOTpYKCk7YnJlYWs7Y2FzZSAyNzpqKCk7YnJlYWs7Y2FzZSAzNjohZnVuY3Rpb24gdChlKXtlJiZlLnByZXZlbnREZWZhdWx0KCk7cmV0dXJuIE0oMCl9KGUpO2JyZWFrO2Nhc2UgMzU6IWZ1bmN0aW9uIG4oZSl7ZSYmZS5wcmV2ZW50RGVmYXVsdCgpO3JldHVybiBNKGgubGVuZ3RoLTEpfShlKX19ZnVuY3Rpb24gSChlLHQpe2lmKGghPT1lKXtmb3IoaD1lLGZ1bmN0aW9uIHIoZSl7ZXx8KGU9e30pO2Zvcih2YXIgdCBpbiBtKWJbdF09bVt0XSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZVt0XSYmKGJbdF09ZVt0XSk7bC5zdHlsZS50cmFuc2l0aW9uPWwuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImZhZGVJblwiPT09Yi5hbmltYXRpb24/XCJvcGFjaXR5IC40cyBlYXNlXCI6XCJzbGlkZUluXCI9PT1iLmFuaW1hdGlvbj9cIlwiOlwibm9uZVwiLFwiYXV0b1wiPT09Yi5idXR0b25zJiYoXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8MT09PWgubGVuZ3RoKSYmKGIuYnV0dG9ucz0hMSk7dS5zdHlsZS5kaXNwbGF5PWMuc3R5bGUuZGlzcGxheT1iLmJ1dHRvbnM/XCJcIjpcIm5vbmVcIjt0cnl7cy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9Yi5vdmVybGF5QmFja2dyb3VuZENvbG9yfWNhdGNoKG4pe319KHQpO2wuZmlyc3RDaGlsZDspbC5yZW1vdmVDaGlsZChsLmZpcnN0Q2hpbGQpO2Zvcih2YXIgbixvPVtdLGk9W10sYT1rLmxlbmd0aD0wO2E8ZS5sZW5ndGg7YSsrKShuPUooXCJkaXZcIikpLmNsYXNzTmFtZT1cImZ1bGwtaW1hZ2VcIixuLmlkPVwiYmFndWV0dGUtaW1nLVwiK2Esay5wdXNoKG4pLG8ucHVzaChcImJhZ3VldHRlQm94LWZpZ3VyZS1cIithKSxpLnB1c2goXCJiYWd1ZXR0ZUJveC1maWdjYXB0aW9uLVwiK2EpLGwuYXBwZW5kQ2hpbGQoa1thXSk7cy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIixvLmpvaW4oXCIgXCIpKSxzLnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIixpLmpvaW4oXCIgXCIpKX19ZnVuY3Rpb24gSShlKXtiLm5vU2Nyb2xsYmFycyYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9XCJoaWRkZW5cIixkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WT1cInNjcm9sbFwiKSxcImJsb2NrXCIhPT1zLnN0eWxlLmRpc3BsYXkmJihVKGRvY3VtZW50LFwia2V5ZG93blwiLEYpLGk9e2NvdW50OjAsc3RhcnRYOm51bGwsc3RhcnRZOm51bGx9LHEobz1lLGZ1bmN0aW9uKCl7eihvKSxWKG8pfSksUigpLHMuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsYi5mdWxsU2NyZWVuJiZmdW5jdGlvbiB0KCl7cy5yZXF1ZXN0RnVsbHNjcmVlbj9zLnJlcXVlc3RGdWxsc2NyZWVuKCk6cy53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbj9zLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk6cy5tb3pSZXF1ZXN0RnVsbFNjcmVlbiYmcy5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpfSgpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtzLmNsYXNzTmFtZT1cInZpc2libGVcIixiLmJvZHlDbGFzcyYmZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChiLmJvZHlDbGFzcyksYi5hZnRlclNob3cmJmIuYWZ0ZXJTaG93KCl9LDUwKSxiLm9uQ2hhbmdlJiZiLm9uQ2hhbmdlKG8say5sZW5ndGgpLHI9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCxZKCksbj0hMCl9ZnVuY3Rpb24gWSgpe2IuYnV0dG9ucz91LmZvY3VzKCk6ZC5mb2N1cygpfWZ1bmN0aW9uIGooKXtiLm5vU2Nyb2xsYmFycyYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIsZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIpLFwibm9uZVwiIT09cy5zdHlsZS5kaXNwbGF5JiYoVyhkb2N1bWVudCxcImtleWRvd25cIixGKSxzLmNsYXNzTmFtZT1cIlwiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtzLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZG9jdW1lbnQuZnVsbHNjcmVlbiYmZnVuY3Rpb24gZSgpe2RvY3VtZW50LmV4aXRGdWxsc2NyZWVuP2RvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk6ZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbj9kb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk6ZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4mJmRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCl9KCksYi5ib2R5Q2xhc3MmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0JiZkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYi5ib2R5Q2xhc3MpLGIuYWZ0ZXJIaWRlJiZiLmFmdGVySGlkZSgpLHImJnIuZm9jdXMoKSxuPSExfSw1MDApKX1mdW5jdGlvbiBxKHQsbil7dmFyIGU9a1t0XSxvPWhbdF07aWYodm9pZCAwIT09ZSYmdm9pZCAwIT09bylpZihlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdKW4mJm4oKTtlbHNle3ZhciBpPW8uaW1hZ2VFbGVtZW50LGE9aS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGIuY2FwdGlvbnM/Yi5jYXB0aW9ucy5jYWxsKGgsaSk6aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcHRpb25cIil8fGkudGl0bGUscz1mdW5jdGlvbiBkKGUpe3ZhciB0PWUuaHJlZjtpZihlLmRhdGFzZXQpe3ZhciBuPVtdO2Zvcih2YXIgbyBpbiBlLmRhdGFzZXQpXCJhdC1cIiE9PW8uc3Vic3RyaW5nKDAsMyl8fGlzTmFOKG8uc3Vic3RyaW5nKDMpKXx8KG5bby5yZXBsYWNlKFwiYXQtXCIsXCJcIildPWUuZGF0YXNldFtvXSk7Zm9yKHZhciBpPU9iamVjdC5rZXlzKG4pLnNvcnQoZnVuY3Rpb24oZSx0KXtyZXR1cm4gcGFyc2VJbnQoZSwxMCk8cGFyc2VJbnQodCwxMCk/LTE6MX0pLGE9d2luZG93LmlubmVyV2lkdGgqd2luZG93LmRldmljZVBpeGVsUmF0aW8scj0wO3I8aS5sZW5ndGgtMSYmaVtyXTxhOylyKys7dD1uW2lbcl1dfHx0fXJldHVybiB0fShpKSxsPUooXCJmaWd1cmVcIik7aWYobC5pZD1cImJhZ3VldHRlQm94LWZpZ3VyZS1cIit0LGwuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtc3Bpbm5lclwiPjxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMlwiPjwvZGl2PjwvZGl2PicsYi5jYXB0aW9ucyYmcil7dmFyIHU9SihcImZpZ2NhcHRpb25cIik7dS5pZD1cImJhZ3VldHRlQm94LWZpZ2NhcHRpb24tXCIrdCx1LmlubmVySFRNTD1yLGwuYXBwZW5kQ2hpbGQodSl9ZS5hcHBlbmRDaGlsZChsKTt2YXIgYz1KKFwiaW1nXCIpO2Mub25sb2FkPWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWd1ZXR0ZS1pbWctXCIrdCtcIiAuYmFndWV0dGVCb3gtc3Bpbm5lclwiKTtsLnJlbW92ZUNoaWxkKGUpLCFiLmFzeW5jJiZuJiZuKCl9LGMuc2V0QXR0cmlidXRlKFwic3JjXCIscyksYy5hbHQ9YSYmYS5hbHR8fFwiXCIsYi50aXRsZVRhZyYmciYmKGMudGl0bGU9ciksbC5hcHBlbmRDaGlsZChjKSxiLmFzeW5jJiZuJiZuKCl9fWZ1bmN0aW9uIFgoKXtyZXR1cm4gTShvKzEpfWZ1bmN0aW9uIEQoKXtyZXR1cm4gTShvLTEpfWZ1bmN0aW9uIE0oZSx0KXtyZXR1cm4hbiYmMDw9ZSYmZTx0Lmxlbmd0aD8oSCh0LGIpLEkoZSksITApOmU8MD8oYi5hbmltYXRpb24mJk8oXCJsZWZ0XCIpLCExKTplPj1rLmxlbmd0aD8oYi5hbmltYXRpb24mJk8oXCJyaWdodFwiKSwhMSk6KHEobz1lLGZ1bmN0aW9uKCl7eihvKSxWKG8pfSksUigpLGIub25DaGFuZ2UmJmIub25DaGFuZ2UobyxrLmxlbmd0aCksITApfWZ1bmN0aW9uIE8oZSl7bC5jbGFzc05hbWU9XCJib3VuY2UtZnJvbS1cIitlLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLmNsYXNzTmFtZT1cIlwifSw0MDApfWZ1bmN0aW9uIFIoKXt2YXIgZT0xMDAqLW8rXCIlXCI7XCJmYWRlSW5cIj09PWIuYW5pbWF0aW9uPyhsLnN0eWxlLm9wYWNpdHk9MCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7di50cmFuc2Zvcm1zP2wuc3R5bGUudHJhbnNmb3JtPWwuc3R5bGUud2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIrZStcIiwwLDApXCI6bC5zdHlsZS5sZWZ0PWUsbC5zdHlsZS5vcGFjaXR5PTF9LDQwMCkpOnYudHJhbnNmb3Jtcz9sLnN0eWxlLnRyYW5zZm9ybT1sLnN0eWxlLndlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKFwiK2UrXCIsMCwwKVwiOmwuc3R5bGUubGVmdD1lfWZ1bmN0aW9uIHooZSl7ZS1vPj1iLnByZWxvYWR8fHEoZSsxLGZ1bmN0aW9uKCl7eihlKzEpfSl9ZnVuY3Rpb24gVihlKXtvLWU+PWIucHJlbG9hZHx8cShlLTEsZnVuY3Rpb24oKXtWKGUtMSl9KX1mdW5jdGlvbiBVKGUsdCxuLG8pe2UuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIodCxuLG8pOmUuYXR0YWNoRXZlbnQoXCJvblwiK3QsZnVuY3Rpb24oZSl7KGU9ZXx8d2luZG93LmV2ZW50KS50YXJnZXQ9ZS50YXJnZXR8fGUuc3JjRWxlbWVudCxuKGUpfSl9ZnVuY3Rpb24gVyhlLHQsbixvKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbixvKTplLmRldGFjaEV2ZW50KFwib25cIit0LG4pfWZ1bmN0aW9uIEcoZSl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpfWZ1bmN0aW9uIEooZSl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSl9cmV0dXJuW10uZm9yRWFjaHx8KEFycmF5LnByb3RvdHlwZS5mb3JFYWNoPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTA7bjx0aGlzLmxlbmd0aDtuKyspZS5jYWxsKHQsdGhpc1tuXSxuLHRoaXMpfSksW10uZmlsdGVyfHwoQXJyYXkucHJvdG90eXBlLmZpbHRlcj1mdW5jdGlvbihlLHQsbixvLGkpe2ZvcihuPXRoaXMsbz1bXSxpPTA7aTxuLmxlbmd0aDtpKyspZS5jYWxsKHQsbltpXSxpLG4pJiZvLnB1c2gobltpXSk7cmV0dXJuIG99KSx7cnVuOmZ1bmN0aW9uIEsoZSx0KXtyZXR1cm4gdi50cmFuc2Zvcm1zPWZ1bmN0aW9uIG4oKXt2YXIgZT1KKFwiZGl2XCIpO3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnN0eWxlLnBlcnNwZWN0aXZlfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5zdHlsZS53ZWJraXRQZXJzcGVjdGl2ZX0oKSx2LnN2Zz1mdW5jdGlvbiBvKCl7dmFyIGU9SihcImRpdlwiKTtyZXR1cm4gZS5pbm5lckhUTUw9XCI8c3ZnLz5cIixcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT0oZS5maXJzdENoaWxkJiZlLmZpcnN0Q2hpbGQubmFtZXNwYWNlVVJJKX0oKSx2LnBhc3NpdmVFdmVudHM9ZnVuY3Rpb24gaSgpe3ZhciBlPSExO3RyeXt2YXIgdD1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJwYXNzaXZlXCIse2dldDpmdW5jdGlvbigpe2U9ITB9fSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsbnVsbCx0KX1jYXRjaChuKXt9cmV0dXJuIGV9KCksZnVuY3Rpb24gYSgpe2lmKHM9RyhcImJhZ3VldHRlQm94LW92ZXJsYXlcIikpcmV0dXJuIGw9RyhcImJhZ3VldHRlQm94LXNsaWRlclwiKSx1PUcoXCJwcmV2aW91cy1idXR0b25cIiksYz1HKFwibmV4dC1idXR0b25cIiksdm9pZChkPUcoXCJjbG9zZS1idXR0b25cIikpOyhzPUooXCJkaXZcIikpLnNldEF0dHJpYnV0ZShcInJvbGVcIixcImRpYWxvZ1wiKSxzLmlkPVwiYmFndWV0dGVCb3gtb3ZlcmxheVwiLGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChzKSwobD1KKFwiZGl2XCIpKS5pZD1cImJhZ3VldHRlQm94LXNsaWRlclwiLHMuYXBwZW5kQ2hpbGQobCksKHU9SihcImJ1dHRvblwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLHUuaWQ9XCJwcmV2aW91cy1idXR0b25cIix1LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIlByZXZpb3VzXCIpLHUuaW5uZXJIVE1MPXYuc3ZnP2Y6XCImbHQ7XCIscy5hcHBlbmRDaGlsZCh1KSwoYz1KKFwiYnV0dG9uXCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksYy5pZD1cIm5leHQtYnV0dG9uXCIsYy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJOZXh0XCIpLGMuaW5uZXJIVE1MPXYuc3ZnP2c6XCImZ3Q7XCIscy5hcHBlbmRDaGlsZChjKSwoZD1KKFwiYnV0dG9uXCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksZC5pZD1cImNsb3NlLWJ1dHRvblwiLGQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiQ2xvc2VcIiksZC5pbm5lckhUTUw9di5zdmc/cDpcIiZ0aW1lcztcIixzLmFwcGVuZENoaWxkKGQpLHUuY2xhc3NOYW1lPWMuY2xhc3NOYW1lPWQuY2xhc3NOYW1lPVwiYmFndWV0dGVCb3gtYnV0dG9uXCIsZnVuY3Rpb24gdCgpe3ZhciBlPXYucGFzc2l2ZUV2ZW50cz97cGFzc2l2ZTohMH06bnVsbDtVKHMsXCJjbGlja1wiLHgpLFUodSxcImNsaWNrXCIsQyksVShjLFwiY2xpY2tcIixFKSxVKGQsXCJjbGlja1wiLEIpLFUobCxcImNvbnRleHRtZW51XCIsQSksVShzLFwidG91Y2hzdGFydFwiLFQsZSksVShzLFwidG91Y2htb3ZlXCIsTixlKSxVKHMsXCJ0b3VjaGVuZFwiLEwpLFUoZG9jdW1lbnQsXCJmb2N1c1wiLFAsITApfSgpfSgpLFMoZSksZnVuY3Rpb24gcihlLGEpe3ZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZSksbj17Z2FsbGVyaWVzOltdLG5vZGVMaXN0OnR9O3JldHVybiB3W2VdPW4sW10uZm9yRWFjaC5jYWxsKHQsZnVuY3Rpb24oZSl7YSYmYS5maWx0ZXImJih5PWEuZmlsdGVyKTt2YXIgdD1bXTtpZih0PVwiQVwiPT09ZS50YWdOYW1lP1tlXTplLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSwwIT09KHQ9W10uZmlsdGVyLmNhbGwodCxmdW5jdGlvbihlKXtpZigtMT09PWUuY2xhc3NOYW1lLmluZGV4T2YoYSYmYS5pZ25vcmVDbGFzcykpcmV0dXJuIHkudGVzdChlLmhyZWYpfSkpLmxlbmd0aCl7dmFyIGk9W107W10uZm9yRWFjaC5jYWxsKHQsZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0P2UucHJldmVudERlZmF1bHQoKTplLnJldHVyblZhbHVlPSExLEgoaSxhKSxJKHQpfSxvPXtldmVudEhhbmRsZXI6bixpbWFnZUVsZW1lbnQ6ZX07VShlLFwiY2xpY2tcIixuKSxpLnB1c2gobyl9KSxuLmdhbGxlcmllcy5wdXNoKGkpfX0pLG4uZ2FsbGVyaWVzfShlLHQpfSxzaG93Ok0sc2hvd05leHQ6WCxzaG93UHJldmlvdXM6RCxoaWRlOmosZGVzdHJveTpmdW5jdGlvbiBlKCl7IWZ1bmN0aW9uIHQoKXt2YXIgZT12LnBhc3NpdmVFdmVudHM/e3Bhc3NpdmU6ITB9Om51bGw7VyhzLFwiY2xpY2tcIix4KSxXKHUsXCJjbGlja1wiLEMpLFcoYyxcImNsaWNrXCIsRSksVyhkLFwiY2xpY2tcIixCKSxXKGwsXCJjb250ZXh0bWVudVwiLEEpLFcocyxcInRvdWNoc3RhcnRcIixULGUpLFcocyxcInRvdWNobW92ZVwiLE4sZSksVyhzLFwidG91Y2hlbmRcIixMKSxXKGRvY3VtZW50LFwiZm9jdXNcIixQLCEwKX0oKSxmdW5jdGlvbiBuKCl7Zm9yKHZhciBlIGluIHcpdy5oYXNPd25Qcm9wZXJ0eShlKSYmUyhlKX0oKSxXKGRvY3VtZW50LFwia2V5ZG93blwiLEYpLGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZ3VldHRlQm94LW92ZXJsYXlcIikpLHc9e30saD1bXSxvPTB9fX0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIDpmb2N1cy12aXNpYmxlIHBvbHlmaWxsIGF0IHRoZSBnaXZlbiBzY29wZS5cbiAgICogQSBzY29wZSBpbiB0aGlzIGNhc2UgaXMgZWl0aGVyIHRoZSB0b3AtbGV2ZWwgRG9jdW1lbnQgb3IgYSBTaGFkb3cgUm9vdC5cbiAgICpcbiAgICogQHBhcmFtIHsoRG9jdW1lbnR8U2hhZG93Um9vdCl9IHNjb3BlXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZVxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbChzY29wZSkge1xuICAgIHZhciBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICB2YXIgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgICB2YXIgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0ID0gbnVsbDtcblxuICAgIHZhciBpbnB1dFR5cGVzV2hpdGVsaXN0ID0ge1xuICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgIHNlYXJjaDogdHJ1ZSxcbiAgICAgIHVybDogdHJ1ZSxcbiAgICAgIHRlbDogdHJ1ZSxcbiAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgcGFzc3dvcmQ6IHRydWUsXG4gICAgICBudW1iZXI6IHRydWUsXG4gICAgICBkYXRlOiB0cnVlLFxuICAgICAgbW9udGg6IHRydWUsXG4gICAgICB3ZWVrOiB0cnVlLFxuICAgICAgdGltZTogdHJ1ZSxcbiAgICAgIGRhdGV0aW1lOiB0cnVlLFxuICAgICAgJ2RhdGV0aW1lLWxvY2FsJzogdHJ1ZVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxlZ2FjeSBicm93c2VycyBhbmQgaWZyYW1lcyB3aGljaCBzb21ldGltZXMgZm9jdXNcbiAgICAgKiBlbGVtZW50cyBsaWtlIGRvY3VtZW50LCBib2R5LCBhbmQgbm9uLWludGVyYWN0aXZlIFNWRy5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNWYWxpZEZvY3VzVGFyZ2V0KGVsKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGVsICYmXG4gICAgICAgIGVsICE9PSBkb2N1bWVudCAmJlxuICAgICAgICBlbC5ub2RlTmFtZSAhPT0gJ0hUTUwnICYmXG4gICAgICAgIGVsLm5vZGVOYW1lICE9PSAnQk9EWScgJiZcbiAgICAgICAgJ2NsYXNzTGlzdCcgaW4gZWwgJiZcbiAgICAgICAgJ2NvbnRhaW5zJyBpbiBlbC5jbGFzc0xpc3RcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgdGhlXG4gICAgICogYGZvY3VzLXZpc2libGVgIGNsYXNzIGJlaW5nIGFkZGVkLCBpLmUuIHdoZXRoZXIgaXQgc2hvdWxkIGFsd2F5cyBtYXRjaFxuICAgICAqIGA6Zm9jdXMtdmlzaWJsZWAgd2hlbiBmb2N1c2VkLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5KGVsKSB7XG4gICAgICB2YXIgdHlwZSA9IGVsLnR5cGU7XG4gICAgICB2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG5cbiAgICAgIGlmICh0YWdOYW1lID09ICdJTlBVVCcgJiYgaW5wdXRUeXBlc1doaXRlbGlzdFt0eXBlXSAmJiAhZWwucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YWdOYW1lID09ICdURVhUQVJFQScgJiYgIWVsLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyB0byB0aGUgZ2l2ZW4gZWxlbWVudCBpZiBpdCB3YXMgbm90IGFkZGVkIGJ5XG4gICAgICogdGhlIGF1dGhvci5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkRm9jdXNWaXNpYmxlQ2xhc3MoZWwpIHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzLXZpc2libGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdmb2N1cy12aXNpYmxlJyk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcsICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50IGlmIGl0IHdhcyBub3RcbiAgICAgKiBvcmlnaW5hbGx5IGFkZGVkIGJ5IHRoZSBhdXRob3IuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZUZvY3VzVmlzaWJsZUNsYXNzKGVsKSB7XG4gICAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMtdmlzaWJsZScpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZvY3VzLXZpc2libGUtYWRkZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbW9zdCByZWNlbnQgdXNlciBpbnRlcmFjdGlvbiB3YXMgdmlhIHRoZSBrZXlib2FyZDtcbiAgICAgKiBhbmQgdGhlIGtleSBwcmVzcyBkaWQgbm90IGluY2x1ZGUgYSBtZXRhLCBhbHQvb3B0aW9uLCBvciBjb250cm9sIGtleTtcbiAgICAgKiB0aGVuIHRoZSBtb2RhbGl0eSBpcyBrZXlib2FyZC4gT3RoZXJ3aXNlLCB0aGUgbW9kYWxpdHkgaXMgbm90IGtleWJvYXJkLlxuICAgICAqIEFwcGx5IGBmb2N1cy12aXNpYmxlYCB0byBhbnkgY3VycmVudCBhY3RpdmUgZWxlbWVudCBhbmQga2VlcCB0cmFja1xuICAgICAqIG9mIG91ciBrZXlib2FyZCBtb2RhbGl0eSBzdGF0ZSB3aXRoIGBoYWRLZXlib2FyZEV2ZW50YC5cbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNWYWxpZEZvY3VzVGFyZ2V0KHNjb3BlLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIGFkZEZvY3VzVmlzaWJsZUNsYXNzKHNjb3BlLmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBhdCBhbnkgcG9pbnQgYSB1c2VyIGNsaWNrcyB3aXRoIGEgcG9pbnRpbmcgZGV2aWNlLCBlbnN1cmUgdGhhdCB3ZSBjaGFuZ2VcbiAgICAgKiB0aGUgbW9kYWxpdHkgYXdheSBmcm9tIGtleWJvYXJkLlxuICAgICAqIFRoaXMgYXZvaWRzIHRoZSBzaXR1YXRpb24gd2hlcmUgYSB1c2VyIHByZXNzZXMgYSBrZXkgb24gYW4gYWxyZWFkeSBmb2N1c2VkXG4gICAgICogZWxlbWVudCwgYW5kIHRoZW4gY2xpY2tzIG9uIGEgZGlmZmVyZW50IGVsZW1lbnQsIGZvY3VzaW5nIGl0IHdpdGggYVxuICAgICAqIHBvaW50aW5nIGRldmljZSwgd2hpbGUgd2Ugc3RpbGwgdGhpbmsgd2UncmUgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZSkge1xuICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGBmb2N1c2AsIGFkZCB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIHRvIHRoZSB0YXJnZXQgaWY6XG4gICAgICogLSB0aGUgdGFyZ2V0IHJlY2VpdmVkIGZvY3VzIGFzIGEgcmVzdWx0IG9mIGtleWJvYXJkIG5hdmlnYXRpb24sIG9yXG4gICAgICogLSB0aGUgZXZlbnQgdGFyZ2V0IGlzIGFuIGVsZW1lbnQgdGhhdCB3aWxsIGxpa2VseSByZXF1aXJlIGludGVyYWN0aW9uXG4gICAgICogICB2aWEgdGhlIGtleWJvYXJkIChlLmcuIGEgdGV4dCBib3gpXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uRm9jdXMoZSkge1xuICAgICAgLy8gUHJldmVudCBJRSBmcm9tIGZvY3VzaW5nIHRoZSBkb2N1bWVudCBvciBIVE1MIGVsZW1lbnQuXG4gICAgICBpZiAoIWlzVmFsaWRGb2N1c1RhcmdldChlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFkS2V5Ym9hcmRFdmVudCB8fCBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlLnRhcmdldCkpIHtcbiAgICAgICAgYWRkRm9jdXNWaXNpYmxlQ2xhc3MoZS50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGBibHVyYCwgcmVtb3ZlIHRoZSBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgZnJvbSB0aGUgdGFyZ2V0LlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgICAgaWYgKCFpc1ZhbGlkRm9jdXNUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzLXZpc2libGUnKSB8fFxuICAgICAgICBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcpXG4gICAgICApIHtcbiAgICAgICAgLy8gVG8gZGV0ZWN0IGEgdGFiL3dpbmRvdyBzd2l0Y2gsIHdlIGxvb2sgZm9yIGEgYmx1ciBldmVudCBmb2xsb3dlZFxuICAgICAgICAvLyByYXBpZGx5IGJ5IGEgdmlzaWJpbGl0eSBjaGFuZ2UuXG4gICAgICAgIC8vIElmIHdlIGRvbid0IHNlZSBhIHZpc2liaWxpdHkgY2hhbmdlIHdpdGhpbiAxMDBtcywgaXQncyBwcm9iYWJseSBhXG4gICAgICAgIC8vIHJlZ3VsYXIgZm9jdXMgY2hhbmdlLlxuICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0KTtcbiAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIHJlbW92ZUZvY3VzVmlzaWJsZUNsYXNzKGUudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgdXNlciBjaGFuZ2VzIHRhYnMsIGtlZXAgdHJhY2sgb2Ygd2hldGhlciBvciBub3QgdGhlIHByZXZpb3VzbHlcbiAgICAgKiBmb2N1c2VkIGVsZW1lbnQgaGFkIC5mb2N1cy12aXNpYmxlLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvblZpc2liaWxpdHlDaGFuZ2UoZSkge1xuICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PSAnaGlkZGVuJykge1xuICAgICAgICAvLyBJZiB0aGUgdGFiIGJlY29tZXMgYWN0aXZlIGFnYWluLCB0aGUgYnJvd3NlciB3aWxsIGhhbmRsZSBjYWxsaW5nIGZvY3VzXG4gICAgICAgIC8vIG9uIHRoZSBlbGVtZW50IChTYWZhcmkgYWN0dWFsbHkgY2FsbHMgaXQgdHdpY2UpLlxuICAgICAgICAvLyBJZiB0aGlzIHRhYiBjaGFuZ2UgY2F1c2VkIGEgYmx1ciBvbiBhbiBlbGVtZW50IHdpdGggZm9jdXMtdmlzaWJsZSxcbiAgICAgICAgLy8gcmUtYXBwbHkgdGhlIGNsYXNzIHdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgYmFjayB0byB0aGUgdGFiLlxuICAgICAgICBpZiAoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkpIHtcbiAgICAgICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBncm91cCBvZiBsaXN0ZW5lcnMgdG8gZGV0ZWN0IHVzYWdlIG9mIGFueSBwb2ludGluZyBkZXZpY2VzLlxuICAgICAqIFRoZXNlIGxpc3RlbmVycyB3aWxsIGJlIGFkZGVkIHdoZW4gdGhlIHBvbHlmaWxsIGZpcnN0IGxvYWRzLCBhbmQgYW55dGltZVxuICAgICAqIHRoZSB3aW5kb3cgaXMgYmx1cnJlZCwgc28gdGhhdCB0aGV5IGFyZSBhY3RpdmUgd2hlbiB0aGUgd2luZG93IHJlZ2FpbnNcbiAgICAgKiBmb2N1cy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBwb2xmeWlsbCBmaXJzdCBsb2FkcywgYXNzdW1lIHRoZSB1c2VyIGlzIGluIGtleWJvYXJkIG1vZGFsaXR5LlxuICAgICAqIElmIGFueSBldmVudCBpcyByZWNlaXZlZCBmcm9tIGEgcG9pbnRpbmcgZGV2aWNlIChlLmcuIG1vdXNlLCBwb2ludGVyLFxuICAgICAqIHRvdWNoKSwgdHVybiBvZmYga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogVGhpcyBhY2NvdW50cyBmb3Igc2l0dWF0aW9ucyB3aGVyZSBmb2N1cyBlbnRlcnMgdGhlIHBhZ2UgZnJvbSB0aGUgVVJMIGJhci5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25Jbml0aWFsUG9pbnRlck1vdmUoZSkge1xuICAgICAgLy8gV29yayBhcm91bmQgYSBTYWZhcmkgcXVpcmsgdGhhdCBmaXJlcyBhIG1vdXNlbW92ZSBvbiA8aHRtbD4gd2hlbmV2ZXIgdGhlXG4gICAgICAvLyB3aW5kb3cgYmx1cnMsIGV2ZW4gaWYgeW91J3JlIHRhYmJpbmcgb3V0IG9mIHRoZSBwYWdlLiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lICYmIGUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSBmYWxzZTtcbiAgICAgIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIEZvciBzb21lIGtpbmRzIG9mIHN0YXRlLCB3ZSBhcmUgaW50ZXJlc3RlZCBpbiBjaGFuZ2VzIGF0IHRoZSBnbG9iYWwgc2NvcGVcbiAgICAvLyBvbmx5LiBGb3IgZXhhbXBsZSwgZ2xvYmFsIHBvaW50ZXIgaW5wdXQsIGdsb2JhbCBrZXkgcHJlc3NlcyBhbmQgZ2xvYmFsXG4gICAgLy8gdmlzaWJpbGl0eSBjaGFuZ2Ugc2hvdWxkIGFmZmVjdCB0aGUgc3RhdGUgYXQgZXZlcnkgc2NvcGU6XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgdHJ1ZSk7XG5cbiAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIC8vIEZvciBmb2N1cyBhbmQgYmx1ciwgd2Ugc3BlY2lmaWNhbGx5IGNhcmUgYWJvdXQgc3RhdGUgY2hhbmdlcyBpbiB0aGUgbG9jYWxcbiAgICAvLyBzY29wZS4gVGhpcyBpcyBiZWNhdXNlIGZvY3VzIC8gYmx1ciBldmVudHMgdGhhdCBvcmlnaW5hdGUgZnJvbSB3aXRoaW4gYVxuICAgIC8vIHNoYWRvdyByb290IGFyZSBub3QgcmUtZGlzcGF0Y2hlZCBmcm9tIHRoZSBob3N0IGVsZW1lbnQgaWYgaXQgd2FzIGFscmVhZHlcbiAgICAvLyB0aGUgYWN0aXZlIGVsZW1lbnQgaW4gaXRzIG93biBzY29wZTpcbiAgICBzY29wZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMsIHRydWUpO1xuICAgIHNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIsIHRydWUpO1xuXG4gICAgLy8gV2UgZGV0ZWN0IHRoYXQgYSBub2RlIGlzIGEgU2hhZG93Um9vdCBieSBlbnN1cmluZyB0aGF0IGl0IGlzIGFcbiAgICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCBhbHNvIGhhcyBhIGhvc3QgcHJvcGVydHkuIFRoaXMgY2hlY2sgY292ZXJzIG5hdGl2ZVxuICAgIC8vIGltcGxlbWVudGF0aW9uIGFuZCBwb2x5ZmlsbCBpbXBsZW1lbnRhdGlvbiB0cmFuc3BhcmVudGx5LiBJZiB3ZSBvbmx5IGNhcmVkXG4gICAgLy8gYWJvdXQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgd2UgY291bGQganVzdCBjaGVjayBpZiB0aGUgc2NvcGUgd2FzXG4gICAgLy8gYW4gaW5zdGFuY2Ugb2YgYSBTaGFkb3dSb290LlxuICAgIGlmIChzY29wZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICYmIHNjb3BlLmhvc3QpIHtcbiAgICAgIC8vIFNpbmNlIGEgU2hhZG93Um9vdCBpcyBhIHNwZWNpYWwga2luZCBvZiBEb2N1bWVudEZyYWdtZW50LCBpdCBkb2VzIG5vdFxuICAgICAgLy8gaGF2ZSBhIHJvb3QgZWxlbWVudCB0byBhZGQgYSBjbGFzcyB0by4gU28sIHdlIGFkZCB0aGlzIGF0dHJpYnV0ZSB0byB0aGVcbiAgICAgIC8vIGhvc3QgZWxlbWVudCBpbnN0ZWFkOlxuICAgICAgc2NvcGUuaG9zdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtanMtZm9jdXMtdmlzaWJsZScsICcnKTtcbiAgICB9IGVsc2UgaWYgKHNjb3BlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdqcy1mb2N1cy12aXNpYmxlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSXQgaXMgaW1wb3J0YW50IHRvIHdyYXAgYWxsIHJlZmVyZW5jZXMgdG8gZ2xvYmFsIHdpbmRvdyBhbmQgZG9jdW1lbnQgaW5cbiAgLy8gdGhlc2UgY2hlY2tzIHRvIHN1cHBvcnQgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHVzZSBjYXNlc1xuICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGUvaXNzdWVzLzE5OVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIE1ha2UgdGhlIHBvbHlmaWxsIGhlbHBlciBnbG9iYWxseSBhdmFpbGFibGUuIFRoaXMgY2FuIGJlIHVzZWQgYXMgYSBzaWduYWxcbiAgICAvLyB0byBpbnRlcmVzdGVkIGxpYnJhcmllcyB0aGF0IHdpc2ggdG8gY29vcmRpbmF0ZSB3aXRoIHRoZSBwb2x5ZmlsbCBmb3IgZS5nLixcbiAgICAvLyBhcHBseWluZyB0aGUgcG9seWZpbGwgdG8gYSBzaGFkb3cgcm9vdDpcbiAgICB3aW5kb3cuYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbCA9IGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGw7XG5cbiAgICAvLyBOb3RpZnkgaW50ZXJlc3RlZCBsaWJyYXJpZXMgb2YgdGhlIHBvbHlmaWxsJ3MgcHJlc2VuY2UsIGluIGNhc2UgdGhlXG4gICAgLy8gcG9seWZpbGwgd2FzIGxvYWRlZCBsYXppbHk6XG4gICAgdmFyIGV2ZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdmb2N1cy12aXNpYmxlLXBvbHlmaWxsLXJlYWR5Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCB1c2luZyBDdXN0b21FdmVudCBhcyBhIGNvbnN0cnVjdG9yIGRpcmVjdGx5OlxuICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2ZW50LmluaXRDdXN0b21FdmVudCgnZm9jdXMtdmlzaWJsZS1wb2x5ZmlsbC1yZWFkeScsIGZhbHNlLCBmYWxzZSwge30pO1xuICAgIH1cblxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gQXBwbHkgdGhlIHBvbHlmaWxsIHRvIHRoZSBnbG9iYWwgZG9jdW1lbnQsIHNvIHRoYXQgbm8gSmF2YVNjcmlwdFxuICAgIC8vIGNvb3JkaW5hdGlvbiBpcyByZXF1aXJlZCB0byB1c2UgdGhlIHBvbHlmaWxsIGluIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnQ6XG4gICAgYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbChkb2N1bWVudCk7XG4gIH1cblxufSkpKTtcbiIsImZ1bmN0aW9uIGZvY3VzV2l0aGluKGRvY3VtZW50LCBvcHRzKSB7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IE9iamVjdChvcHRzKS5jbGFzc05hbWU7XG4gIGNvbnN0IGF0dHIgPSBPYmplY3Qob3B0cykuYXR0ciB8fCAnZm9jdXMtd2l0aGluJztcbiAgY29uc3QgZm9yY2UgPSBPYmplY3Qob3B0cykuZm9yY2U7XG4gIGNvbnN0IGxhc3RFbGVtZW50cyA9IFtdO1xuXG4gIHRyeSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOmZvY3VzLXdpdGhpbicpO1xuXG4gICAgaWYgKCFmb3JjZSkge1xuICAgICAgcmV0dXJuIGluaXRpYWxpemU7XG4gICAgfVxuICB9IGNhdGNoIChpZ25vcmVkRXJyb3IpIHtcbiAgICAvKiBkbyBub3RoaW5nIGFuZCBjb250aW51ZSAqL1xuICB9XG5cbiAgZnVuY3Rpb24gb25mb2N1c2NoYW5nZSgpIHtcbiAgICBsZXQgbGFzdEVsZW1lbnQ7XG5cbiAgICB3aGlsZSAobGFzdEVsZW1lbnQgPSBsYXN0RWxlbWVudHMucG9wKCkpIHtcbiAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgIGxhc3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICBsYXN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50OyAvLyBvbmx5IGFkZCBmb2N1cyBpZiBpdCBoYXMgbm90IGJlZW4gYWRkZWQgYW5kIGlzIG5vdCB0aGUgZG9jdW1lbnQgZWxlbWVudFxuXG4gICAgaWYgKCEvXigjZG9jdW1lbnR8SFRNTHxCT0RZKSQvLnRlc3QoT2JqZWN0KGFjdGl2ZUVsZW1lbnQpLm5vZGVOYW1lKSkge1xuICAgICAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBpZiAoYXR0cikge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RFbGVtZW50cy5wdXNoKGFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbmZvY3VzY2hhbmdlLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25mb2N1c2NoYW5nZSwgdHJ1ZSk7XG4gIH1cbiAgLyoqXG4gICogQ2FsbGJhY2sgd3JhcHBlciBmb3IgY2hlY2sgbG9hZGVkIHN0YXRlXG4gICovXG5cbiAgLyogZXNsaW50LWRpc2FibGUgKi9cblxuXG4gICFmdW5jdGlvbiBsb2FkKCkge1xuICAgIGlmICgvbS8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGxvYWQpIHwgaW5pdGlhbGl6ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgbG9hZCk7XG4gICAgfVxuICB9KCk7XG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuICByZXR1cm4gaW5pdGlhbGl6ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9jdXNXaXRoaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iLCIvKiEgcGljdHVyZWZpbGwgLSB2My4wLjIgLSAyMDE2LTAyLTEyXG4gKiBodHRwczovL3Njb3R0amVobC5naXRodWIuaW8vcGljdHVyZWZpbGwvXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0amVobC9waWN0dXJlZmlsbC9ibG9iL21hc3Rlci9BdXRob3JzLnR4dDsgTGljZW5zZWQgTUlUXG4gKi9cbi8qISBHZWNrby1QaWN0dXJlIC0gdjEuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0amVobC9waWN0dXJlZmlsbC90cmVlLzMuMC9zcmMvcGx1Z2lucy9nZWNrby1waWN0dXJlXG4gKiBGaXJlZm94J3MgZWFybHkgcGljdHVyZSBpbXBsZW1lbnRhdGlvbiAocHJpb3IgdG8gRkY0MSkgaXMgc3RhdGljIGFuZCBkb2VzXG4gKiBub3QgcmVhY3QgdG8gdmlld3BvcnQgY2hhbmdlcy4gVGhpcyB0aW55IG1vZHVsZSBmaXhlcyB0aGlzLlxuICovXG4oZnVuY3Rpb24od2luZG93KSB7XG5cdC8qanNoaW50IGVxbnVsbDp0cnVlICovXG5cdHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cblx0aWYgKCB3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50ICYmICgoL2Vja28vKS50ZXN0KHVhKSAmJiB1YS5tYXRjaCgvcnZcXDooXFxkKykvKSAmJiBSZWdFeHAuJDEgPCA0NSkgKSB7XG5cdFx0YWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGltZXI7XG5cblx0XHRcdHZhciBkdW1teVNyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG5cblx0XHRcdHZhciBmaXhSZXNwaW1nID0gZnVuY3Rpb24oaW1nKSB7XG5cdFx0XHRcdHZhciBzb3VyY2UsIHNpemVzO1xuXHRcdFx0XHR2YXIgcGljdHVyZSA9IGltZy5wYXJlbnROb2RlO1xuXG5cdFx0XHRcdGlmIChwaWN0dXJlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiUElDVFVSRVwiKSB7XG5cdFx0XHRcdFx0c291cmNlID0gZHVtbXlTcmMuY2xvbmVOb2RlKCk7XG5cblx0XHRcdFx0XHRwaWN0dXJlLmluc2VydEJlZm9yZShzb3VyY2UsIHBpY3R1cmUuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRwaWN0dXJlLnJlbW92ZUNoaWxkKHNvdXJjZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIWltZy5fcGZMYXN0U2l6ZSB8fCBpbWcub2Zmc2V0V2lkdGggPiBpbWcuX3BmTGFzdFNpemUpIHtcblx0XHRcdFx0XHRpbWcuX3BmTGFzdFNpemUgPSBpbWcub2Zmc2V0V2lkdGg7XG5cdFx0XHRcdFx0c2l6ZXMgPSBpbWcuc2l6ZXM7XG5cdFx0XHRcdFx0aW1nLnNpemVzICs9IFwiLDEwMHZ3XCI7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGltZy5zaXplcyA9IHNpemVzO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgZmluZFBpY3R1cmVJbWdzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpO1xuXHRcdFx0XHR2YXIgaW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwaWN0dXJlID4gaW1nLCBpbWdbc3Jjc2V0XVtzaXplc11cIik7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Zml4UmVzcGltZyhpbWdzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZhciBvblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoZmluZFBpY3R1cmVJbWdzLCA5OSk7XG5cdFx0XHR9O1xuXHRcdFx0dmFyIG1xID0gd2luZG93Lm1hdGNoTWVkaWEgJiYgbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKTtcblx0XHRcdHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG9uUmVzaXplKCk7XG5cblx0XHRcdFx0aWYgKG1xICYmIG1xLmFkZExpc3RlbmVyKSB7XG5cdFx0XHRcdFx0bXEuYWRkTGlzdGVuZXIob25SZXNpemUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRkdW1teVNyYy5zcmNzZXQgPSBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBQUFBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09XCI7XG5cblx0XHRcdGlmICgvXltjfGldfGQkLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUgfHwgXCJcIikpIHtcblx0XHRcdFx0aW5pdCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvblJlc2l6ZTtcblx0XHR9KSgpKTtcblx0fVxufSkod2luZG93KTtcblxuLyohIFBpY3R1cmVmaWxsIC0gdjMuMC4yXG4gKiBodHRwOi8vc2NvdHRqZWhsLmdpdGh1Yi5pby9waWN0dXJlZmlsbFxuICogQ29weXJpZ2h0IChjKSAyMDE1IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGplaGwvcGljdHVyZWZpbGwvYmxvYi9tYXN0ZXIvQXV0aG9ycy50eHQ7XG4gKiAgTGljZW5zZTogTUlUXG4gKi9cblxuKGZ1bmN0aW9uKCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQgKSB7XG5cdC8vIEVuYWJsZSBzdHJpY3QgbW9kZVxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHQvLyBIVE1MIHNoaW18diBpdCBmb3Igb2xkIElFIChJRTkgd2lsbCBzdGlsbCBuZWVkIHRoZSBIVE1MIHZpZGVvIHRhZyB3b3JrYXJvdW5kKVxuXHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInBpY3R1cmVcIiApO1xuXG5cdHZhciB3YXJuLCBlbWlucHgsIGFsd2F5c0NoZWNrV0Rlc2NyaXB0b3IsIGV2YWxJZDtcblx0Ly8gbG9jYWwgb2JqZWN0IGZvciBtZXRob2QgcmVmZXJlbmNlcyBhbmQgdGVzdGluZyBleHBvc3VyZVxuXHR2YXIgcGYgPSB7fTtcblx0dmFyIGlzU3VwcG9ydFRlc3RSZWFkeSA9IGZhbHNlO1xuXHR2YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XG5cdHZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW1nXCIgKTtcblx0dmFyIGdldEltZ0F0dHIgPSBpbWFnZS5nZXRBdHRyaWJ1dGU7XG5cdHZhciBzZXRJbWdBdHRyID0gaW1hZ2Uuc2V0QXR0cmlidXRlO1xuXHR2YXIgcmVtb3ZlSW1nQXR0ciA9IGltYWdlLnJlbW92ZUF0dHJpYnV0ZTtcblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdHZhciB0eXBlcyA9IHt9O1xuXHR2YXIgY2ZnID0ge1xuXHRcdC8vcmVzb3VyY2Ugc2VsZWN0aW9uOlxuXHRcdGFsZ29yaXRobTogXCJcIlxuXHR9O1xuXHR2YXIgc3JjQXR0ciA9IFwiZGF0YS1wZnNyY1wiO1xuXHR2YXIgc3Jjc2V0QXR0ciA9IHNyY0F0dHIgKyBcInNldFwiO1xuXHQvLyB1YSBzbmlmZmluZyBpcyBkb25lIGZvciB1bmRldGVjdGFibGUgaW1nIGxvYWRpbmcgZmVhdHVyZXMsXG5cdC8vIHRvIGRvIHNvbWUgbm9uIGNydWNpYWwgcGVyZiBvcHRpbWl6YXRpb25zXG5cdHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdHZhciBzdXBwb3J0QWJvcnQgPSAoL3JpZGVudC8pLnRlc3QodWEpIHx8ICgoL2Vja28vKS50ZXN0KHVhKSAmJiB1YS5tYXRjaCgvcnZcXDooXFxkKykvKSAmJiBSZWdFeHAuJDEgPiAzNSApO1xuXHR2YXIgY3VyU3JjUHJvcCA9IFwiY3VycmVudFNyY1wiO1xuXHR2YXIgcmVnV0Rlc2MgPSAvXFxzK1xcKz9cXGQrKGVcXGQrKT93Lztcblx0dmFyIHJlZ1NpemUgPSAvKFxcKFteKV0rXFwpKT9cXHMqKC4rKS87XG5cdHZhciBzZXRPcHRpb25zID0gd2luZG93LnBpY3R1cmVmaWxsQ0ZHO1xuXHQvKipcblx0ICogU2hvcnRjdXQgcHJvcGVydHkgZm9yIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJhcHBzZWMvc3BlY3MvbWl4ZWRjb250ZW50LyNyZXN0cmljdHMtbWl4ZWQtY29udGVudCAoIGZvciBlYXN5IG92ZXJyaWRpbmcgaW4gdGVzdHMgKVxuXHQgKi9cblx0Ly8gYmFzZVN0eWxlIGFsc28gdXNlZCBieSBnZXRFbVZhbHVlIChpLmUuOiB3aWR0aDogMWVtIGlzIGltcG9ydGFudClcblx0dmFyIGJhc2VTdHlsZSA9IFwicG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3Zpc2liaWxpdHk6aGlkZGVuO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzowO2JvcmRlcjpub25lO2ZvbnQtc2l6ZToxZW07d2lkdGg6MWVtO292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMHB4LCAwcHgsIDBweCwgMHB4KVwiO1xuXHR2YXIgZnNDc3MgPSBcImZvbnQtc2l6ZToxMDAlIWltcG9ydGFudDtcIjtcblx0dmFyIGlzVndEaXJ0eSA9IHRydWU7XG5cblx0dmFyIGNzc0NhY2hlID0ge307XG5cdHZhciBzaXplTGVuZ3RoQ2FjaGUgPSB7fTtcblx0dmFyIERQUiA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHR2YXIgdW5pdHMgPSB7XG5cdFx0cHg6IDEsXG5cdFx0XCJpblwiOiA5NlxuXHR9O1xuXHR2YXIgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJhXCIgKTtcblx0LyoqXG5cdCAqIGFscmVhZHlSdW4gZmxhZyB1c2VkIGZvciBzZXRPcHRpb25zLiBpcyBpdCB0cnVlIHNldE9wdGlvbnMgd2lsbCByZWV2YWx1YXRlXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0dmFyIGFscmVhZHlSdW4gPSBmYWxzZTtcblxuXHQvLyBSZXVzYWJsZSwgbm9uLVwiZ1wiIFJlZ2V4ZXNcblxuXHQvLyAoRG9uJ3QgdXNlIFxccywgdG8gYXZvaWQgbWF0Y2hpbmcgbm9uLWJyZWFraW5nIHNwYWNlLilcblx0dmFyIHJlZ2V4TGVhZGluZ1NwYWNlcyA9IC9eWyBcXHRcXG5cXHJcXHUwMDBjXSsvLFxuXHQgICAgcmVnZXhMZWFkaW5nQ29tbWFzT3JTcGFjZXMgPSAvXlssIFxcdFxcblxcclxcdTAwMGNdKy8sXG5cdCAgICByZWdleExlYWRpbmdOb3RTcGFjZXMgPSAvXlteIFxcdFxcblxcclxcdTAwMGNdKy8sXG5cdCAgICByZWdleFRyYWlsaW5nQ29tbWFzID0gL1ssXSskLyxcblx0ICAgIHJlZ2V4Tm9uTmVnYXRpdmVJbnRlZ2VyID0gL15cXGQrJC8sXG5cblx0ICAgIC8vICggUG9zaXRpdmUgb3IgbmVnYXRpdmUgb3IgdW5zaWduZWQgaW50ZWdlcnMgb3IgZGVjaW1hbHMsIHdpdGhvdXQgb3Igd2l0aG91dCBleHBvbmVudHMuXG5cdCAgICAvLyBNdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGRpZ2l0LlxuXHQgICAgLy8gQWNjb3JkaW5nIHRvIHNwZWMgdGVzdHMgYW55IGRlY2ltYWwgcG9pbnQgbXVzdCBiZSBmb2xsb3dlZCBieSBhIGRpZ2l0LlxuXHQgICAgLy8gTm8gbGVhZGluZyBwbHVzIHNpZ24gaXMgYWxsb3dlZC4pXG5cdCAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3ZhbGlkLWZsb2F0aW5nLXBvaW50LW51bWJlclxuXHQgICAgcmVnZXhGbG9hdGluZ1BvaW50ID0gL14tPyg/OlswLTldK3xbMC05XSpcXC5bMC05XSspKD86W2VFXVsrLV0/WzAtOV0rKT8kLztcblxuXHR2YXIgb24gPSBmdW5jdGlvbihvYmosIGV2dCwgZm4sIGNhcHR1cmUpIHtcblx0XHRpZiAoIG9iai5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdFx0b2JqLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmbiwgY2FwdHVyZSB8fCBmYWxzZSk7XG5cdFx0fSBlbHNlIGlmICggb2JqLmF0dGFjaEV2ZW50ICkge1xuXHRcdFx0b2JqLmF0dGFjaEV2ZW50KCBcIm9uXCIgKyBldnQsIGZuKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIHNpbXBsZSBtZW1vaXplIGZ1bmN0aW9uOlxuXHQgKi9cblxuXHR2YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIGNhY2hlID0ge307XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0XHRpZiAoICEoaW5wdXQgaW4gY2FjaGUpICkge1xuXHRcdFx0XHRjYWNoZVsgaW5wdXQgXSA9IGZuKGlucHV0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjYWNoZVsgaW5wdXQgXTtcblx0XHR9O1xuXHR9O1xuXG5cdC8vIFVUSUxJVFkgRlVOQ1RJT05TXG5cblx0Ly8gTWFudWFsIGlzIGZhc3RlciB0aGFuIFJlZ0V4XG5cdC8vIGh0dHA6Ly9qc3BlcmYuY29tL3doaXRlc3BhY2UtY2hhcmFjdGVyLzVcblx0ZnVuY3Rpb24gaXNTcGFjZShjKSB7XG5cdFx0cmV0dXJuIChjID09PSBcIlxcdTAwMjBcIiB8fCAvLyBzcGFjZVxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDA5XCIgfHwgLy8gaG9yaXpvbnRhbCB0YWJcblx0XHQgICAgICAgIGMgPT09IFwiXFx1MDAwQVwiIHx8IC8vIG5ldyBsaW5lXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMENcIiB8fCAvLyBmb3JtIGZlZWRcblx0XHQgICAgICAgIGMgPT09IFwiXFx1MDAwRFwiKTsgIC8vIGNhcnJpYWdlIHJldHVyblxuXHR9XG5cblx0LyoqXG5cdCAqIGdldHMgYSBtZWRpYXF1ZXJ5IGFuZCByZXR1cm5zIGEgYm9vbGVhbiBvciBnZXRzIGEgY3NzIGxlbmd0aCBhbmQgcmV0dXJucyBhIG51bWJlclxuXHQgKiBAcGFyYW0gY3NzIG1lZGlhcXVlcmllcyBvciBjc3MgbGVuZ3RoXG5cdCAqIEByZXR1cm5zIHtib29sZWFufG51bWJlcn1cblx0ICpcblx0ICogYmFzZWQgb246IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pvbmF0aGFudG5lYWwvZGI0Zjc3MDA5YjE1NWYwODM3Mzhcblx0ICovXG5cdHZhciBldmFsQ1NTID0gKGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHJlZ0xlbmd0aCA9IC9eKFtcXGRcXC5dKykoZW18dnd8cHgpJC87XG5cdFx0dmFyIHJlcGxhY2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzLCBpbmRleCA9IDAsIHN0cmluZyA9IGFyZ3NbMF07XG5cdFx0XHR3aGlsZSAoKytpbmRleCBpbiBhcmdzKSB7XG5cdFx0XHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGFyZ3NbaW5kZXhdLCBhcmdzWysraW5kZXhdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHJpbmc7XG5cdFx0fTtcblxuXHRcdHZhciBidWlsZFN0ciA9IG1lbW9pemUoZnVuY3Rpb24oY3NzKSB7XG5cblx0XHRcdHJldHVybiBcInJldHVybiBcIiArIHJlcGxhY2UoKGNzcyB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYGFuZGBcblx0XHRcdFx0L1xcYmFuZFxcYi9nLCBcIiYmXCIsXG5cblx0XHRcdFx0Ly8gaW50ZXJwcmV0IGAsYFxuXHRcdFx0XHQvLC9nLCBcInx8XCIsXG5cblx0XHRcdFx0Ly8gaW50ZXJwcmV0IGBtaW4tYCBhcyA+PVxuXHRcdFx0XHQvbWluLShbYS16LVxcc10rKTovZywgXCJlLiQxPj1cIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYG1heC1gIGFzIDw9XG5cdFx0XHRcdC9tYXgtKFthLXotXFxzXSspOi9nLCBcImUuJDE8PVwiLFxuXG5cdFx0XHRcdC8vY2FsYyB2YWx1ZVxuXHRcdFx0XHQvY2FsYyhbXildKykvZywgXCIoJDEpXCIsXG5cblx0XHRcdFx0Ly8gaW50ZXJwcmV0IGNzcyB2YWx1ZXNcblx0XHRcdFx0LyhcXGQrW1xcLl0qW1xcZF0qKShbYS16XSspL2csIFwiKCQxICogZS4kMilcIixcblx0XHRcdFx0Ly9tYWtlIGV2YWwgbGVzcyBldmlsXG5cdFx0XHRcdC9eKD8hKGUuW2Etel18WzAtOVxcLiY9fD48XFwrXFwtXFwqXFwoXFwpXFwvXSkpLiovaWcsIFwiXCJcblx0XHRcdCkgKyBcIjtcIjtcblx0XHR9KTtcblxuXHRcdHJldHVybiBmdW5jdGlvbihjc3MsIGxlbmd0aCkge1xuXHRcdFx0dmFyIHBhcnNlZExlbmd0aDtcblx0XHRcdGlmICghKGNzcyBpbiBjc3NDYWNoZSkpIHtcblx0XHRcdFx0Y3NzQ2FjaGVbY3NzXSA9IGZhbHNlO1xuXHRcdFx0XHRpZiAobGVuZ3RoICYmIChwYXJzZWRMZW5ndGggPSBjc3MubWF0Y2goIHJlZ0xlbmd0aCApKSkge1xuXHRcdFx0XHRcdGNzc0NhY2hlW2Nzc10gPSBwYXJzZWRMZW5ndGhbIDEgXSAqIHVuaXRzW3BhcnNlZExlbmd0aFsgMiBdXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvKmpzaGludCBldmlsOnRydWUgKi9cblx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRjc3NDYWNoZVtjc3NdID0gbmV3IEZ1bmN0aW9uKFwiZVwiLCBidWlsZFN0cihjc3MpKSh1bml0cyk7XG5cdFx0XHRcdFx0fSBjYXRjaChlKSB7fVxuXHRcdFx0XHRcdC8qanNoaW50IGV2aWw6ZmFsc2UgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNzc0NhY2hlW2Nzc107XG5cdFx0fTtcblx0fSkoKTtcblxuXHR2YXIgc2V0UmVzb2x1dGlvbiA9IGZ1bmN0aW9uKCBjYW5kaWRhdGUsIHNpemVzYXR0ciApIHtcblx0XHRpZiAoIGNhbmRpZGF0ZS53ICkgeyAvLyBoID0gbWVhbnMgaGVpZ2h0OiB8fCBkZXNjcmlwdG9yLnR5cGUgPT09ICdoJyBkbyBub3QgaGFuZGxlIHlldC4uLlxuXHRcdFx0Y2FuZGlkYXRlLmNXaWR0aCA9IHBmLmNhbGNMaXN0TGVuZ3RoKCBzaXplc2F0dHIgfHwgXCIxMDB2d1wiICk7XG5cdFx0XHRjYW5kaWRhdGUucmVzID0gY2FuZGlkYXRlLncgLyBjYW5kaWRhdGUuY1dpZHRoIDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2FuZGlkYXRlLnJlcyA9IGNhbmRpZGF0ZS5kO1xuXHRcdH1cblx0XHRyZXR1cm4gY2FuZGlkYXRlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gb3B0XG5cdCAqL1xuXHR2YXIgcGljdHVyZWZpbGwgPSBmdW5jdGlvbiggb3B0ICkge1xuXG5cdFx0aWYgKCFpc1N1cHBvcnRUZXN0UmVhZHkpIHtyZXR1cm47fVxuXG5cdFx0dmFyIGVsZW1lbnRzLCBpLCBwbGVuO1xuXG5cdFx0dmFyIG9wdGlvbnMgPSBvcHQgfHwge307XG5cblx0XHRpZiAoIG9wdGlvbnMuZWxlbWVudHMgJiYgb3B0aW9ucy5lbGVtZW50cy5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdGlmICggb3B0aW9ucy5lbGVtZW50cy5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIklNR1wiICkge1xuXHRcdFx0XHRvcHRpb25zLmVsZW1lbnRzID0gIFsgb3B0aW9ucy5lbGVtZW50cyBdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0aW9ucy5jb250ZXh0ID0gb3B0aW9ucy5lbGVtZW50cztcblx0XHRcdFx0b3B0aW9ucy5lbGVtZW50cyA9ICBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGVsZW1lbnRzID0gb3B0aW9ucy5lbGVtZW50cyB8fCBwZi5xc2EoIChvcHRpb25zLmNvbnRleHQgfHwgZG9jdW1lbnQpLCAoIG9wdGlvbnMucmVldmFsdWF0ZSB8fCBvcHRpb25zLnJlc2VsZWN0ICkgPyBwZi5zZWwgOiBwZi5zZWxTaG9ydCApO1xuXG5cdFx0aWYgKCAocGxlbiA9IGVsZW1lbnRzLmxlbmd0aCkgKSB7XG5cblx0XHRcdHBmLnNldHVwUnVuKCBvcHRpb25zICk7XG5cdFx0XHRhbHJlYWR5UnVuID0gdHJ1ZTtcblxuXHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGFsbCBlbGVtZW50c1xuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBwbGVuOyBpKysgKSB7XG5cdFx0XHRcdHBmLmZpbGxJbWcoZWxlbWVudHNbIGkgXSwgb3B0aW9ucyk7XG5cdFx0XHR9XG5cblx0XHRcdHBmLnRlYXJkb3duUnVuKCBvcHRpb25zICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBvdXRwdXRzIGEgd2FybmluZyBmb3IgdGhlIGRldmVsb3BlclxuXHQgKiBAcGFyYW0ge21lc3NhZ2V9XG5cdCAqIEB0eXBlIHtGdW5jdGlvbn1cblx0ICovXG5cdHdhcm4gPSAoIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2FybiApID9cblx0XHRmdW5jdGlvbiggbWVzc2FnZSApIHtcblx0XHRcdGNvbnNvbGUud2FybiggbWVzc2FnZSApO1xuXHRcdH0gOlxuXHRcdG5vb3Bcblx0O1xuXG5cdGlmICggIShjdXJTcmNQcm9wIGluIGltYWdlKSApIHtcblx0XHRjdXJTcmNQcm9wID0gXCJzcmNcIjtcblx0fVxuXG5cdC8vIEFkZCBzdXBwb3J0IGZvciBzdGFuZGFyZCBtaW1lIHR5cGVzLlxuXHR0eXBlc1sgXCJpbWFnZS9qcGVnXCIgXSA9IHRydWU7XG5cdHR5cGVzWyBcImltYWdlL2dpZlwiIF0gPSB0cnVlO1xuXHR0eXBlc1sgXCJpbWFnZS9wbmdcIiBdID0gdHJ1ZTtcblxuXHRmdW5jdGlvbiBkZXRlY3RUeXBlU3VwcG9ydCggdHlwZSwgdHlwZVVyaSApIHtcblx0XHQvLyBiYXNlZCBvbiBNb2Rlcm5penIncyBsb3NzbGVzcyBpbWctd2VicCB0ZXN0XG5cdFx0Ly8gbm90ZTogYXN5bmNocm9ub3VzXG5cdFx0dmFyIGltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpO1xuXHRcdGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdHR5cGVzWyB0eXBlIF0gPSBmYWxzZTtcblx0XHRcdHBpY3R1cmVmaWxsKCk7XG5cdFx0fTtcblx0XHRpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHR5cGVzWyB0eXBlIF0gPSBpbWFnZS53aWR0aCA9PT0gMTtcblx0XHRcdHBpY3R1cmVmaWxsKCk7XG5cdFx0fTtcblx0XHRpbWFnZS5zcmMgPSB0eXBlVXJpO1xuXHRcdHJldHVybiBcInBlbmRpbmdcIjtcblx0fVxuXG5cdC8vIHRlc3Qgc3ZnIHN1cHBvcnRcblx0dHlwZXNbIFwiaW1hZ2Uvc3ZnK3htbFwiIF0gPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCBcImh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjSW1hZ2VcIiwgXCIxLjFcIiApO1xuXG5cdC8qKlxuXHQgKiB1cGRhdGVzIHRoZSBpbnRlcm5hbCB2VyBwcm9wZXJ0eSB3aXRoIHRoZSBjdXJyZW50IHZpZXdwb3J0IHdpZHRoIGluIHB4XG5cdCAqL1xuXHRmdW5jdGlvbiB1cGRhdGVNZXRyaWNzKCkge1xuXG5cdFx0aXNWd0RpcnR5ID0gZmFsc2U7XG5cdFx0RFBSID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdFx0Y3NzQ2FjaGUgPSB7fTtcblx0XHRzaXplTGVuZ3RoQ2FjaGUgPSB7fTtcblxuXHRcdHBmLkRQUiA9IERQUiB8fCAxO1xuXG5cdFx0dW5pdHMud2lkdGggPSBNYXRoLm1heCh3aW5kb3cuaW5uZXJXaWR0aCB8fCAwLCBkb2NFbGVtLmNsaWVudFdpZHRoKTtcblx0XHR1bml0cy5oZWlnaHQgPSBNYXRoLm1heCh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCwgZG9jRWxlbS5jbGllbnRIZWlnaHQpO1xuXG5cdFx0dW5pdHMudncgPSB1bml0cy53aWR0aCAvIDEwMDtcblx0XHR1bml0cy52aCA9IHVuaXRzLmhlaWdodCAvIDEwMDtcblxuXHRcdGV2YWxJZCA9IFsgdW5pdHMuaGVpZ2h0LCB1bml0cy53aWR0aCwgRFBSIF0uam9pbihcIi1cIik7XG5cblx0XHR1bml0cy5lbSA9IHBmLmdldEVtVmFsdWUoKTtcblx0XHR1bml0cy5yZW0gPSB1bml0cy5lbTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNob29zZUxvd1JlcyggbG93ZXJWYWx1ZSwgaGlnaGVyVmFsdWUsIGRwclZhbHVlLCBpc0NhY2hlZCApIHtcblx0XHR2YXIgYm9udXNGYWN0b3IsIHRvb011Y2gsIGJvbnVzLCBtZWFuRGVuc2l0eTtcblxuXHRcdC8vZXhwZXJpbWVudGFsXG5cdFx0aWYgKGNmZy5hbGdvcml0aG0gPT09IFwic2F2ZURhdGFcIiApe1xuXHRcdFx0aWYgKCBsb3dlclZhbHVlID4gMi43ICkge1xuXHRcdFx0XHRtZWFuRGVuc2l0eSA9IGRwclZhbHVlICsgMTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvb011Y2ggPSBoaWdoZXJWYWx1ZSAtIGRwclZhbHVlO1xuXHRcdFx0XHRib251c0ZhY3RvciA9IE1hdGgucG93KGxvd2VyVmFsdWUgLSAwLjYsIDEuNSk7XG5cblx0XHRcdFx0Ym9udXMgPSB0b29NdWNoICogYm9udXNGYWN0b3I7XG5cblx0XHRcdFx0aWYgKGlzQ2FjaGVkKSB7XG5cdFx0XHRcdFx0Ym9udXMgKz0gMC4xICogYm9udXNGYWN0b3I7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtZWFuRGVuc2l0eSA9IGxvd2VyVmFsdWUgKyBib251cztcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVhbkRlbnNpdHkgPSAoZHByVmFsdWUgPiAxKSA/XG5cdFx0XHRcdE1hdGguc3FydChsb3dlclZhbHVlICogaGlnaGVyVmFsdWUpIDpcblx0XHRcdFx0bG93ZXJWYWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVhbkRlbnNpdHkgPiBkcHJWYWx1ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFwcGx5QmVzdENhbmRpZGF0ZSggaW1nICkge1xuXHRcdHZhciBzcmNTZXRDYW5kaWRhdGVzO1xuXHRcdHZhciBtYXRjaGluZ1NldCA9IHBmLmdldFNldCggaW1nICk7XG5cdFx0dmFyIGV2YWx1YXRlZCA9IGZhbHNlO1xuXHRcdGlmICggbWF0Y2hpbmdTZXQgIT09IFwicGVuZGluZ1wiICkge1xuXHRcdFx0ZXZhbHVhdGVkID0gZXZhbElkO1xuXHRcdFx0aWYgKCBtYXRjaGluZ1NldCApIHtcblx0XHRcdFx0c3JjU2V0Q2FuZGlkYXRlcyA9IHBmLnNldFJlcyggbWF0Y2hpbmdTZXQgKTtcblx0XHRcdFx0cGYuYXBwbHlTZXRDYW5kaWRhdGUoIHNyY1NldENhbmRpZGF0ZXMsIGltZyApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpbWdbIHBmLm5zIF0uZXZhbGVkID0gZXZhbHVhdGVkO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXNjZW5kaW5nU29ydCggYSwgYiApIHtcblx0XHRyZXR1cm4gYS5yZXMgLSBiLnJlcztcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFNyY1RvQ3VyKCBpbWcsIHNyYywgc2V0ICkge1xuXHRcdHZhciBjYW5kaWRhdGU7XG5cdFx0aWYgKCAhc2V0ICYmIHNyYyApIHtcblx0XHRcdHNldCA9IGltZ1sgcGYubnMgXS5zZXRzO1xuXHRcdFx0c2V0ID0gc2V0ICYmIHNldFtzZXQubGVuZ3RoIC0gMV07XG5cdFx0fVxuXG5cdFx0Y2FuZGlkYXRlID0gZ2V0Q2FuZGlkYXRlRm9yU3JjKHNyYywgc2V0KTtcblxuXHRcdGlmICggY2FuZGlkYXRlICkge1xuXHRcdFx0c3JjID0gcGYubWFrZVVybChzcmMpO1xuXHRcdFx0aW1nWyBwZi5ucyBdLmN1clNyYyA9IHNyYztcblx0XHRcdGltZ1sgcGYubnMgXS5jdXJDYW4gPSBjYW5kaWRhdGU7XG5cblx0XHRcdGlmICggIWNhbmRpZGF0ZS5yZXMgKSB7XG5cdFx0XHRcdHNldFJlc29sdXRpb24oIGNhbmRpZGF0ZSwgY2FuZGlkYXRlLnNldC5zaXplcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FuZGlkYXRlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlRm9yU3JjKCBzcmMsIHNldCApIHtcblx0XHR2YXIgaSwgY2FuZGlkYXRlLCBjYW5kaWRhdGVzO1xuXHRcdGlmICggc3JjICYmIHNldCApIHtcblx0XHRcdGNhbmRpZGF0ZXMgPSBwZi5wYXJzZVNldCggc2V0ICk7XG5cdFx0XHRzcmMgPSBwZi5tYWtlVXJsKHNyYyk7XG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IGNhbmRpZGF0ZXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGlmICggc3JjID09PSBwZi5tYWtlVXJsKGNhbmRpZGF0ZXNbIGkgXS51cmwpICkge1xuXHRcdFx0XHRcdGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbIGkgXTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FuZGlkYXRlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0QWxsU291cmNlRWxlbWVudHMoIHBpY3R1cmUsIGNhbmRpZGF0ZXMgKSB7XG5cdFx0dmFyIGksIGxlbiwgc291cmNlLCBzcmNzZXQ7XG5cblx0XHQvLyBTUEVDIG1pc21hdGNoIGludGVuZGVkIGZvciBzaXplIGFuZCBwZXJmOlxuXHRcdC8vIGFjdHVhbGx5IG9ubHkgc291cmNlIGVsZW1lbnRzIHByZWNlZGluZyB0aGUgaW1nIHNob3VsZCBiZSB1c2VkXG5cdFx0Ly8gYWxzbyBub3RlOiBkb24ndCB1c2UgcXNhIGhlcmUsIGJlY2F1c2UgSUU4IHNvbWV0aW1lcyBkb2Vzbid0IGxpa2Ugc291cmNlIGFzIHRoZSBrZXkgcGFydCBpbiBhIHNlbGVjdG9yXG5cdFx0dmFyIHNvdXJjZXMgPSBwaWN0dXJlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcInNvdXJjZVwiICk7XG5cblx0XHRmb3IgKCBpID0gMCwgbGVuID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdHNvdXJjZSA9IHNvdXJjZXNbIGkgXTtcblx0XHRcdHNvdXJjZVsgcGYubnMgXSA9IHRydWU7XG5cdFx0XHRzcmNzZXQgPSBzb3VyY2UuZ2V0QXR0cmlidXRlKCBcInNyY3NldFwiICk7XG5cblx0XHRcdC8vIGlmIHNvdXJjZSBkb2VzIG5vdCBoYXZlIGEgc3Jjc2V0IGF0dHJpYnV0ZSwgc2tpcFxuXHRcdFx0aWYgKCBzcmNzZXQgKSB7XG5cdFx0XHRcdGNhbmRpZGF0ZXMucHVzaCgge1xuXHRcdFx0XHRcdHNyY3NldDogc3Jjc2V0LFxuXHRcdFx0XHRcdG1lZGlhOiBzb3VyY2UuZ2V0QXR0cmlidXRlKCBcIm1lZGlhXCIgKSxcblx0XHRcdFx0XHR0eXBlOiBzb3VyY2UuZ2V0QXR0cmlidXRlKCBcInR5cGVcIiApLFxuXHRcdFx0XHRcdHNpemVzOiBzb3VyY2UuZ2V0QXR0cmlidXRlKCBcInNpemVzXCIgKVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNyY3NldCBQYXJzZXJcblx0ICogQnkgQWxleCBCZWxsIHwgIE1JVCBMaWNlbnNlXG5cdCAqXG5cdCAqIEByZXR1cm5zIEFycmF5IFt7dXJsOiBfLCBkOiBfLCB3OiBfLCBoOl8sIHNldDpfKD8/Pz8pfSwgLi4uXVxuXHQgKlxuXHQgKiBCYXNlZCBzdXBlciBkdXBlciBjbG9zZWx5IG9uIHRoZSByZWZlcmVuY2UgYWxnb3JpdGhtIGF0OlxuXHQgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjcGFyc2UtYS1zcmNzZXQtYXR0cmlidXRlXG5cdCAqL1xuXG5cdC8vIDEuIExldCBpbnB1dCBiZSB0aGUgdmFsdWUgcGFzc2VkIHRvIHRoaXMgYWxnb3JpdGhtLlxuXHQvLyAoVE8tRE8gOiBFeHBsYWluIHdoYXQgXCJzZXRcIiBhcmd1bWVudCBpcyBoZXJlLiBNYXliZSBjaG9vc2UgYSBtb3JlXG5cdC8vIGRlc2NyaXB0aXZlICYgbW9yZSBzZWFyY2hhYmxlIG5hbWUuICBTaW5jZSBwYXNzaW5nIHRoZSBcInNldFwiIGluIHJlYWxseSBoYXNcblx0Ly8gbm90aGluZyB0byBkbyB3aXRoIHBhcnNpbmcgcHJvcGVyLCBJIHdvdWxkIHByZWZlciB0aGlzIGFzc2lnbm1lbnQgZXZlbnR1YWxseVxuXHQvLyBnbyBpbiBhbiBleHRlcm5hbCBmbi4pXG5cdGZ1bmN0aW9uIHBhcnNlU3Jjc2V0KGlucHV0LCBzZXQpIHtcblxuXHRcdGZ1bmN0aW9uIGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ0V4KSB7XG5cdFx0XHR2YXIgY2hhcnMsXG5cdFx0XHQgICAgbWF0Y2ggPSByZWdFeC5leGVjKGlucHV0LnN1YnN0cmluZyhwb3MpKTtcblx0XHRcdGlmIChtYXRjaCkge1xuXHRcdFx0XHRjaGFycyA9IG1hdGNoWyAwIF07XG5cdFx0XHRcdHBvcyArPSBjaGFycy5sZW5ndGg7XG5cdFx0XHRcdHJldHVybiBjaGFycztcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGgsXG5cdFx0ICAgIHVybCxcblx0XHQgICAgZGVzY3JpcHRvcnMsXG5cdFx0ICAgIGN1cnJlbnREZXNjcmlwdG9yLFxuXHRcdCAgICBzdGF0ZSxcblx0XHQgICAgYyxcblxuXHRcdCAgICAvLyAyLiBMZXQgcG9zaXRpb24gYmUgYSBwb2ludGVyIGludG8gaW5wdXQsIGluaXRpYWxseSBwb2ludGluZyBhdCB0aGUgc3RhcnRcblx0XHQgICAgLy8gICAgb2YgdGhlIHN0cmluZy5cblx0XHQgICAgcG9zID0gMCxcblxuXHRcdCAgICAvLyAzLiBMZXQgY2FuZGlkYXRlcyBiZSBhbiBpbml0aWFsbHkgZW1wdHkgc291cmNlIHNldC5cblx0XHQgICAgY2FuZGlkYXRlcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0KiBBZGRzIGRlc2NyaXB0b3IgcHJvcGVydGllcyB0byBhIGNhbmRpZGF0ZSwgcHVzaGVzIHRvIHRoZSBjYW5kaWRhdGVzIGFycmF5XG5cdFx0KiBAcmV0dXJuIHVuZGVmaW5lZFxuXHRcdCovXG5cdFx0Ly8gKERlY2xhcmVkIG91dHNpZGUgb2YgdGhlIHdoaWxlIGxvb3Agc28gdGhhdCBpdCdzIG9ubHkgY3JlYXRlZCBvbmNlLlxuXHRcdC8vIChUaGlzIGZuIGlzIGRlZmluZWQgYmVmb3JlIGl0IGlzIHVzZWQsIGluIG9yZGVyIHRvIHBhc3MgSlNISU5ULlxuXHRcdC8vIFVuZm9ydHVuYXRlbHkgdGhpcyBicmVha3MgdGhlIHNlcXVlbmNpbmcgb2YgdGhlIHNwZWMgY29tbWVudHMuIDovIClcblx0XHRmdW5jdGlvbiBwYXJzZURlc2NyaXB0b3JzKCkge1xuXG5cdFx0XHQvLyA5LiBEZXNjcmlwdG9yIHBhcnNlcjogTGV0IGVycm9yIGJlIG5vLlxuXHRcdFx0dmFyIHBFcnJvciA9IGZhbHNlLFxuXG5cdFx0XHQvLyAxMC4gTGV0IHdpZHRoIGJlIGFic2VudC5cblx0XHRcdC8vIDExLiBMZXQgZGVuc2l0eSBiZSBhYnNlbnQuXG5cdFx0XHQvLyAxMi4gTGV0IGZ1dHVyZS1jb21wYXQtaCBiZSBhYnNlbnQuIChXZSdyZSBpbXBsZW1lbnRpbmcgaXQgbm93IGFzIGgpXG5cdFx0XHQgICAgdywgZCwgaCwgaSxcblx0XHRcdCAgICBjYW5kaWRhdGUgPSB7fSxcblx0XHRcdCAgICBkZXNjLCBsYXN0Q2hhciwgdmFsdWUsIGludFZhbCwgZmxvYXRWYWw7XG5cblx0XHRcdC8vIDEzLiBGb3IgZWFjaCBkZXNjcmlwdG9yIGluIGRlc2NyaXB0b3JzLCBydW4gdGhlIGFwcHJvcHJpYXRlIHNldCBvZiBzdGVwc1xuXHRcdFx0Ly8gZnJvbSB0aGUgZm9sbG93aW5nIGxpc3Q6XG5cdFx0XHRmb3IgKGkgPSAwIDsgaSA8IGRlc2NyaXB0b3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGRlc2MgPSBkZXNjcmlwdG9yc1sgaSBdO1xuXG5cdFx0XHRcdGxhc3RDaGFyID0gZGVzY1sgZGVzYy5sZW5ndGggLSAxIF07XG5cdFx0XHRcdHZhbHVlID0gZGVzYy5zdWJzdHJpbmcoMCwgZGVzYy5sZW5ndGggLSAxKTtcblx0XHRcdFx0aW50VmFsID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblx0XHRcdFx0ZmxvYXRWYWwgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuXHRcdFx0XHQvLyBJZiB0aGUgZGVzY3JpcHRvciBjb25zaXN0cyBvZiBhIHZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIGZvbGxvd2VkIGJ5XG5cdFx0XHRcdC8vIGEgVSswMDc3IExBVElOIFNNQUxMIExFVFRFUiBXIGNoYXJhY3RlclxuXHRcdFx0XHRpZiAocmVnZXhOb25OZWdhdGl2ZUludGVnZXIudGVzdCh2YWx1ZSkgJiYgKGxhc3RDaGFyID09PSBcIndcIikpIHtcblxuXHRcdFx0XHRcdC8vIElmIHdpZHRoIGFuZCBkZW5zaXR5IGFyZSBub3QgYm90aCBhYnNlbnQsIHRoZW4gbGV0IGVycm9yIGJlIHllcy5cblx0XHRcdFx0XHRpZiAodyB8fCBkKSB7cEVycm9yID0gdHJ1ZTt9XG5cblx0XHRcdFx0XHQvLyBBcHBseSB0aGUgcnVsZXMgZm9yIHBhcnNpbmcgbm9uLW5lZ2F0aXZlIGludGVnZXJzIHRvIHRoZSBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdC8vIElmIHRoZSByZXN1bHQgaXMgemVybywgbGV0IGVycm9yIGJlIHllcy5cblx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIGxldCB3aWR0aCBiZSB0aGUgcmVzdWx0LlxuXHRcdFx0XHRcdGlmIChpbnRWYWwgPT09IDApIHtwRXJyb3IgPSB0cnVlO30gZWxzZSB7dyA9IGludFZhbDt9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGRlc2NyaXB0b3IgY29uc2lzdHMgb2YgYSB2YWxpZCBmbG9hdGluZy1wb2ludCBudW1iZXIgZm9sbG93ZWQgYnlcblx0XHRcdFx0Ly8gYSBVKzAwNzggTEFUSU4gU01BTEwgTEVUVEVSIFggY2hhcmFjdGVyXG5cdFx0XHRcdH0gZWxzZSBpZiAocmVnZXhGbG9hdGluZ1BvaW50LnRlc3QodmFsdWUpICYmIChsYXN0Q2hhciA9PT0gXCJ4XCIpKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB3aWR0aCwgZGVuc2l0eSBhbmQgZnV0dXJlLWNvbXBhdC1oIGFyZSBub3QgYWxsIGFic2VudCwgdGhlbiBsZXQgZXJyb3Jcblx0XHRcdFx0XHQvLyBiZSB5ZXMuXG5cdFx0XHRcdFx0aWYgKHcgfHwgZCB8fCBoKSB7cEVycm9yID0gdHJ1ZTt9XG5cblx0XHRcdFx0XHQvLyBBcHBseSB0aGUgcnVsZXMgZm9yIHBhcnNpbmcgZmxvYXRpbmctcG9pbnQgbnVtYmVyIHZhbHVlcyB0byB0aGUgZGVzY3JpcHRvci5cblx0XHRcdFx0XHQvLyBJZiB0aGUgcmVzdWx0IGlzIGxlc3MgdGhhbiB6ZXJvLCBsZXQgZXJyb3IgYmUgeWVzLiBPdGhlcndpc2UsIGxldCBkZW5zaXR5XG5cdFx0XHRcdFx0Ly8gYmUgdGhlIHJlc3VsdC5cblx0XHRcdFx0XHRpZiAoZmxvYXRWYWwgPCAwKSB7cEVycm9yID0gdHJ1ZTt9IGVsc2Uge2QgPSBmbG9hdFZhbDt9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGRlc2NyaXB0b3IgY29uc2lzdHMgb2YgYSB2YWxpZCBub24tbmVnYXRpdmUgaW50ZWdlciBmb2xsb3dlZCBieVxuXHRcdFx0XHQvLyBhIFUrMDA2OCBMQVRJTiBTTUFMTCBMRVRURVIgSCBjaGFyYWN0ZXJcblx0XHRcdFx0fSBlbHNlIGlmIChyZWdleE5vbk5lZ2F0aXZlSW50ZWdlci50ZXN0KHZhbHVlKSAmJiAobGFzdENoYXIgPT09IFwiaFwiKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgaGVpZ2h0IGFuZCBkZW5zaXR5IGFyZSBub3QgYm90aCBhYnNlbnQsIHRoZW4gbGV0IGVycm9yIGJlIHllcy5cblx0XHRcdFx0XHRpZiAoaCB8fCBkKSB7cEVycm9yID0gdHJ1ZTt9XG5cblx0XHRcdFx0XHQvLyBBcHBseSB0aGUgcnVsZXMgZm9yIHBhcnNpbmcgbm9uLW5lZ2F0aXZlIGludGVnZXJzIHRvIHRoZSBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdC8vIElmIHRoZSByZXN1bHQgaXMgemVybywgbGV0IGVycm9yIGJlIHllcy4gT3RoZXJ3aXNlLCBsZXQgZnV0dXJlLWNvbXBhdC1oXG5cdFx0XHRcdFx0Ly8gYmUgdGhlIHJlc3VsdC5cblx0XHRcdFx0XHRpZiAoaW50VmFsID09PSAwKSB7cEVycm9yID0gdHJ1ZTt9IGVsc2Uge2ggPSBpbnRWYWw7fVxuXG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UsIExldCBlcnJvciBiZSB5ZXMuXG5cdFx0XHRcdH0gZWxzZSB7cEVycm9yID0gdHJ1ZTt9XG5cdFx0XHR9IC8vIChjbG9zZSBzdGVwIDEzIGZvciBsb29wKVxuXG5cdFx0XHQvLyAxNS4gSWYgZXJyb3IgaXMgc3RpbGwgbm8sIHRoZW4gYXBwZW5kIGEgbmV3IGltYWdlIHNvdXJjZSB0byBjYW5kaWRhdGVzIHdob3NlXG5cdFx0XHQvLyBVUkwgaXMgdXJsLCBhc3NvY2lhdGVkIHdpdGggYSB3aWR0aCB3aWR0aCBpZiBub3QgYWJzZW50IGFuZCBhIHBpeGVsXG5cdFx0XHQvLyBkZW5zaXR5IGRlbnNpdHkgaWYgbm90IGFic2VudC4gT3RoZXJ3aXNlLCB0aGVyZSBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdFx0aWYgKCFwRXJyb3IpIHtcblx0XHRcdFx0Y2FuZGlkYXRlLnVybCA9IHVybDtcblxuXHRcdFx0XHRpZiAodykgeyBjYW5kaWRhdGUudyA9IHc7fVxuXHRcdFx0XHRpZiAoZCkgeyBjYW5kaWRhdGUuZCA9IGQ7fVxuXHRcdFx0XHRpZiAoaCkgeyBjYW5kaWRhdGUuaCA9IGg7fVxuXHRcdFx0XHRpZiAoIWggJiYgIWQgJiYgIXcpIHtjYW5kaWRhdGUuZCA9IDE7fVxuXHRcdFx0XHRpZiAoY2FuZGlkYXRlLmQgPT09IDEpIHtzZXQuaGFzMXggPSB0cnVlO31cblx0XHRcdFx0Y2FuZGlkYXRlLnNldCA9IHNldDtcblxuXHRcdFx0XHRjYW5kaWRhdGVzLnB1c2goY2FuZGlkYXRlKTtcblx0XHRcdH1cblx0XHR9IC8vIChjbG9zZSBwYXJzZURlc2NyaXB0b3JzIGZuKVxuXG5cdFx0LyoqXG5cdFx0KiBUb2tlbml6ZXMgZGVzY3JpcHRvciBwcm9wZXJ0aWVzIHByaW9yIHRvIHBhcnNpbmdcblx0XHQqIFJldHVybnMgdW5kZWZpbmVkLlxuXHRcdCogKEFnYWluLCB0aGlzIGZuIGlzIGRlZmluZWQgYmVmb3JlIGl0IGlzIHVzZWQsIGluIG9yZGVyIHRvIHBhc3MgSlNISU5ULlxuXHRcdCogVW5mb3J0dW5hdGVseSB0aGlzIGJyZWFrcyB0aGUgbG9naWNhbCBzZXF1ZW5jaW5nIG9mIHRoZSBzcGVjIGNvbW1lbnRzLiA6LyApXG5cdFx0Ki9cblx0XHRmdW5jdGlvbiB0b2tlbml6ZSgpIHtcblxuXHRcdFx0Ly8gOC4xLiBEZXNjcmlwdG9yIHRva2VuaXNlcjogU2tpcCB3aGl0ZXNwYWNlXG5cdFx0XHRjb2xsZWN0Q2hhcmFjdGVycyhyZWdleExlYWRpbmdTcGFjZXMpO1xuXG5cdFx0XHQvLyA4LjIuIExldCBjdXJyZW50IGRlc2NyaXB0b3IgYmUgdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gXCJcIjtcblxuXHRcdFx0Ly8gOC4zLiBMZXQgc3RhdGUgYmUgaW4gZGVzY3JpcHRvci5cblx0XHRcdHN0YXRlID0gXCJpbiBkZXNjcmlwdG9yXCI7XG5cblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cblx0XHRcdFx0Ly8gOC40LiBMZXQgYyBiZSB0aGUgY2hhcmFjdGVyIGF0IHBvc2l0aW9uLlxuXHRcdFx0XHRjID0gaW5wdXQuY2hhckF0KHBvcyk7XG5cblx0XHRcdFx0Ly8gIERvIHRoZSBmb2xsb3dpbmcgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBzdGF0ZS5cblx0XHRcdFx0Ly8gIEZvciB0aGUgcHVycG9zZSBvZiB0aGlzIHN0ZXAsIFwiRU9GXCIgaXMgYSBzcGVjaWFsIGNoYXJhY3RlciByZXByZXNlbnRpbmdcblx0XHRcdFx0Ly8gIHRoYXQgcG9zaXRpb24gaXMgcGFzdCB0aGUgZW5kIG9mIGlucHV0LlxuXG5cdFx0XHRcdC8vIEluIGRlc2NyaXB0b3Jcblx0XHRcdFx0aWYgKHN0YXRlID09PSBcImluIGRlc2NyaXB0b3JcIikge1xuXHRcdFx0XHRcdC8vIERvIHRoZSBmb2xsb3dpbmcsIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYzpcblxuXHRcdFx0XHQgIC8vIFNwYWNlIGNoYXJhY3RlclxuXHRcdFx0XHQgIC8vIElmIGN1cnJlbnQgZGVzY3JpcHRvciBpcyBub3QgZW1wdHksIGFwcGVuZCBjdXJyZW50IGRlc2NyaXB0b3IgdG9cblx0XHRcdFx0ICAvLyBkZXNjcmlwdG9ycyBhbmQgbGV0IGN1cnJlbnQgZGVzY3JpcHRvciBiZSB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0XHQgIC8vIFNldCBzdGF0ZSB0byBhZnRlciBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdGlmIChpc1NwYWNlKGMpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudERlc2NyaXB0b3IpIHtcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0c3RhdGUgPSBcImFmdGVyIGRlc2NyaXB0b3JcIjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFUrMDAyQyBDT01NQSAoLClcblx0XHRcdFx0XHQvLyBBZHZhbmNlIHBvc2l0aW9uIHRvIHRoZSBuZXh0IGNoYXJhY3RlciBpbiBpbnB1dC4gSWYgY3VycmVudCBkZXNjcmlwdG9yXG5cdFx0XHRcdFx0Ly8gaXMgbm90IGVtcHR5LCBhcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvIGRlc2NyaXB0b3JzLiBKdW1wIHRvIHRoZSBzdGVwXG5cdFx0XHRcdFx0Ly8gbGFiZWxlZCBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiLFwiKSB7XG5cdFx0XHRcdFx0XHRwb3MgKz0gMTtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50RGVzY3JpcHRvcikge1xuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9ycy5wdXNoKGN1cnJlbnREZXNjcmlwdG9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdC8vIFUrMDAyOCBMRUZUIFBBUkVOVEhFU0lTICgoKVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci4gU2V0IHN0YXRlIHRvIGluIHBhcmVucy5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXFx1MDAyOFwiKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHRcdHN0YXRlID0gXCJpbiBwYXJlbnNcIjtcblxuXHRcdFx0XHRcdC8vIEVPRlxuXHRcdFx0XHRcdC8vIElmIGN1cnJlbnQgZGVzY3JpcHRvciBpcyBub3QgZW1wdHksIGFwcGVuZCBjdXJyZW50IGRlc2NyaXB0b3IgdG9cblx0XHRcdFx0XHQvLyBkZXNjcmlwdG9ycy4gSnVtcCB0byB0aGUgc3RlcCBsYWJlbGVkIGRlc2NyaXB0b3IgcGFyc2VyLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCJcIikge1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnREZXNjcmlwdG9yKSB7XG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBjdXJyZW50RGVzY3JpcHRvciArIGM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQvLyAoZW5kIFwiaW4gZGVzY3JpcHRvclwiXG5cblx0XHRcdFx0Ly8gSW4gcGFyZW5zXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RhdGUgPT09IFwiaW4gcGFyZW5zXCIpIHtcblxuXHRcdFx0XHRcdC8vIFUrMDAyOSBSSUdIVCBQQVJFTlRIRVNJUyAoKSlcblx0XHRcdFx0XHQvLyBBcHBlbmQgYyB0byBjdXJyZW50IGRlc2NyaXB0b3IuIFNldCBzdGF0ZSB0byBpbiBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdGlmIChjID09PSBcIilcIikge1xuXHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBjdXJyZW50RGVzY3JpcHRvciArIGM7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFwiaW4gZGVzY3JpcHRvclwiO1xuXG5cdFx0XHRcdFx0Ly8gRU9GXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0byBkZXNjcmlwdG9ycy4gSnVtcCB0byB0aGUgc3RlcCBsYWJlbGVkXG5cdFx0XHRcdFx0Ly8gZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRkZXNjcmlwdG9ycy5wdXNoKGN1cnJlbnREZXNjcmlwdG9yKTtcblx0XHRcdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdC8vIEFueXRoaW5nIGVsc2Vcblx0XHRcdFx0XHQvLyBBcHBlbmQgYyB0byBjdXJyZW50IGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZnRlciBkZXNjcmlwdG9yXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RhdGUgPT09IFwiYWZ0ZXIgZGVzY3JpcHRvclwiKSB7XG5cblx0XHRcdFx0XHQvLyBEbyB0aGUgZm9sbG93aW5nLCBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGM6XG5cdFx0XHRcdFx0Ly8gU3BhY2UgY2hhcmFjdGVyOiBTdGF5IGluIHRoaXMgc3RhdGUuXG5cdFx0XHRcdFx0aWYgKGlzU3BhY2UoYykpIHtcblxuXHRcdFx0XHRcdC8vIEVPRjogSnVtcCB0byB0aGUgc3RlcCBsYWJlbGVkIGRlc2NyaXB0b3IgcGFyc2VyLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCJcIikge1xuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZVxuXHRcdFx0XHRcdC8vIFNldCBzdGF0ZSB0byBpbiBkZXNjcmlwdG9yLiBTZXQgcG9zaXRpb24gdG8gdGhlIHByZXZpb3VzIGNoYXJhY3RlciBpbiBpbnB1dC5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBcImluIGRlc2NyaXB0b3JcIjtcblx0XHRcdFx0XHRcdHBvcyAtPSAxO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWR2YW5jZSBwb3NpdGlvbiB0byB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gaW5wdXQuXG5cdFx0XHRcdHBvcyArPSAxO1xuXG5cdFx0XHQvLyBSZXBlYXQgdGhpcyBzdGVwLlxuXHRcdFx0fSAvLyAoY2xvc2Ugd2hpbGUgdHJ1ZSBsb29wKVxuXHRcdH1cblxuXHRcdC8vIDQuIFNwbGl0dGluZyBsb29wOiBDb2xsZWN0IGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyB0aGF0IGFyZSBzcGFjZVxuXHRcdC8vICAgIGNoYXJhY3RlcnMgb3IgVSswMDJDIENPTU1BIGNoYXJhY3RlcnMuIElmIGFueSBVKzAwMkMgQ09NTUEgY2hhcmFjdGVyc1xuXHRcdC8vICAgIHdlcmUgY29sbGVjdGVkLCB0aGF0IGlzIGEgcGFyc2UgZXJyb3IuXG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ2V4TGVhZGluZ0NvbW1hc09yU3BhY2VzKTtcblxuXHRcdFx0Ly8gNS4gSWYgcG9zaXRpb24gaXMgcGFzdCB0aGUgZW5kIG9mIGlucHV0LCByZXR1cm4gY2FuZGlkYXRlcyBhbmQgYWJvcnQgdGhlc2Ugc3RlcHMuXG5cdFx0XHRpZiAocG9zID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBjYW5kaWRhdGVzOyAvLyAod2UncmUgZG9uZSwgdGhpcyBpcyB0aGUgc29sZSByZXR1cm4gcGF0aClcblx0XHRcdH1cblxuXHRcdFx0Ly8gNi4gQ29sbGVjdCBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IHNwYWNlIGNoYXJhY3RlcnMsXG5cdFx0XHQvLyAgICBhbmQgbGV0IHRoYXQgYmUgdXJsLlxuXHRcdFx0dXJsID0gY29sbGVjdENoYXJhY3RlcnMocmVnZXhMZWFkaW5nTm90U3BhY2VzKTtcblxuXHRcdFx0Ly8gNy4gTGV0IGRlc2NyaXB0b3JzIGJlIGEgbmV3IGVtcHR5IGxpc3QuXG5cdFx0XHRkZXNjcmlwdG9ycyA9IFtdO1xuXG5cdFx0XHQvLyA4LiBJZiB1cmwgZW5kcyB3aXRoIGEgVSswMDJDIENPTU1BIGNoYXJhY3RlciAoLCksIGZvbGxvdyB0aGVzZSBzdWJzdGVwczpcblx0XHRcdC8vXHRcdCgxKS4gUmVtb3ZlIGFsbCB0cmFpbGluZyBVKzAwMkMgQ09NTUEgY2hhcmFjdGVycyBmcm9tIHVybC4gSWYgdGhpcyByZW1vdmVkXG5cdFx0XHQvLyAgICAgICAgIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGF0IGlzIGEgcGFyc2UgZXJyb3IuXG5cdFx0XHRpZiAodXJsLnNsaWNlKC0xKSA9PT0gXCIsXCIpIHtcblx0XHRcdFx0dXJsID0gdXJsLnJlcGxhY2UocmVnZXhUcmFpbGluZ0NvbW1hcywgXCJcIik7XG5cdFx0XHRcdC8vIChKdW1wIGFoZWFkIHRvIHN0ZXAgOSB0byBza2lwIHRva2VuaXphdGlvbiBhbmQganVzdCBwdXNoIHRoZSBjYW5kaWRhdGUpLlxuXHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cblx0XHRcdC8vXHRPdGhlcndpc2UsIGZvbGxvdyB0aGVzZSBzdWJzdGVwczpcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRva2VuaXplKCk7XG5cdFx0XHR9IC8vIChjbG9zZSBlbHNlIG9mIHN0ZXAgOClcblxuXHRcdC8vIDE2LiBSZXR1cm4gdG8gdGhlIHN0ZXAgbGFiZWxlZCBzcGxpdHRpbmcgbG9vcC5cblx0XHR9IC8vIChDbG9zZSBvZiBiaWcgd2hpbGUgbG9vcC4pXG5cdH1cblxuXHQvKlxuXHQgKiBTaXplcyBQYXJzZXJcblx0ICpcblx0ICogQnkgQWxleCBCZWxsIHwgIE1JVCBMaWNlbnNlXG5cdCAqXG5cdCAqIE5vbi1zdHJpY3QgYnV0IGFjY3VyYXRlIGFuZCBsaWdodHdlaWdodCBKUyBQYXJzZXIgZm9yIHRoZSBzdHJpbmcgdmFsdWUgPGltZyBzaXplcz1cImhlcmVcIj5cblx0ICpcblx0ICogUmVmZXJlbmNlIGFsZ29yaXRobSBhdDpcblx0ICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZW1iZWRkZWQtY29udGVudC5odG1sI3BhcnNlLWEtc2l6ZXMtYXR0cmlidXRlXG5cdCAqXG5cdCAqIE1vc3QgY29tbWVudHMgYXJlIGNvcGllZCBpbiBkaXJlY3RseSBmcm9tIHRoZSBzcGVjXG5cdCAqIChleGNlcHQgZm9yIGNvbW1lbnRzIGluIHBhcmVucykuXG5cdCAqXG5cdCAqIEdyYW1tYXIgaXM6XG5cdCAqIDxzb3VyY2Utc2l6ZS1saXN0PiA9IDxzb3VyY2Utc2l6ZT4jIFsgLCA8c291cmNlLXNpemUtdmFsdWU+IF0/IHwgPHNvdXJjZS1zaXplLXZhbHVlPlxuXHQgKiA8c291cmNlLXNpemU+ID0gPG1lZGlhLWNvbmRpdGlvbj4gPHNvdXJjZS1zaXplLXZhbHVlPlxuXHQgKiA8c291cmNlLXNpemUtdmFsdWU+ID0gPGxlbmd0aD5cblx0ICogaHR0cDovL3d3dy53My5vcmcvaHRtbC93Zy9kcmFmdHMvaHRtbC9tYXN0ZXIvZW1iZWRkZWQtY29udGVudC5odG1sI2F0dHItaW1nLXNpemVzXG5cdCAqXG5cdCAqIEUuZy4gXCIobWF4LXdpZHRoOiAzMGVtKSAxMDB2dywgKG1heC13aWR0aDogNTBlbSkgNzB2dywgMTAwdndcIlxuXHQgKiBvciBcIihtaW4td2lkdGg6IDMwZW0pLCBjYWxjKDMwdncgLSAxNXB4KVwiIG9yIGp1c3QgXCIzMHZ3XCJcblx0ICpcblx0ICogUmV0dXJucyB0aGUgZmlyc3QgdmFsaWQgPGNzcy1sZW5ndGg+IHdpdGggYSBtZWRpYSBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gdHJ1ZSxcblx0ICogb3IgXCIxMDB2d1wiIGlmIGFsbCB2YWxpZCBtZWRpYSBjb25kaXRpb25zIGV2YWx1YXRlIHRvIGZhbHNlLlxuXHQgKlxuXHQgKi9cblxuXHRmdW5jdGlvbiBwYXJzZVNpemVzKHN0clZhbHVlKSB7XG5cblx0XHQvLyAoUGVyY2VudGFnZSBDU1MgbGVuZ3RocyBhcmUgbm90IGFsbG93ZWQgaW4gdGhpcyBjYXNlLCB0byBhdm9pZCBjb25mdXNpb246XG5cdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZW1iZWRkZWQtY29udGVudC5odG1sI3ZhbGlkLXNvdXJjZS1zaXplLWxpc3Rcblx0XHQvLyBDU1MgYWxsb3dzIGEgc2luZ2xlIG9wdGlvbmFsIHBsdXMgb3IgbWludXMgc2lnbjpcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyL3N5bmRhdGEuaHRtbCNudW1iZXJzXG5cdFx0Ly8gQ1NTIGlzIEFTQ0lJIGNhc2UtaW5zZW5zaXRpdmU6XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMi9zeW5kYXRhLmh0bWwjY2hhcmFjdGVycyApXG5cdFx0Ly8gU3BlYyBhbGxvd3MgZXhwb25lbnRpYWwgbm90YXRpb24gZm9yIDxudW1iZXI+IHR5cGU6XG5cdFx0Ly8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXZhbHVlcy8jbnVtYmVyc1xuXHRcdHZhciByZWdleENzc0xlbmd0aFdpdGhVbml0cyA9IC9eKD86WystXT9bMC05XSt8WzAtOV0qXFwuWzAtOV0rKSg/OltlRV1bKy1dP1swLTldKyk/KD86Y2h8Y218ZW18ZXh8aW58bW18cGN8cHR8cHh8cmVtfHZofHZtaW58dm1heHx2dykkL2k7XG5cblx0XHQvLyAoVGhpcyBpcyBhIHF1aWNrIGFuZCBsZW5pZW50IHRlc3QuIEJlY2F1c2Ugb2Ygb3B0aW9uYWwgdW5saW1pdGVkLWRlcHRoIGludGVybmFsXG5cdFx0Ly8gZ3JvdXBpbmcgcGFyZW5zIGFuZCBzdHJpY3Qgc3BhY2luZyBydWxlcywgdGhpcyBjb3VsZCBnZXQgdmVyeSBjb21wbGljYXRlZC4pXG5cdFx0dmFyIHJlZ2V4Q3NzQ2FsYyA9IC9eY2FsY1xcKCg/OlswLTlhLXogXFwuXFwrXFwtXFwqXFwvXFwoXFwpXSspXFwpJC9pO1xuXG5cdFx0dmFyIGk7XG5cdFx0dmFyIHVucGFyc2VkU2l6ZXNMaXN0O1xuXHRcdHZhciB1bnBhcnNlZFNpemVzTGlzdExlbmd0aDtcblx0XHR2YXIgdW5wYXJzZWRTaXplO1xuXHRcdHZhciBsYXN0Q29tcG9uZW50VmFsdWU7XG5cdFx0dmFyIHNpemU7XG5cblx0XHQvLyBVVElMSVRZIEZVTkNUSU9OU1xuXG5cdFx0Ly8gIChUb3kgQ1NTIHBhcnNlci4gVGhlIGdvYWxzIGhlcmUgYXJlOlxuXHRcdC8vICAxKSBleHBhbnNpdmUgdGVzdCBjb3ZlcmFnZSB3aXRob3V0IHRoZSB3ZWlnaHQgb2YgYSBmdWxsIENTUyBwYXJzZXIuXG5cdFx0Ly8gIDIpIEF2b2lkaW5nIHJlZ2V4IHdoZXJldmVyIGNvbnZlbmllbnQuXG5cdFx0Ly8gIFF1aWNrIHRlc3RzOiBodHRwOi8vanNmaWRkbGUubmV0L2d0bnRMNGdyLzMvXG5cdFx0Ly8gIFJldHVybnMgYW4gYXJyYXkgb2YgYXJyYXlzLilcblx0XHRmdW5jdGlvbiBwYXJzZUNvbXBvbmVudFZhbHVlcyhzdHIpIHtcblx0XHRcdHZhciBjaHJjdHI7XG5cdFx0XHR2YXIgY29tcG9uZW50ID0gXCJcIjtcblx0XHRcdHZhciBjb21wb25lbnRBcnJheSA9IFtdO1xuXHRcdFx0dmFyIGxpc3RBcnJheSA9IFtdO1xuXHRcdFx0dmFyIHBhcmVuRGVwdGggPSAwO1xuXHRcdFx0dmFyIHBvcyA9IDA7XG5cdFx0XHR2YXIgaW5Db21tZW50ID0gZmFsc2U7XG5cblx0XHRcdGZ1bmN0aW9uIHB1c2hDb21wb25lbnQoKSB7XG5cdFx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0XHRjb21wb25lbnRBcnJheS5wdXNoKGNvbXBvbmVudCk7XG5cdFx0XHRcdFx0Y29tcG9uZW50ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBwdXNoQ29tcG9uZW50QXJyYXkoKSB7XG5cdFx0XHRcdGlmIChjb21wb25lbnRBcnJheVswXSkge1xuXHRcdFx0XHRcdGxpc3RBcnJheS5wdXNoKGNvbXBvbmVudEFycmF5KTtcblx0XHRcdFx0XHRjb21wb25lbnRBcnJheSA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIChMb29wIGZvcndhcmRzIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgc3RyaW5nLilcblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdGNocmN0ciA9IHN0ci5jaGFyQXQocG9zKTtcblxuXHRcdFx0XHRpZiAoY2hyY3RyID09PSBcIlwiKSB7IC8vICggRW5kIG9mIHN0cmluZyByZWFjaGVkLilcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0cHVzaENvbXBvbmVudEFycmF5KCk7XG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RBcnJheTtcblx0XHRcdFx0fSBlbHNlIGlmIChpbkNvbW1lbnQpIHtcblx0XHRcdFx0XHRpZiAoKGNocmN0ciA9PT0gXCIqXCIpICYmIChzdHJbcG9zICsgMV0gPT09IFwiL1wiKSkgeyAvLyAoQXQgZW5kIG9mIGEgY29tbWVudC4pXG5cdFx0XHRcdFx0XHRpbkNvbW1lbnQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHBvcyArPSAyO1xuXHRcdFx0XHRcdFx0cHVzaENvbXBvbmVudCgpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBvcyArPSAxOyAvLyAoU2tpcCBhbGwgY2hhcmFjdGVycyBpbnNpZGUgY29tbWVudHMuKVxuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGlzU3BhY2UoY2hyY3RyKSkge1xuXHRcdFx0XHRcdC8vIChJZiBwcmV2aW91cyBjaGFyYWN0ZXIgaW4gbG9vcCB3YXMgYWxzbyBhIHNwYWNlLCBvciBpZlxuXHRcdFx0XHRcdC8vIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN0cmluZywgZG8gbm90IGFkZCBzcGFjZSBjaGFyIHRvXG5cdFx0XHRcdFx0Ly8gY29tcG9uZW50Lilcblx0XHRcdFx0XHRpZiAoIChzdHIuY2hhckF0KHBvcyAtIDEpICYmIGlzU3BhY2UoIHN0ci5jaGFyQXQocG9zIC0gMSkgKSApIHx8ICFjb21wb25lbnQgKSB7XG5cdFx0XHRcdFx0XHRwb3MgKz0gMTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocGFyZW5EZXB0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cHVzaENvbXBvbmVudCgpO1xuXHRcdFx0XHRcdFx0cG9zICs9MTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyAoUmVwbGFjZSBhbnkgc3BhY2UgY2hhcmFjdGVyIHdpdGggYSBwbGFpbiBzcGFjZSBmb3IgbGVnaWJpbGl0eS4pXG5cdFx0XHRcdFx0XHRjaHJjdHIgPSBcIiBcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hyY3RyID09PSBcIihcIikge1xuXHRcdFx0XHRcdHBhcmVuRGVwdGggKz0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChjaHJjdHIgPT09IFwiKVwiKSB7XG5cdFx0XHRcdFx0cGFyZW5EZXB0aCAtPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNocmN0ciA9PT0gXCIsXCIpIHtcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0cHVzaENvbXBvbmVudEFycmF5KCk7XG5cdFx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIChjaHJjdHIgPT09IFwiL1wiKSAmJiAoc3RyLmNoYXJBdChwb3MgKyAxKSA9PT0gXCIqXCIpICkge1xuXHRcdFx0XHRcdGluQ29tbWVudCA9IHRydWU7XG5cdFx0XHRcdFx0cG9zICs9IDI7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb21wb25lbnQgPSBjb21wb25lbnQgKyBjaHJjdHI7XG5cdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGlzVmFsaWROb25OZWdhdGl2ZVNvdXJjZVNpemVWYWx1ZShzKSB7XG5cdFx0XHRpZiAocmVnZXhDc3NMZW5ndGhXaXRoVW5pdHMudGVzdChzKSAmJiAocGFyc2VGbG9hdChzKSA+PSAwKSkge3JldHVybiB0cnVlO31cblx0XHRcdGlmIChyZWdleENzc0NhbGMudGVzdChzKSkge3JldHVybiB0cnVlO31cblx0XHRcdC8vICggaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMi9zeW5kYXRhLmh0bWwjbnVtYmVycyBzYXlzOlxuXHRcdFx0Ly8gXCItMCBpcyBlcXVpdmFsZW50IHRvIDAgYW5kIGlzIG5vdCBhIG5lZ2F0aXZlIG51bWJlci5cIiB3aGljaCBtZWFucyB0aGF0XG5cdFx0XHQvLyB1bml0bGVzcyB6ZXJvIGFuZCB1bml0bGVzcyBuZWdhdGl2ZSB6ZXJvIG11c3QgYmUgYWNjZXB0ZWQgYXMgc3BlY2lhbCBjYXNlcy4pXG5cdFx0XHRpZiAoKHMgPT09IFwiMFwiKSB8fCAocyA9PT0gXCItMFwiKSB8fCAocyA9PT0gXCIrMFwiKSkge3JldHVybiB0cnVlO31cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBXaGVuIGFza2VkIHRvIHBhcnNlIGEgc2l6ZXMgYXR0cmlidXRlIGZyb20gYW4gZWxlbWVudCwgcGFyc2UgYVxuXHRcdC8vIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGNvbXBvbmVudCB2YWx1ZXMgZnJvbSB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQnc1xuXHRcdC8vIHNpemVzIGF0dHJpYnV0ZSAob3IgdGhlIGVtcHR5IHN0cmluZywgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhYnNlbnQpLCBhbmQgbGV0XG5cdFx0Ly8gdW5wYXJzZWQgc2l6ZXMgbGlzdCBiZSB0aGUgcmVzdWx0LlxuXHRcdC8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1zeW50YXgvI3BhcnNlLWNvbW1hLXNlcGFyYXRlZC1saXN0LW9mLWNvbXBvbmVudC12YWx1ZXNcblxuXHRcdHVucGFyc2VkU2l6ZXNMaXN0ID0gcGFyc2VDb21wb25lbnRWYWx1ZXMoc3RyVmFsdWUpO1xuXHRcdHVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoID0gdW5wYXJzZWRTaXplc0xpc3QubGVuZ3RoO1xuXG5cdFx0Ly8gRm9yIGVhY2ggdW5wYXJzZWQgc2l6ZSBpbiB1bnBhcnNlZCBzaXplcyBsaXN0OlxuXHRcdGZvciAoaSA9IDA7IGkgPCB1bnBhcnNlZFNpemVzTGlzdExlbmd0aDsgaSsrKSB7XG5cdFx0XHR1bnBhcnNlZFNpemUgPSB1bnBhcnNlZFNpemVzTGlzdFtpXTtcblxuXHRcdFx0Ly8gMS4gUmVtb3ZlIGFsbCBjb25zZWN1dGl2ZSA8d2hpdGVzcGFjZS10b2tlbj5zIGZyb20gdGhlIGVuZCBvZiB1bnBhcnNlZCBzaXplLlxuXHRcdFx0Ly8gKCBwYXJzZUNvbXBvbmVudFZhbHVlcygpIGFscmVhZHkgb21pdHMgc3BhY2VzIG91dHNpZGUgb2YgcGFyZW5zLiApXG5cblx0XHRcdC8vIElmIHVucGFyc2VkIHNpemUgaXMgbm93IGVtcHR5LCB0aGF0IGlzIGEgcGFyc2UgZXJyb3I7IGNvbnRpbnVlIHRvIHRoZSBuZXh0XG5cdFx0XHQvLyBpdGVyYXRpb24gb2YgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHQvLyAoIHBhcnNlQ29tcG9uZW50VmFsdWVzKCkgd29uJ3QgcHVzaCBhbiBlbXB0eSBhcnJheS4gKVxuXG5cdFx0XHQvLyAyLiBJZiB0aGUgbGFzdCBjb21wb25lbnQgdmFsdWUgaW4gdW5wYXJzZWQgc2l6ZSBpcyBhIHZhbGlkIG5vbi1uZWdhdGl2ZVxuXHRcdFx0Ly8gPHNvdXJjZS1zaXplLXZhbHVlPiwgbGV0IHNpemUgYmUgaXRzIHZhbHVlIGFuZCByZW1vdmUgdGhlIGNvbXBvbmVudCB2YWx1ZVxuXHRcdFx0Ly8gZnJvbSB1bnBhcnNlZCBzaXplLiBBbnkgQ1NTIGZ1bmN0aW9uIG90aGVyIHRoYW4gdGhlIGNhbGMoKSBmdW5jdGlvbiBpc1xuXHRcdFx0Ly8gaW52YWxpZC4gT3RoZXJ3aXNlLCB0aGVyZSBpcyBhIHBhcnNlIGVycm9yOyBjb250aW51ZSB0byB0aGUgbmV4dCBpdGVyYXRpb25cblx0XHRcdC8vIG9mIHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXN5bnRheC8jcGFyc2UtY29tcG9uZW50LXZhbHVlXG5cdFx0XHRsYXN0Q29tcG9uZW50VmFsdWUgPSB1bnBhcnNlZFNpemVbdW5wYXJzZWRTaXplLmxlbmd0aCAtIDFdO1xuXG5cdFx0XHRpZiAoaXNWYWxpZE5vbk5lZ2F0aXZlU291cmNlU2l6ZVZhbHVlKGxhc3RDb21wb25lbnRWYWx1ZSkpIHtcblx0XHRcdFx0c2l6ZSA9IGxhc3RDb21wb25lbnRWYWx1ZTtcblx0XHRcdFx0dW5wYXJzZWRTaXplLnBvcCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDMuIFJlbW92ZSBhbGwgY29uc2VjdXRpdmUgPHdoaXRlc3BhY2UtdG9rZW4+cyBmcm9tIHRoZSBlbmQgb2YgdW5wYXJzZWRcblx0XHRcdC8vIHNpemUuIElmIHVucGFyc2VkIHNpemUgaXMgbm93IGVtcHR5LCByZXR1cm4gc2l6ZSBhbmQgZXhpdCB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vIElmIHRoaXMgd2FzIG5vdCB0aGUgbGFzdCBpdGVtIGluIHVucGFyc2VkIHNpemVzIGxpc3QsIHRoYXQgaXMgYSBwYXJzZSBlcnJvci5cblx0XHRcdGlmICh1bnBhcnNlZFNpemUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiBzaXplO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyA0LiBQYXJzZSB0aGUgcmVtYWluaW5nIGNvbXBvbmVudCB2YWx1ZXMgaW4gdW5wYXJzZWQgc2l6ZSBhcyBhXG5cdFx0XHQvLyA8bWVkaWEtY29uZGl0aW9uPi4gSWYgaXQgZG9lcyBub3QgcGFyc2UgY29ycmVjdGx5LCBvciBpdCBkb2VzIHBhcnNlXG5cdFx0XHQvLyBjb3JyZWN0bHkgYnV0IHRoZSA8bWVkaWEtY29uZGl0aW9uPiBldmFsdWF0ZXMgdG8gZmFsc2UsIGNvbnRpbnVlIHRvIHRoZVxuXHRcdFx0Ly8gbmV4dCBpdGVyYXRpb24gb2YgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHQvLyAoUGFyc2luZyBhbGwgcG9zc2libGUgY29tcG91bmQgbWVkaWEgY29uZGl0aW9ucyBpbiBKUyBpcyBoZWF2eSwgY29tcGxpY2F0ZWQsXG5cdFx0XHQvLyBhbmQgdGhlIHBheW9mZiBpcyB1bmNsZWFyLiBJcyB0aGVyZSBldmVyIGFuIHNpdHVhdGlvbiB3aGVyZSB0aGVcblx0XHRcdC8vIG1lZGlhIGNvbmRpdGlvbiBwYXJzZXMgaW5jb3JyZWN0bHkgYnV0IHN0aWxsIHNvbWVob3cgZXZhbHVhdGVzIHRvIHRydWU/XG5cdFx0XHQvLyBDYW4gd2UganVzdCByZWx5IG9uIHRoZSBicm93c2VyL3BvbHlmaWxsIHRvIGRvIGl0Pylcblx0XHRcdHVucGFyc2VkU2l6ZSA9IHVucGFyc2VkU2l6ZS5qb2luKFwiIFwiKTtcblx0XHRcdGlmICghKHBmLm1hdGNoZXNNZWRpYSggdW5wYXJzZWRTaXplICkgKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDUuIFJldHVybiBzaXplIGFuZCBleGl0IHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0cmV0dXJuIHNpemU7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIGFib3ZlIGFsZ29yaXRobSBleGhhdXN0cyB1bnBhcnNlZCBzaXplcyBsaXN0IHdpdGhvdXQgcmV0dXJuaW5nIGFcblx0XHQvLyBzaXplIHZhbHVlLCByZXR1cm4gMTAwdncuXG5cdFx0cmV0dXJuIFwiMTAwdndcIjtcblx0fVxuXG5cdC8vIG5hbWVzcGFjZVxuXHRwZi5ucyA9IChcInBmXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSkuc3Vic3RyKDAsIDkpO1xuXG5cdC8vIHNyY3NldCBzdXBwb3J0IHRlc3Rcblx0cGYuc3VwU3Jjc2V0ID0gXCJzcmNzZXRcIiBpbiBpbWFnZTtcblx0cGYuc3VwU2l6ZXMgPSBcInNpemVzXCIgaW4gaW1hZ2U7XG5cdHBmLnN1cFBpY3R1cmUgPSAhIXdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQ7XG5cblx0Ly8gVUMgYnJvd3NlciBkb2VzIGNsYWltIHRvIHN1cHBvcnQgc3Jjc2V0IGFuZCBwaWN0dXJlLCBidXQgbm90IHNpemVzLFxuXHQvLyB0aGlzIGV4dGVuZGVkIHRlc3QgcmV2ZWFscyB0aGUgYnJvd3NlciBkb2VzIHN1cHBvcnQgbm90aGluZ1xuXHRpZiAocGYuc3VwU3Jjc2V0ICYmIHBmLnN1cFBpY3R1cmUgJiYgIXBmLnN1cFNpemVzKSB7XG5cdFx0KGZ1bmN0aW9uKGltYWdlMikge1xuXHRcdFx0aW1hZ2Uuc3Jjc2V0ID0gXCJkYXRhOixhXCI7XG5cdFx0XHRpbWFnZTIuc3JjID0gXCJkYXRhOixhXCI7XG5cdFx0XHRwZi5zdXBTcmNzZXQgPSBpbWFnZS5jb21wbGV0ZSA9PT0gaW1hZ2UyLmNvbXBsZXRlO1xuXHRcdFx0cGYuc3VwUGljdHVyZSA9IHBmLnN1cFNyY3NldCAmJiBwZi5zdXBQaWN0dXJlO1xuXHRcdH0pKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIikpO1xuXHR9XG5cblx0Ly8gU2FmYXJpOSBoYXMgYmFzaWMgc3VwcG9ydCBmb3Igc2l6ZXMsIGJ1dCBkb2VzJ3QgZXhwb3NlIHRoZSBgc2l6ZXNgIGlkbCBhdHRyaWJ1dGVcblx0aWYgKHBmLnN1cFNyY3NldCAmJiAhcGYuc3VwU2l6ZXMpIHtcblxuXHRcdChmdW5jdGlvbigpIHtcblx0XHRcdHZhciB3aWR0aDIgPSBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFnQUJBUEFBQVAvLy93QUFBQ0g1QkFBQUFBQUFMQUFBQUFBQ0FBRUFBQUlDQkFvQU93PT1cIjtcblx0XHRcdHZhciB3aWR0aDEgPSBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBQUFBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09XCI7XG5cdFx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHRcdHZhciB0ZXN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB3aWR0aCA9IGltZy53aWR0aDtcblxuXHRcdFx0XHRpZiAod2lkdGggPT09IDIpIHtcblx0XHRcdFx0XHRwZi5zdXBTaXplcyA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhbHdheXNDaGVja1dEZXNjcmlwdG9yID0gcGYuc3VwU3Jjc2V0ICYmICFwZi5zdXBTaXplcztcblxuXHRcdFx0XHRpc1N1cHBvcnRUZXN0UmVhZHkgPSB0cnVlO1xuXHRcdFx0XHQvLyBmb3JjZSBhc3luY1xuXHRcdFx0XHRzZXRUaW1lb3V0KHBpY3R1cmVmaWxsKTtcblx0XHRcdH07XG5cblx0XHRcdGltZy5vbmxvYWQgPSB0ZXN0O1xuXHRcdFx0aW1nLm9uZXJyb3IgPSB0ZXN0O1xuXHRcdFx0aW1nLnNldEF0dHJpYnV0ZShcInNpemVzXCIsIFwiOXB4XCIpO1xuXG5cdFx0XHRpbWcuc3Jjc2V0ID0gd2lkdGgxICsgXCIgMXcsXCIgKyB3aWR0aDIgKyBcIiA5d1wiO1xuXHRcdFx0aW1nLnNyYyA9IHdpZHRoMTtcblx0XHR9KSgpO1xuXG5cdH0gZWxzZSB7XG5cdFx0aXNTdXBwb3J0VGVzdFJlYWR5ID0gdHJ1ZTtcblx0fVxuXG5cdC8vIHVzaW5nIHBmLnFzYSBpbnN0ZWFkIG9mIGRvbSB0cmF2ZXJzaW5nIGRvZXMgc2NhbGUgbXVjaCBiZXR0ZXIsXG5cdC8vIGVzcGVjaWFsbHkgb24gc2l0ZXMgbWl4aW5nIHJlc3BvbnNpdmUgYW5kIG5vbi1yZXNwb25zaXZlIGltYWdlc1xuXHRwZi5zZWxTaG9ydCA9IFwicGljdHVyZT5pbWcsaW1nW3NyY3NldF1cIjtcblx0cGYuc2VsID0gcGYuc2VsU2hvcnQ7XG5cdHBmLmNmZyA9IGNmZztcblxuXHQvKipcblx0ICogU2hvcnRjdXQgcHJvcGVydHkgZm9yIGBkZXZpY2VQaXhlbFJhdGlvYCAoIGZvciBlYXN5IG92ZXJyaWRpbmcgaW4gdGVzdHMgKVxuXHQgKi9cblx0cGYuRFBSID0gKERQUiAgfHwgMSApO1xuXHRwZi51ID0gdW5pdHM7XG5cblx0Ly8gY29udGFpbmVyIG9mIHN1cHBvcnRlZCBtaW1lIHR5cGVzIHRoYXQgb25lIG1pZ2h0IG5lZWQgdG8gcXVhbGlmeSBiZWZvcmUgdXNpbmdcblx0cGYudHlwZXMgPSAgdHlwZXM7XG5cblx0cGYuc2V0U2l6ZSA9IG5vb3A7XG5cblx0LyoqXG5cdCAqIEdldHMgYSBzdHJpbmcgYW5kIHJldHVybnMgdGhlIGFic29sdXRlIFVSTFxuXHQgKiBAcGFyYW0gc3JjXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IGFic29sdXRlIFVSTFxuXHQgKi9cblxuXHRwZi5tYWtlVXJsID0gbWVtb2l6ZShmdW5jdGlvbihzcmMpIHtcblx0XHRhbmNob3IuaHJlZiA9IHNyYztcblx0XHRyZXR1cm4gYW5jaG9yLmhyZWY7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBHZXRzIGEgRE9NIGVsZW1lbnQgb3IgZG9jdW1lbnQgYW5kIGEgc2VsY3RvciBhbmQgcmV0dXJucyB0aGUgZm91bmQgbWF0Y2hlc1xuXHQgKiBDYW4gYmUgZXh0ZW5kZWQgd2l0aCBqUXVlcnkvU2l6emxlIGZvciBJRTcgc3VwcG9ydFxuXHQgKiBAcGFyYW0gY29udGV4dFxuXHQgKiBAcGFyYW0gc2VsXG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdHxBcnJheX1cblx0ICovXG5cdHBmLnFzYSA9IGZ1bmN0aW9uKGNvbnRleHQsIHNlbCkge1xuXHRcdHJldHVybiAoIFwicXVlcnlTZWxlY3RvclwiIGluIGNvbnRleHQgKSA/IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWwpIDogW107XG5cdH07XG5cblx0LyoqXG5cdCAqIFNob3J0Y3V0IG1ldGhvZCBmb3IgbWF0Y2hNZWRpYSAoIGZvciBlYXN5IG92ZXJyaWRpbmcgaW4gdGVzdHMgKVxuXHQgKiB3ZXRoZXIgbmF0aXZlIG9yIHBmLm1NUSBpcyB1c2VkIHdpbGwgYmUgZGVjaWRlZCBsYXp5IG9uIGZpcnN0IGNhbGxcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRwZi5tYXRjaGVzTWVkaWEgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIHdpbmRvdy5tYXRjaE1lZGlhICYmIChtYXRjaE1lZGlhKCBcIihtaW4td2lkdGg6IDAuMWVtKVwiICkgfHwge30pLm1hdGNoZXMgKSB7XG5cdFx0XHRwZi5tYXRjaGVzTWVkaWEgPSBmdW5jdGlvbiggbWVkaWEgKSB7XG5cdFx0XHRcdHJldHVybiAhbWVkaWEgfHwgKCBtYXRjaE1lZGlhKCBtZWRpYSApLm1hdGNoZXMgKTtcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBmLm1hdGNoZXNNZWRpYSA9IHBmLm1NUTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGYubWF0Y2hlc01lZGlhLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0fTtcblxuXHQvKipcblx0ICogQSBzaW1wbGlmaWVkIG1hdGNoTWVkaWEgaW1wbGVtZW50YXRpb24gZm9yIElFOCBhbmQgSUU5XG5cdCAqIGhhbmRsZXMgb25seSBtaW4td2lkdGgvbWF4LXdpZHRoIHdpdGggcHggb3IgZW0gdmFsdWVzXG5cdCAqIEBwYXJhbSBtZWRpYVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHBmLm1NUSA9IGZ1bmN0aW9uKCBtZWRpYSApIHtcblx0XHRyZXR1cm4gbWVkaWEgPyBldmFsQ1NTKG1lZGlhKSA6IHRydWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGNhbGN1bGF0ZWQgbGVuZ3RoIGluIGNzcyBwaXhlbCBmcm9tIHRoZSBnaXZlbiBzb3VyY2VTaXplVmFsdWVcblx0ICogaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXZhbHVlcy0zLyNsZW5ndGgtdmFsdWVcblx0ICogaW50ZW5kZWQgU3BlYyBtaXNtYXRjaGVzOlxuXHQgKiAqIERvZXMgbm90IGNoZWNrIGZvciBpbnZhbGlkIHVzZSBvZiBDU1MgZnVuY3Rpb25zXG5cdCAqICogRG9lcyBoYW5kbGUgYSBjb21wdXRlZCBsZW5ndGggb2YgMCB0aGUgc2FtZSBhcyBhIG5lZ2F0aXZlIGFuZCB0aGVyZWZvcmUgaW52YWxpZCB2YWx1ZVxuXHQgKiBAcGFyYW0gc291cmNlU2l6ZVZhbHVlXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRwZi5jYWxjTGVuZ3RoID0gZnVuY3Rpb24oIHNvdXJjZVNpemVWYWx1ZSApIHtcblxuXHRcdHZhciB2YWx1ZSA9IGV2YWxDU1Moc291cmNlU2l6ZVZhbHVlLCB0cnVlKSB8fCBmYWxzZTtcblx0XHRpZiAodmFsdWUgPCAwKSB7XG5cdFx0XHR2YWx1ZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fTtcblxuXHQvKipcblx0ICogVGFrZXMgYSB0eXBlIHN0cmluZyBhbmQgY2hlY2tzIGlmIGl0cyBzdXBwb3J0ZWRcblx0ICovXG5cblx0cGYuc3VwcG9ydHNUeXBlID0gZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0cmV0dXJuICggdHlwZSApID8gdHlwZXNbIHR5cGUgXSA6IHRydWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFBhcnNlcyBhIHNvdXJjZVNpemUgaW50byBtZWRpYUNvbmRpdGlvbiAobWVkaWEpIGFuZCBzb3VyY2VTaXplVmFsdWUgKGxlbmd0aClcblx0ICogQHBhcmFtIHNvdXJjZVNpemVTdHJcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRwZi5wYXJzZVNpemUgPSBtZW1vaXplKGZ1bmN0aW9uKCBzb3VyY2VTaXplU3RyICkge1xuXHRcdHZhciBtYXRjaCA9ICggc291cmNlU2l6ZVN0ciB8fCBcIlwiICkubWF0Y2gocmVnU2l6ZSk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG1lZGlhOiBtYXRjaCAmJiBtYXRjaFsxXSxcblx0XHRcdGxlbmd0aDogbWF0Y2ggJiYgbWF0Y2hbMl1cblx0XHR9O1xuXHR9KTtcblxuXHRwZi5wYXJzZVNldCA9IGZ1bmN0aW9uKCBzZXQgKSB7XG5cdFx0aWYgKCAhc2V0LmNhbmRzICkge1xuXHRcdFx0c2V0LmNhbmRzID0gcGFyc2VTcmNzZXQoc2V0LnNyY3NldCwgc2V0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHNldC5jYW5kcztcblx0fTtcblxuXHQvKipcblx0ICogcmV0dXJucyAxZW0gaW4gY3NzIHB4IGZvciBodG1sL2JvZHkgZGVmYXVsdCBzaXplXG5cdCAqIGZ1bmN0aW9uIHRha2VuIGZyb20gcmVzcG9uZGpzXG5cdCAqIEByZXR1cm5zIHsqfG51bWJlcn1cblx0ICovXG5cdHBmLmdldEVtVmFsdWUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgYm9keTtcblx0XHRpZiAoICFlbWlucHggJiYgKGJvZHkgPSBkb2N1bWVudC5ib2R5KSApIHtcblx0XHRcdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICksXG5cdFx0XHRcdG9yaWdpbmFsSFRNTENTUyA9IGRvY0VsZW0uc3R5bGUuY3NzVGV4dCxcblx0XHRcdFx0b3JpZ2luYWxCb2R5Q1NTID0gYm9keS5zdHlsZS5jc3NUZXh0O1xuXG5cdFx0XHRkaXYuc3R5bGUuY3NzVGV4dCA9IGJhc2VTdHlsZTtcblxuXHRcdFx0Ly8gMWVtIGluIGEgbWVkaWEgcXVlcnkgaXMgdGhlIHZhbHVlIG9mIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBvZiB0aGUgYnJvd3NlclxuXHRcdFx0Ly8gcmVzZXQgZG9jRWxlbSBhbmQgYm9keSB0byBlbnN1cmUgdGhlIGNvcnJlY3QgdmFsdWUgaXMgcmV0dXJuZWRcblx0XHRcdGRvY0VsZW0uc3R5bGUuY3NzVGV4dCA9IGZzQ3NzO1xuXHRcdFx0Ym9keS5zdHlsZS5jc3NUZXh0ID0gZnNDc3M7XG5cblx0XHRcdGJvZHkuYXBwZW5kQ2hpbGQoIGRpdiApO1xuXHRcdFx0ZW1pbnB4ID0gZGl2Lm9mZnNldFdpZHRoO1xuXHRcdFx0Ym9keS5yZW1vdmVDaGlsZCggZGl2ICk7XG5cblx0XHRcdC8vYWxzbyB1cGRhdGUgZW1pbnB4IGJlZm9yZSByZXR1cm5pbmdcblx0XHRcdGVtaW5weCA9IHBhcnNlRmxvYXQoIGVtaW5weCwgMTAgKTtcblxuXHRcdFx0Ly8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgdmFsdWVzXG5cdFx0XHRkb2NFbGVtLnN0eWxlLmNzc1RleHQgPSBvcmlnaW5hbEhUTUxDU1M7XG5cdFx0XHRib2R5LnN0eWxlLmNzc1RleHQgPSBvcmlnaW5hbEJvZHlDU1M7XG5cblx0XHR9XG5cdFx0cmV0dXJuIGVtaW5weCB8fCAxNjtcblx0fTtcblxuXHQvKipcblx0ICogVGFrZXMgYSBzdHJpbmcgb2Ygc2l6ZXMgYW5kIHJldHVybnMgdGhlIHdpZHRoIGluIHBpeGVscyBhcyBhIG51bWJlclxuXHQgKi9cblx0cGYuY2FsY0xpc3RMZW5ndGggPSBmdW5jdGlvbiggc291cmNlU2l6ZUxpc3RTdHIgKSB7XG5cdFx0Ly8gU3BsaXQgdXAgc291cmNlIHNpemUgbGlzdCwgaWUgKCBtYXgtd2lkdGg6IDMwZW0gKSAxMDAlLCAoIG1heC13aWR0aDogNTBlbSApIDUwJSwgMzMlXG5cdFx0Ly9cblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIChtaW4td2lkdGg6MzBlbSkgY2FsYygzMCUgLSAxNXB4KVxuXHRcdGlmICggIShzb3VyY2VTaXplTGlzdFN0ciBpbiBzaXplTGVuZ3RoQ2FjaGUpIHx8IGNmZy51VCApIHtcblx0XHRcdHZhciB3aW5uaW5nTGVuZ3RoID0gcGYuY2FsY0xlbmd0aCggcGFyc2VTaXplcyggc291cmNlU2l6ZUxpc3RTdHIgKSApO1xuXG5cdFx0XHRzaXplTGVuZ3RoQ2FjaGVbIHNvdXJjZVNpemVMaXN0U3RyIF0gPSAhd2lubmluZ0xlbmd0aCA/IHVuaXRzLndpZHRoIDogd2lubmluZ0xlbmd0aDtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2l6ZUxlbmd0aENhY2hlWyBzb3VyY2VTaXplTGlzdFN0ciBdO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUYWtlcyBhIGNhbmRpZGF0ZSBvYmplY3Qgd2l0aCBhIHNyY3NldCBwcm9wZXJ0eSBpbiB0aGUgZm9ybSBvZiB1cmwvXG5cdCAqIGV4LiBcImltYWdlcy9waWMtbWVkaXVtLnBuZyAxeCwgaW1hZ2VzL3BpYy1tZWRpdW0tMngucG5nIDJ4XCIgb3Jcblx0ICogICAgIFwiaW1hZ2VzL3BpYy1tZWRpdW0ucG5nIDQwMHcsIGltYWdlcy9waWMtbWVkaXVtLTJ4LnBuZyA4MDB3XCIgb3Jcblx0ICogICAgIFwiaW1hZ2VzL3BpYy1zbWFsbC5wbmdcIlxuXHQgKiBHZXQgYW4gYXJyYXkgb2YgaW1hZ2UgY2FuZGlkYXRlcyBpbiB0aGUgZm9ybSBvZlxuXHQgKiAgICAgIHt1cmw6IFwiL2Zvby9iYXIucG5nXCIsIHJlc29sdXRpb246IDF9XG5cdCAqIHdoZXJlIHJlc29sdXRpb24gaXMgaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXZhbHVlcy0zLyNyZXNvbHV0aW9uLXZhbHVlXG5cdCAqIElmIHNpemVzIGlzIHNwZWNpZmllZCwgcmVzIGlzIGNhbGN1bGF0ZWRcblx0ICovXG5cdHBmLnNldFJlcyA9IGZ1bmN0aW9uKCBzZXQgKSB7XG5cdFx0dmFyIGNhbmRpZGF0ZXM7XG5cdFx0aWYgKCBzZXQgKSB7XG5cblx0XHRcdGNhbmRpZGF0ZXMgPSBwZi5wYXJzZVNldCggc2V0ICk7XG5cblx0XHRcdGZvciAoIHZhciBpID0gMCwgbGVuID0gY2FuZGlkYXRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0c2V0UmVzb2x1dGlvbiggY2FuZGlkYXRlc1sgaSBdLCBzZXQuc2l6ZXMgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhbmRpZGF0ZXM7XG5cdH07XG5cblx0cGYuc2V0UmVzLnJlcyA9IHNldFJlc29sdXRpb247XG5cblx0cGYuYXBwbHlTZXRDYW5kaWRhdGUgPSBmdW5jdGlvbiggY2FuZGlkYXRlcywgaW1nICkge1xuXHRcdGlmICggIWNhbmRpZGF0ZXMubGVuZ3RoICkge3JldHVybjt9XG5cdFx0dmFyIGNhbmRpZGF0ZSxcblx0XHRcdGksXG5cdFx0XHRqLFxuXHRcdFx0bGVuZ3RoLFxuXHRcdFx0YmVzdENhbmRpZGF0ZSxcblx0XHRcdGN1clNyYyxcblx0XHRcdGN1ckNhbixcblx0XHRcdGNhbmRpZGF0ZVNyYyxcblx0XHRcdGFib3J0Q3VyU3JjO1xuXG5cdFx0dmFyIGltYWdlRGF0YSA9IGltZ1sgcGYubnMgXTtcblx0XHR2YXIgZHByID0gcGYuRFBSO1xuXG5cdFx0Y3VyU3JjID0gaW1hZ2VEYXRhLmN1clNyYyB8fCBpbWdbY3VyU3JjUHJvcF07XG5cblx0XHRjdXJDYW4gPSBpbWFnZURhdGEuY3VyQ2FuIHx8IHNldFNyY1RvQ3VyKGltZywgY3VyU3JjLCBjYW5kaWRhdGVzWzBdLnNldCk7XG5cblx0XHQvLyBpZiB3ZSBoYXZlIGEgY3VycmVudCBzb3VyY2UsIHdlIG1pZ2h0IGVpdGhlciBiZWNvbWUgbGF6eSBvciBnaXZlIHRoaXMgc291cmNlIHNvbWUgYWR2YW50YWdlXG5cdFx0aWYgKCBjdXJDYW4gJiYgY3VyQ2FuLnNldCA9PT0gY2FuZGlkYXRlc1sgMCBdLnNldCApIHtcblxuXHRcdFx0Ly8gaWYgYnJvd3NlciBjYW4gYWJvcnQgaW1hZ2UgcmVxdWVzdCBhbmQgdGhlIGltYWdlIGhhcyBhIGhpZ2hlciBwaXhlbCBkZW5zaXR5IHRoYW4gbmVlZGVkXG5cdFx0XHQvLyBhbmQgdGhpcyBpbWFnZSBpc24ndCBkb3dubG9hZGVkIHlldCwgd2Ugc2tpcCBuZXh0IHBhcnQgYW5kIHRyeSB0byBzYXZlIGJhbmR3aWR0aFxuXHRcdFx0YWJvcnRDdXJTcmMgPSAoc3VwcG9ydEFib3J0ICYmICFpbWcuY29tcGxldGUgJiYgY3VyQ2FuLnJlcyAtIDAuMSA+IGRwcik7XG5cblx0XHRcdGlmICggIWFib3J0Q3VyU3JjICkge1xuXHRcdFx0XHRjdXJDYW4uY2FjaGVkID0gdHJ1ZTtcblxuXHRcdFx0XHQvLyBpZiBjdXJyZW50IGNhbmRpZGF0ZSBpcyBcImJlc3RcIiwgXCJiZXR0ZXJcIiBvciBcIm9rYXlcIixcblx0XHRcdFx0Ly8gc2V0IGl0IHRvIGJlc3RDYW5kaWRhdGVcblx0XHRcdFx0aWYgKCBjdXJDYW4ucmVzID49IGRwciApIHtcblx0XHRcdFx0XHRiZXN0Q2FuZGlkYXRlID0gY3VyQ2FuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCAhYmVzdENhbmRpZGF0ZSApIHtcblxuXHRcdFx0Y2FuZGlkYXRlcy5zb3J0KCBhc2NlbmRpbmdTb3J0ICk7XG5cblx0XHRcdGxlbmd0aCA9IGNhbmRpZGF0ZXMubGVuZ3RoO1xuXHRcdFx0YmVzdENhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbIGxlbmd0aCAtIDEgXTtcblxuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0Y2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgaSBdO1xuXHRcdFx0XHRpZiAoIGNhbmRpZGF0ZS5yZXMgPj0gZHByICkge1xuXHRcdFx0XHRcdGogPSBpIC0gMTtcblxuXHRcdFx0XHRcdC8vIHdlIGhhdmUgZm91bmQgdGhlIHBlcmZlY3QgY2FuZGlkYXRlLFxuXHRcdFx0XHRcdC8vIGJ1dCBsZXQncyBpbXByb3ZlIHRoaXMgYSBsaXR0bGUgYml0IHdpdGggc29tZSBhc3N1bXB0aW9ucyA7LSlcblx0XHRcdFx0XHRpZiAoY2FuZGlkYXRlc1sgaiBdICYmXG5cdFx0XHRcdFx0XHQoYWJvcnRDdXJTcmMgfHwgY3VyU3JjICE9PSBwZi5tYWtlVXJsKCBjYW5kaWRhdGUudXJsICkpICYmXG5cdFx0XHRcdFx0XHRjaG9vc2VMb3dSZXMoY2FuZGlkYXRlc1sgaiBdLnJlcywgY2FuZGlkYXRlLnJlcywgZHByLCBjYW5kaWRhdGVzWyBqIF0uY2FjaGVkKSkge1xuXG5cdFx0XHRcdFx0XHRiZXN0Q2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgaiBdO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjYW5kaWRhdGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBiZXN0Q2FuZGlkYXRlICkge1xuXG5cdFx0XHRjYW5kaWRhdGVTcmMgPSBwZi5tYWtlVXJsKCBiZXN0Q2FuZGlkYXRlLnVybCApO1xuXG5cdFx0XHRpbWFnZURhdGEuY3VyU3JjID0gY2FuZGlkYXRlU3JjO1xuXHRcdFx0aW1hZ2VEYXRhLmN1ckNhbiA9IGJlc3RDYW5kaWRhdGU7XG5cblx0XHRcdGlmICggY2FuZGlkYXRlU3JjICE9PSBjdXJTcmMgKSB7XG5cdFx0XHRcdHBmLnNldFNyYyggaW1nLCBiZXN0Q2FuZGlkYXRlICk7XG5cdFx0XHR9XG5cdFx0XHRwZi5zZXRTaXplKCBpbWcgKTtcblx0XHR9XG5cdH07XG5cblx0cGYuc2V0U3JjID0gZnVuY3Rpb24oIGltZywgYmVzdENhbmRpZGF0ZSApIHtcblx0XHR2YXIgb3JpZ1dpZHRoO1xuXHRcdGltZy5zcmMgPSBiZXN0Q2FuZGlkYXRlLnVybDtcblxuXHRcdC8vIGFsdGhvdWdoIHRoaXMgaXMgYSBzcGVjaWZpYyBTYWZhcmkgaXNzdWUsIHdlIGRvbid0IHdhbnQgdG8gdGFrZSB0b28gbXVjaCBkaWZmZXJlbnQgY29kZSBwYXRoc1xuXHRcdGlmICggYmVzdENhbmRpZGF0ZS5zZXQudHlwZSA9PT0gXCJpbWFnZS9zdmcreG1sXCIgKSB7XG5cdFx0XHRvcmlnV2lkdGggPSBpbWcuc3R5bGUud2lkdGg7XG5cdFx0XHRpbWcuc3R5bGUud2lkdGggPSAoaW1nLm9mZnNldFdpZHRoICsgMSkgKyBcInB4XCI7XG5cblx0XHRcdC8vIG5leHQgbGluZSBvbmx5IHNob3VsZCB0cmlnZ2VyIGEgcmVwYWludFxuXHRcdFx0Ly8gaWYuLi4gaXMgb25seSBkb25lIHRvIHRyaWNrIGRlYWQgY29kZSByZW1vdmFsXG5cdFx0XHRpZiAoIGltZy5vZmZzZXRXaWR0aCArIDEgKSB7XG5cdFx0XHRcdGltZy5zdHlsZS53aWR0aCA9IG9yaWdXaWR0aDtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0cGYuZ2V0U2V0ID0gZnVuY3Rpb24oIGltZyApIHtcblx0XHR2YXIgaSwgc2V0LCBzdXBwb3J0c1R5cGU7XG5cdFx0dmFyIG1hdGNoID0gZmFsc2U7XG5cdFx0dmFyIHNldHMgPSBpbWcgWyBwZi5ucyBdLnNldHM7XG5cblx0XHRmb3IgKCBpID0gMDsgaSA8IHNldHMubGVuZ3RoICYmICFtYXRjaDsgaSsrICkge1xuXHRcdFx0c2V0ID0gc2V0c1tpXTtcblxuXHRcdFx0aWYgKCAhc2V0LnNyY3NldCB8fCAhcGYubWF0Y2hlc01lZGlhKCBzZXQubWVkaWEgKSB8fCAhKHN1cHBvcnRzVHlwZSA9IHBmLnN1cHBvcnRzVHlwZSggc2V0LnR5cGUgKSkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN1cHBvcnRzVHlwZSA9PT0gXCJwZW5kaW5nXCIgKSB7XG5cdFx0XHRcdHNldCA9IHN1cHBvcnRzVHlwZTtcblx0XHRcdH1cblxuXHRcdFx0bWF0Y2ggPSBzZXQ7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gbWF0Y2g7XG5cdH07XG5cblx0cGYucGFyc2VTZXRzID0gZnVuY3Rpb24oIGVsZW1lbnQsIHBhcmVudCwgb3B0aW9ucyApIHtcblx0XHR2YXIgc3Jjc2V0QXR0cmlidXRlLCBpbWFnZVNldCwgaXNXRGVzY3JpcG9yLCBzcmNzZXRQYXJzZWQ7XG5cblx0XHR2YXIgaGFzUGljdHVyZSA9IHBhcmVudCAmJiBwYXJlbnQubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJQSUNUVVJFXCI7XG5cdFx0dmFyIGltYWdlRGF0YSA9IGVsZW1lbnRbIHBmLm5zIF07XG5cblx0XHRpZiAoIGltYWdlRGF0YS5zcmMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnNyYyApIHtcblx0XHRcdGltYWdlRGF0YS5zcmMgPSBnZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIFwic3JjXCIgKTtcblx0XHRcdGlmICggaW1hZ2VEYXRhLnNyYyApIHtcblx0XHRcdFx0c2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBzcmNBdHRyLCBpbWFnZURhdGEuc3JjICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZW1vdmVJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIHNyY0F0dHIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGltYWdlRGF0YS5zcmNzZXQgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnNyY3NldCB8fCAhcGYuc3VwU3Jjc2V0IHx8IGVsZW1lbnQuc3Jjc2V0ICkge1xuXHRcdFx0c3Jjc2V0QXR0cmlidXRlID0gZ2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBcInNyY3NldFwiICk7XG5cdFx0XHRpbWFnZURhdGEuc3Jjc2V0ID0gc3Jjc2V0QXR0cmlidXRlO1xuXHRcdFx0c3Jjc2V0UGFyc2VkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpbWFnZURhdGEuc2V0cyA9IFtdO1xuXG5cdFx0aWYgKCBoYXNQaWN0dXJlICkge1xuXHRcdFx0aW1hZ2VEYXRhLnBpYyA9IHRydWU7XG5cdFx0XHRnZXRBbGxTb3VyY2VFbGVtZW50cyggcGFyZW50LCBpbWFnZURhdGEuc2V0cyApO1xuXHRcdH1cblxuXHRcdGlmICggaW1hZ2VEYXRhLnNyY3NldCApIHtcblx0XHRcdGltYWdlU2V0ID0ge1xuXHRcdFx0XHRzcmNzZXQ6IGltYWdlRGF0YS5zcmNzZXQsXG5cdFx0XHRcdHNpemVzOiBnZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIFwic2l6ZXNcIiApXG5cdFx0XHR9O1xuXG5cdFx0XHRpbWFnZURhdGEuc2V0cy5wdXNoKCBpbWFnZVNldCApO1xuXG5cdFx0XHRpc1dEZXNjcmlwb3IgPSAoYWx3YXlzQ2hlY2tXRGVzY3JpcHRvciB8fCBpbWFnZURhdGEuc3JjKSAmJiByZWdXRGVzYy50ZXN0KGltYWdlRGF0YS5zcmNzZXQgfHwgXCJcIik7XG5cblx0XHRcdC8vIGFkZCBub3JtYWwgc3JjIGFzIGNhbmRpZGF0ZSwgaWYgc291cmNlIGhhcyBubyB3IGRlc2NyaXB0b3Jcblx0XHRcdGlmICggIWlzV0Rlc2NyaXBvciAmJiBpbWFnZURhdGEuc3JjICYmICFnZXRDYW5kaWRhdGVGb3JTcmMoaW1hZ2VEYXRhLnNyYywgaW1hZ2VTZXQpICYmICFpbWFnZVNldC5oYXMxeCApIHtcblx0XHRcdFx0aW1hZ2VTZXQuc3Jjc2V0ICs9IFwiLCBcIiArIGltYWdlRGF0YS5zcmM7XG5cdFx0XHRcdGltYWdlU2V0LmNhbmRzLnB1c2goe1xuXHRcdFx0XHRcdHVybDogaW1hZ2VEYXRhLnNyYyxcblx0XHRcdFx0XHRkOiAxLFxuXHRcdFx0XHRcdHNldDogaW1hZ2VTZXRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHR9IGVsc2UgaWYgKCBpbWFnZURhdGEuc3JjICkge1xuXHRcdFx0aW1hZ2VEYXRhLnNldHMucHVzaCgge1xuXHRcdFx0XHRzcmNzZXQ6IGltYWdlRGF0YS5zcmMsXG5cdFx0XHRcdHNpemVzOiBudWxsXG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aW1hZ2VEYXRhLmN1ckNhbiA9IG51bGw7XG5cdFx0aW1hZ2VEYXRhLmN1clNyYyA9IHVuZGVmaW5lZDtcblxuXHRcdC8vIGlmIGltZyBoYXMgcGljdHVyZSBvciB0aGUgc3Jjc2V0IHdhcyByZW1vdmVkIG9yIGhhcyBhIHNyY3NldCBhbmQgZG9lcyBub3Qgc3VwcG9ydCBzcmNzZXQgYXQgYWxsXG5cdFx0Ly8gb3IgaGFzIGEgdyBkZXNjcmlwdG9yIChhbmQgZG9lcyBub3Qgc3VwcG9ydCBzaXplcykgc2V0IHN1cHBvcnQgdG8gZmFsc2UgdG8gZXZhbHVhdGVcblx0XHRpbWFnZURhdGEuc3VwcG9ydGVkID0gISggaGFzUGljdHVyZSB8fCAoIGltYWdlU2V0ICYmICFwZi5zdXBTcmNzZXQgKSB8fCAoaXNXRGVzY3JpcG9yICYmICFwZi5zdXBTaXplcykgKTtcblxuXHRcdGlmICggc3Jjc2V0UGFyc2VkICYmIHBmLnN1cFNyY3NldCAmJiAhaW1hZ2VEYXRhLnN1cHBvcnRlZCApIHtcblx0XHRcdGlmICggc3Jjc2V0QXR0cmlidXRlICkge1xuXHRcdFx0XHRzZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIHNyY3NldEF0dHIsIHNyY3NldEF0dHJpYnV0ZSApO1xuXHRcdFx0XHRlbGVtZW50LnNyY3NldCA9IFwiXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZW1vdmVJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIHNyY3NldEF0dHIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaW1hZ2VEYXRhLnN1cHBvcnRlZCAmJiAhaW1hZ2VEYXRhLnNyY3NldCAmJiAoKCFpbWFnZURhdGEuc3JjICYmIGVsZW1lbnQuc3JjKSB8fCAgZWxlbWVudC5zcmMgIT09IHBmLm1ha2VVcmwoaW1hZ2VEYXRhLnNyYykpKSB7XG5cdFx0XHRpZiAoaW1hZ2VEYXRhLnNyYyA9PT0gbnVsbCkge1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuc3JjID0gaW1hZ2VEYXRhLnNyYztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpbWFnZURhdGEucGFyc2VkID0gdHJ1ZTtcblx0fTtcblxuXHRwZi5maWxsSW1nID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xuXHRcdHZhciBpbWFnZURhdGE7XG5cdFx0dmFyIGV4dHJlbWUgPSBvcHRpb25zLnJlc2VsZWN0IHx8IG9wdGlvbnMucmVldmFsdWF0ZTtcblxuXHRcdC8vIGV4cGFuZG8gZm9yIGNhY2hpbmcgZGF0YSBvbiB0aGUgaW1nXG5cdFx0aWYgKCAhZWxlbWVudFsgcGYubnMgXSApIHtcblx0XHRcdGVsZW1lbnRbIHBmLm5zIF0gPSB7fTtcblx0XHR9XG5cblx0XHRpbWFnZURhdGEgPSBlbGVtZW50WyBwZi5ucyBdO1xuXG5cdFx0Ly8gaWYgdGhlIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBldmFsdWF0ZWQsIHNraXAgaXRcblx0XHQvLyB1bmxlc3MgYG9wdGlvbnMucmVldmFsdWF0ZWAgaXMgc2V0IHRvIHRydWUgKCB0aGlzLCBmb3IgZXhhbXBsZSxcblx0XHQvLyBpcyBzZXQgdG8gdHJ1ZSB3aGVuIHJ1bm5pbmcgYHBpY3R1cmVmaWxsYCBvbiBgcmVzaXplYCApLlxuXHRcdGlmICggIWV4dHJlbWUgJiYgaW1hZ2VEYXRhLmV2YWxlZCA9PT0gZXZhbElkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggIWltYWdlRGF0YS5wYXJzZWQgfHwgb3B0aW9ucy5yZWV2YWx1YXRlICkge1xuXHRcdFx0cGYucGFyc2VTZXRzKCBlbGVtZW50LCBlbGVtZW50LnBhcmVudE5vZGUsIG9wdGlvbnMgKTtcblx0XHR9XG5cblx0XHRpZiAoICFpbWFnZURhdGEuc3VwcG9ydGVkICkge1xuXHRcdFx0YXBwbHlCZXN0Q2FuZGlkYXRlKCBlbGVtZW50ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGltYWdlRGF0YS5ldmFsZWQgPSBldmFsSWQ7XG5cdFx0fVxuXHR9O1xuXG5cdHBmLnNldHVwUnVuID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCAhYWxyZWFkeVJ1biB8fCBpc1Z3RGlydHkgfHwgKERQUiAhPT0gd2luZG93LmRldmljZVBpeGVsUmF0aW8pICkge1xuXHRcdFx0dXBkYXRlTWV0cmljcygpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBJZiBwaWN0dXJlIGlzIHN1cHBvcnRlZCwgd2VsbCwgdGhhdCdzIGF3ZXNvbWUuXG5cdGlmICggcGYuc3VwUGljdHVyZSApIHtcblx0XHRwaWN0dXJlZmlsbCA9IG5vb3A7XG5cdFx0cGYuZmlsbEltZyA9IG5vb3A7XG5cdH0gZWxzZSB7XG5cblx0XHQgLy8gU2V0IHVwIHBpY3R1cmUgcG9seWZpbGwgYnkgcG9sbGluZyB0aGUgZG9jdW1lbnRcblx0XHQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXNEb21SZWFkeTtcblx0XHRcdHZhciByZWdSZWFkeSA9IHdpbmRvdy5hdHRhY2hFdmVudCA/IC9kJHxeYy8gOiAvZCR8XmN8XmkvO1xuXG5cdFx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZSB8fCBcIlwiO1xuXG5cdFx0XHRcdHRpbWVySWQgPSBzZXRUaW1lb3V0KHJ1biwgcmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIgPyAyMDAgOiAgOTk5KTtcblx0XHRcdFx0aWYgKCBkb2N1bWVudC5ib2R5ICkge1xuXHRcdFx0XHRcdHBmLmZpbGxJbWdzKCk7XG5cdFx0XHRcdFx0aXNEb21SZWFkeSA9IGlzRG9tUmVhZHkgfHwgcmVnUmVhZHkudGVzdChyZWFkeVN0YXRlKTtcblx0XHRcdFx0XHRpZiAoIGlzRG9tUmVhZHkgKSB7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVySWQgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dmFyIHRpbWVySWQgPSBzZXRUaW1lb3V0KHJ1biwgZG9jdW1lbnQuYm9keSA/IDkgOiA5OSk7XG5cblx0XHRcdC8vIEFsc28gYXR0YWNoIHBpY3R1cmVmaWxsIG9uIHJlc2l6ZSBhbmQgcmVhZHlzdGF0ZWNoYW5nZVxuXHRcdFx0Ly8gaHR0cDovL21vZGVybmphdmFzY3JpcHQuYmxvZ3Nwb3QuY29tLzIwMTMvMDgvYnVpbGRpbmctYmV0dGVyLWRlYm91bmNlLmh0bWxcblx0XHRcdHZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQpIHtcblx0XHRcdFx0dmFyIHRpbWVvdXQsIHRpbWVzdGFtcDtcblx0XHRcdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIGxhc3QgPSAobmV3IERhdGUoKSkgLSB0aW1lc3RhbXA7XG5cblx0XHRcdFx0XHRpZiAobGFzdCA8IHdhaXQpIHtcblx0XHRcdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRcdFx0ZnVuYygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dGltZXN0YW1wID0gbmV3IERhdGUoKTtcblxuXHRcdFx0XHRcdGlmICghdGltZW91dCkge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0XHR2YXIgbGFzdENsaWVudFdpZHRoID0gZG9jRWxlbS5jbGllbnRIZWlnaHQ7XG5cdFx0XHR2YXIgb25SZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aXNWd0RpcnR5ID0gTWF0aC5tYXgod2luZG93LmlubmVyV2lkdGggfHwgMCwgZG9jRWxlbS5jbGllbnRXaWR0aCkgIT09IHVuaXRzLndpZHRoIHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0ICE9PSBsYXN0Q2xpZW50V2lkdGg7XG5cdFx0XHRcdGxhc3RDbGllbnRXaWR0aCA9IGRvY0VsZW0uY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRpZiAoIGlzVndEaXJ0eSApIHtcblx0XHRcdFx0XHRwZi5maWxsSW1ncygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRvbiggd2luZG93LCBcInJlc2l6ZVwiLCBkZWJvdW5jZShvblJlc2l6ZSwgOTkgKSApO1xuXHRcdFx0b24oIGRvY3VtZW50LCBcInJlYWR5c3RhdGVjaGFuZ2VcIiwgcnVuICk7XG5cdFx0fSkoKTtcblx0fVxuXG5cdHBmLnBpY3R1cmVmaWxsID0gcGljdHVyZWZpbGw7XG5cdC8vdXNlIHRoaXMgaW50ZXJuYWxseSBmb3IgZWFzeSBtb25rZXkgcGF0Y2hpbmcvcGVyZm9ybWFuY2UgdGVzdGluZ1xuXHRwZi5maWxsSW1ncyA9IHBpY3R1cmVmaWxsO1xuXHRwZi50ZWFyZG93blJ1biA9IG5vb3A7XG5cblx0LyogZXhwb3NlIG1ldGhvZHMgZm9yIHRlc3RpbmcgKi9cblx0cGljdHVyZWZpbGwuXyA9IHBmO1xuXG5cdHdpbmRvdy5waWN0dXJlZmlsbENGRyA9IHtcblx0XHRwZjogcGYsXG5cdFx0cHVzaDogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0dmFyIG5hbWUgPSBhcmdzLnNoaWZ0KCk7XG5cdFx0XHRpZiAodHlwZW9mIHBmW25hbWVdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0cGZbbmFtZV0uYXBwbHkocGYsIGFyZ3MpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2ZnW25hbWVdID0gYXJnc1swXTtcblx0XHRcdFx0aWYgKGFscmVhZHlSdW4pIHtcblx0XHRcdFx0XHRwZi5maWxsSW1ncyggeyByZXNlbGVjdDogdHJ1ZSB9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0d2hpbGUgKHNldE9wdGlvbnMgJiYgc2V0T3B0aW9ucy5sZW5ndGgpIHtcblx0XHR3aW5kb3cucGljdHVyZWZpbGxDRkcucHVzaChzZXRPcHRpb25zLnNoaWZ0KCkpO1xuXHR9XG5cblx0LyogZXhwb3NlIHBpY3R1cmVmaWxsICovXG5cdHdpbmRvdy5waWN0dXJlZmlsbCA9IHBpY3R1cmVmaWxsO1xuXG5cdC8qIGV4cG9zZSBwaWN0dXJlZmlsbCAqL1xuXHRpZiAoIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiICkge1xuXHRcdC8vIENvbW1vbkpTLCBqdXN0IGV4cG9ydFxuXHRcdG1vZHVsZS5leHBvcnRzID0gcGljdHVyZWZpbGw7XG5cdH0gZWxzZSBpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXHRcdC8vIEFNRCBzdXBwb3J0XG5cdFx0ZGVmaW5lKCBcInBpY3R1cmVmaWxsXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcGljdHVyZWZpbGw7IH0gKTtcblx0fVxuXG5cdC8vIElFOCBldmFscyB0aGlzIHN5bmMsIHNvIGl0IG11c3QgYmUgdGhlIGxhc3QgdGhpbmcgd2UgZG9cblx0aWYgKCAhcGYuc3VwUGljdHVyZSApIHtcblx0XHR0eXBlc1sgXCJpbWFnZS93ZWJwXCIgXSA9IGRldGVjdFR5cGVTdXBwb3J0KFwiaW1hZ2Uvd2VicFwiLCBcImRhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1Jrb0FBQUJYUlVKUVZsQTRXQW9BQUFBUUFBQUFBQUFBQUFBQVFVeFFTQXdBQUFBQkJ4QVIvUTlFUlA4REFBQldVRGdnR0FBQUFEQUJBSjBCS2dFQUFRQURBRFFscEFBRGNBRCsrLzFRQUE9PVwiICk7XG5cdH1cblxufSApKCB3aW5kb3csIGRvY3VtZW50ICk7XG4iLCIvKipcbiAqIHZhbjExeS1hY2Nlc3NpYmxlLWFjY29yZGlvbi1hcmlhIC0gRVMyMDE1IGFjY2Vzc2libGUgYWNjb3JkaW9uIHN5c3RlbSwgdXNpbmcgQVJJQSAoY29tcGF0aWJsZSBJRTkrIHdoZW4gdHJhbnNwaWxlZClcbiAqIEB2ZXJzaW9uIHYzLjAuMVxuICogQGxpbmsgaHR0cHM6Ly92YW4xMXkubmV0L2FjY2Vzc2libGUtYWNjb3JkaW9uL1xuICogQGxpY2Vuc2UgTUlUIDogaHR0cHM6Ly9naXRodWIuY29tL25pY28zMzMzZnIvdmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSx0LHIpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfXZhciBfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1hcmd1bWVudHNbdF07Zm9yKHZhciBuIGluIHIpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsbikmJihlW25dPXJbbl0pfXJldHVybiBlfSxsb2FkQ29uZmlnPWZ1bmN0aW9uKCl7dmFyIGU9e30sdD1mdW5jdGlvbih0LHIpe2VbdF09cn0scj1mdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0sbj1mdW5jdGlvbih0KXtyZXR1cm4gZVt0XX07cmV0dXJue3NldDp0LGdldDpyLHJlbW92ZTpufX0sREFUQV9IQVNIX0lEPVwiZGF0YS1oYXNoYWNjb3JkaW9uLWlkXCIscGx1Z2luQ29uZmlnPWxvYWRDb25maWcoKSxmaW5kQnlJZD1mdW5jdGlvbihlLHQpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2UrXCJbXCIrREFUQV9IQVNIX0lEKyc9XCInK3QrJ1wiXScpfSxhZGRDbGFzcz1mdW5jdGlvbihlLHQpe2UuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LmFkZCh0KTplLmNsYXNzTmFtZSs9XCIgXCIrdH0scmVtb3ZlQ2xhc3M9ZnVuY3Rpb24oZSx0KXtlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5yZW1vdmUodCk6ZS5jbGFzc05hbWU9ZS5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXGIpXCIrdC5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoXFxcXGJ8JClcIixcImdpXCIpLFwiIFwiKX0saGFzQ2xhc3M9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QuY29udGFpbnModCk6bmV3IFJlZ0V4cChcIihefCApXCIrdCtcIiggfCQpXCIsXCJnaVwiKS50ZXN0KGUuY2xhc3NOYW1lKX0sc2V0QXR0cmlidXRlcz1mdW5jdGlvbihlLHQpe09iamVjdC5rZXlzKHQpLmZvckVhY2goZnVuY3Rpb24ocil7ZS5zZXRBdHRyaWJ1dGUocix0W3JdKX0pfSxzZWFyY2hQYXJlbnRIYXNoSWQ9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9ITEsbj1lOzE9PT1uLm5vZGVUeXBlJiZuJiZyPT09ITE7KW4uaGFzQXR0cmlidXRlKHQpPT09ITA/cj0hMDpuPW4ucGFyZW50Tm9kZTtyZXR1cm4gcj09PSEwP24uZ2V0QXR0cmlidXRlKHQpOlwiXCJ9LHNlYXJjaFBhcmVudD1mdW5jdGlvbihlLHQscil7Zm9yKHZhciBuPSExLEE9ZTtBJiZuPT09ITE7KWhhc0NsYXNzKEEsdCk9PT0hMCYmQS5nZXRBdHRyaWJ1dGUoREFUQV9IQVNIX0lEKT09PXI/bj0hMDpBPUEucGFyZW50Tm9kZTtyZXR1cm4gbj09PSEwP0EuZ2V0QXR0cmlidXRlKFwiaWRcIik6XCJcIn0sdW5TZWxlY3RIZWFkZXJzPWZ1bmN0aW9uKGUsdCl7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3NldEF0dHJpYnV0ZXMoZSxfZGVmaW5lUHJvcGVydHkoe30sdCxcImZhbHNlXCIpKX0pfSxzZWxlY3RIZWFkZXI9ZnVuY3Rpb24oZSx0KXtlLnNldEF0dHJpYnV0ZSh0LCEwKX0sc2VsZWN0SGVhZGVySW5MaXN0PWZ1bmN0aW9uKGUsdCxyKXt2YXIgbj12b2lkIDA7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShyKSYmKG49dCl9KSxcIm5leHRcIj09PXQmJihzZWxlY3RIZWFkZXIoZVtuKzFdKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZVtuKzFdLmZvY3VzKCl9LDApKSxcInByZXZcIj09PXQmJihzZWxlY3RIZWFkZXIoZVtuLTFdKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZVtuLTFdLmZvY3VzKCl9LDApKX0scGx1Z2luPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP3t9OmFyZ3VtZW50c1swXSx0PV9leHRlbmRzKHtBQ0NPUkRJT05fSlM6XCJqcy1hY2NvcmRpb25cIixBQ0NPUkRJT05fSlNfSEVBREVSOlwianMtYWNjb3JkaW9uX19oZWFkZXJcIixBQ0NPUkRJT05fSlNfUEFORUw6XCJqcy1hY2NvcmRpb25fX3BhbmVsXCIsQUNDT1JESU9OX0RBVEFfUFJFRklYX0NMQVNTOlwiZGF0YS1hY2NvcmRpb24tcHJlZml4LWNsYXNzZXNcIixBQ0NPUkRJT05fREFUQV9PUEVORUQ6XCJkYXRhLWFjY29yZGlvbi1vcGVuZWRcIixBQ0NPUkRJT05fREFUQV9NVUxUSVNFTEVDVEFCTEU6XCJkYXRhLWFjY29yZGlvbi1tdWx0aXNlbGVjdGFibGVcIixBQ0NPUkRJT05fREFUQV9DT09MX1NFTEVDVE9SUzpcImRhdGEtYWNjb3JkaW9uLWNvb2wtc2VsZWN0b3JzXCIsQUNDT1JESU9OX1BSRUZJWF9JRFM6XCJhY2NvcmRpb25cIixBQ0NPUkRJT05fQlVUVE9OX0lEOlwiX3RhYlwiLEFDQ09SRElPTl9QQU5FTF9JRDpcIl9wYW5lbFwiLEFDQ09SRElPTl9TVFlMRTpcImFjY29yZGlvblwiLEFDQ09SRElPTl9USVRMRV9TVFlMRTpcImFjY29yZGlvbl9fdGl0bGVcIixBQ0NPUkRJT05fSEVBREVSX1NUWUxFOlwiYWNjb3JkaW9uX19oZWFkZXJcIixBQ0NPUkRJT05fUEFORUxfU1RZTEU6XCJhY2NvcmRpb25fX3BhbmVsXCIsQUNDT1JESU9OX1JPTEVfVEFCTElTVDpcInRhYmxpc3RcIixBQ0NPUkRJT05fUk9MRV9UQUI6XCJ0YWJcIixBQ0NPUkRJT05fUk9MRV9UQUJQQU5FTDpcInRhYnBhbmVsXCIsQVRUUl9ST0xFOlwicm9sZVwiLEFUVFJfTVVMVElTRUxFQ1RBQkxFOlwiYXJpYS1tdWx0aXNlbGVjdGFibGVcIixBVFRSX0VYUEFOREVEOlwiYXJpYS1leHBhbmRlZFwiLEFUVFJfTEFCRUxMRURCWTpcImFyaWEtbGFiZWxsZWRieVwiLEFUVFJfSElEREVOOlwiYXJpYS1oaWRkZW5cIixBVFRSX0NPTlRST0xTOlwiYXJpYS1jb250cm9sc1wiLEFUVFJfU0VMRUNURUQ6XCJhcmlhLXNlbGVjdGVkXCJ9LGUpLHI9TWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMiwxMik7cGx1Z2luQ29uZmlnLnNldChyLHQpO3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP2RvY3VtZW50OmFyZ3VtZW50c1swXTtyZXR1cm5bXS5zbGljZS5jYWxsKGUucXVlcnlTZWxlY3RvckFsbChcIi5cIit0LkFDQ09SRElPTl9KUykpfSxBPWZ1bmN0aW9uKGUpe24oZSkuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgbj1cInpcIitNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyLDEyKSxBPWUuaGFzQXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfUFJFRklYX0NMQVNTKT09PSEwP2UuZ2V0QXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfUFJFRklYX0NMQVNTKStcIi1cIjpcIlwiLGE9ZS5oYXNBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9DT09MX1NFTEVDVE9SUyk9PT0hMDtcIm5vbmVcIj09PWUuZ2V0QXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfTVVMVElTRUxFQ1RBQkxFKT9lLnNldEF0dHJpYnV0ZSh0LkFUVFJfTVVMVElTRUxFQ1RBQkxFLFwiZmFsc2VcIik6ZS5zZXRBdHRyaWJ1dGUodC5BVFRSX01VTFRJU0VMRUNUQUJMRSxcInRydWVcIiksZS5zZXRBdHRyaWJ1dGUodC5BVFRSX1JPTEUsdC5BQ0NPUkRJT05fUk9MRV9UQUJMSVNUKSxlLnNldEF0dHJpYnV0ZShcImlkXCIsbiksZS5zZXRBdHRyaWJ1dGUoREFUQV9IQVNIX0lELHIpLGFkZENsYXNzKGUsQSt0LkFDQ09SRElPTl9TVFlMRSk7dmFyIGk9W10uc2xpY2UuY2FsbChlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdC5BQ0NPUkRJT05fSlNfSEVBREVSKSk7aS5mb3JFYWNoKGZ1bmN0aW9uKGksXyl7dmFyIG8sVDtpZihpLnBhcmVudE5vZGU9PT1lfHxhIT09ITEpe3ZhciBFPV8rMSxzPWkubmV4dEVsZW1lbnRTaWJsaW5nLEM9aS5pbm5lckhUTUwsYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQlVUVE9OXCIpLEQ9aS5oYXNBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9PUEVORUQpPT09ITA/aS5nZXRBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9PUEVORUQpOlwiXCI7Yy5pbm5lckhUTUw9QyxhZGRDbGFzcyhjLHQuQUNDT1JESU9OX0pTX0hFQURFUiksYWRkQ2xhc3MoYyxBK3QuQUNDT1JESU9OX0hFQURFUl9TVFlMRSksc2V0QXR0cmlidXRlcyhjLChvPXt9LF9kZWZpbmVQcm9wZXJ0eShvLHQuQVRUUl9ST0xFLHQuQUNDT1JESU9OX1JPTEVfVEFCKSxfZGVmaW5lUHJvcGVydHkobyxcImlkXCIsdC5BQ0NPUkRJT05fUFJFRklYX0lEUytuK3QuQUNDT1JESU9OX0JVVFRPTl9JRCtFKSxfZGVmaW5lUHJvcGVydHkobyx0LkFUVFJfQ09OVFJPTFMsdC5BQ0NPUkRJT05fUFJFRklYX0lEUytuK3QuQUNDT1JESU9OX1BBTkVMX0lEK0UpLF9kZWZpbmVQcm9wZXJ0eShvLHQuQVRUUl9TRUxFQ1RFRCxcImZhbHNlXCIpLF9kZWZpbmVQcm9wZXJ0eShvLFwidHlwZVwiLFwiYnV0dG9uXCIpLF9kZWZpbmVQcm9wZXJ0eShvLERBVEFfSEFTSF9JRCxyKSxvKSksaS5pbm5lckhUTUw9XCJcIixpLmFwcGVuZENoaWxkKGMpLGFkZENsYXNzKGksQSt0LkFDQ09SRElPTl9USVRMRV9TVFlMRSkscmVtb3ZlQ2xhc3MoaSx0LkFDQ09SRElPTl9KU19IRUFERVIpLGFkZENsYXNzKHMsQSt0LkFDQ09SRElPTl9QQU5FTF9TVFlMRSksc2V0QXR0cmlidXRlcyhzLChUPXt9LF9kZWZpbmVQcm9wZXJ0eShULHQuQVRUUl9ST0xFLHQuQUNDT1JESU9OX1JPTEVfVEFCUEFORUwpLF9kZWZpbmVQcm9wZXJ0eShULHQuQVRUUl9MQUJFTExFREJZLHQuQUNDT1JESU9OX1BSRUZJWF9JRFMrbit0LkFDQ09SRElPTl9CVVRUT05fSUQrRSksX2RlZmluZVByb3BlcnR5KFQsXCJpZFwiLHQuQUNDT1JESU9OX1BSRUZJWF9JRFMrbit0LkFDQ09SRElPTl9QQU5FTF9JRCtFKSxfZGVmaW5lUHJvcGVydHkoVCxEQVRBX0hBU0hfSUQsciksVCkpLFwidHJ1ZVwiPT09RD8oYy5zZXRBdHRyaWJ1dGUodC5BVFRSX0VYUEFOREVELFwidHJ1ZVwiKSxpLnJlbW92ZUF0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX09QRU5FRCkscy5zZXRBdHRyaWJ1dGUodC5BVFRSX0hJRERFTixcImZhbHNlXCIpKTooYy5zZXRBdHRyaWJ1dGUodC5BVFRSX0VYUEFOREVELFwiZmFsc2VcIikscy5zZXRBdHRyaWJ1dGUodC5BVFRSX0hJRERFTixcInRydWVcIikpfX0pfSl9O3JldHVybnthdHRhY2g6QX19LG1haW49ZnVuY3Rpb24oKXtyZXR1cm5bXCJjbGlja1wiLFwia2V5ZG93blwiLFwiZm9jdXNcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZSxmdW5jdGlvbih0KXt2YXIgcj1zZWFyY2hQYXJlbnRIYXNoSWQodC50YXJnZXQsREFUQV9IQVNIX0lEKTtcIlwiIT09ciYmIWZ1bmN0aW9uKCl7dmFyIG49cGx1Z2luQ29uZmlnLmdldChyKTtoYXNDbGFzcyh0LnRhcmdldCxuLkFDQ09SRElPTl9KU19IRUFERVIpPT09ITAmJlwiZm9jdXNcIj09PWUmJiFmdW5jdGlvbigpe3ZhciBlPXQudGFyZ2V0LEE9ZmluZEJ5SWQoc2VhcmNoUGFyZW50KGUsbi5BQ0NPUkRJT05fSlMsciksciksYT1BLmhhc0F0dHJpYnV0ZShuLkFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTKT09PSEwLGk9W10uc2xpY2UuY2FsbChBLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbi5BQ0NPUkRJT05fSlNfSEVBREVSKSk7YT09PSExJiYoaT1pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlLnBhcmVudE5vZGU9PT1BfSkpLHVuU2VsZWN0SGVhZGVycyhpLG4uQVRUUl9TRUxFQ1RFRCksc2VsZWN0SGVhZGVyKGUsbi5BVFRSX1NFTEVDVEVEKX0oKSxoYXNDbGFzcyh0LnRhcmdldCxuLkFDQ09SRElPTl9KU19IRUFERVIpPT09ITAmJlwiY2xpY2tcIj09PWUmJiFmdW5jdGlvbigpe3ZhciBlPXQudGFyZ2V0LEE9ZmluZEJ5SWQoc2VhcmNoUGFyZW50KGUsbi5BQ0NPUkRJT05fSlMsciksciksYT1BLmhhc0F0dHJpYnV0ZShuLkFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTKT09PSEwLGk9W10uc2xpY2UuY2FsbChBLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbi5BQ0NPUkRJT05fSlNfSEVBREVSKSksXz1BLmdldEF0dHJpYnV0ZShuLkFUVFJfTVVMVElTRUxFQ1RBQkxFKSxvPWZpbmRCeUlkKGUuZ2V0QXR0cmlidXRlKG4uQVRUUl9DT05UUk9MUyksciksVD1lLmdldEF0dHJpYnV0ZShuLkFUVFJfRVhQQU5ERUQpO2E9PT0hMSYmKGk9aS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZS5wYXJlbnROb2RlPT09QX0pKSxcImZhbHNlXCI9PT1UPyhlLnNldEF0dHJpYnV0ZShuLkFUVFJfRVhQQU5ERUQsITApLG8ucmVtb3ZlQXR0cmlidXRlKG4uQVRUUl9ISURERU4pKTooZS5zZXRBdHRyaWJ1dGUobi5BVFRSX0VYUEFOREVELCExKSxvLnNldEF0dHJpYnV0ZShuLkFUVFJfSElEREVOLCEwKSksXCJmYWxzZVwiPT09XyYmaS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBBPWZpbmRCeUlkKHQuZ2V0QXR0cmlidXRlKG4uQVRUUl9DT05UUk9MUykscik7dCE9PWU/KHQuc2V0QXR0cmlidXRlKG4uQVRUUl9TRUxFQ1RFRCwhMSksdC5zZXRBdHRyaWJ1dGUobi5BVFRSX0VYUEFOREVELCExKSxBLnNldEF0dHJpYnV0ZShuLkFUVFJfSElEREVOLCEwKSk6dC5zZXRBdHRyaWJ1dGUobi5BVFRSX1NFTEVDVEVELCEwKX0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKX0oKSxoYXNDbGFzcyh0LnRhcmdldCxuLkFDQ09SRElPTl9KU19IRUFERVIpPT09ITAmJlwia2V5ZG93blwiPT09ZSYmIWZ1bmN0aW9uKCl7dmFyIGU9dC50YXJnZXQsQT1zZWFyY2hQYXJlbnQoZSxuLkFDQ09SRElPTl9KUyxyKSxhPWZpbmRCeUlkKEEsciksaT1hLmhhc0F0dHJpYnV0ZShuLkFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTKT09PSEwLF89W10uc2xpY2UuY2FsbChhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbi5BQ0NPUkRJT05fSlNfSEVBREVSKSk7aT09PSExJiYoXz1fLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlLnBhcmVudE5vZGU9PT1hfSkpLDM2PT09dC5rZXlDb2RlPyh1blNlbGVjdEhlYWRlcnMoXyxuLkFUVFJfU0VMRUNURUQpLHNlbGVjdEhlYWRlcihfWzBdLG4uQVRUUl9TRUxFQ1RFRCksc2V0VGltZW91dChmdW5jdGlvbigpe19bMF0uZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpKTozNT09PXQua2V5Q29kZT8odW5TZWxlY3RIZWFkZXJzKF8sbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoX1tfLmxlbmd0aC0xXSxuLkFUVFJfU0VMRUNURUQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtfW18ubGVuZ3RoLTFdLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKSk6MzchPT10LmtleUNvZGUmJjM4IT09dC5rZXlDb2RlfHx0LmN0cmxLZXk/NDAhPT10LmtleUNvZGUmJjM5IT09dC5rZXlDb2RlfHx0LmN0cmxLZXl8fChcInRydWVcIj09PV9bXy5sZW5ndGgtMV0uZ2V0QXR0cmlidXRlKG4uQVRUUl9TRUxFQ1RFRCk/KHVuU2VsZWN0SGVhZGVycyhfLG4uQVRUUl9TRUxFQ1RFRCksc2VsZWN0SGVhZGVyKF9bMF0sbi5BVFRSX1NFTEVDVEVEKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7X1swXS5mb2N1cygpfSwwKSx0LnByZXZlbnREZWZhdWx0KCkpOihzZWxlY3RIZWFkZXJJbkxpc3QoXyxcIm5leHRcIixuLkFUVFJfU0VMRUNURUQpLHQucHJldmVudERlZmF1bHQoKSkpOlwidHJ1ZVwiPT09X1swXS5nZXRBdHRyaWJ1dGUobi5BVFRSX1NFTEVDVEVEKT8odW5TZWxlY3RIZWFkZXJzKF8sbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoX1tfLmxlbmd0aC0xXSxuLkFUVFJfU0VMRUNURUQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtfW18ubGVuZ3RoLTFdLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKSk6KHNlbGVjdEhlYWRlckluTGlzdChfLFwicHJldlwiLG4uQVRUUl9TRUxFQ1RFRCksdC5wcmV2ZW50RGVmYXVsdCgpKX0oKX0oKX0sITApfSkscGx1Z2lufTt3aW5kb3cudmFuMTF5QWNjZXNzaWJsZUFjY29yZGlvbkFyaWE9bWFpbigpO3ZhciBvbkxvYWQ9ZnVuY3Rpb24gZSgpe3ZhciB0PXdpbmRvdy52YW4xMXlBY2Nlc3NpYmxlQWNjb3JkaW9uQXJpYSgpO3QuYXR0YWNoKCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixlKX07ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixvbkxvYWQpOyIsImZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheSh0KXtyZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKHQpfHxfaXRlcmFibGVUb0FycmF5KHQpfHxfbm9uSXRlcmFibGVTcHJlYWQoKX1mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIil9ZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheSh0KXtpZihTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHQpfHxcIltvYmplY3QgQXJndW1lbnRzXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKXJldHVybiBBcnJheS5mcm9tKHQpfWZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyh0KXtpZihBcnJheS5pc0FycmF5KHQpKXtmb3IodmFyIGU9MCxuPW5ldyBBcnJheSh0Lmxlbmd0aCk7ZTx0Lmxlbmd0aDtlKyspbltlXT10W2VdO3JldHVybiBufX1mdW5jdGlvbiBfZXh0ZW5kcygpe3JldHVybihfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbj1hcmd1bWVudHNbZV07Zm9yKHZhciByIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4scikmJih0W3JdPW5bcl0pfXJldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIF90eXBlb2YodCl7cmV0dXJuKF90eXBlb2Y9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfSFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGV4cG9ydHM/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKGV4cG9ydHMpKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTp0LkxhenlMb2FkPWUoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3csZT10JiYhKFwib25zY3JvbGxcImluIHdpbmRvdyl8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJi8oZ2xlfGluZ3xybylib3R8Y3Jhd2x8c3BpZGVyL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxuPXQmJlwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcImluIHdpbmRvdyxyPXQmJlwiY2xhc3NMaXN0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSxvPXtlbGVtZW50c19zZWxlY3RvcjpcImltZ1wiLGNvbnRhaW5lcjplfHx0P2RvY3VtZW50Om51bGwsdGhyZXNob2xkOjMwMCx0aHJlc2hvbGRzOm51bGwsZGF0YV9zcmM6XCJzcmNcIixkYXRhX3NyY3NldDpcInNyY3NldFwiLGRhdGFfc2l6ZXM6XCJzaXplc1wiLGRhdGFfYmc6XCJiZ1wiLGRhdGFfcG9zdGVyOlwicG9zdGVyXCIsY2xhc3NfbG9hZGluZzpcImxvYWRpbmdcIixjbGFzc19sb2FkZWQ6XCJsb2FkZWRcIixjbGFzc19lcnJvcjpcImVycm9yXCIsbG9hZF9kZWxheTowLGF1dG9fdW5vYnNlcnZlOiEwLGNhbGxiYWNrX2VudGVyOm51bGwsY2FsbGJhY2tfZXhpdDpudWxsLGNhbGxiYWNrX3JldmVhbDpudWxsLGNhbGxiYWNrX2xvYWRlZDpudWxsLGNhbGxiYWNrX2Vycm9yOm51bGwsY2FsbGJhY2tfZmluaXNoOm51bGwsdXNlX25hdGl2ZTohMX0sYT1mdW5jdGlvbih0LGUpe3ZhciBuLHI9bmV3IHQoZSk7dHJ5e249bmV3IEN1c3RvbUV2ZW50KFwiTGF6eUxvYWQ6OkluaXRpYWxpemVkXCIse2RldGFpbDp7aW5zdGFuY2U6cn19KX1jYXRjaCh0KXsobj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKS5pbml0Q3VzdG9tRXZlbnQoXCJMYXp5TG9hZDo6SW5pdGlhbGl6ZWRcIiwhMSwhMSx7aW5zdGFuY2U6cn0pfXdpbmRvdy5kaXNwYXRjaEV2ZW50KG4pfTt2YXIgaT1mdW5jdGlvbih0LGUpe3JldHVybiB0LmdldEF0dHJpYnV0ZShcImRhdGEtXCIrZSl9LHM9ZnVuY3Rpb24odCxlLG4pe3ZhciByPVwiZGF0YS1cIitlO251bGwhPT1uP3Quc2V0QXR0cmlidXRlKHIsbik6dC5yZW1vdmVBdHRyaWJ1dGUocil9LGM9ZnVuY3Rpb24odCl7cmV0dXJuXCJ0cnVlXCI9PT1pKHQsXCJ3YXMtcHJvY2Vzc2VkXCIpfSxsPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHModCxcImxsLXRpbWVvdXRcIixlKX0sdT1mdW5jdGlvbih0KXtyZXR1cm4gaSh0LFwibGwtdGltZW91dFwiKX0sZD1mdW5jdGlvbih0LGUsbixyKXt0JiYodm9pZCAwPT09cj92b2lkIDA9PT1uP3QoZSk6dChlLG4pOnQoZSxuLHIpKX0sZj1mdW5jdGlvbih0LGUpe3QuX2xvYWRpbmdDb3VudCs9ZSwwPT09dC5fZWxlbWVudHMubGVuZ3RoJiYwPT09dC5fbG9hZGluZ0NvdW50JiZkKHQuX3NldHRpbmdzLmNhbGxiYWNrX2ZpbmlzaCx0KX0sXz1mdW5jdGlvbih0KXtmb3IodmFyIGUsbj1bXSxyPTA7ZT10LmNoaWxkcmVuW3JdO3IrPTEpXCJTT1VSQ0VcIj09PWUudGFnTmFtZSYmbi5wdXNoKGUpO3JldHVybiBufSx2PWZ1bmN0aW9uKHQsZSxuKXtuJiZ0LnNldEF0dHJpYnV0ZShlLG4pfSxiPWZ1bmN0aW9uKHQsZSl7dih0LFwic2l6ZXNcIixpKHQsZS5kYXRhX3NpemVzKSksdih0LFwic3Jjc2V0XCIsaSh0LGUuZGF0YV9zcmNzZXQpKSx2KHQsXCJzcmNcIixpKHQsZS5kYXRhX3NyYykpfSxtPXtJTUc6ZnVuY3Rpb24odCxlKXt2YXIgbj10LnBhcmVudE5vZGU7biYmXCJQSUNUVVJFXCI9PT1uLnRhZ05hbWUmJl8obikuZm9yRWFjaChmdW5jdGlvbih0KXtiKHQsZSl9KTtiKHQsZSl9LElGUkFNRTpmdW5jdGlvbih0LGUpe3YodCxcInNyY1wiLGkodCxlLmRhdGFfc3JjKSl9LFZJREVPOmZ1bmN0aW9uKHQsZSl7Xyh0KS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3YodCxcInNyY1wiLGkodCxlLmRhdGFfc3JjKSl9KSx2KHQsXCJwb3N0ZXJcIixpKHQsZS5kYXRhX3Bvc3RlcikpLHYodCxcInNyY1wiLGkodCxlLmRhdGFfc3JjKSksdC5sb2FkKCl9fSxwPWZ1bmN0aW9uKHQsZSl7dmFyIG4scixvPWUuX3NldHRpbmdzLGE9dC50YWdOYW1lLHM9bVthXTtpZihzKXJldHVybiBzKHQsbyksZihlLDEpLHZvaWQoZS5fZWxlbWVudHM9KG49ZS5fZWxlbWVudHMscj10LG4uZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0IT09cn0pKSk7IWZ1bmN0aW9uKHQsZSl7dmFyIG49aSh0LGUuZGF0YV9zcmMpLHI9aSh0LGUuZGF0YV9iZyk7biYmKHQuc3R5bGUuYmFja2dyb3VuZEltYWdlPSd1cmwoXCInLmNvbmNhdChuLCdcIiknKSksciYmKHQuc3R5bGUuYmFja2dyb3VuZEltYWdlPXIpfSh0LG8pfSxnPWZ1bmN0aW9uKHQsZSl7cj90LmNsYXNzTGlzdC5hZGQoZSk6dC5jbGFzc05hbWUrPSh0LmNsYXNzTmFtZT9cIiBcIjpcIlwiKStlfSx5PWZ1bmN0aW9uKHQsZSl7cj90LmNsYXNzTGlzdC5yZW1vdmUoZSk6dC5jbGFzc05hbWU9dC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMrKVwiK2UrXCIoXFxcXHMrfCQpXCIpLFwiIFwiKS5yZXBsYWNlKC9eXFxzKy8sXCJcIikucmVwbGFjZSgvXFxzKyQvLFwiXCIpfSxoPWZ1bmN0aW9uKHQsZSxuKXt0LmFkZEV2ZW50TGlzdGVuZXIoZSxuKX0sRT1mdW5jdGlvbih0LGUsbil7dC5yZW1vdmVFdmVudExpc3RlbmVyKGUsbil9LHc9ZnVuY3Rpb24odCxlLG4pe0UodCxcImxvYWRcIixlKSxFKHQsXCJsb2FkZWRkYXRhXCIsZSksRSh0LFwiZXJyb3JcIixuKX0sQT1mdW5jdGlvbih0LGUsbil7dmFyIHI9bi5fc2V0dGluZ3Msbz1lP3IuY2xhc3NfbG9hZGVkOnIuY2xhc3NfZXJyb3IsYT1lP3IuY2FsbGJhY2tfbG9hZGVkOnIuY2FsbGJhY2tfZXJyb3IsaT10LnRhcmdldDt5KGksci5jbGFzc19sb2FkaW5nKSxnKGksbyksZChhLGksbiksZihuLC0xKX0sST1mdW5jdGlvbih0LGUpe3ZhciBuPWZ1bmN0aW9uIG4obyl7QShvLCEwLGUpLHcodCxuLHIpfSxyPWZ1bmN0aW9uIHIobyl7QShvLCExLGUpLHcodCxuLHIpfTshZnVuY3Rpb24odCxlLG4pe2godCxcImxvYWRcIixlKSxoKHQsXCJsb2FkZWRkYXRhXCIsZSksaCh0LFwiZXJyb3JcIixuKX0odCxuLHIpfSxrPVtcIklNR1wiLFwiSUZSQU1FXCIsXCJWSURFT1wiXSxMPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZS5fb2JzZXJ2ZXI7Uyh0LGUpLG4mJmUuX3NldHRpbmdzLmF1dG9fdW5vYnNlcnZlJiZuLnVub2JzZXJ2ZSh0KX0sTz1mdW5jdGlvbih0KXt2YXIgZT11KHQpO2UmJihjbGVhclRpbWVvdXQoZSksbCh0LG51bGwpKX0seD1mdW5jdGlvbih0LGUpe3ZhciBuPWUuX3NldHRpbmdzLmxvYWRfZGVsYXkscj11KHQpO3J8fChyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtMKHQsZSksTyh0KX0sbiksbCh0LHIpKX0sUz1mdW5jdGlvbih0LGUsbil7dmFyIHI9ZS5fc2V0dGluZ3M7IW4mJmModCl8fChrLmluZGV4T2YodC50YWdOYW1lKT4tMSYmKEkodCxlKSxnKHQsci5jbGFzc19sb2FkaW5nKSkscCh0LGUpLGZ1bmN0aW9uKHQpe3ModCxcIndhcy1wcm9jZXNzZWRcIixcInRydWVcIil9KHQpLGQoci5jYWxsYmFja19yZXZlYWwsdCxlKSxkKHIuY2FsbGJhY2tfc2V0LHQsZSkpfSx6PWZ1bmN0aW9uKHQpe3JldHVybiEhbiYmKHQuX29ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlKXtlLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiB0LmlzSW50ZXJzZWN0aW5nfHx0LmludGVyc2VjdGlvblJhdGlvPjB9KGUpP2Z1bmN0aW9uKHQsZSxuKXt2YXIgcj1uLl9zZXR0aW5ncztkKHIuY2FsbGJhY2tfZW50ZXIsdCxlLG4pLHIubG9hZF9kZWxheT94KHQsbik6TCh0LG4pfShlLnRhcmdldCxlLHQpOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uLl9zZXR0aW5ncztkKHIuY2FsbGJhY2tfZXhpdCx0LGUsbiksci5sb2FkX2RlbGF5JiZPKHQpfShlLnRhcmdldCxlLHQpfSl9LHtyb290OihlPXQuX3NldHRpbmdzKS5jb250YWluZXI9PT1kb2N1bWVudD9udWxsOmUuY29udGFpbmVyLHJvb3RNYXJnaW46ZS50aHJlc2hvbGRzfHxlLnRocmVzaG9sZCtcInB4XCJ9KSwhMCk7dmFyIGV9LEM9W1wiSU1HXCIsXCJJRlJBTUVcIl0sTj1mdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gdC5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIWModCl9KX0oKG49dHx8ZnVuY3Rpb24odCl7cmV0dXJuIHQuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwodC5lbGVtZW50c19zZWxlY3Rvcil9KGUpLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pKSk7dmFyIG59LE09ZnVuY3Rpb24odCl7dmFyIGU9dC5fc2V0dGluZ3M7X3RvQ29uc3VtYWJsZUFycmF5KGUuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrZS5jbGFzc19lcnJvcikpLmZvckVhY2goZnVuY3Rpb24odCl7eSh0LGUuY2xhc3NfZXJyb3IpLGZ1bmN0aW9uKHQpe3ModCxcIndhcy1wcm9jZXNzZWRcIixudWxsKX0odCl9KSx0LnVwZGF0ZSgpfSxSPWZ1bmN0aW9uKGUsbil7dmFyIHI7dGhpcy5fc2V0dGluZ3M9ZnVuY3Rpb24odCl7cmV0dXJuIF9leHRlbmRzKHt9LG8sdCl9KGUpLHRoaXMuX2xvYWRpbmdDb3VudD0wLHoodGhpcyksdGhpcy51cGRhdGUobikscj10aGlzLHQmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsZnVuY3Rpb24odCl7TShyKX0pfTtyZXR1cm4gUi5wcm90b3R5cGU9e3VwZGF0ZTpmdW5jdGlvbih0KXt2YXIgbixyPXRoaXMsbz10aGlzLl9zZXR0aW5nczsodGhpcy5fZWxlbWVudHM9Tih0LG8pLCFlJiZ0aGlzLl9vYnNlcnZlcik/KGZ1bmN0aW9uKHQpe3JldHVybiB0LnVzZV9uYXRpdmUmJlwibG9hZGluZ1wiaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGV9KG8pJiYoKG49dGhpcykuX2VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24odCl7LTEhPT1DLmluZGV4T2YodC50YWdOYW1lKSYmKHQuc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLFwibGF6eVwiKSxTKHQsbikpfSksdGhpcy5fZWxlbWVudHM9Tih0LG8pKSx0aGlzLl9lbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3IuX29ic2VydmVyLm9ic2VydmUodCl9KSk6dGhpcy5sb2FkQWxsKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuX29ic2VydmVyJiYodGhpcy5fZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlKXt0Ll9vYnNlcnZlci51bm9ic2VydmUoZSl9KSx0aGlzLl9vYnNlcnZlcj1udWxsKSx0aGlzLl9lbGVtZW50cz1udWxsLHRoaXMuX3NldHRpbmdzPW51bGx9LGxvYWQ6ZnVuY3Rpb24odCxlKXtTKHQsdGhpcyxlKX0sbG9hZEFsbDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5fZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlKXtMKGUsdCl9KX19LHQmJmZ1bmN0aW9uKHQsZSl7aWYoZSlpZihlLmxlbmd0aClmb3IodmFyIG4scj0wO249ZVtyXTtyKz0xKWEodCxuKTtlbHNlIGEodCxlKX0oUix3aW5kb3cubGF6eUxvYWRPcHRpb25zKSxSfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sYXp5bG9hZC5taW4uanMubWFwXG4iLCIvKipcbiAqIFplbnNjcm9sbCA0LjAuMlxuICogaHR0cHM6Ly9naXRodWIuY29tL3plbmdhYm9yL3plbnNjcm9sbC9cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNeKAkzIwMTggR2Fib3IgTGVuYXJkXG4gKlxuICogVGhpcyBpcyBmcmVlIGFuZCB1bmVuY3VtYmVyZWQgc29mdHdhcmUgcmVsZWFzZWQgaW50byB0aGUgcHVibGljIGRvbWFpbi5cbiAqIFxuICogQW55b25lIGlzIGZyZWUgdG8gY29weSwgbW9kaWZ5LCBwdWJsaXNoLCB1c2UsIGNvbXBpbGUsIHNlbGwsIG9yXG4gKiBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUsIGVpdGhlciBpbiBzb3VyY2UgY29kZSBmb3JtIG9yIGFzIGEgY29tcGlsZWRcbiAqIGJpbmFyeSwgZm9yIGFueSBwdXJwb3NlLCBjb21tZXJjaWFsIG9yIG5vbi1jb21tZXJjaWFsLCBhbmQgYnkgYW55XG4gKiBtZWFucy5cbiAqIFxuICogSW4ganVyaXNkaWN0aW9ucyB0aGF0IHJlY29nbml6ZSBjb3B5cmlnaHQgbGF3cywgdGhlIGF1dGhvciBvciBhdXRob3JzXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGRlZGljYXRlIGFueSBhbmQgYWxsIGNvcHlyaWdodCBpbnRlcmVzdCBpbiB0aGVcbiAqIHNvZnR3YXJlIHRvIHRoZSBwdWJsaWMgZG9tYWluLiBXZSBtYWtlIHRoaXMgZGVkaWNhdGlvbiBmb3IgdGhlIGJlbmVmaXRcbiAqIG9mIHRoZSBwdWJsaWMgYXQgbGFyZ2UgYW5kIHRvIHRoZSBkZXRyaW1lbnQgb2Ygb3VyIGhlaXJzIGFuZFxuICogc3VjY2Vzc29ycy4gV2UgaW50ZW5kIHRoaXMgZGVkaWNhdGlvbiB0byBiZSBhbiBvdmVydCBhY3Qgb2ZcbiAqIHJlbGlucXVpc2htZW50IGluIHBlcnBldHVpdHkgb2YgYWxsIHByZXNlbnQgYW5kIGZ1dHVyZSByaWdodHMgdG8gdGhpc1xuICogc29mdHdhcmUgdW5kZXIgY29weXJpZ2h0IGxhdy5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuICogSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1JcbiAqIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLFxuICogQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gKiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgcmVmZXIgdG8gPGh0dHA6Ly91bmxpY2Vuc2Uub3JnPlxuICogXG4gKi9cblxuLypqc2hpbnQgZGV2ZWw6dHJ1ZSwgYXNpOnRydWUgKi9cblxuLypnbG9iYWwgZGVmaW5lLCBtb2R1bGUgKi9cblxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KCkpXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG5cdH0gZWxzZSB7XG5cdFx0KGZ1bmN0aW9uIGluc3RhbGwoKSB7XG5cdFx0XHQvLyBUbyBtYWtlIHN1cmUgWmVuc2Nyb2xsIGNhbiBiZSByZWZlcmVuY2VkIGZyb20gdGhlIGhlYWRlciwgYmVmb3JlIGBib2R5YCBpcyBhdmFpbGFibGVcblx0XHRcdGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XG5cdFx0XHRcdHJvb3QuemVuc2Nyb2xsID0gZmFjdG9yeSgpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyByZXRyeSA5bXMgbGF0ZXJcblx0XHRcdFx0c2V0VGltZW91dChpbnN0YWxsLCA5KVxuXHRcdFx0fVxuXHRcdH0pKClcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cdFwidXNlIHN0cmljdFwiXG5cblxuXHQvLyBEZXRlY3QgaWYgdGhlIGJyb3dzZXIgYWxyZWFkeSBzdXBwb3J0cyBuYXRpdmUgc21vb3RoIHNjcm9sbGluZyAoZS5nLiwgRmlyZWZveCAzNisgYW5kIENocm9tZSA0OSspIGFuZCBpdCBpcyBlbmFibGVkOlxuXHR2YXIgaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24gPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdHJldHVybiBlbGVtICYmIFwiZ2V0Q29tcHV0ZWRTdHlsZVwiIGluIHdpbmRvdyAmJlxuXHRcdFx0d2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSlbXCJzY3JvbGwtYmVoYXZpb3JcIl0gPT09IFwic21vb3RoXCJcblx0fVxuXG5cblx0Ly8gRXhpdCBpZiBpdOKAmXMgbm90IGEgYnJvd3NlciBlbnZpcm9ubWVudDpcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgIShcImRvY3VtZW50XCIgaW4gd2luZG93KSkge1xuXHRcdHJldHVybiB7fVxuXHR9XG5cblxuXHR2YXIgbWFrZVNjcm9sbGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KSB7XG5cblx0XHQvLyBVc2UgZGVmYXVsdHMgaWYgbm90IHByb3ZpZGVkXG5cdFx0ZGVmYXVsdER1cmF0aW9uID0gZGVmYXVsdER1cmF0aW9uIHx8IDk5OSAvL21zXG5cdFx0aWYgKCFlZGdlT2Zmc2V0ICYmIGVkZ2VPZmZzZXQgIT09IDApIHtcblx0XHRcdC8vIFdoZW4gc2Nyb2xsaW5nLCB0aGlzIGFtb3VudCBvZiBkaXN0YW5jZSBpcyBrZXB0IGZyb20gdGhlIGVkZ2VzIG9mIHRoZSBjb250YWluZXI6XG5cdFx0XHRlZGdlT2Zmc2V0ID0gOSAvL3B4XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxpbmcgdGhlIGxpZmUtY3ljbGUgb2YgdGhlIHNjcm9sbGVyXG5cdFx0dmFyIHNjcm9sbFRpbWVvdXRJZFxuXHRcdHZhciBzZXRTY3JvbGxUaW1lb3V0SWQgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcblx0XHRcdHNjcm9sbFRpbWVvdXRJZCA9IG5ld1ZhbHVlXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU3RvcCB0aGUgY3VycmVudCBzbW9vdGggc2Nyb2xsIG9wZXJhdGlvbiBpbW1lZGlhdGVseVxuXHRcdCAqL1xuXHRcdHZhciBzdG9wU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXRJZClcblx0XHRcdHNldFNjcm9sbFRpbWVvdXRJZCgwKVxuXHRcdH1cblxuXHRcdHZhciBnZXRUb3BXaXRoRWRnZU9mZnNldCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5tYXgoMCwgY29udGFpbmVyLmdldFRvcE9mKGVsZW0pIC0gZWRnZU9mZnNldClcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIGEgc3BlY2lmaWMgdmVydGljYWwgcG9zaXRpb24gaW4gdGhlIGRvY3VtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHt0YXJnZXRZfSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2l0aGluIHRoZSBkb2N1bWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiAgICAgICAgSWYgbm90IHByb3ZpZGVkIHRoZSBkZWZhdWx0IGR1cmF0aW9uIGlzIHVzZWQuXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb1kgPSBmdW5jdGlvbiAodGFyZ2V0WSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0c3RvcFNjcm9sbCgpXG5cdFx0XHRpZiAoZHVyYXRpb24gPT09IDAgfHwgKGR1cmF0aW9uICYmIGR1cmF0aW9uIDwgMCkgfHwgaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24oY29udGFpbmVyLmJvZHkpKSB7XG5cdFx0XHRcdGNvbnRhaW5lci50b1kodGFyZ2V0WSlcblx0XHRcdFx0aWYgKG9uRG9uZSkge1xuXHRcdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBzdGFydFkgPSBjb250YWluZXIuZ2V0WSgpXG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGgubWF4KDAsIHRhcmdldFkpIC0gc3RhcnRZXG5cdFx0XHRcdHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuXHRcdFx0XHRkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE1hdGgubWluKE1hdGguYWJzKGRpc3RhbmNlKSwgZGVmYXVsdER1cmF0aW9uKTtcblx0XHRcdFx0KGZ1bmN0aW9uIGxvb3BTY3JvbGwoKSB7XG5cdFx0XHRcdFx0c2V0U2Nyb2xsVGltZW91dElkKHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2U6XG5cdFx0XHRcdFx0XHR2YXIgcCA9IE1hdGgubWluKDEsIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbilcblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgYWJzb2x1dGUgdmVydGljYWwgcG9zaXRpb246XG5cdFx0XHRcdFx0XHR2YXIgeSA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3Ioc3RhcnRZICsgZGlzdGFuY2UqKHAgPCAwLjUgPyAyKnAqcCA6IHAqKDQgLSBwKjIpLTEpKSlcblx0XHRcdFx0XHRcdGNvbnRhaW5lci50b1koeSlcblx0XHRcdFx0XHRcdGlmIChwIDwgMSAmJiAoY29udGFpbmVyLmdldEhlaWdodCgpICsgeSkgPCBjb250YWluZXIuYm9keS5zY3JvbGxIZWlnaHQpIHtcblx0XHRcdFx0XHRcdFx0bG9vcFNjcm9sbCgpXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KHN0b3BTY3JvbGwsIDk5KSAvLyB3aXRoIGNvb2xkb3duIHRpbWVcblx0XHRcdFx0XHRcdFx0aWYgKG9uRG9uZSkge1xuXHRcdFx0XHRcdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCA5KSlcblx0XHRcdFx0fSkoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gdGhlIHRvcCBvZiBhIHNwZWNpZmljIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50IHRvIHNjcm9sbCB0by5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvRWxlbSA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHRzY3JvbGxUb1koZ2V0VG9wV2l0aEVkZ2VPZmZzZXQoZWxlbSksIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyBhbiBlbGVtZW50IGludG8gdmlldyBpZiBuZWNlc3NhcnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0dmFyIGVsZW1IZWlnaHQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuXHRcdFx0dmFyIGVsZW1Cb3R0b20gPSBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgKyBlbGVtSGVpZ2h0XG5cdFx0XHR2YXIgY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmdldEhlaWdodCgpXG5cdFx0XHR2YXIgeSA9IGNvbnRhaW5lci5nZXRZKClcblx0XHRcdHZhciBjb250YWluZXJCb3R0b20gPSB5ICsgY29udGFpbmVySGVpZ2h0XG5cdFx0XHRpZiAoZ2V0VG9wV2l0aEVkZ2VPZmZzZXQoZWxlbSkgPCB5IHx8IChlbGVtSGVpZ2h0ICsgZWRnZU9mZnNldCkgPiBjb250YWluZXJIZWlnaHQpIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBjbGlwcGVkIGF0IHRvcCBvciBpcyBoaWdoZXIgdGhhbiBzY3JlZW4uXG5cdFx0XHRcdHNjcm9sbFRvRWxlbShlbGVtLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdFx0fSBlbHNlIGlmICgoZWxlbUJvdHRvbSArIGVkZ2VPZmZzZXQpID4gY29udGFpbmVyQm90dG9tKSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgY2xpcHBlZCBhdCB0aGUgYm90dG9tLlxuXHRcdFx0XHRzY3JvbGxUb1koZWxlbUJvdHRvbSAtIGNvbnRhaW5lckhlaWdodCArIGVkZ2VPZmZzZXQsIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0XHR9IGVsc2UgaWYgKG9uRG9uZSkge1xuXHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gdGhlIGNlbnRlciBvZiBhbiBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29mZnNldH0gT3B0aW9uYWxseSB0aGUgb2Zmc2V0IG9mIHRoZSB0b3Agb2YgdGhlIGVsZW1lbnQgZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW4uXG5cdFx0ICogICAgICAgIEEgdmFsdWUgb2YgMCBpcyBpZ25vcmVkLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9DZW50ZXJPZiA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb2Zmc2V0LCBvbkRvbmUpIHtcblx0XHRcdHNjcm9sbFRvWShNYXRoLm1heCgwLCBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgLSBjb250YWluZXIuZ2V0SGVpZ2h0KCkvMiArIChvZmZzZXQgfHwgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQvMikpLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENoYW5nZXMgZGVmYXVsdCBzZXR0aW5ncyBmb3IgdGhpcyBzY3JvbGxlci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bmV3RGVmYXVsdER1cmF0aW9ufSBPcHRpb25hbGx5IGEgbmV3IHZhbHVlIGZvciBkZWZhdWx0IGR1cmF0aW9uLCB1c2VkIGZvciBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC5cblx0XHQgKiAgICAgICAgSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0XHQgKiBAcGFyYW0ge25ld0VkZ2VPZmZzZXR9IE9wdGlvbmFsbHkgYSBuZXcgdmFsdWUgZm9yIHRoZSBlZGdlIG9mZnNldCwgdXNlZCBieSBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC4gSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0XHQgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCB2YWx1ZXMuXG5cdFx0ICovXG5cdFx0dmFyIHNldHVwID0gZnVuY3Rpb24gKG5ld0RlZmF1bHREdXJhdGlvbiwgbmV3RWRnZU9mZnNldCkge1xuXHRcdFx0aWYgKG5ld0RlZmF1bHREdXJhdGlvbiA9PT0gMCB8fCBuZXdEZWZhdWx0RHVyYXRpb24pIHtcblx0XHRcdFx0ZGVmYXVsdER1cmF0aW9uID0gbmV3RGVmYXVsdER1cmF0aW9uXG5cdFx0XHR9XG5cdFx0XHRpZiAobmV3RWRnZU9mZnNldCA9PT0gMCB8fCBuZXdFZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdGVkZ2VPZmZzZXQgPSBuZXdFZGdlT2Zmc2V0XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkZWZhdWx0RHVyYXRpb246IGRlZmF1bHREdXJhdGlvbixcblx0XHRcdFx0ZWRnZU9mZnNldDogZWRnZU9mZnNldFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRzZXR1cDogc2V0dXAsXG5cdFx0XHR0bzogc2Nyb2xsVG9FbGVtLFxuXHRcdFx0dG9ZOiBzY3JvbGxUb1ksXG5cdFx0XHRpbnRvVmlldzogc2Nyb2xsSW50b1ZpZXcsXG5cdFx0XHRjZW50ZXI6IHNjcm9sbFRvQ2VudGVyT2YsXG5cdFx0XHRzdG9wOiBzdG9wU2Nyb2xsLFxuXHRcdFx0bW92aW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiAhIXNjcm9sbFRpbWVvdXRJZCB9LFxuXHRcdFx0Z2V0WTogY29udGFpbmVyLmdldFksXG5cdFx0XHRnZXRUb3BPZjogY29udGFpbmVyLmdldFRvcE9mXG5cdFx0fVxuXG5cdH1cblxuXG5cdHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cdHZhciBnZXREb2NZID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgZG9jRWxlbS5zY3JvbGxUb3AgfVxuXG5cdC8vIENyZWF0ZSBhIHNjcm9sbGVyIGZvciB0aGUgZG9jdW1lbnQ6XG5cdHZhciB6ZW5zY3JvbGwgPSBtYWtlU2Nyb2xsZXIoe1xuXHRcdGJvZHk6IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuYm9keSxcblx0XHR0b1k6IGZ1bmN0aW9uICh5KSB7IHdpbmRvdy5zY3JvbGxUbygwLCB5KSB9LFxuXHRcdGdldFk6IGdldERvY1ksXG5cdFx0Z2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgfSxcblx0XHRnZXRUb3BPZjogZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZ2V0RG9jWSgpIC0gZG9jRWxlbS5vZmZzZXRUb3AgfVxuXHR9KVxuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzY3JvbGxlciBmcm9tIHRoZSBwcm92aWRlZCBjb250YWluZXIgZWxlbWVudCAoZS5nLiwgYSBESVYpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c2Nyb2xsQ29udGFpbmVyfSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2l0aGluIHRoZSBkb2N1bWVudC5cblx0ICogQHBhcmFtIHtkZWZhdWx0RHVyYXRpb259IE9wdGlvbmFsbHkgYSB2YWx1ZSBmb3IgZGVmYXVsdCBkdXJhdGlvbiwgdXNlZCBmb3IgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuXG5cdCAqICAgICAgICBJZ25vcmVkIGlmIDAgb3IgbnVsbCBvciB1bmRlZmluZWQuXG5cdCAqIEBwYXJhbSB7ZWRnZU9mZnNldH0gT3B0aW9uYWxseSBhIHZhbHVlIGZvciB0aGUgZWRnZSBvZmZzZXQsIHVzZWQgYnkgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuIFxuXHQgKiAgICAgICAgSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0ICogQHJldHVybnMgQSBzY3JvbGxlciBvYmplY3QsIHNpbWlsYXIgdG8gYHplbnNjcm9sbGAgYnV0IGNvbnRyb2xsaW5nIHRoZSBwcm92aWRlZCBlbGVtZW50LlxuXHQgKi9cblx0emVuc2Nyb2xsLmNyZWF0ZVNjcm9sbGVyID0gZnVuY3Rpb24gKHNjcm9sbENvbnRhaW5lciwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KSB7XG5cdFx0cmV0dXJuIG1ha2VTY3JvbGxlcih7XG5cdFx0XHRib2R5OiBzY3JvbGxDb250YWluZXIsXG5cdFx0XHR0b1k6IGZ1bmN0aW9uICh5KSB7IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgPSB5IH0sXG5cdFx0XHRnZXRZOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wIH0sXG5cdFx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hdGgubWluKHNjcm9sbENvbnRhaW5lci5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCkgfSxcblx0XHRcdGdldFRvcE9mOiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5vZmZzZXRUb3AgfVxuXHRcdH0sIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldClcblx0fVxuXG5cblx0Ly8gQXV0b21hdGljIGxpbmstc21vb3RoaW5nIG9uIGFjaG9yc1xuXHQvLyBFeGNsdWRlIElFOC0gb3Igd2hlbiBuYXRpdmUgaXMgZW5hYmxlZCBvciBaZW5zY3JvbGwgYXV0by0gaXMgZGlzYWJsZWRcblx0aWYgKFwiYWRkRXZlbnRMaXN0ZW5lclwiIGluIHdpbmRvdyAmJiAhd2luZG93Lm5vWmVuc21vb3RoICYmICFpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbihkb2N1bWVudC5ib2R5KSkge1xuXG5cdFx0dmFyIGlzSGlzdG9yeVN1cHBvcnRlZCA9IFwiaGlzdG9yeVwiIGluIHdpbmRvdyAmJiBcInB1c2hTdGF0ZVwiIGluIGhpc3Rvcnlcblx0XHR2YXIgaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCA9IGlzSGlzdG9yeVN1cHBvcnRlZCAmJiBcInNjcm9sbFJlc3RvcmF0aW9uXCIgaW4gaGlzdG9yeVxuXG5cdFx0Ly8gT24gZmlyc3QgbG9hZCAmIHJlZnJlc2ggbWFrZSBzdXJlIHRoZSBicm93c2VyIHJlc3RvcmVzIHRoZSBwb3NpdGlvbiBmaXJzdFxuXHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCJcblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0XHQvLyBTZXQgaXQgdG8gbWFudWFsXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJtYW51YWxcIiB9LCA5KVxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdGlmIChldmVudC5zdGF0ZSAmJiBcInplbnNjcm9sbFlcIiBpbiBldmVudC5zdGF0ZSkge1xuXHRcdFx0XHRcdFx0emVuc2Nyb2xsLnRvWShldmVudC5zdGF0ZS56ZW5zY3JvbGxZKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgZmFsc2UpXG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBlZGdlIG9mZnNldCBvbiBmaXJzdCBsb2FkIGlmIG5lY2Vzc2FyeVxuXHRcdFx0Ly8gVGhpcyBtYXkgbm90IHdvcmsgb24gSUUgKG9yIG9sZGVyIGNvbXB1dGVyPykgYXMgaXQgcmVxdWlyZXMgbW9yZSB0aW1lb3V0LCBhcm91bmQgMTAwIG1zXG5cdFx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Ly8gQWRqdXN0bWVudCBpcyBvbmx5IG5lZWRlZCBpZiB0aGVyZSBpcyBhbiBlZGdlIG9mZnNldDpcblx0XHRcdFx0XHR2YXIgZWRnZU9mZnNldCA9IHplbnNjcm9sbC5zZXR1cCgpLmVkZ2VPZmZzZXRcblx0XHRcdFx0XHRpZiAoZWRnZU9mZnNldCkge1xuXHRcdFx0XHRcdFx0dmFyIHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMV0pXG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0RWxlbSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGFyZ2V0WSA9IE1hdGgubWF4KDAsIHplbnNjcm9sbC5nZXRUb3BPZih0YXJnZXRFbGVtKSAtIGVkZ2VPZmZzZXQpXG5cdFx0XHRcdFx0XHRcdHZhciBkaWZmID0gemVuc2Nyb2xsLmdldFkoKSAtIHRhcmdldFlcblx0XHRcdFx0XHRcdFx0Ly8gT25seSBkbyB0aGUgYWRqdXN0bWVudCBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IGNsb3NlIHRvIHRoZSBlbGVtZW50OlxuXHRcdFx0XHRcdFx0XHRpZiAoMCA8PSBkaWZmICYmIGRpZmYgPCA5ICkge1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCB0YXJnZXRZKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCA5KVxuXHRcdFx0fVxuXG5cdFx0fSwgZmFsc2UpXG5cblx0XHQvLyBIYW5kbGluZyBjbGlja3Mgb24gYW5jaG9yc1xuXHRcdHZhciBSRV9ub1plbnNtb290aCA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylub1plbnNtb290aChcXFxcc3wkKVwiKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHR2YXIgYW5jaG9yID0gZXZlbnQudGFyZ2V0XG5cdFx0XHR3aGlsZSAoYW5jaG9yICYmIGFuY2hvci50YWdOYW1lICE9PSBcIkFcIikge1xuXHRcdFx0XHRhbmNob3IgPSBhbmNob3IucGFyZW50Tm9kZVxuXHRcdFx0fVxuXHRcdFx0Ly8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSB0aGUgY2xpY2sgaWYgaXQgd2Fzbid0IHdpdGggdGhlIHByaW1hcnkgYnV0dG9uLCBvciB3aXRoIHNvbWUgbW9kaWZpZXIga2V5czpcblx0XHRcdGlmICghYW5jaG9yIHx8IGV2ZW50LndoaWNoICE9PSAxIHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5hbHRLZXkpIHtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHQvLyBTYXZlIHRoZSBjdXJyZW50IHNjcm9sbGluZyBwb3NpdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCBmb3Igc2Nyb2xsIHJlc3RvcmF0aW9uOlxuXHRcdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdFx0dmFyIGhpc3RvcnlTdGF0ZSA9IGhpc3Rvcnkuc3RhdGUgJiYgdHlwZW9mIGhpc3Rvcnkuc3RhdGUgPT09IFwib2JqZWN0XCIgPyBoaXN0b3J5LnN0YXRlIDoge31cblx0XHRcdFx0aGlzdG9yeVN0YXRlLnplbnNjcm9sbFkgPSB6ZW5zY3JvbGwuZ2V0WSgpXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBcIlwiKVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Ly8gQXZvaWQgdGhlIENocm9tZSBTZWN1cml0eSBleGNlcHRpb24gb24gZmlsZSBwcm90b2NvbCwgZS5nLiwgZmlsZTovL2luZGV4Lmh0bWxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gRmluZCB0aGUgcmVmZXJlbmNlZCBJRDpcblx0XHRcdHZhciBocmVmID0gYW5jaG9yLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIlxuXHRcdFx0aWYgKGhyZWYuaW5kZXhPZihcIiNcIikgPT09IDAgJiYgIVJFX25vWmVuc21vb3RoLnRlc3QoYW5jaG9yLmNsYXNzTmFtZSkpIHtcblx0XHRcdFx0dmFyIHRhcmdldFkgPSAwXG5cdFx0XHRcdHZhciB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZi5zdWJzdHJpbmcoMSkpXG5cdFx0XHRcdGlmIChocmVmICE9PSBcIiNcIikge1xuXHRcdFx0XHRcdGlmICghdGFyZ2V0RWxlbSkge1xuXHRcdFx0XHRcdFx0Ly8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSB0aGUgY2xpY2sgaWYgdGhlIHRhcmdldCBJRCBpcyBub3QgZm91bmQuXG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFyZ2V0WSA9IHplbnNjcm9sbC5nZXRUb3BPZih0YXJnZXRFbGVtKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0Ly8gQnkgZGVmYXVsdCB0cmlnZ2VyIHRoZSBicm93c2VyJ3MgYGhhc2hjaGFuZ2VgIGV2ZW50Li4uXG5cdFx0XHRcdHZhciBvbkRvbmUgPSBmdW5jdGlvbiAoKSB7IHdpbmRvdy5sb2NhdGlvbiA9IGhyZWYgfVxuXHRcdFx0XHQvLyAuLi51bmxlc3MgdGhlcmUgaXMgYW4gZWRnZSBvZmZzZXQgc3BlY2lmaWVkXG5cdFx0XHRcdHZhciBlZGdlT2Zmc2V0ID0gemVuc2Nyb2xsLnNldHVwKCkuZWRnZU9mZnNldFxuXHRcdFx0XHRpZiAoZWRnZU9mZnNldCkge1xuXHRcdFx0XHRcdHRhcmdldFkgPSBNYXRoLm1heCgwLCB0YXJnZXRZIC0gZWRnZU9mZnNldClcblx0XHRcdFx0XHRpZiAoaXNIaXN0b3J5U3VwcG9ydGVkKSB7XG5cdFx0XHRcdFx0XHRvbkRvbmUgPSBmdW5jdGlvbiAoKSB7IGhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCBocmVmKSB9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHplbnNjcm9sbC50b1kodGFyZ2V0WSwgbnVsbCwgb25Eb25lKVxuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKVxuXG5cdH1cblxuXG5cdHJldHVybiB6ZW5zY3JvbGxcblxuXG59KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9