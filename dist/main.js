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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: 'Lora', serif;\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  position: relative;\\n}\\n\\n#navigation {\\n  display: flex;\\n  padding: 15px;\\n}\\n\\n.over-lay {\\n  height: 50vw;\\n  width: 100vw;\\n  position: absolute;\\n  max-width: inherit;\\n  z-index: 5;\\n  display: none;\\n  background-color: white;\\n  overflow-y: scroll;\\n}\\n\\n.over-lay.active {\\n  display: block;\\n}\\n\\n.logo {\\n  justify-content: flex-start;\\n  color: #000;\\n  text-decoration: none;\\n  list-style: none;\\n  font-size: 15px;\\n  font-weight: 600;\\n  font-style: normal;\\n  line-height: 20px;\\n  align-items: center;\\n  margin-left: 100px;\\n}\\n\\n#other-interfaces {\\n  align-items: center;\\n  justify-content: flex-end;\\n}\\n\\n.interface {\\n  color: #000;\\n  margin-left: 300px;\\n  text-decoration: none;\\n  list-style: none;\\n  font-size: 15px;\\n  font-weight: 600;\\n  font-style: normal;\\n  line-height: 20px;\\n}\\n\\n#list {\\n  margin: 80px auto;\\n  padding-left: 100px;\\n  padding-right: 100px;\\n  display: grid;\\n  grid-template-columns: auto auto auto auto;\\n  grid-row-gap: 60px;\\n  grid-column-gap: 60px;\\n}\\n\\n.show {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: 500px;\\n}\\n\\nimg {\\n  height: 300px;\\n  width: 210px;\\n}\\n\\n#footer {\\n  display: flex;\\n  justify-content: space-between;\\n  bottom: 10px;\\n  border-top: 2px solid black;\\n  width: 100vw;\\n  padding: 15px 100px;\\n}\\n\\n#footer a {\\n  text-decoration: none;\\n}\\n\\n/* comment pop-up */\\n.Popup-container {\\n  position: fixed;\\n  border: none;\\n  background-color: rgba(221, 221, 221, 0.959);\\n  max-width: 100%;\\n  overflow: scroll;\\n  height: 100vh;\\n}\\n\\ndialog .close {\\n  position: fixed;\\n  font-size: 42px;\\n  right: 50px;\\n  z-index: 999;\\n  cursor: pointer;\\n  padding: 5px;\\n  border-top: 0;\\n  border-bottom-left-radius: 50%;\\n  border-bottom-right-radius: 50%;\\n  color: white;\\n  mix-blend-mode: difference;\\n}\\n\\n.popup-poster {\\n  text-align: center;\\n  margin-left: 550px;\\n}\\n\\n.title-row {\\n  width: 50%;\\n  margin: auto;\\n  color: #000;\\n  text-align: center;\\n}\\n\\n.poster-container {\\n  width: 100%;\\n  text-align: center;\\n}\\n\\n.comments-counter {\\n  cursor: pointer;\\n  text-align: center;\\n}\\n\\n.add-comments {\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  margin: 10px;\\n  align-items: center;\\n}\\n\\n#name {\\n  width: 40vw;\\n  align-items: center;\\n}\\n\\n#comments {\\n  width: 40vw;\\n  align-items: center;\\n}\\n\\n.submit-comments {\\n  align-items: center;\\n  width: 40vw;\\n}\\n\\n#show-the-reservation {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  background: burlywood;\\n  padding-top: 5px;\\n  color: #000;\\n  overflow-y: auto;\\n}\\n\\n.material-symbols-outlined {\\n  position: absolute;\\n  right: 15px;\\n  cursor: pointer;\\n  font-size: 26px;\\n  font-weight: 800;\\n}\\n\\n.movieContent {\\n  display: block;\\n  margin: 0 auto;\\n  padding-top: 50px;\\n  text-align: center;\\n}\\n\\n.movie-title {\\n  text-align: center;\\n  text-decoration: underline;\\n}\\n\\n#movie-metrics {\\n  list-style-type: none;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n.Reserv-form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n#username,\\n#date-started,\\n#data-ended {\\n  border-radius: 100px;\\n  height: 5vh;\\n  font-style: italic;\\n  padding-left: 10px;\\n}\\n\\n.add-reserve-btn {\\n  width: 20%;\\n  display: flex;\\n  align-self: center;\\n}\\n\\n.reservations {\\n  list-style-type: none;\\n}\\n\\n.heart {\\n  position: relative;\\n}\\n\\n.likes {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movies-database/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://movies-database/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://movies-database/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://movies-database/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://movies-database/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://movies-database/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://movies-database/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://movies-database/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://movies-database/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://movies-database/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_api_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api-data.js */ \"./src/modules/api-data.js\");\n/* harmony import */ var _modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/commentPopup.js */ \"./src/modules/commentPopup.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_likesData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/likesData.js */ \"./src/modules/likesData.js\");\n/* harmony import */ var _modules_showCounter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showCounter */ \"./src/modules/showCounter.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_api_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n(0,_modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n(0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n(0,_modules_likesData_js__WEBPACK_IMPORTED_MODULE_4__.getLikes)();\n\nconst displayContainer = document.querySelector('#list');\ndisplayContainer.addEventListener('click', (e) => {\n  if (e.target.classList.contains('heart')) {\n    const targetId = e.target.id;\n    (0,_modules_likesData_js__WEBPACK_IMPORTED_MODULE_4__.postLikes)(targetId);\n  }\n});\n\ndisplayContainer.addEventListener(\"click\", (e) => {\n  if (e.target.classList.contains(\"heart\")) {\n    const numDisplay = e.target.nextElementSibling;\n    let numOfLikes = Number(e.target.nextElementSibling.textContent);\n    numOfLikes = numOfLikes + 1;\n    numDisplay.textContent = String(numOfLikes);\n  }\n});\n\n(0,_modules_showCounter__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack://movies-database/./src/index.js?");

/***/ }),

/***/ "./src/modules/addReservation.js":
/*!***************************************!*\
  !*** ./src/modules/addReservation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst endPoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j2re1UnEtKqKdvrLaCym/reservations/';\n\nconst addReservation = async (itemId, username, dateStart, dateEnd) => {\n  if (username.value !== '' || dateStart.value !== '' || dateEnd.value !== '') {\n    try {\n      const response = await fetch(`${endPoint}`, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          item_id: itemId,\n          username: username.value,\n          date_start: dateStart.value,\n          date_end: dateEnd.value,\n        }),\n      });\n      const Data = await response.json();\n      return Data;\n    } catch (err) {\n      return false;\n    }\n  }\n  return false;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addReservation);\n\n\n//# sourceURL=webpack://movies-database/./src/modules/addReservation.js?");

/***/ }),

/***/ "./src/modules/api-data.js":
/*!*********************************!*\
  !*** ./src/modules/api-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayList */ \"./src/modules/displayList.js\");\n/* harmony import */ var _reservationPopUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservationPopUp.js */ \"./src/modules/reservationPopUp.js\");\n\n\n\nconst getData = async () => {\n  await fetch('https://api.tvmaze.com/shows')\n    .then((response) => response.json())\n    .then((response) => (0,_displayList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response.slice(0, 20)));\n\n  (0,_reservationPopUp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://movies-database/./src/modules/api-data.js?");

/***/ }),

/***/ "./src/modules/api-info.js":
/*!*********************************!*\
  !*** ./src/modules/api-info.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint operator-linebreak: [\"error\", \"after\", { \"overrides\": { \"+=\": \"before\" } }] */\nconst endpointLink =\n  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j2re1UnEtKqKdvrLaCym/reservations/';\n\nconst fetchReservations = async (movieId) => fetch(`${endpointLink}?item_id=${movieId}`)\n  .then((res) => res.json())\n  .then((data) => (data.error ?\n    {\n      error: true,\n      debug: data,\n      msg: data.error.message,\n    } :\n    {\n      error: false,\n      data,\n    }))\n  .catch(() => ({\n    error: true,\n    msg: 'Something went wrong, please try again later',\n  }));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchReservations);\n\n\n//# sourceURL=webpack://movies-database/./src/modules/api-info.js?");

/***/ }),

/***/ "./src/modules/commentPopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\n\nconst comments = () => {\n  const getShowData = async (id) => {\n    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);\n    const showData = await response.json();\n    return showData;\n  };\n\n  const displayContainer = document.querySelector('#list');\n  displayContainer.addEventListener('click', (e) => {\n    if (e.target.classList.contains('btn-comments')) {\n \n  const displayContainer = document.querySelector(\"#list\");\n  displayContainer.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"btn-comments\")) {\n\n  const displayContainer = document.querySelector('#list');\n  displayContainer.addEventListener('click', (e) => {\n    if (e.target.classList.contains('btn-comments')) {\n\n      const dialog = document.querySelector('dialog');\n      dialog.showModal();\n      const targetId = e.target.id;\n\n      getShowData(targetId).then((showData) => {\n        dialog.innerHTML = `\n        <div class=\"Popup-container\">\n        <span class=\"close material-symbols-outlined\">&times</span>\n        <img class=\"popup-poster\" src=\"${showData.image.medium}\">\n        <div class=\"title-row\">\n          <h3>${showData.name}</h3> ⭐<span>${showData.rating.average}</span>\n        </div>\n        <p class=\"poster-container\">${showData.genres}</p>\n        <p class=\"poster-container\">${showData.language}</p>\n        <p class=\"poster-container\">${showData.summary}</p>\n        <br>\n        <h3 class=\"comments-counter\">Comments(<span>0</span>)</h3>\n        <ul class=\"comment-section\">\n        </ul>\n\n        <form action=\"#\" class=\"add-comments\" id=\"comment-form\">\n        <h3>Add your comment</h3>\n        <input type=\"text\" id=\"name\" name=\"username1\" placeholder=\"Type your name here\">\n        <textarea id=\"comments\" name=\"commentMsg1\" cols=\"40\" rows=\"5\" placeholder=\"Write you comment here..\"></textarea>\n        <button type=\"submit\" id=${showData.id} class=\"submit-comments\">Comment</button>\n        </form>\n        `;\n\n        fetchComments(targetId);\n\n        const submit = document.querySelector('.submit-comments');\n\n        submit.addEventListener('click', (e) => {\n          e.preventDefault();\n          const commentList = document.querySelector('.comment-section');\n          const name = document.getElementById('name').value.trim();\n          const addComment = document.getElementById('comments').value.trim();\n          const form = document.querySelector('form');\n          const newComment = new Comment(+e.target.id, name, addComment);\n          const date = Date().split(' ').splice(1, 3).join(' ')\n            .split(' ')\n            .reverse();\n          const month = ('JanFebMarAprMayJunJulAugSepOctNovDec'.indexOf(date.slice(2).join('')) / 3 + 1);\n          const commentCount = document.querySelector('.comments-counter span');\n\n          if (name && addComment) {\n            (postComment(newComment));\n            commentList.innerHTML += `<li>${date[0].concat(`-0${month}-${date[1]}`)} ${name}: ${addComment}</li>`;\n            let count = +commentCount.textContent;\n            count += 1;\n            commentCount.textContent = count;\n          }\n          form.reset();\n        });\n      });\n    }\n\n    if (e.target.classList.contains('close')) {\n      const dialog = document.querySelector('dialog');\n      dialog.close();\n    }\n\n    const createComment = (comments) => {\n      const commentCount = document.querySelector('.comments-counter');\n      commentCount.innerHTML = `Comments (<span>${comments.length}</span>)`;\n      const commentList = document.querySelector('.comment-section');\n      commentList.innerHTML = '';\n      comments.forEach((comment) => {\n        commentList.innerHTML += `<li>${comment.creation_date}: ${comment.username}: ${comment.comment}</li>`;\n      });\n    };\n\n    const apiCommentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x3jKfe1LZsfM9ZMX6ICC/comments';\n\n    const fetchComments = async (id) => {\n      const request = new Request(`${apiCommentURL}?item_id=${id}`);\n      const response = await fetch(request);\n      if (!response.ok) {\n        throw new Error('No comments added for this movie');\n      }\n      const getComment = await response.json();\n      createComment(getComment);\n    };\n\n    class Comment {\n      constructor(item_id, username, comment) {\n        this.item_id = item_id;\n        this.username = username;\n        this.comment = comment;\n      }\n    }\n\n    const postComment = async (comment) => {\n      const posts = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x3jKfe1LZsfM9ZMX6ICC/comments', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(comment),\n      });\n      const result = await posts.json();\n      return result;\n    };\n  });\n};\n});\n\n};\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);\n\n//# sourceURL=webpack://movies-database/./src/modules/commentPopup.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countComment\": () => (/* binding */ countComment),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"displayComment\": () => (/* binding */ displayComment),\n/* harmony export */   \"getComment\": () => (/* binding */ getComment)\n/* harmony export */ });\n\nconst countComment = () => {\n  const commentsCounterSpan = document.querySelector('.comments-counter');\n\n  const commentCounter = document.querySelector('.comment-section');\n  const allChildren = commentCounter.getElementsByTagName('li').length;\n\n  commentsCounterSpan.innerHTML = allChildren;\n};\n\nconst displayComment = (comments) => {\n  const displayCommentContainer = document.querySelector('.comment-section');\n  comments.forEach((comment) => {\n    displayCommentContainer.innerHTML += `\n    <li><p class=\"comment-username\">${comment.creation_date} ${comment.username}: ${comment.comment}</p></li>\n    <hr>\n    `;\n  });\n  countComment();\n};\n\nconst getComment = (idTarget) => {\n  const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x3jKfe1LZsfM9ZMX6ICC/comments?item_id=item1';\n\n  fetch(`${involvementURL}${idTarget}`)\n    .then((response) => response.json())\n    .then((json) => displayComment(json))\n    .then(() => countComment());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComment);\n\n\n\n//# sourceURL=webpack://movies-database/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/displayLikes.js":
/*!*************************************!*\
  !*** ./src/modules/displayLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showLikes = (dataObject) => {\n  dataObject.forEach((data) => {\n    const numDisplays = document.querySelectorAll('.num-display');\n    numDisplays.forEach((display) => {\n      if (display.id === data.item_id) {\n        display.textContent = data.likes;\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showLikes);\n\n\n//# sourceURL=webpack://movies-database/./src/modules/displayLikes.js?");

/***/ }),

/***/ "./src/modules/displayList.js":
/*!************************************!*\
  !*** ./src/modules/displayList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayShows = (shows) => {\n  const displayContainer = document.querySelector('#list');\n  shows.forEach((show) => {\n    displayContainer.innerHTML += `\n        <div class=\"show\" id=\"${show.id}\">\n          <img class=\"poster\" src=\"${show.image.medium}\" alt=\"${show.name} poster\">\n          <div class=\"title-row\">\n            <h2 class=\"name\">${show.name}</h2>\n            <div class=\"likes\">\n            <span id=\"${show.id}\" class=\"heart material-symbols-outlined\">favorite</span>            <p class=\"num-display\" id=${show.id}>0</p>\n            </div>\n          </div>\n          <p class=\"genre\">${show.genres}</p>\n          <button id=\"${show.id}\" class=\"btn-comments\">Comments</button>\n          <button id=\"${show.id}\" class=\"btn-reservations\" movie-image=\"${show.image.medium}\" \n          title=\"${show.name}\" \n          language=\"${show.language}\"\n          premier=\"${show.premiered}\"\n          ended=\"${show.ended}\"\n          rating=\"${show.rating.average}\"> Book Reservations</button>\n\n          \n          <dialog></dialog>\n          </div>\n\n        `;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShows);\n\n\n//# sourceURL=webpack://movies-database/./src/modules/displayList.js?");

/***/ }),

/***/ "./src/modules/likesData.js":
/*!**********************************!*\
  !*** ./src/modules/likesData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayLikes.js */ \"./src/modules/displayLikes.js\");\n\n\nconst involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tr6fRffFTZh6EiaoJoDj';\n\nconst getLikes = async () => {\n  await fetch(`${involvementURL}/likes`)\n    .then((response) => response.json())\n    .then((response) => (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response));\n};\n\nconst postLikes = async (id) => {\n  await fetch(`${involvementURL}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: id }),\n  });\n};\n\n\n\n//# sourceURL=webpack://movies-database/./src/modules/likesData.js?");

/***/ }),

/***/ "./src/modules/reservationPopUp.js":
/*!*****************************************!*\
  !*** ./src/modules/reservationPopUp.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-info.js */ \"./src/modules/api-info.js\");\n/* harmony import */ var _addReservation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addReservation.js */ \"./src/modules/addReservation.js\");\n\n\n\nconst displayReserve = () => {\n  const showTheReservePopUp = ({ ...info }) => {\n    const thePopUpInfo = document.querySelector('#show-the-reservation');\n    thePopUpInfo.innerHTML = `\n      <span class=\"material-symbols-outlined\">\n      close\n      </span>\n        <section class=\"movieContent\">\n        <div id=\"poster-branding\">\n            <img src=\"${info.image}\" />\n            <h3 class=\"movie-title\">${info.title}</h3>\n        </div>\n  \n        <ol id=\"movie-metrics\">\n            <li>\n                <strong>Language</strong>: ${info.language}\n                <strong>Premier</strong>: ${info.premier}\n            </li>\n            <li>\n            <strong>Rating</strong>: ${info.rating} \n            <strong>Ended</strong>: ${info.ended}\n            </li>\n        </ol>\n        <h3 class=\"reservation-title\">\n        reservation (<span class=\"numberOf-reservations-booked\">0</span>)\n      </h3>\n      <span class=\"reservations\">\n          reservation data\n      </span>\n      \n      <h2>Book Reservation</h2>\n      <div class=\"Reserv-form\">\n      <input type=\"text\" name=\"username\" class=\"username\" id=\"username\" placeholder=\"Your name\" required>\n      <input type=\"text\" name=\"dateStart\" class=\"dateStart\" id=\"date-started\" placeholder=\"Start date\" required>\n      <input type=\"text\" name=\"dateEnd\" class=\"dateEnd\" id=\"data-ended\" placeholder=\"End date\" required>\n      <button class=\"add-reserve-btn\" id=\"${info.id}\" type=\"submit\">Submit</button>\n      </div>\n        `;\n    const hideReservationBtn = thePopUpInfo.querySelector(\n      '.material-symbols-outlined',\n    );\n    thePopUpInfo.style.display = 'flex';\n\n    hideReservationBtn.addEventListener('click', () => {\n      document.querySelector('#show-the-reservation').style.display = 'none';\n    });\n    const data = () => {\n      (0,_api_info_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(info.id).then((res) => {\n        const reservations = thePopUpInfo.querySelector('.reservations');\n        const reservationsCounter = thePopUpInfo.querySelector(\n          '.numberOf-reservations-booked',\n        );\n        if (res.error === true) {\n          reservationsCounter.innerHTML = '0';\n          reservations.innerHTML = 'Book a reservation, we are expecting you';\n        } else {\n          reservations.innerHTML = '';\n          reservationsCounter.innerHTML = res.data.length;\n          res.data.forEach((reservation) => {\n            reservations.innerHTML += `\n            <li><strong>From</strong> ${reservation.date_start} <strong>to</strong> ${reservation.date_end} <strong>by</strong> ${reservation.username}</li>\n            `;\n          });\n        }\n      });\n    };\n    const name = document.querySelector('#username');\n    const start = document.querySelector('#date-started');\n    const end = document.querySelector('#data-ended');\n    const reserveBtn = document.querySelector('.add-reserve-btn');\n    reserveBtn.addEventListener('click', (e) => {\n      const id = e.target.attributes.id.value;\n      (0,_addReservation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id, name, start, end).then(data());\n      name.value = '';\n      start.value = '';\n      end.value = '';\n\n      data();\n    });\n    (0,_api_info_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(info.id).then((res) => {\n      const reservations = thePopUpInfo.querySelector('.reservations');\n      const reservationsCounter = thePopUpInfo.querySelector(\n        '.numberOf-reservations-booked',\n      );\n      if (res.error === true) {\n        reservationsCounter.innerHTML = '0';\n        reservations.innerHTML = 'Book a reservation, we are expecting you';\n      } else {\n        reservations.innerHTML = '';\n        reservationsCounter.innerHTML = res.data.length;\n        res.data.forEach((reservation) => {\n          reservations.innerHTML += `\n          <li><strong>From</strong> ${reservation.date_start} <strong>to</strong> ${reservation.date_end}<strong> by</strong> ${reservation.username}</li>\n          `;\n        });\n      }\n    });\n  };\n\n  const shows = document.querySelectorAll('.btn-reservations');\n  shows.forEach((show) => {\n    const id = show.getAttribute('id');\n    const title = show.getAttribute('title');\n    const image = show.getAttribute('movie-image');\n    const rating = show.getAttribute('rating');\n    const premier = show.getAttribute('premier');\n    const ended = show.getAttribute('ended');\n    const language = show.getAttribute('language');\n    show.addEventListener('click', () => {\n      showTheReservePopUp({\n        id,\n        title,\n        image,\n        premier,\n        rating,\n        ended,\n        language,\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayReserve);\n\n\n//# sourceURL=webpack://movies-database/./src/modules/reservationPopUp.js?");

/***/ }),

/***/ "./src/modules/showCounter.js":
/*!************************************!*\
  !*** ./src/modules/showCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countShows = () => {\n  window.addEventListener(\"load\", (e) => {\n    let displayContainer = document.querySelector(\"#list\");\n    console.log(displayContainer.childElementCount);\n    let showcount = displayContainer.childElementCount;\n    let showNumDisplay = document.querySelector(\"#show-num\");\n    showNumDisplay.textContent = showcount;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countShows);\n\n\n//# sourceURL=webpack://movies-database/./src/modules/showCounter.js?");

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