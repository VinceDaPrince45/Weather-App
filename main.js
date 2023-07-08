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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    height:100vh;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extractWeather: () => (/* binding */ extractWeather)\n/* harmony export */ });\n// functions to fetch data from weather api\n\nconst baseURL = 'https://api.weatherapi.com/v1';\nconst key = '2b93e0b7f93640cbace163743233006';\n\n// https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london\n\nfunction extractWeather(location) {\n    const currentData = {};\n    const forecastDays = [\n        {},{},{},{},{},{},{}\n    ];\n    const forecastHour = [\n        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}\n    ];\n    const allData = {\n        currentData,forecastDays,forecastHour\n    };\n    const promise = getForecast(location)\n    .then(\n        response => {\n            currentData.condition = response.current.condition.text;\n            currentData.actualTempF = response.current.temp_f;\n            currentData.actualTempC = response.current.temp_c;\n            currentData.feelsLikeF = response.current.feelslike_f;\n            currentData.feelsLikeC = response.current.feelslike_c;\n            currentData.location = response.location.name;\n            const date = response.location.localtime.split(' ')[0];\n            currentData.date = date;\n            const time = response.location.localtime.split(' ')[1];\n            currentData.time = time;\n            currentData.humidity = response.current.humidity;\n            currentData.isDay = response.current.is_day;\n            currentData.uv = response.current.uv;\n            currentData.windkph = response.current.wind_kph;\n            currentData.windmph = response.current.wind_mph;\n            currentData.cloud = response.current.cloud;\n            currentData.code = response.current.condition.code;\n\n            let dayCounter = 0;\n            for (const day of response.forecast.forecastday) {\n                forecastDays[dayCounter].condition = day.day.condition.text;\n                forecastDays[dayCounter].maxtempc = day.day.maxtemp_c;\n                forecastDays[dayCounter].maxtempf = day.day.maxtemp_f;\n                forecastDays[dayCounter].code = day.day.condition.code;\n                if (day.date == currentData.date) {\n                    let hourCounter = 0;\n                    for (const hour of day.hour) {\n                        forecastHour[hourCounter].time = hour.time.split(' ')[1];\n                        forecastHour[hourCounter].tempc = hour.temp_c;\n                        forecastHour[hourCounter].tempf = hour.temp_f;\n                        forecastHour[hourCounter].condition = hour.condition.text;\n                        forecastHour[hourCounter].code = hour.condition.code;\n                        hourCounter += 1;\n                    }\n                }\n                dayCounter += 1;\n            }\n        }\n    )\n    .catch(err => {\n        throw new Error('spelled wrong')\n    });\n\n    // return object of data to access\n    return allData;\n}\n\nasync function getForecast(location) {\n    try {\n        const response = await fetch(baseURL + '/forecast.json?key=' + key + '&q=' + String(location) + '&days=7', {mode:'cors'});\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.log(error)\n    }\n}\n\n// both above functions return promise, need to use .then to access data\n\n\n\n//# sourceURL=webpack://weather-app/./src/data.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateDisplay: () => (/* binding */ updateDisplay)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\n// change display based on events and asynchronous functions from data.js\n\nconst submitBtn = document.querySelector('.searchbar > button');\nconst location = document.querySelector('input.searchbar');\nconst mainContainer = document.querySelector('#main');\nconst todayInfo = document.querySelector('.todayinfo');\nconst moreInfo = document.querySelector('.moreinfo');\nconst hoursBtn = document.querySelector('button.hour');\nconst weekBtn = document.querySelector('button.week');\nconst body = document.querySelector('body');\nconst weekForecast = document.querySelector('div.week');\nconst hourForecast = document.querySelector('div.hour');\nlet data;\nlet hour;\nconst iconList = [\n\t{\n\t\t\"code\" : 1000,\n\t\t\"day\" : \"Sunny\",\n\t\t\"night\" : \"Clear\",\n\t\t\"icon\" : 113\n\t},\n\t{\n\t\t\"code\" : 1003,\n\t\t\"day\" : \"Partly cloudy\",\n\t\t\"night\" : \"Partly cloudy\",\n\t\t\"icon\" : 116\n\t},\n\t{\n\t\t\"code\" : 1006,\n\t\t\"day\" : \"Cloudy\",\n\t\t\"night\" : \"Cloudy\",\n\t\t\"icon\" : 119\n\t},\n\t{\n\t\t\"code\" : 1009,\n\t\t\"day\" : \"Overcast\",\n\t\t\"night\" : \"Overcast\",\n\t\t\"icon\" : 122\n\t},\n\t{\n\t\t\"code\" : 1030,\n\t\t\"day\" : \"Mist\",\n\t\t\"night\" : \"Mist\",\n\t\t\"icon\" : 143\n\t},\n\t{\n\t\t\"code\" : 1063,\n\t\t\"day\" : \"Patchy rain possible\",\n\t\t\"night\" : \"Patchy rain possible\",\n\t\t\"icon\" : 176\n\t},\n\t{\n\t\t\"code\" : 1066,\n\t\t\"day\" : \"Patchy snow possible\",\n\t\t\"night\" : \"Patchy snow possible\",\n\t\t\"icon\" : 179\n\t},\n\t{\n\t\t\"code\" : 1069,\n\t\t\"day\" : \"Patchy sleet possible\",\n\t\t\"night\" : \"Patchy sleet possible\",\n\t\t\"icon\" : 182\n\t},\n\t{\n\t\t\"code\" : 1072,\n\t\t\"day\" : \"Patchy freezing drizzle possible\",\n\t\t\"night\" : \"Patchy freezing drizzle possible\",\n\t\t\"icon\" : 185\n\t},\n\t{\n\t\t\"code\" : 1087,\n\t\t\"day\" : \"Thundery outbreaks possible\",\n\t\t\"night\" : \"Thundery outbreaks possible\",\n\t\t\"icon\" : 200\n\t},\n\t{\n\t\t\"code\" : 1114,\n\t\t\"day\" : \"Blowing snow\",\n\t\t\"night\" : \"Blowing snow\",\n\t\t\"icon\" : 227\n\t},\n\t{\n\t\t\"code\" : 1117,\n\t\t\"day\" : \"Blizzard\",\n\t\t\"night\" : \"Blizzard\",\n\t\t\"icon\" : 230\n\t},\n\t{\n\t\t\"code\" : 1135,\n\t\t\"day\" : \"Fog\",\n\t\t\"night\" : \"Fog\",\n\t\t\"icon\" : 248\n\t},\n\t{\n\t\t\"code\" : 1147,\n\t\t\"day\" : \"Freezing fog\",\n\t\t\"night\" : \"Freezing fog\",\n\t\t\"icon\" : 260\n\t},\n\t{\n\t\t\"code\" : 1150,\n\t\t\"day\" : \"Patchy light drizzle\",\n\t\t\"night\" : \"Patchy light drizzle\",\n\t\t\"icon\" : 263\n\t},\n\t{\n\t\t\"code\" : 1153,\n\t\t\"day\" : \"Light drizzle\",\n\t\t\"night\" : \"Light drizzle\",\n\t\t\"icon\" : 266\n\t},\n\t{\n\t\t\"code\" : 1168,\n\t\t\"day\" : \"Freezing drizzle\",\n\t\t\"night\" : \"Freezing drizzle\",\n\t\t\"icon\" : 281\n\t},\n\t{\n\t\t\"code\" : 1171,\n\t\t\"day\" : \"Heavy freezing drizzle\",\n\t\t\"night\" : \"Heavy freezing drizzle\",\n\t\t\"icon\" : 284\n\t},\n\t{\n\t\t\"code\" : 1180,\n\t\t\"day\" : \"Patchy light rain\",\n\t\t\"night\" : \"Patchy light rain\",\n\t\t\"icon\" : 293\n\t},\n\t{\n\t\t\"code\" : 1183,\n\t\t\"day\" : \"Light rain\",\n\t\t\"night\" : \"Light rain\",\n\t\t\"icon\" : 296\n\t},\n\t{\n\t\t\"code\" : 1186,\n\t\t\"day\" : \"Moderate rain at times\",\n\t\t\"night\" : \"Moderate rain at times\",\n\t\t\"icon\" : 299\n\t},\n\t{\n\t\t\"code\" : 1189,\n\t\t\"day\" : \"Moderate rain\",\n\t\t\"night\" : \"Moderate rain\",\n\t\t\"icon\" : 302\n\t},\n\t{\n\t\t\"code\" : 1192,\n\t\t\"day\" : \"Heavy rain at times\",\n\t\t\"night\" : \"Heavy rain at times\",\n\t\t\"icon\" : 305\n\t},\n\t{\n\t\t\"code\" : 1195,\n\t\t\"day\" : \"Heavy rain\",\n\t\t\"night\" : \"Heavy rain\",\n\t\t\"icon\" : 308\n\t},\n\t{\n\t\t\"code\" : 1198,\n\t\t\"day\" : \"Light freezing rain\",\n\t\t\"night\" : \"Light freezing rain\",\n\t\t\"icon\" : 311\n\t},\n\t{\n\t\t\"code\" : 1201,\n\t\t\"day\" : \"Moderate or heavy freezing rain\",\n\t\t\"night\" : \"Moderate or heavy freezing rain\",\n\t\t\"icon\" : 314\n\t},\n\t{\n\t\t\"code\" : 1204,\n\t\t\"day\" : \"Light sleet\",\n\t\t\"night\" : \"Light sleet\",\n\t\t\"icon\" : 317\n\t},\n\t{\n\t\t\"code\" : 1207,\n\t\t\"day\" : \"Moderate or heavy sleet\",\n\t\t\"night\" : \"Moderate or heavy sleet\",\n\t\t\"icon\" : 320\n\t},\n\t{\n\t\t\"code\" : 1210,\n\t\t\"day\" : \"Patchy light snow\",\n\t\t\"night\" : \"Patchy light snow\",\n\t\t\"icon\" : 323\n\t},\n\t{\n\t\t\"code\" : 1213,\n\t\t\"day\" : \"Light snow\",\n\t\t\"night\" : \"Light snow\",\n\t\t\"icon\" : 326\n\t},\n\t{\n\t\t\"code\" : 1216,\n\t\t\"day\" : \"Patchy moderate snow\",\n\t\t\"night\" : \"Patchy moderate snow\",\n\t\t\"icon\" : 329\n\t},\n\t{\n\t\t\"code\" : 1219,\n\t\t\"day\" : \"Moderate snow\",\n\t\t\"night\" : \"Moderate snow\",\n\t\t\"icon\" : 332\n\t},\n\t{\n\t\t\"code\" : 1222,\n\t\t\"day\" : \"Patchy heavy snow\",\n\t\t\"night\" : \"Patchy heavy snow\",\n\t\t\"icon\" : 335\n\t},\n\t{\n\t\t\"code\" : 1225,\n\t\t\"day\" : \"Heavy snow\",\n\t\t\"night\" : \"Heavy snow\",\n\t\t\"icon\" : 338\n\t},\n\t{\n\t\t\"code\" : 1237,\n\t\t\"day\" : \"Ice pellets\",\n\t\t\"night\" : \"Ice pellets\",\n\t\t\"icon\" : 350\n\t},\n\t{\n\t\t\"code\" : 1240,\n\t\t\"day\" : \"Light rain shower\",\n\t\t\"night\" : \"Light rain shower\",\n\t\t\"icon\" : 353\n\t},\n\t{\n\t\t\"code\" : 1243,\n\t\t\"day\" : \"Moderate or heavy rain shower\",\n\t\t\"night\" : \"Moderate or heavy rain shower\",\n\t\t\"icon\" : 356\n\t},\n\t{\n\t\t\"code\" : 1246,\n\t\t\"day\" : \"Torrential rain shower\",\n\t\t\"night\" : \"Torrential rain shower\",\n\t\t\"icon\" : 359\n\t},\n\t{\n\t\t\"code\" : 1249,\n\t\t\"day\" : \"Light sleet showers\",\n\t\t\"night\" : \"Light sleet showers\",\n\t\t\"icon\" : 362\n\t},\n\t{\n\t\t\"code\" : 1252,\n\t\t\"day\" : \"Moderate or heavy sleet showers\",\n\t\t\"night\" : \"Moderate or heavy sleet showers\",\n\t\t\"icon\" : 365\n\t},\n\t{\n\t\t\"code\" : 1255,\n\t\t\"day\" : \"Light snow showers\",\n\t\t\"night\" : \"Light snow showers\",\n\t\t\"icon\" : 368\n\t},\n\t{\n\t\t\"code\" : 1258,\n\t\t\"day\" : \"Moderate or heavy snow showers\",\n\t\t\"night\" : \"Moderate or heavy snow showers\",\n\t\t\"icon\" : 371\n\t},\n\t{\n\t\t\"code\" : 1261,\n\t\t\"day\" : \"Light showers of ice pellets\",\n\t\t\"night\" : \"Light showers of ice pellets\",\n\t\t\"icon\" : 374\n\t},\n\t{\n\t\t\"code\" : 1264,\n\t\t\"day\" : \"Moderate or heavy showers of ice pellets\",\n\t\t\"night\" : \"Moderate or heavy showers of ice pellets\",\n\t\t\"icon\" : 377\n\t},\n\t{\n\t\t\"code\" : 1273,\n\t\t\"day\" : \"Patchy light rain with thunder\",\n\t\t\"night\" : \"Patchy light rain with thunder\",\n\t\t\"icon\" : 386\n\t},\n\t{\n\t\t\"code\" : 1276,\n\t\t\"day\" : \"Moderate or heavy rain with thunder\",\n\t\t\"night\" : \"Moderate or heavy rain with thunder\",\n\t\t\"icon\" : 389\n\t},\n\t{\n\t\t\"code\" : 1279,\n\t\t\"day\" : \"Patchy light snow with thunder\",\n\t\t\"night\" : \"Patchy light snow with thunder\",\n\t\t\"icon\" : 392\n\t},\n\t{\n\t\t\"code\" : 1282,\n\t\t\"day\" : \"Moderate or heavy snow with thunder\",\n\t\t\"night\" : \"Moderate or heavy snow with thunder\",\n\t\t\"icon\" : 395\n\t}\n]\n\nfunction updateDisplay() {\n    submitBtn.addEventListener('click', (e) => {\n\t\tdata = (0,_data__WEBPACK_IMPORTED_MODULE_0__.extractWeather)(location.value);\n\t\tvar fileInterval = setInterval(function() {\n\t\t\tif (typeof data.currentData.condition !== 'undefined') {\n\t\t\t\tclearAll()\n\t\t\t\tconst time = data.currentData.time;\n\t\t\t\thour = +time.split(':')[0];\n\t\t\t\t// determine whats active and displayHours or displayWeek\n\t\t\t\tdisplayHours(data.forecastHour);\n\t\t\t\tdisplayMain(data.currentData);\n\t\t\t\tdisplayMoreInfo(data.currentData);\n\t\t\t\tclearInterval(fileInterval)\n\n\t\t\t} else {console.log('waiting')}\n\t\t},100)\n\n        // when pressing submit, set textcontent of all divs to none and update with data\n        // look at which tabs are active as well\n\n    })\n    body.addEventListener('click', (e) => {\n        activeTab(e);\n    })\n}\n\n// pressing search removes all content from divs and refreshes with new data\n\nfunction clearAll() {\n    location.value = '';\n    for (const div of Array.from(document.querySelectorAll('.main'))) {\n        if (div.children.length == 0) {\n            div.textContent = '';\n        }\n    }\n\tweekForecast.textContent = '';\n\thourForecast.textContent = '';\n\ttodayInfo.textContent = '';\n}\n\n// pressing weekly or hourly changes bottom data to whatever // add active class\n\nfunction activeTab(e) {\n    if (e.target.classList.contains('hour') || e.target.classList.contains('week')) {\n        // remove active class from both divs and add to target\n        weekForecast.classList.remove('active');\n        hourForecast.classList.remove('active');\n        weekForecast.style.display = 'none';\n        hourForecast.style.display = 'none';\n\n        e.target.classList.add('active');\n        e.target.style.display = 'block';\n    }\n}\n\n// hourly data is displayed for next 24 hours\n\nfunction displayHours(array) {\n    for (let i=0;i < array.length;i++) {\n        const hourContainer = document.createElement('div');\n        hourContainer.classList.add('hour');\n        const time = document.createElement('div');\n        time.textContent = array[i].time;\n        const temperature = document.createElement('div');\n        temperature.textContent = `Temp C: ${array[i].tempc} / Temp F: ${array[i].tempf}`;\n        const icon = document.createElement('div');\n\t\tlet string = array[i].code.toString();\n\t\tlet concatenated = 'Code number is ' + string;\n        icon.textContent = concatenated\n        hourContainer.append(time,temperature,icon)\n\n        hourContainer.style.cssText = 'display:grid;grid-template-rows:auto;grid-template;column;1;border:1px solid black';\n\t\tif (hour == +array[i].time.split(':')[0]) {\n\t\t\thourContainer.style.border = '5px solid blue';\n\t\t}\n        hourForecast.appendChild(hourContainer);\n    }\n}\n\nfunction displayMain(object) {\n\tconst todayContainer = document.createElement('div');\n\ttodayContainer.classList.add('today');\n\tconst dateTime = document.createElement('div');\n\tdateTime.textContent = object.date.toString() + ' ' + object.time.toString()\n\tconst currentCondition = document.createElement('div');\n\tcurrentCondition.textContent = object.condition;\n\tconst location = document.createElement('div');\n\tlocation.textContent = object.location;\n\tconst currentTemp = document.createElement('div');\n\tcurrentTemp.textContent = 'Temperature F: ' + object.actualTempF.toString();\n\tconst currentIcon = document.createElement('div');\n\tcurrentIcon.textContent = object.code.toString();\n\t\n\ttodayContainer.append(currentCondition,location,dateTime,currentTemp,currentIcon);\n\ttodayContainer.style.cssText = 'display:grid;grid-template-columns:1;border:1px solid black';\n\n\ttodayInfo.appendChild(todayContainer);\n}\t\n\nfunction displayMoreInfo(object) {\n\tconst moreinfoContainer = document.createElement('div');\n\tconst feelsLike = document.createElement('div');\n\tfeelsLike.textContent = 'Feels like F: ' + object.feelsLikeF.toString();\n\tconst humidity = document.createElement('div');\n\thumidity.textContent = 'Humidity: ' + object.humidity.toString() + '%';\n\tconst cloud = document.createElement('div');\n\tcloud.textContent = 'Cloud percentage: ' + object.cloud.toString() + '%';\n\tconst windspeed = document.createElement('div');\n\twindspeed.textContent = 'Wind speed: ' + object.windmph.toString() + 'mph';\n\tconst uv = document.createElement('div');\n\tuv.textContent = object.uv;\n\n\tmoreinfoContainer.append(feelsLike,humidity,cloud,windspeed,uv);\n\tmoreinfoContainer.style.cssText = 'display:grid;grid-template-columns:1;border:1px solid black';\n\n\tmoreInfo.appendChild(moreinfoContainer);\n}\n// button to switch between fahrenheit and celsius\n\n//# sourceURL=webpack://weather-app/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\n\n\n\n(0,_display__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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