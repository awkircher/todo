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
/*! export markDone [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => /* binding */ create,\n/* harmony export */   \"markDone\": () => /* binding */ markDone\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ \"./src/database.js\");\n\n\nclass toDo {\n    constructor(title, description, list, priority, due, done) {\n        this.title = title;\n        this.description = description;\n        this.list = list;\n        this.priority = priority;\n        this.due = due;\n        this.done = done;\n    }\n    edit(field, value) {\n        switch (field) {\n            case 'title': \n                this.title = value;\n                break;\n            case 'description':\n                this.description = value;\n                break;\n            case 'list':\n                this.list = value;\n                break;\n            case 'priority':\n                this.priority = value;\n                break;\n            case 'due':\n                this.due = value;\n                break;\n            case 'done':\n                this.done = value;\n                break;\n        }\n        return this;\n    }\n}\n\nfunction create(form) {\n    let toDoItem = new toDo(form[0].value, form[1].value, form[2].value, form[3].value, form[4].value);\n    return toDoItem;\n}\n\nfunction markDone(event) {\n    let id = event.currentTarget.dataset.index;\n    const last = (id.length) - 1;\n    id = id.charAt(last);\n    const property = 'due';\n    const value = true;\n    _database__WEBPACK_IMPORTED_MODULE_0__.Data.update(id, property, value);\n}\n\n\n\n//# sourceURL=webpack://todo/./src/classDef.js?");

/***/ }),

/***/ "./src/database.js":
/*!*************************!*\
  !*** ./src/database.js ***!
  \*************************/
/*! namespace exports */
/*! export Data [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Data\": () => /* binding */ Data\n/* harmony export */ });\nconst Data = (function() {\n    let allToDos = [];\n    const add = function(item) {\n        allToDos.unshift(item);\n        localStorage.setItem(\"allToDos\", JSON.stringify(allToDos));\n        return allToDos;\n    };\n    const get = function() {\n        let retrievedList = localStorage.getItem(\"allToDos\");\n        allToDos = JSON.parse(retrievedList) || [];\n        return allToDos;\n    }\n    const update = function(id, property, value) {\n        let allToDos = get();\n        let itemToUpdate = allToDos[id];\n        itemToUpdate[`${property}`] = value;\n        localStorage.setItem(\"allToDos\", JSON.stringify(allToDos));\n        console.log(allToDos);\n        return allToDos;\n    }\n    return {add, get, update}; //Data.add, Data.get\n})();\n\n\n\n//# sourceURL=webpack://todo/./src/database.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classDef_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classDef.js */ \"./src/classDef.js\");\n/* harmony import */ var _itemTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemTemplate.js */ \"./src/itemTemplate.js\");\n/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database.js */ \"./src/database.js\");\n\n\n\n//import { getTestData } from './testData.js'\n\n(0,_itemTemplate_js__WEBPACK_IMPORTED_MODULE_1__.updateList)(_database_js__WEBPACK_IMPORTED_MODULE_2__.Data.get()); //view onscreen\n(0,_itemTemplate_js__WEBPACK_IMPORTED_MODULE_1__.updateNav)(_database_js__WEBPACK_IMPORTED_MODULE_2__.Data.get());\n\nconst form = document.querySelector('#createNew');\nform.addEventListener('submit', function(event){\n    const todo = (0,_classDef_js__WEBPACK_IMPORTED_MODULE_0__.create)(this);\n    _database_js__WEBPACK_IMPORTED_MODULE_2__.Data.add(todo);\n});\n\nconst checkboxes = document.querySelectorAll('#listContainer div');\nArray.from(checkboxes).forEach(element => {\n    element.addEventListener(\"change\", _classDef_js__WEBPACK_IMPORTED_MODULE_0__.markDone);\n});\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/itemTemplate.js":
/*!*****************************!*\
  !*** ./src/itemTemplate.js ***!
  \*****************************/
/*! namespace exports */
/*! export updateList [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateNav [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateList\": () => /* binding */ updateList,\n/* harmony export */   \"updateNav\": () => /* binding */ updateNav\n/* harmony export */ });\nconst listContainer = document.querySelector(\"#listContainer\");\nconst sideNav = document.querySelector(\"#sideNav\");\n\nfunction updateList(data) {\n    data.forEach((todo, index) => {\n        let parent = document.createElement('div');\n        parent.setAttribute(\"data-index\", `index${index}`);\n        listContainer.appendChild(parent);\n\n        let domTitle = document.createElement('h1');\n        let domDescription = document.createElement('h2');\n        let domPriority = document.createElement('p');\n        let domDue = document.createElement('p');\n        let domDone = document.createElement('input');\n\n        parent.appendChild(domTitle);\n        parent.appendChild(domDescription);\n        parent.appendChild(domPriority);\n        parent.appendChild(domDue);\n        parent.appendChild(domDone);\n        \n        domTitle.textContent = todo.title;\n        domDescription.textContent = todo.description;\n        domPriority.textContent = todo.priority;\n        domDue.textContent = todo.due;\n        domDone.setAttribute(\"type\", \"checkbox\");\n    });\n}\n\nfunction updateNav(data) {\n    let allListProps = {};\n    data.forEach(todo => {\n        let listName = todo.list;\n        if (!allListProps.hasOwnProperty(`${listName}`)) {\n            allListProps[`${listName}`] = true;\n        }\n        return allListProps;\n    });\n    for (const property in allListProps) {\n        const item = document.createElement('div');\n        sideNav.appendChild(item);\n        item.setAttribute(\"id\", `${property}`);\n        item.textContent = `${property}`;\n    }\n}\n\n\n\n//# sourceURL=webpack://todo/./src/itemTemplate.js?");

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