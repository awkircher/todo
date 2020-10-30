/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classDef.js":
/*!*************************!*\
  !*** ./src/classDef.js ***!
  \*************************/
/*! namespace exports */
/*! export create [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => /* binding */ create\n/* harmony export */ });\nclass toDo {\n    constructor(title, description, list, priority, due, done) {\n        this.title = title;\n        this.description = description;\n        this.list = list;\n        this.priority = priority;\n        this.due = due;\n        this.done = done;\n    }\n    edit(field, value) {\n        switch (field) {\n            case 'title': \n                this.title = value;\n                break;\n            case 'description':\n                this.description = value;\n                break;\n            case 'list':\n                this.list = value;\n                break;\n            case 'priority':\n                this.priority = value;\n                break;\n            case 'due':\n                this.due = value;\n                break;\n            case 'done':\n                this.done = value;\n                break;\n        }\n        return this;\n    }\n}\n\nconst allToDos = [];\n\nfunction create(form) {\n    let toDoItem = new toDo(form[0], form[1], form[2], form[3], form[4], form[5]);\n    allToDos.push(toDoItem);\n    return allToDos;\n}\n\n\n\n//# sourceURL=webpack://todo/./src/classDef.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classDef_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classDef.js */ \"./src/classDef.js\");\n/* harmony import */ var _itemTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemTemplate.js */ \"./src/itemTemplate.js\");\n\n\n\nconst task = [\n    'Mark this task as done!',\n    null,\n    null,\n    null,\n    false,\n];\n\nlet allToDos = (0,_classDef_js__WEBPACK_IMPORTED_MODULE_0__.create)(task);\nconsole.log(allToDos);\n(0,_itemTemplate_js__WEBPACK_IMPORTED_MODULE_1__.show)(allToDos);\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/itemTemplate.js":
/*!*****************************!*\
  !*** ./src/itemTemplate.js ***!
  \*****************************/
/*! namespace exports */
/*! export show [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"show\": () => /* binding */ show\n/* harmony export */ });\nfunction show(content) {\n    const item = document.querySelector('#index0');\n    item.textContent = content[0].title;\n};\n\n\n\n//# sourceURL=webpack://todo/./src/itemTemplate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;