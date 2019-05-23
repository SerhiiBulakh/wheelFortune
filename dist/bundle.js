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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_javascript_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/javascript/app */ "./src/javascript/app.js");

new _src_javascript_app__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/javascript/app.js":
/*!*******************************!*\
  !*** ./src/javascript/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_player_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/player.service */ "./src/javascript/helpers/player.service.js");
/* harmony import */ var _wheelFortuneView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wheelFortuneView */ "./src/javascript/wheelFortuneView.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class App {
  constructor() {
    this.currentPlayer;
    this.startApp();
  }

  startApp() {
    App.form.addEventListener('submit', this.login);
  }

  async login(event) {
    try {
      event.preventDefault();
      const password = App.form.password.value;
      const name = App.form.username.value;
      const player = await _helpers_player_service__WEBPACK_IMPORTED_MODULE_0__["playerService"].login({
        name,
        password
      });
      this.currentPlayer = player;
      App.form.classList.toggle('active');
      App.rootElement.classList.toggle('active');
      console.log(player);
      App.score.innerHTML = player.score;
      _wheelFortuneView__WEBPACK_IMPORTED_MODULE_1__["wheelFortune"].startGame(player);
    } catch (error) {
      console.log(error);
    }
  }

}

_defineProperty(App, "rootElement", document.getElementById('root'));

_defineProperty(App, "form", document.getElementById('login'));

_defineProperty(App, "score", document.getElementById('count'));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/javascript/helpers/apiHelper.js":
/*!*********************************************!*\
  !*** ./src/javascript/helpers/apiHelper.js ***!
  \*********************************************/
/*! exports provided: callApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApi", function() { return callApi; });
const API_URL = 'http://localhost:3000/';

function callApi(endpoind, options) {
  console.log(options);
  const url = API_URL + endpoind;
  return fetch(url, options).then(response => response.ok ? response.json() : Promise.reject(Error('Failed to load'))).catch(error => {
    throw error;
  });
}



/***/ }),

/***/ "./src/javascript/helpers/player.service.js":
/*!**************************************************!*\
  !*** ./src/javascript/helpers/player.service.js ***!
  \**************************************************/
/*! exports provided: playerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerService", function() { return playerService; });
/* harmony import */ var _apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiHelper */ "./src/javascript/helpers/apiHelper.js");


class PlayerService {
  async login(data) {
    try {
      const endpoint = 'login';
      const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      const apiResult = await Object(_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(endpoint, options);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getSegments() {
    try {
      const endpoint = `segments`;
      const options = {
        method: 'GET',
        mode: 'cors'
      };
      const apiResult = await Object(_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(endpoint, options);
      console.log(apiResult);
      return apiResult.segments;
    } catch (error) {
      throw error;
    }
  }

  async UpdateScore(data) {
    try {
      const endpoint = `spin`;
      const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      const apiResult = await Object(_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(endpoint, options);
      console.log(apiResult);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

}

const playerService = new PlayerService();

/***/ }),

/***/ "./src/javascript/view.js":
/*!********************************!*\
  !*** ./src/javascript/view.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class View {
  constructor() {
    _defineProperty(this, "element", void 0);
  }

  createElement({
    tagName,
    className = '',
    attributes = {}
  }) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./src/javascript/wheelFortuneView.js":
/*!********************************************!*\
  !*** ./src/javascript/wheelFortuneView.js ***!
  \********************************************/
/*! exports provided: wheelFortune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wheelFortune", function() { return wheelFortune; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/view.js");
/* harmony import */ var _helpers_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/player.service */ "./src/javascript/helpers/player.service.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class WheelFortune {
  constructor() {}

  async startGame(play) {
    WheelFortune.player = play;
    const segments = await _helpers_player_service__WEBPACK_IMPORTED_MODULE_1__["playerService"].getSegments();
    const r = this.createWheelFortune(segments);
    WheelFortune.spin.addEventListener('click', () => {
      r.stopAnimation(false);
      r.rotationAngle = r.rotationAngle % 360;
      r.startAnimation();
    });
  }

  createWheelFortune(segments) {
    const a = segments.map(v => {
      return {
        'text': v + ''
      };
    });
    let theWheel = new Winwheel({
      'numSegments': 16,
      'outerRadius': 212,
      'innerRadius': 75,
      'textFontSize': 24,
      'textOrientation': 'vertical',
      'textAlignment': 'outer',
      'fillStyle': '#7de6ef',
      'segments': [...a],
      'animation': {
        'type': 'spinToStop',
        'duration': 5,
        'callbackFinished': this.alertPrize,
        'spins': 8
      }
    });
    return theWheel;
  }

  async alertPrize(indicatedSegment) {
    WheelFortune.player.score += +indicatedSegment.text;
    const a = await _helpers_player_service__WEBPACK_IMPORTED_MODULE_1__["playerService"].UpdateScore(WheelFortune.player);
    WheelFortune.count.innerHTML = a.player.score;
  }

}

_defineProperty(WheelFortune, "spin", document.getElementById('spin'));

_defineProperty(WheelFortune, "count", document.getElementById('count'));

_defineProperty(WheelFortune, "player", {});

const wheelFortune = new WheelFortune();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map