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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_css_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/css-animate */ "./src/js/parts/css-animate.js");
/* harmony import */ var _parts_css_animate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_parts_css_animate__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/parts/css-animate.js":
/*!*************************************!*\
  !*** ./src/js/parts/css-animate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var buttonEffect = document.querySelectorAll('.btn');
var cardLeave = document.querySelectorAll(".card");
var arrivingSection = document.getElementById('hero');
var leavingSection = document.getElementById('leaving');
var arriveAnimationClasses = ['animate__bounceInLeft', 'animate__bounceIn', 'animate__fadeInUp', 'animate__fadeInBottomLeft', 'animate__rotateInDownLeft', 'animate__rotateInUpLeft'];
var leaveAnimationClasses = ['animate__bounceOutLeft', 'animate__bounceOut', 'animate__fadeOutUp', 'animate__fadeOutBottomLeft', 'animate__rotateOutDownLeft', 'animate__rotateOutUpLeft'];
buttonEffect.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.classList.add('animate__backOutUp');
  });
});

function addArrivingAnimationClass(card) {
  var leavingRandomIndex = Math.floor(Math.random() * leaveAnimationClasses.length);
  var leavingRandomClass = leaveAnimationClasses[leavingRandomIndex];
  var arrivingRandomIndex = Math.floor(Math.random() * arriveAnimationClasses.length);
  var arriveRandomClass = arriveAnimationClasses[arrivingRandomIndex];
  card.classList.remove(leavingRandomClass);
  card.classList.add(arriveRandomClass);
}

function addRandomAnimationClass(card) {
  var leavingRandomIndex = Math.floor(Math.random() * leaveAnimationClasses.length);
  var leavingRandomClass = leaveAnimationClasses[leavingRandomIndex];
  var arrivingRandomIndex = Math.floor(Math.random() * arriveAnimationClasses.length);
  var arriveRandomClass = arriveAnimationClasses[arrivingRandomIndex];
  card.classList.remove('animate__fadeInUp');
  card.classList.remove(arriveRandomClass);
  card.classList.add(leavingRandomClass);
}

document.addEventListener('scroll', function () {
  var arrivingSectionTop = arrivingSection.getBoundingClientRect().bottom;

  if (arrivingSectionTop <= window.innerHeight) {
    cardLeave.forEach(function (card) {
      addArrivingAnimationClass(card);
    });
  }
});
document.addEventListener('scroll', function () {
  var leavingSectionBottom = leavingSection.getBoundingClientRect().bottom;

  if (leavingSectionBottom <= window.innerHeight) {
    cardLeave.forEach(function (card) {
      addRandomAnimationClass(card);
    });
  }
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/orionpalmer/Desktop/animate/dd-animate-test/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFydHMvY3NzLWFuaW1hdGUuanMiXSwibmFtZXMiOlsiYnV0dG9uRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FyZExlYXZlIiwiYXJyaXZpbmdTZWN0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJsZWF2aW5nU2VjdGlvbiIsImFycml2ZUFuaW1hdGlvbkNsYXNzZXMiLCJsZWF2ZUFuaW1hdGlvbkNsYXNzZXMiLCJmb3JFYWNoIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsImFkZEFycml2aW5nQW5pbWF0aW9uQ2xhc3MiLCJjYXJkIiwibGVhdmluZ1JhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwibGVhdmluZ1JhbmRvbUNsYXNzIiwiYXJyaXZpbmdSYW5kb21JbmRleCIsImFycml2ZVJhbmRvbUNsYXNzIiwicmVtb3ZlIiwiYWRkUmFuZG9tQW5pbWF0aW9uQ2xhc3MiLCJhcnJpdmluZ1NlY3Rpb25Ub3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImxlYXZpbmdTZWN0aW9uQm90dG9tIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLE1BQTFCLENBQXJCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLENBQWxCO0FBRUEsSUFBTUUsZUFBZSxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBeEI7QUFDQSxJQUFNQyxjQUFjLEdBQUdMLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixTQUF4QixDQUF2QjtBQUVBLElBQU1FLHNCQUFzQixHQUFHLENBQzlCLHVCQUQ4QixFQUNMLG1CQURLLEVBQ2dCLG1CQURoQixFQUNxQywyQkFEckMsRUFDa0UsMkJBRGxFLEVBQytGLHlCQUQvRixDQUEvQjtBQUlBLElBQU1DLHFCQUFxQixHQUFHLENBQUMsd0JBQUQsRUFBMkIsb0JBQTNCLEVBQWlELG9CQUFqRCxFQUF1RSw0QkFBdkUsRUFBcUcsNEJBQXJHLEVBQW1JLDBCQUFuSSxDQUE5QjtBQUVBUixZQUFZLENBQUNTLE9BQWIsQ0FBcUIsVUFBQUMsR0FBRyxFQUFJO0FBQzNCQSxLQUFHLENBQUNDLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFDbkNELE9BQUcsQ0FBQ0UsU0FBSixDQUFjQyxHQUFkLENBQWtCLG9CQUFsQjtBQUNBLEdBRkQ7QUFHQSxDQUpEOztBQU1BLFNBQVNDLHlCQUFULENBQW1DQyxJQUFuQyxFQUF5QztBQUN4QyxNQUFNQyxrQkFBa0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQlgscUJBQXFCLENBQUNZLE1BQWpELENBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdiLHFCQUFxQixDQUFDUSxrQkFBRCxDQUFoRDtBQUVBLE1BQU1NLG1CQUFtQixHQUFHTCxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCWixzQkFBc0IsQ0FBQ2EsTUFBbEQsQ0FBNUI7QUFDQSxNQUFNRyxpQkFBaUIsR0FBR2hCLHNCQUFzQixDQUFDZSxtQkFBRCxDQUFoRDtBQUVBUCxNQUFJLENBQUNILFNBQUwsQ0FBZVksTUFBZixDQUFzQkgsa0JBQXRCO0FBQ0FOLE1BQUksQ0FBQ0gsU0FBTCxDQUFlQyxHQUFmLENBQW1CVSxpQkFBbkI7QUFDQTs7QUFFRCxTQUFTRSx1QkFBVCxDQUFpQ1YsSUFBakMsRUFBdUM7QUFDdEMsTUFBTUMsa0JBQWtCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JYLHFCQUFxQixDQUFDWSxNQUFqRCxDQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHYixxQkFBcUIsQ0FBQ1Esa0JBQUQsQ0FBaEQ7QUFFQSxNQUFNTSxtQkFBbUIsR0FBR0wsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQlosc0JBQXNCLENBQUNhLE1BQWxELENBQTVCO0FBQ0EsTUFBTUcsaUJBQWlCLEdBQUdoQixzQkFBc0IsQ0FBQ2UsbUJBQUQsQ0FBaEQ7QUFFQVAsTUFBSSxDQUFDSCxTQUFMLENBQWVZLE1BQWYsQ0FBc0IsbUJBQXRCO0FBQ0FULE1BQUksQ0FBQ0gsU0FBTCxDQUFlWSxNQUFmLENBQXNCRCxpQkFBdEI7QUFDQVIsTUFBSSxDQUFDSCxTQUFMLENBQWVDLEdBQWYsQ0FBbUJRLGtCQUFuQjtBQUNBOztBQUVEcEIsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxZQUFNO0FBQ3pDLE1BQU1lLGtCQUFrQixHQUFHdEIsZUFBZSxDQUFDdUIscUJBQWhCLEdBQXdDQyxNQUFuRTs7QUFDQSxNQUFJRixrQkFBa0IsSUFBSUcsTUFBTSxDQUFDQyxXQUFqQyxFQUE4QztBQUM3QzNCLGFBQVMsQ0FBQ00sT0FBVixDQUFrQixVQUFBTSxJQUFJLEVBQUk7QUFDekJELCtCQUF5QixDQUFDQyxJQUFELENBQXpCO0FBQ0EsS0FGRDtBQUdBO0FBQ0QsQ0FQRDtBQVNBZCxRQUFRLENBQUNVLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFlBQU07QUFDekMsTUFBTW9CLG9CQUFvQixHQUFHekIsY0FBYyxDQUFDcUIscUJBQWYsR0FBdUNDLE1BQXBFOztBQUNBLE1BQUlHLG9CQUFvQixJQUFJRixNQUFNLENBQUNDLFdBQW5DLEVBQWdEO0FBQy9DM0IsYUFBUyxDQUFDTSxPQUFWLENBQWtCLFVBQUFNLElBQUksRUFBSTtBQUN6QlUsNkJBQXVCLENBQUNWLElBQUQsQ0FBdkI7QUFDQSxLQUZEO0FBR0E7QUFDRCxDQVBELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuL3BhcnRzL2Nzcy1hbmltYXRlJzsiLCJjb25zdCBidXR0b25FZmZlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuJyk7XG5jb25zdCBjYXJkTGVhdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIik7XG5cbmNvbnN0IGFycml2aW5nU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZXJvJyk7XG5jb25zdCBsZWF2aW5nU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWF2aW5nJyk7XG5cbmNvbnN0IGFycml2ZUFuaW1hdGlvbkNsYXNzZXMgPSBbXG5cdCdhbmltYXRlX19ib3VuY2VJbkxlZnQnLCAnYW5pbWF0ZV9fYm91bmNlSW4nLCAnYW5pbWF0ZV9fZmFkZUluVXAnLCAnYW5pbWF0ZV9fZmFkZUluQm90dG9tTGVmdCcsICdhbmltYXRlX19yb3RhdGVJbkRvd25MZWZ0JywgJ2FuaW1hdGVfX3JvdGF0ZUluVXBMZWZ0J1xuXVxuXG5jb25zdCBsZWF2ZUFuaW1hdGlvbkNsYXNzZXMgPSBbJ2FuaW1hdGVfX2JvdW5jZU91dExlZnQnLCAnYW5pbWF0ZV9fYm91bmNlT3V0JywgJ2FuaW1hdGVfX2ZhZGVPdXRVcCcsICdhbmltYXRlX19mYWRlT3V0Qm90dG9tTGVmdCcsICdhbmltYXRlX19yb3RhdGVPdXREb3duTGVmdCcsICdhbmltYXRlX19yb3RhdGVPdXRVcExlZnQnXTtcblxuYnV0dG9uRWZmZWN0LmZvckVhY2goYnRuID0+IHtcblx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2JhY2tPdXRVcCcpO1xuXHR9KTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRBcnJpdmluZ0FuaW1hdGlvbkNsYXNzKGNhcmQpIHtcblx0Y29uc3QgbGVhdmluZ1JhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVhdmVBbmltYXRpb25DbGFzc2VzLmxlbmd0aCk7XG5cdGNvbnN0IGxlYXZpbmdSYW5kb21DbGFzcyA9IGxlYXZlQW5pbWF0aW9uQ2xhc3Nlc1tsZWF2aW5nUmFuZG9tSW5kZXhdO1xuXG5cdGNvbnN0IGFycml2aW5nUmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJpdmVBbmltYXRpb25DbGFzc2VzLmxlbmd0aCk7XG5cdGNvbnN0IGFycml2ZVJhbmRvbUNsYXNzID0gYXJyaXZlQW5pbWF0aW9uQ2xhc3Nlc1thcnJpdmluZ1JhbmRvbUluZGV4XTtcblxuXHRjYXJkLmNsYXNzTGlzdC5yZW1vdmUobGVhdmluZ1JhbmRvbUNsYXNzKTtcblx0Y2FyZC5jbGFzc0xpc3QuYWRkKGFycml2ZVJhbmRvbUNsYXNzKTtcbn1cblxuZnVuY3Rpb24gYWRkUmFuZG9tQW5pbWF0aW9uQ2xhc3MoY2FyZCkge1xuXHRjb25zdCBsZWF2aW5nUmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZWF2ZUFuaW1hdGlvbkNsYXNzZXMubGVuZ3RoKTtcblx0Y29uc3QgbGVhdmluZ1JhbmRvbUNsYXNzID0gbGVhdmVBbmltYXRpb25DbGFzc2VzW2xlYXZpbmdSYW5kb21JbmRleF07XG5cblx0Y29uc3QgYXJyaXZpbmdSYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycml2ZUFuaW1hdGlvbkNsYXNzZXMubGVuZ3RoKTtcblx0Y29uc3QgYXJyaXZlUmFuZG9tQ2xhc3MgPSBhcnJpdmVBbmltYXRpb25DbGFzc2VzW2Fycml2aW5nUmFuZG9tSW5kZXhdO1xuXG5cdGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZV9fZmFkZUluVXAnKTtcblx0Y2FyZC5jbGFzc0xpc3QucmVtb3ZlKGFycml2ZVJhbmRvbUNsYXNzKTtcblx0Y2FyZC5jbGFzc0xpc3QuYWRkKGxlYXZpbmdSYW5kb21DbGFzcyk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0Y29uc3QgYXJyaXZpbmdTZWN0aW9uVG9wID0gYXJyaXZpbmdTZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcblx0aWYgKGFycml2aW5nU2VjdGlvblRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcblx0XHRjYXJkTGVhdmUuZm9yRWFjaChjYXJkID0+IHtcblx0XHRcdGFkZEFycml2aW5nQW5pbWF0aW9uQ2xhc3MoY2FyZCk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG5cdGNvbnN0IGxlYXZpbmdTZWN0aW9uQm90dG9tID0gbGVhdmluZ1NlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuXHRpZiAobGVhdmluZ1NlY3Rpb25Cb3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KSB7XG5cdFx0Y2FyZExlYXZlLmZvckVhY2goY2FyZCA9PiB7XG5cdFx0XHRhZGRSYW5kb21BbmltYXRpb25DbGFzcyhjYXJkKTtcblx0XHR9KTtcblx0fVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9