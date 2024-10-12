/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --bg-color: #f9f9f9;\n    --text-color: #333333;\n    --completed-color: #a8e6cf;\n    --pending-color: #d1e8e2;\n    --overdue-color: #ff8b94;\n    --accent-color: #ffeaa7;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box; /* Ensures padding and margin are included in element's total width/height */\n}\n\nbody {\n    font-family: 'Kanit', sans-serif; /* Fallback font added */\n    background-color: var(--bg-color);\n    color: var(--text-color);\n}\n\n.wrapper {\n    display: flex;\n    flex-direction: row; /* Stacks items horizontally */\n    height: 100vh; /* Full height of the viewport */\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column; /* Stack sidebar items vertically */\n    justify-content: flex-start;\n    font-size: large;\n    font-weight: 300;\n    line-height: 1.5; /* More reasonable line height for readability */\n    background-color: #2c3e50;\n    color: white;\n    padding: 45px;\n    width: 250px; /* Fixed width for sidebar */\n    height: 100vh; /* Full height of the sidebar */\n}\n\nh4 {\n    font-size: 25px;\n    margin-bottom: 20px; /* Space below heading */\n}\n\n.projectBtn {\n    border: 0;\n    background: none;\n    padding: 0;\n    font-family: 'Kanit';\n    outline: inherit;\n    font-size: larger;\n    cursor: pointer;\n    margin-bottom: 10px; /* Space between items */\n    transition: color 0.3s; /* Smooth color transition on hover */\n}\n\n.projectBtn:hover {\n    color: var(--accent-color); /* Change color on hover */\n}\n\n.projectList{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.listArea {\n    position: relative;\n    top: 150px; /* Adjust position based on sidebar */\n    padding: 20px; /* Inner spacing for list area */\n    flex: 1; /* Allow the list area to grow */\n}\n\n.list-item {\n    background-color: var(--pending-color); /* Use a variable for colors */\n    margin: 10px auto; /* Center the list item and add vertical spacing */\n    padding: 20px 10px; /* Space inside the item (20px top/bottom, 10px left/right) */\n    display: flex; /* Enables flexbox layout */\n    justify-content: space-between; /* Space items evenly */\n    align-items: center; /* Center items vertically */\n    border-radius: 8px; /* Rounded corners for list items */\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Light shadow effect */\n}\n\nbutton.delete {\n    background-color: red; /* Red background for delete button */\n    font-weight: 900;\n    border: none; /* Remove border */\n    width: 40px; /* Adjust width for delete button */\n    height: 40px; /* Adjust height for delete button */\n    text-align: center; /* Center text in button */\n    color: white; /* Text color for delete button */\n    border-radius: 50%; /* Make button circular */\n    cursor: pointer; /* Pointer on hover */\n    transition: background-color 0.3s; /* Smooth background transition */\n}\n\n.delete:hover {\n    background-color: darkred; /* Darker shade on hover */\n}\n\ndialog {\n    border: none; /* Remove default border */\n    border-radius: 8px; /* Rounded corners */\n    padding: 20px; /* Inner spacing */\n    width: 300px; /* Set a width for the modal */\n    cursor: move; /* Show the move cursor */\n    background-color: #ccc;\n    padding: 10px;\n    text-align: center;\n    font-weight: bold;\n    user-select: none;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Shadow effect */\n    background-color: white; /* Background color */\n    z-index: 1000; /* Ensure the dialog appears above other elements */\n    position: relative; /* Required for absolute positioning of close button */\n    font-weight: 700;\n}\n\ndialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.5); /* Dimmed background */\n}\n\ndialog form {\n    display: flex;\n    flex-direction: column; /* Arrange form elements in a column */\n}\n\ndialog input[type=\"text\"],\ndialog input[type=\"date\"],\ndialog select,\ndialog textarea {\n    padding: 10px; /* Inner spacing for input */\n    margin-bottom: 10px; /* Spacing between input and button */\n    border: 1px solid #ccc; /* Border for input */\n    border-radius: 4px; /* Rounded corners */\n}\n\ndialog button,\n#submit {\n    padding: 10px; /* Inner spacing for buttons */\n    border: none; /* Remove default border */\n    border-radius: 4px; /* Rounded corners */\n    background-color: #2c3e50; /* Button background color */\n    color: white; /* Button text color */\n    font-size: 16px; /* Font size for buttons */\n    cursor: pointer; /* Pointer on hover */\n    transition: background-color 0.3s; /* Smooth background transition */\n    margin: 10px 0; /* Margin for spacing */\n}\n\ndialog button:hover,\n#submit:hover {\n    background-color: #1a242f; /* Darker shade on hover */\n}\n\n/* Placeholder styling */\ndialog input::placeholder {\n    font-family: 'Kanit', sans-serif; /* Ensure placeholder uses the same font */\n    color: #888; /* Light gray color for placeholder text */\n}\n\n/* Styles for the modal notes and priority select */\ninput#notes,\nselect#priority,\ninput#dueDate {\n    margin-top: 10px; /* Top margin for inputs */\n}\n\nh1 {\n    padding: 8px; /* Inner spacing for input */\n    margin-bottom: 10px; \n}\n\n.header {\n    display: flex; /* Enable flexbox for the header */\n    justify-content: space-between; /* Push items to the sides */\n    width: 1250px;\n    align-items: center; /* Center vertically */\n    padding: 10px 20px; /* Padding for the header */\n    background-color: var(--bg-color); /* Use your existing background color */\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Light shadow for header */\n}\n\n.welcome-message {\n    margin-left: auto; /* Push the welcome message to the right */\n    font-size: 20px; /* Adjust font size for the message */\n    font-weight: 600; /* Make the welcome message bold */\n}\n\n.tab {\n    cursor: pointer;\n    padding: 10px;\n    margin: 5px;\n    background-color: lightgray;\n}\n\nul{\n    list-style-type: none;\n}\n\nli{\n    list-style-type: none;\n}\n\n.tab.active {\n    background-color: darkgray;\n    font-weight: bold;\n}\n\n.add-task-button {\n    font-family: 'Kanit';\n    background-color: #2ecc71; /* Green color for the button */\n    color: white; /* White text color */\n    padding: 10px 20px; /* Inner spacing for the button */\n    border: none; /* Remove border */\n    border-radius: 4px; /* Rounded corners */\n    cursor: pointer; /* Pointer on hover */\n    transition: background-color 0.3s; /* Smooth transition */\n}\n\n.add-task-button:hover {\n    background-color: #27ae60; /* Darker green on hover */\n}\n\n.addProjBtn{\n    background-color: #2ecc71; /* Green color for the button */\n    color: white; /* White text color */\n    padding: 10px 20px; /* Inner spacing for the button */\n    border: none; /* Remove border */\n    border-radius: 4px; /* Rounded corners */\n    font-size: large;\n    cursor: pointer; /* Pointer on hover */\n    transition: background-color 0.3s; /* Smooth transition */\n    font-family: 'Kanit';\n}\n\n.addProjBtn:hover {\n    background-color: #27ae60; /* Darker green on hover */\n}\n\nbutton.edit{\n    background-color: #2ecc71; /* Green color for the button */\n    color: white; /* White text color */\n    padding: 10px 20px; /* Inner spacing for the button */\n    border: none; /* Remove border */\n    border-radius: 4px; /* Rounded corners */\n    cursor: pointer; /* Pointer on hover */\n    transition: background-color 0.3s; /* Smooth transition */\n    font-family: 'Kanit';\n}\n\n#popup {\n    position: fixed;\n    top: 20%;\n    left: 20%;\n    width: 400px;\n}\n\n.project-tab.active {\n    background-color: #007bff; /* Change this color as needed */\n    color: white; /* Change text color for better contrast */\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayModal: () => (/* binding */ displayModal)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_tabSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabSwitch */ \"./src/modules/tabSwitch.js\");\n\n\n\nfunction displayModal() {\n    let modalBtn = document.querySelector('.add-task-button');\n    let dialog = document.querySelector('#popup');\n    \n    modalBtn.addEventListener('click', () => {\n        dialog.showModal();\n    });\n}\n\nwindow.onload = () => {\n    displayModal();\n    (0,_modules_tabSwitch__WEBPACK_IMPORTED_MODULE_1__.initializeTodoList)();\n};\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/createElement.js":
/*!**************************************!*\
  !*** ./src/modules/createElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement(title, description, dueDate, priority, notes) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = new Date(dueDate); // Ensure dueDate is a Date object\n    this.priority = priority;\n    this.notes = notes;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/createElement.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalInput: () => (/* binding */ modalInput)\n/* harmony export */ });\nfunction modalInput() {\n    const dueDateInput = document.getElementById('dueDate').value;\n    const dueDate = new Date(dueDateInput);\n\n    // Check if the dueDate is valid\n    if (isNaN(dueDate.getTime())) {\n        alert(\"Please enter a valid date.\");\n        return null; // Return null if the date is invalid\n    }\n\n    return {\n        title: document.getElementById('title').value,\n        description: document.getElementById('desc').value,\n        dueDate: dueDate, // Store the Date object\n        priority: document.getElementById('priority').value,\n        notes: document.getElementById('notes').value,\n    };\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/tabSwitch.js":
/*!**********************************!*\
  !*** ./src/modules/tabSwitch.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendListToDOM: () => (/* binding */ appendListToDOM),\n/* harmony export */   clearFormFields: () => (/* binding */ clearFormFields),\n/* harmony export */   createProj: () => (/* binding */ createProj),\n/* harmony export */   deleteItem: () => (/* binding */ deleteItem),\n/* harmony export */   displayList: () => (/* binding */ displayList),\n/* harmony export */   handleFormSubmission: () => (/* binding */ handleFormSubmission),\n/* harmony export */   initializeTodoList: () => (/* binding */ initializeTodoList)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/modules/createElement.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/modules/modal.js\");\n\n\n\nlet activeProject = 'Default Project';\nlet projects = {\n    'Default Project': []\n};\n\nfunction createProj() {\n    const sidebar = document.querySelector('.sidebar');\n    let addProj = sidebar.querySelector('.addProjBtn');\n    if (!addProj) {\n        addProj = document.createElement('button');\n        addProj.className = \"addProjBtn\";\n        addProj.textContent = \"Add New Project\";\n        sidebar.appendChild(addProj);\n\n        addProj.addEventListener('click', () => {\n            const newProjectName = prompt('Enter new project name:');\n            if (newProjectName && !projects[newProjectName]) {\n                addNewProjectTab(newProjectName);\n            } else if (projects[newProjectName]) {\n                alert('Project already exists!');\n            }\n        });\n    }\n}\n\nfunction addNewProjectTab(projectName) {\n    const sidebar = document.querySelector('.sidebar');\n    let projectTab = document.createElement('li');\n    projectTab.textContent = projectName;\n    projectTab.classList.add('project-tab');\n    \n    projects[projectName] = [];\n\n    projectTab.addEventListener('click', () => switchTab(projectName));\n    sidebar.appendChild(projectTab);\n    switchTab(projectName);\n}\nfunction switchTab(projectName) {\n    if (activeProject === projectName) return;\n    \n    // Remove highlight from all tabs\n    const allTabs = document.querySelectorAll('.project-tab');\n    allTabs.forEach(tab => tab.classList.remove('active'));\n\n    // Highlight the current tab\n    const currentTab = Array.from(allTabs).find(tab => tab.textContent === projectName);\n    if (currentTab) {\n        currentTab.classList.add('active');\n    }\n\n    activeProject = projectName;\n    displayList();\n}\nfunction displayList() {\n    const display = document.querySelector('.listArea');\n    display.innerHTML = '';\n    let taskHeader = document.createElement('h3');\n    taskHeader.textContent = `Tasks for ${activeProject}`;\n    display.appendChild(taskHeader);\n\n    projects[activeProject].forEach(appendListToDOM);\n}\n\nfunction appendListToDOM(item) {\n    const display = document.querySelector('.listArea');\n    const card = document.createElement('div');\n    card.classList.add('list-item');\n    card.innerHTML = `\n        <div class=\"task-title\">Task: ${item.title}</div>\n        <div>Description: ${item.description}</div>\n        <div>Date: ${item.dueDate.toLocaleDateString()}</div>\n        <div>Priority: ${item.priority}</div>\n        <div>Notes: ${item.notes}</div>\n        <button class=\"edit\">Edit</button>\n        <button class=\"delete\">X</button>\n    `;\n\n    card.querySelector('.edit').onclick = () => openEditModal(item);\n    card.querySelector('.delete').onclick = () => deleteItem(item);\n\n    display.appendChild(card);\n}\n\nfunction openEditModal(item) {\n    const fields = ['title', 'desc', 'dueDate', 'priority', 'notes'];\n    fields.forEach(field => {\n        const element = document.getElementById(field);\n        if (element) {\n            element.value = field === 'dueDate' && item[field] instanceof Date \n                ? item[field].toISOString().split('T')[0] \n                : item[field];\n        }\n    });\n    window.currentEditingTask = item;\n    document.getElementById('popup').showModal();\n}\n\nfunction deleteItem(item) {\n    const index = projects[activeProject].indexOf(item);\n    if (index !== -1) {\n        projects[activeProject].splice(index, 1);\n        displayList();\n    } else {\n        console.error('Item not found in the project list.');\n    }\n}\n\nfunction handleFormSubmission(event) {\n    event.preventDefault();\n    const newItem = (0,_modal__WEBPACK_IMPORTED_MODULE_1__.modalInput)();\n    if (!newItem) return;\n\n    if (window.currentEditingTask) {\n        Object.assign(window.currentEditingTask, newItem);\n        window.currentEditingTask = null;\n    } else {\n        projects[activeProject].push(new _createElement__WEBPACK_IMPORTED_MODULE_0__.createElement(newItem.title, newItem.description, newItem.dueDate, newItem.priority, newItem.notes));\n    }\n\n    displayList();\n    clearFormFields(); // Clear fields after submission\n    document.getElementById('popup').close(); // Close modal after submission\n}\n\nfunction clearFormFields() {\n    ['title', 'desc', 'dueDate', 'priority', 'notes'].forEach(field => {\n        const element = document.getElementById(field);\n        if (element) element.value = '';\n    });\n}\n\nfunction initializeTodoList() {\n    createProj();\n    displayList();\n\n    document.getElementById('submit').addEventListener('click', handleFormSubmission);\n    document.querySelector('.listArea').addEventListener('click', (e) => {\n        if (e.target.classList.contains('edit') || e.target.classList.contains('delete')) {\n            const listItem = e.target.closest('.list-item');\n            if (listItem) {\n                const taskTitleElement = listItem.querySelector('.task-title'); // Adjust this selector as necessary\n                \n                // Check if taskTitleElement exists\n                if (taskTitleElement) {\n                    const taskTitle = taskTitleElement.textContent; // Now it's safe to access textContent\n                    const item = projects[activeProject].find(task => task.title === taskTitle); // Find the corresponding task\n                    \n                    if (e.target.classList.contains('edit')) {\n                        openEditModal(item);\n                    } else if (e.target.classList.contains('delete')) {\n                        deleteItem(item);\n                    }\n                } else {\n                    console.error('Task title element not found.');\n                }\n            }\n        }\n    });\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/tabSwitch.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;