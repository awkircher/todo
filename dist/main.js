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

/***/ "./src/ToDo.js":
/*!*********************!*\
  !*** ./src/ToDo.js ***!
  \*********************/
/*! namespace exports */
/*! export ToDo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDo\": () => /* binding */ ToDo\n/* harmony export */ });\nclass ToDo {\n    constructor(id, title, description, list, priority, due, done) {\n        this.id = id;\n        this.title = title;\n        this.description = description;\n        this.list = list;\n        this.priority = priority;\n        this.due = due;\n        this.done = done;\n    }\n    edit(field, value) {\n        switch (field) {\n            case 'title': \n                this.title = value;\n                break;\n            case 'description':\n                this.description = value;\n                break;\n            case 'list':\n                this.list = value;\n                break;\n            case 'priority':\n                this.priority = value;\n                break;\n            case 'due':\n                this.due = value;\n                break;\n            case 'done':\n                this.done = value;\n                break;\n        }\n        return this;\n    }\n}\n\n\n\n//# sourceURL=webpack://todo/./src/ToDo.js?");

/***/ }),

/***/ "./src/database.js":
/*!*************************!*\
  !*** ./src/database.js ***!
  \*************************/
/*! namespace exports */
/*! export Data [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Data\": () => /* binding */ Data\n/* harmony export */ });\n/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ \"./src/ToDo.js\");\n\n\nconst Data = (function() {\n    let allToDos = [];\n    let activeToDos = [];\n    const add = function(item) {\n        allToDos.unshift(item);\n        localStorage.setItem(\"allToDos\", JSON.stringify(allToDos));\n        return allToDos;\n    };\n    const get = function() {\n        let retrievedList = localStorage.getItem(\"allToDos\");\n        allToDos = JSON.parse(retrievedList) || [];\n        allToDos.forEach((element, index) => {\n            let todo = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo;\n            allToDos[index] = Object.assign(todo, element);\n        });\n        return allToDos;\n    }\n    const getActive = function() {\n        let allToDos = get();\n        activeToDos = allToDos.filter(todo => todo.done !== true);\n        return activeToDos;\n    }\n    const getFromList = function(listName) {\n        //placeholder for when I have filtering by list\n    }\n    const update = function(index, itemToUpdate) {\n        let allToDos = getActive();\n        activeToDos[index] = Object.assign(activeToDos[index], itemToUpdate);\n        localStorage.setItem(\"allToDos\", JSON.stringify(allToDos));\n        console.log(allToDos);\n        return allToDos;\n    }\n    return {add, get, update, getActive};\n})();\n\n\n\n//# sourceURL=webpack://todo/./src/database.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export formSubmit [provided] [no usage info] [missing usage info prevents renaming] */
/*! export markDone [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"markDone\": () => /* binding */ markDone,\n/* harmony export */   \"formSubmit\": () => /* binding */ formSubmit\n/* harmony export */ });\n/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo.js */ \"./src/ToDo.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./src/view.js\");\n/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database.js */ \"./src/database.js\");\n\n\n\n//import { getTestData } from './testData.js'\nlet i = 0;\nfunction countTurn() {\n    ++i;\n    return i;\n}\n\nfunction formSubmit(event) {\n    const id = countTurn();\n    const todo = new _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(id, this[0].value, this[1].value, this[2].value, this[3].value, this[4].value, false);\n    _database_js__WEBPACK_IMPORTED_MODULE_2__.Data.add(todo);\n};\n\nfunction markDone(event) {\n    console.log('checkbox checked!');\n    const index = event.currentTarget.dataset.index;\n    const theData = _database_js__WEBPACK_IMPORTED_MODULE_2__.Data.getActive();\n    const itemToUpdate = theData[index].edit('done', true);\n    _database_js__WEBPACK_IMPORTED_MODULE_2__.Data.update(index, itemToUpdate);\n    (0,_view_js__WEBPACK_IMPORTED_MODULE_1__.updateList)(_database_js__WEBPACK_IMPORTED_MODULE_2__.Data.getActive());\n    (0,_view_js__WEBPACK_IMPORTED_MODULE_1__.updateNav)(_database_js__WEBPACK_IMPORTED_MODULE_2__.Data.getActive());\n};\n\n// form submission will reload the page, calling these updates\n(0,_view_js__WEBPACK_IMPORTED_MODULE_1__.updateList)(_database_js__WEBPACK_IMPORTED_MODULE_2__.Data.getActive());\n(0,_view_js__WEBPACK_IMPORTED_MODULE_1__.updateNav)(_database_js__WEBPACK_IMPORTED_MODULE_2__.Data.getActive());\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! namespace exports */
/*! export updateList [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateNav [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateList\": () => /* binding */ updateList,\n/* harmony export */   \"updateNav\": () => /* binding */ updateNav\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nconst listContainer = document.querySelector(\"#listContainer\");\nconst sideNav = document.querySelector(\"#sideNav\");\nconst form = document.querySelector('#createNew');\n\nform.addEventListener('submit', _index_js__WEBPACK_IMPORTED_MODULE_0__.formSubmit);\n\nfunction clear(element) {\n    while (element.firstChild) {\n        element.removeChild(element.firstChild);\n    };\n}\n\nfunction updateList(data) {\n    console.log('you called updateList');\n    clear(listContainer);\n    data.forEach((todo, index) => {\n        let parent = document.createElement('div');\n        parent.setAttribute(\"data-index\", `${index}`);\n        parent.setAttribute(\"class\", \"listItem\");\n        parent.addEventListener(\"change\", _index_js__WEBPACK_IMPORTED_MODULE_0__.markDone);\n        listContainer.appendChild(parent);\n        \n        let titleCont = document.createElement('div');\n        titleCont.setAttribute(\"class\", \"titleContainer\");\n        let domTitle = document.createElement('h1');\n        let domDescription = document.createElement('h2');\n        let metaCont = document.createElement('div');\n        metaCont.setAttribute(\"class\", \"metaContainer\");\n        let domPriority = document.createElement('p');\n        let domDue = document.createElement('p');\n        let domDone = document.createElement('input');\n\n        parent.appendChild(titleCont);\n        parent.appendChild(metaCont);\n        \n        titleCont.appendChild(domTitle);\n        titleCont.appendChild(domDescription);\n        metaCont.appendChild(domDue);\n        metaCont.appendChild(domPriority);\n        parent.appendChild(domDone);\n        \n        domTitle.textContent = todo.title;\n        domDescription.textContent = todo.description;\n        domDue.textContent = todo.due;\n        domPriority.textContent = todo.priority;\n        domDone.setAttribute(\"type\", \"checkbox\");\n    });\n}\n\nfunction updateNav(data) {\n    clear(sideNav);\n    let allListProps = {};\n    data.forEach(todo => {\n        let listName = todo.list;\n        if (!allListProps.hasOwnProperty(`${listName}`)) {\n            allListProps[`${listName}`] = true;\n        }\n        return allListProps;\n    });\n    for (const property in allListProps) {\n        const item = document.createElement('div');\n        sideNav.appendChild(item);\n        item.setAttribute(\"id\", `${property}`);\n        item.textContent = `${property}`;\n    }\n}\n\n\n\n//# sourceURL=webpack://todo/./src/view.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;