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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: \\\"Lora\\\", serif;\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n#navigation {\\r\\n  display: flex;\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n.over-lay {\\r\\n  width: 100vw;\\r\\n  position: absolute;\\r\\n  max-width: inherit;\\r\\n  z-index: 5;\\r\\n  display: none;\\r\\n  background-color: white;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.over-lay.active {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  justify-content: flex-start;\\r\\n  color: #000;\\r\\n  text-decoration: none;\\r\\n  list-style: none;\\r\\n  font-size: 15px;\\r\\n  font-weight: 600;\\r\\n  font-style: normal;\\r\\n  line-height: 20px;\\r\\n  align-items: center;\\r\\n  margin-left: 100px;\\r\\n}\\r\\n\\r\\n#other-interfaces {\\r\\n  align-items: center;\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\n.interface {\\r\\n  color: #000;\\r\\n  margin-left: 300px;\\r\\n  text-decoration: none;\\r\\n  list-style: none;\\r\\n  font-size: 15px;\\r\\n  font-weight: 600;\\r\\n  font-style: normal;\\r\\n  line-height: 20px;\\r\\n}\\r\\n\\r\\n#list {\\r\\n  margin: 80px auto;\\r\\n  padding-left: 100px;\\r\\n  padding-right: 100px;\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto auto;\\r\\n  grid-row-gap: 60px;\\r\\n  grid-column-gap: 60px;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  height: 500px;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  height: 300px;\\r\\n  width: 210px;\\r\\n}\\r\\n\\r\\n#footer {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  bottom: 10px;\\r\\n  border-top: 2px solid black;\\r\\n  width: 100vw;\\r\\n  padding: 15px 100px;\\r\\n}\\r\\n\\r\\n#footer a {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n/* comment pop-up */\\r\\n.comment-popup {\\r\\n  position: fixed;\\r\\n  border: none;\\r\\n  background-color: #000107;\\r\\n  max-width: 100%;\\r\\n  max-height: 100%;\\r\\n}\\r\\n\\r\\n.comment-popup-close-button {\\r\\n  position: fixed;\\r\\n  font-size: 42px;\\r\\n  right: 10px;\\r\\n  z-index: 999;\\r\\n  cursor: pointer;\\r\\n  padding: 5px;\\r\\n  border-top: 0;\\r\\n  border-bottom-left-radius: 50%;\\r\\n  border-bottom-right-radius: 50%;\\r\\n  color: white;\\r\\n  mix-blend-mode: difference;\\r\\n}\\r\\n\\r\\n.movie-description {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.movie-description p {\\r\\n  width: 50%;\\r\\n  margin: 20px auto;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.poster-container {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#media-poster {\\r\\n  position: relative;\\r\\n  width: 20%;\\r\\n}\\r\\n\\r\\n.display-none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#comment-section {\\r\\n  text-align: center;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n#comment-section p {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#review-title {\\r\\n  color: white;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n#comment-section hr {\\r\\n  width: 30%;\\r\\n  border-color: rgb(64, 64, 64);\\r\\n  border-width: 0.1px;\\r\\n}\\r\\n\\r\\n#add-comment {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n#reviewer-name {\\r\\n  width: 40%;\\r\\n  height: 30px;\\r\\n  font-size: 16px;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n#review {\\r\\n  width: 40%;\\r\\n  height: 100px;\\r\\n  font-size: 16px;\\r\\n  font-family: inherit;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n#comment-submit {\\r\\n  width: 100px;\\r\\n  height: 50px;\\r\\n  font-size: 16px;\\r\\n  background-color: white;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movies-database/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showLikes\": () => (/* binding */ showLikes)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_api_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api-data.js */ \"./src/modules/api-data.js\");\n/* harmony import */ var _modules_showComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showComments.js */ \"./src/modules/showComments.js\");\n/* harmony import */ var _modules_getComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getComments */ \"./src/modules/getComments.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_showComments_js__WEBPACK_IMPORTED_MODULE_2__]);\n_modules_showComments_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// import displayShows from './modules/displayList.js';\r\n// import commentsAdded from './modules/addComments.js';\r\n// import displayComments from './modules/displayComments.js'\r\n\r\n\r\n// displayShows();\r\n// commentsAdded();\r\n// displayComments();\r\n\r\n// getData();\r\n\r\n// displayShows();\r\n\r\n// const testBtn = document.querySelectorAll('.btn-comments');\r\n// testBtn.forEach((btn) => {\r\n//     btn.addEventListener('click', () => {\r\n//         console.log('hey');\r\n//     })\r\n// })\r\n\r\n// const displayContainer = document.querySelector('#list');\r\n//  displayContainer.addEventListener('click', (e) => {\r\n//     if(e.target.classList.contains('btn-comments')) {\r\n//         alert('heyyo');\r\n//     }\r\n//  });\r\n\r\n\r\n/* eslint-disable import/prefer-default-export */\r\n\r\n\r\n\r\n\r\n// import popup from './modules/popup.js';\r\n\r\n\r\n(0,_modules_api_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n// popup();\r\n\r\n\r\n\r\n\r\n\r\nconst shows = await (0,_modules_getComments__WEBPACK_IMPORTED_MODULE_3__.getAllMovies)();\r\nconst likes = await (0,_modules_getComments__WEBPACK_IMPORTED_MODULE_3__.getAllLikes)();\r\nconst modal = document.querySelector('.modal');\r\nconst closeButton = document.querySelector('.close-button');\r\nconst image = document.getElementById('img-detail');\r\nconst btnModalComments = document.querySelectorAll('#modal-comments');\r\nconst total = document.querySelectorAll('.likeId');\r\nconst btnLikes = document.querySelectorAll('#btnLikes');\r\nconst formComments = document.querySelectorAll('.formComment');\r\nlet formId = 0;\r\n\r\n// START LIKES SECTION\r\n\r\nconst showLikes = async (showId) => {\r\n  let totalLikes = '';\r\n\r\n  const like = likes.filter((l) => l.item_id === showId);\r\n  if (like[0]) {\r\n    totalLikes = like[0].likes;\r\n  }\r\n  return totalLikes;\r\n};\r\n\r\nbtnLikes.forEach((button) => {\r\n  button.addEventListener('click', (event) => {\r\n    event.preventDefault();\r\n    const id = parseInt(event.target.getAttribute('data-showid'), 10);\r\n    (0,_modules_getComments__WEBPACK_IMPORTED_MODULE_3__.addLikes)(id);\r\n    total.forEach((el) => {\r\n      showLikes(id).then((totalLikes) => {\r\n        el.innerHTML = `<br><br><span class=\"likes_count\">Likes(${totalLikes})`;\r\n      });\r\n    });\r\n  });\r\n});\r\n\r\n// END LIKES SECTION\r\n\r\n// START COMMENT MODAL SECTION\r\n\r\nconst toggleModal = (showId) => {\r\n  const show = shows.filter((s) => s.show.id === showId);\r\n\r\n  if (show.length > 0) {\r\n    image.src = show[0].show.image.medium;\r\n  }\r\n\r\n  modal.classList.toggle('show-modal');\r\n};\r\n\r\nbtnModalComments.forEach((Modalcomment) => {\r\n  Modalcomment.addEventListener('click', (event) => {\r\n    event.preventDefault();\r\n    const id = parseInt(event.target.getAttribute('data-showid'), 10);\r\n    toggleModal(id);\r\n    formId = id;\r\n  });\r\n});\r\n\r\n// closeButton.addEventListener('click', toggleModal);\r\n\r\n// ADD COMMENT\r\n\r\nformComments.forEach((formComment) => {\r\n  formComment.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    console.log(formId);\r\n    const formData = new FormData(event.target);\r\n    const username = formData.get('name');\r\n    const commentMsg = formData.get('comment');\r\n    const comment = new _modules_comments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](formId, username, commentMsg);\r\n    (0,_modules_getComments__WEBPACK_IMPORTED_MODULE_3__.addComment)(comment);\r\n    formComment.reset();\r\n  });\r\n});\r\n\r\nconst displayContainer = document.querySelector('#list');\r\nconst overlay = document.querySelector('.over-lay');\r\n\r\ndisplayContainer.addEventListener('click', async (e) => {\r\n  if(e.target.classList.contains('btn-comments')) {\r\n    overlay.classList.add('active')\r\n    const getCommentId = e.target.id.split('-')[0];\r\n    overlay.insertAdjacentHTML('afterbegin',await (0,_modules_showComments_js__WEBPACK_IMPORTED_MODULE_2__.Display)(getCommentId))\r\n  }\r\n});\r\n\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://movies-database/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComments.js":
/*!************************************!*\
  !*** ./src/modules/addComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments.js */ \"./src/modules/displayComments.js\");\n\r\n\r\nconst commentsAdded = (idItems) => {\r\n    const INVOLVEMENT_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/QhgWz32GeSKsu1QMY3gI/comments';\r\n\r\n    const formElements = (commentor, comments, callback) => {\r\n        fetch(`${INVOLVEMENT_URL}`, {\r\n            method: 'POST',\r\n            headers: { 'Content-Type': 'application/json' },\r\n            body: JSON.stringify({\r\n            item_id: `item${idItems}`,\r\n            username: `${commentor}`,\r\n            comment: `${comments}`,\r\n\r\n        }),\r\n\r\n        });\r\n    \r\n    const dateFormatYmd = (date) => date.toISOString().slice(0,10);\r\n    const d = dateFormatYmd(new Date());\r\n    callback([\r\n        { creationDate: `${d}`, username: `${commentor}`, comment: `${comments}` },\r\n        \r\n    ]);\r\n    }\r\n    const formContent = document.querySelector('.add-comments');\r\n    formContent.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        const commentorSelector = document.querySelector('#name');\r\n        const commentsSelector = document.querySelector('#comments');\r\n        const commentor = commentorSelector.value;\r\n        const comments = commentsSelector.value;\r\n        formElements(commentor, comments, _displayComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsAdded);\r\n\r\n\n\n//# sourceURL=webpack://movies-database/./src/modules/addComments.js?");

/***/ }),

/***/ "./src/modules/api-data.js":
/*!*********************************!*\
  !*** ./src/modules/api-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayList.js */ \"./src/modules/displayList.js\");\n\r\n// import commentFunction from './popup.js';\r\n\r\n\r\n\r\n// const getData = async () => {\r\n//   const response = await fetch('https://api.tvmaze.com/shows');\r\n//   const shows = await response.json();\r\n//   const latestShows = shows.slice(0, 20);\r\n//   displayShows(latestShows);\r\n//   commentFunction();\r\n// };\r\n\r\n//   displayShows(latestShows);\r\n// };\r\n\r\n\r\n\r\nconst getData = async () => {\r\n  await fetch('https://api.tvmaze.com/shows',)\r\n  .then((response) => response.json())\r\n  .then((response) => {\r\n    // console.log(response[0])\r\n    (0,_displayList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response.slice(0,20));\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://movies-database/./src/modules/api-data.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comment)\n/* harmony export */ });\nclass Comment {\r\n    constructor(itemId, username, commentMsg) {\r\n        this.itemId = itemId;\r\n        this.username = username;\r\n        this.comment = commentMsg;\r\n    }\r\n}\n\n//# sourceURL=webpack://movies-database/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n\r\n\r\n\r\nconst comments1 = document.querySelector('.comments-collection');\r\n\r\nconst displayComments = (item) => {\r\n  const commentsHead = '<h2 class=\"comments-counter\">Comments(0)</h2>';\r\n  comments1.innerHTML = commentsHead;\r\n\r\nfetch(`${_involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/comments?item_id=${item}`)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      if (data.error) return;\r\n      document.querySelector('.comments-counter').innerHTML = `Comments (${data.length || 0})`;\r\n\r\n      data.forEach((comment) => {\r\n        const contentHTML = document.createElement('div');\r\n        contentHTML.classList.add('commenting');\r\n        contentHTML.innerHTML = `\r\n          <div class=\"comment-head\">\r\n          <a href='https://github.com/${comment.username}'>${comment.username}</a>\r\n          <p class=\"date-posted\">-${comment.creation_date}</p>\r\n          </div>\r\n          <p>${comment.comment}</p>`;\r\n        comments1.appendChild(contentHTML);\r\n      });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\n\n//# sourceURL=webpack://movies-database/./src/modules/displayComments.js?");

/***/ }),

/***/ "./src/modules/displayList.js":
/*!************************************!*\
  !*** ./src/modules/displayList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"displayShows\": () => (/* binding */ displayShows)\n/* harmony export */ });\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ \"./src/modules/popup.js\");\n\r\n\r\nconst displayShows = (shows) => {\r\n  const displayContainer = document.querySelector('#list');\r\n  shows.forEach((show) => {\r\n    displayContainer.innerHTML += `\r\n        <div class=\"show\">\r\n          <img class=\"poster\" src=\"${show.image.medium}\" alt=\"${show.name} poster\">\r\n          <h2 class=\"name\">${show.name}</h2>\r\n          <p class=\"genre\">${show.genres}</p>\r\n          <button id=\"${show.id}-comments\" class=\"btn-comments\">Comments</button>\r\n          <button id=\"${show.id}-reservations\" class=\"btn-reservations\">Reservations</button>\r\n          </div>\r\n        `;\r\n  });\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShows);\n\n//# sourceURL=webpack://movies-database/./src/modules/displayList.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"addLikes\": () => (/* binding */ addLikes),\n/* harmony export */   \"getAllComments\": () => (/* binding */ getAllComments),\n/* harmony export */   \"getAllLikes\": () => (/* binding */ getAllLikes),\n/* harmony export */   \"getAllMovies\": () => (/* binding */ getAllMovies),\n/* harmony export */   \"newGetAllMovies\": () => (/* binding */ newGetAllMovies)\n/* harmony export */ });\nconst newShowsUrl = 'https://api.tvmaze.com/shows/';\r\nconst likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/QhgWz32GeSKsu1QMY3gI/likes/';\r\nconst commentsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/QhgWz32GeSKsu1QMY3gI/comments/';\r\n\r\nconst getAllMovies = async () => {\r\n  const response = (await fetch(showsUrl)).json();\r\n  return response;\r\n};\r\n\r\nconst newGetAllMovies = async (id) => {\r\n  const response = (await fetch(newShowsUrl+id)).json();\r\n  return response;\r\n};\r\n\r\nconst getAllLikes = async () => {\r\n  const response = (await fetch(likesUrl)).json();\r\n  return response;\r\n};\r\n\r\nconst addLikes = async (id) => {\r\n  await fetch(likesUrl, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n\r\nconst getAllComments = async () => {\r\n  const response = (await fetch(commentsUrl)).json();\r\n  return response;\r\n};\r\n\r\nconst addComment = async (comment) => {\r\n  await fetch(commentsUrl, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: comment.itemId,\r\n      username: comment.username,\r\n      comment: comment.commentMsg,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\n\n//# sourceURL=webpack://movies-database/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/involvementAPI.js":
/*!***************************************!*\
  !*** ./src/modules/involvementAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INVOLVEMENT_URL\": () => (/* binding */ INVOLVEMENT_URL),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst INVOLVEMENT_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/QhgWz32GeSKsu1QMY3gI/';\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INVOLVEMENT_URL);\n\n//# sourceURL=webpack://movies-database/./src/modules/involvementAPI.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments */ \"./src/modules/displayComments.js\");\n/* harmony import */ var _addComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComments.js */ \"./src/modules/addComments.js\");\n\r\n\r\n\r\nconst commentFunction = () => {\r\n  const getMovieData = async (id) => {\r\n      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);\r\n      const show = await response.json();\r\n      return show;\r\n  }\r\n  const commentButtons = document.querySelectorAll('.btn-comments');\r\n  const openPopup = (event) => {\r\n    const targetId = event.target.id;\r\n    const dialog = document.querySelector('#list');\r\n    dialog.showModal();\r\n    getMovieData(targetId).then((singleData) => {\r\n      console.log(singleData)\r\n      dialog.innerHTML = `\r\n          <a id=\"close-button\" class=\"comment-popup-close-button\" href=\"#\">X</a>\r\n          <div class=\"poster-container\">\r\n          <img id=\"media-poster\" src=\"${singleData.image.original}\">\r\n          </div>\r\n          <div class=\"movie-description\">\r\n          <p class=\"comment-popup-movie-name\">${singleData.name} </strong> ⭐${singleData.rating.average}</p>\r\n          <p><strong>Genre:</strong> ${singleData.genres}</p>\r\n          <p>${singleData.summary}</p>\r\n          </div>\r\n          <br>\r\n          <div class=\"comment-section\">\r\n          <p id=\"review-title\">Reviews (<span id=\"review-count\">0</span>)</p>\r\n          <form action=\"#\" class=\"add-comments\">\r\n            <h3>Add your comment</h3>\r\n            <input type=\"text\" id=\"name\" class=\"alert-button\" name=\"username1\" placeholder=\"Type your name here\">\r\n            <textarea id=\"comments\" class=\"alert-button\" name=\"message\" cols=\"40\" rows=\"5\" placeholder=\"Write you comment here..\"></textarea>\r\n            <button type=\"submit\" class=\"submit-comments\">Comment</button>\r\n          </form>\r\n        `;\r\n\r\n      const closeButton = document.querySelector('#close-button');\r\n      closeButton.addEventListener('click', () => {\r\n        dialog.close();\r\n      });\r\n\r\n      (0,_displayComments__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(targetId);\r\n      (0,_addComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(targetId);\r\n    });\r\n  };\r\n\r\n  const testBtn = document.querySelectorAll('.btn-comments');\r\n  testBtn.forEach((btn) => {\r\n    btn.addEventListener('click', openPopup);\r\n    \r\n});\r\n\r\nconst dialog = document.querySelector('#list');\r\n dialog.addEventListener('click', (e) => {\r\n    if(e.target.classList.contains('btn-comments')) {\r\n      // console.log(commentFunction);\r\n        alert(commentFunction);\r\n    }\r\n });\r\n\r\n  commentButtons.forEach(addClickEvent);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentFunction);\n\n//# sourceURL=webpack://movies-database/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/showComments.js":
/*!*************************************!*\
  !*** ./src/modules/showComments.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Display\": () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _getComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments */ \"./src/modules/getComments.js\");\n/* eslint-disable import/prefer-default-export */\r\n\r\n\r\n\r\nconst shows = await (0,_getComments__WEBPACK_IMPORTED_MODULE_0__.getAllMovies)();\r\n\r\nconst requestedResponse = async (id) => {\r\n  const newShows = await (0,_getComments__WEBPACK_IMPORTED_MODULE_0__.newGetAllMovies)(id);\r\n  return newShows;\r\n};\r\n\r\nconst Display = async (id) => {\r\n  const data = await requestedResponse(id);\r\n  console.log(typeof data)\r\n  const htmlString=`\r\n    <div class=\"show-cards\">\r\n      <img src=\"${data.image[\"medium\"]}\" alt=\"show Images\">\r\n      <div class=\"details\">\r\n          <h2>${data.name} \r\n            <button class=\"btn\" id=\"btnLikes\"><i class=\"bi bi-heart\" data-showId=\"${data.id}\"></i></button></h2>\r\n            <p class=\"likeId\" >Likes</p>\r\n      </div>\r\n      <div class=\"button-modal\">\r\n        <button type=\"button\" class=\"button\" id=\"modal-comments\" data-showId=\"${data.id}\">Comments</button>\r\n        <button type=\"button\" class=\"button\" id=\"reservations\" data-showId=\"${data.id}\">Reservations</button>\r\n      </div>\r\n      </div>\r\n      <div class=\"modal\">\r\n        <div class=\"modal-box\">\r\n        <div class=\"detail-top\">\r\n              <span class=\"close-button\">X</span>\r\n          </div>\r\n          <div class=\"detail-img\">\r\n            <img id=\"img-detail\" alt=\"show Images\">\r\n          </div>\r\n          <div class=\"comment-detais\">\r\n            <p> Fuel: titanium   Lenght:100</p>\r\n            <p> Weight: titanium   Power:100</p>\r\n            <h2>Comments</h2>\r\n          </div>\r\n          <div class=\"form-comments\">\r\n            <form id=\"formCommentId\" class=\"formComment\">\r\n            <h2>Add a comment</h2>\r\n              <input type=\"text\" id=\"name\" name=\"name\">\r\n              <textarea id=\"comment\" name=\"comment\" rows=\"4\" cols=\"30\"></textarea>\r\n              <input class=\"submitCommentButton\" type=\"submit\" value=\"Submit\">\r\n            </form>\r\n          </div>\r\n        </div>\r\n    </div>`\r\n    return htmlString;\r\n};\r\n// const cardshows = document.querySelector('.shows');\r\n// console.log(cardshows)\r\n//   const div = document.createElement('div');\r\n//   div.append(htmlshow);\r\n// cardshows.innerHTML = htmlshow;\r\n// cardshows.insertAdjacentHTML('afterbegin',htmlshow)\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://movies-database/./src/modules/showComments.js?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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