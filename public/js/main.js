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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals.js */ \"./src/js/modules/modals.js\");\n// import * as webpFunctions from \"./modules/webp.js\";\r\n\r\n// webpFunctions.isWebp();\r\n_modules_modals_js__WEBPACK_IMPORTED_MODULE_0__.modals();\r\n// $(function () {\r\n//   $('.header__btn').on('click', function(){\r\n//     $('.rightside-menu').removeClass('rightside-menu--close');\r\n//   });\r\n//   $('.rightside-menu__close').on('click', function(){\r\n//     $('.rightside-menu').addClass('rightside-menu--close');\r\n//   });\r\n// })\n\n//# sourceURL=webpack://new/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modals\": function() { return /* binding */ modals; }\n/* harmony export */ });\nfunction modals() {\r\n  const modalBtns = document.querySelectorAll('.header__btn');\r\n  const modals = document.querySelectorAll('.rightside-menu__close');\r\n  const body = document.body;\r\n\r\n  function openModal(elem) {\r\n    elem.classList.add('_active');\r\n    body.classList.add('_locked');\r\n  }\r\n\r\n  function closeModal(e) {\r\n    if (e.target.classList.contains('rightside-menu__close') || e.target.closest('.rightside-menu__close') || e.target.classList.contains('modal-bg')) {\r\n      e.target.closest('.header__btn').classList.remove('_active');\r\n      body.classList.remove('_locked');\r\n    }\r\n  }\r\n\r\n  modalBtns.forEach(btn => {\r\n    btn.addEventListener('click', (e) => {\r\n      let data = e.target.dataset.modalOpen;\r\n      modals.forEach(modal => {\r\n        if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest(\"._modal-open\").dataset.modalOpen) {\r\n          openModal(modal);\r\n        }\r\n      });\r\n    });\r\n  });\r\n  modals.forEach(modal => {\r\n    modal.addEventListener('click', e => closeModal(e));\r\n  });\r\n\r\n  window.addEventListener('keydown', e => {\r\n    modals.forEach(modal => {\r\n      if (e.key === \"Escape\" && modal.classList.contains('_active')) {\r\n        modal.classList.remove('_active');\r\n        body.classList.remove('_locked');\r\n      }\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://new/./src/js/modules/modals.js?");

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