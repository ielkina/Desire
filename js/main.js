/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_webp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/webp.js */ \"./src/js/modules/webp.js\");\n/* harmony import */ var _modules_active_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/active-link.js */ \"./src/js/modules/active-link.js\");\n\r\n_modules_webp_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();\r\n// import * as modulesFunctions from \"./modules/modals.js\";\r\n// modulesFunctions.modals();\r\n//модально окно первой страници переписать\r\n$(function () {\r\n  $('.header__btn').on('click', function(){\r\n    $('.rightside-menu').removeClass('rightside-menu--close');\r\n  });\r\n  $('.rightside-menu__close').on('click', function(){\r\n    $('.rightside-menu').addClass('rightside-menu--close');\r\n  });\r\n})\r\n\r\n;\r\n\r\n(0,_modules_active_link_js__WEBPACK_IMPORTED_MODULE_1__.setActiveNavLink)();\n\n//# sourceURL=webpack://new/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/active-link.js":
/*!***************************************!*\
  !*** ./src/js/modules/active-link.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setActiveNavLink: function() { return /* binding */ setActiveNavLink; }\n/* harmony export */ });\nfunction setActiveNavLink(\r\n  selector = '.link',\r\n  activeClass = 'active--link'\r\n) {\r\n  const links = document.querySelectorAll(selector);\r\n  let currentPath = window.location.pathname.split('/').pop();\r\n  if (!currentPath || currentPath === '/') currentPath = 'index.html';\r\n\r\n  links.forEach(link => {\r\n    const href = link.getAttribute('href');\r\n    if (href === currentPath) {\r\n      link.classList.remove('link');\r\n      link.classList.add(activeClass);\r\n    } else {\r\n      link.classList.add('link');\r\n      link.classList.remove(activeClass);\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://new/./src/js/modules/active-link.js?");

/***/ }),

/***/ "./src/js/modules/webp.js":
/*!********************************!*\
  !*** ./src/js/modules/webp.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isWebp: function() { return /* binding */ isWebp; }\n/* harmony export */ });\n//Проверка поддержки webp, добавление класса webp или no-webp для HTML\nfunction isWebp() {\n\t//проверка поддержки webp\n\tfunction testWebp(callback) {\n\t\tlet webP = new Image();\n\t\twebP.onload = webP.onerror = function () {\n\t\t\tcallback(webP.height == 2);\n\t\t};\n\t\twebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';\n\t}\n\t//Добавление класса _webp или _no-webp для HTML\n\ttestWebp(function (support) {\n\t\tlet className = support === true ? 'webp' : 'no-webp';\n\t\tdocument.documentElement.classList.add(className);\n\t});\n}\n\n\n//# sourceURL=webpack://new/./src/js/modules/webp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;