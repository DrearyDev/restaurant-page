/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./chibold-font/Chibolddemo-1GD7g.ttf */ "./src/chibold-font/Chibolddemo-1GD7g.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: chibold;
}

@font-face {
    font-family: chibold;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

:root {
    --BG-COLOR: #f472b6;
    --CONTENT-BG-COLOR: #fbcfe8;
    --HEADER-CLICKED-COLOR: #c084fc;
    --HEADER-BORDER-COLOR: #fbcfe8;
    --TAB-BG-COLOR: #f9a8d4;
}

body {
    background-color: var(--BG-COLOR);

    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    padding: 20px;
}

/* div that contains all content */
.content {
    min-height: 100vh;
    width: 100%;
    border-radius: 10px;
    background-color: var(--CONTENT-BG-COLOR);
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
}

/* header directly above content div */
.header {
    height: 50px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
}
.header .tabs {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
}
.header .tabs .tab {
    height: 100%;
    width: 200px;
    border: 2px solid var(--HEADER-BORDER-COLOR);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: transparent;
    background-color: var(--TAB-BG-COLOR);

    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
}
.header .tabs .tab.clicked {
    background-color: var(--CONTENT-BG-COLOR);
}

/* home heading section */
.home-heading {
    display: flex;
    align-items: center;
    justify-content: end;

    margin-bottom: 75px;
}
.pastel {
    height: 200px;
    width: auto;
}
.home-heading p {
    font-size: 4rem;
    text-align: center;
    rotate: -3deg;

    display: flex;
    flex-direction: column;
    align-items: center;
}
.home-heading p .big {
    font-size: 4.5rem;
}
.home-heading p .small {
    font-size: 3rem;
}


/* review section */
.review {
    height: 300px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 30px;

    margin-bottom: 75px;

    gap: 20px;
}
.reviewer {
    height: 300px;
    border-radius: 30px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
.review > div {
    font-size: 1.5rem;
    padding: 20px;
    border-radius: 30px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
}
.review > div .bold {
    font-family: inherit;
    font-weight: bolder;
}
.review > div .end {
    font-family: inherit;
    width: 100%;

    padding-right: 30px;

    display: flex;
    justify-content: end;
}

/* location section */
.location-title {
    font-size: 5rem;
    rotate: 3deg;
    margin-bottom: 25px;
}

.location {
    width: 100%;
    background-color: #fff;
    border-radius: 30px;
}
.location div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;
}
.location .address {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    padding: 20px;
    font-size: 1.5rem;
}
.location img {
    height: 300px;
    border-radius: 30px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

/* contact section */
.title,
.contact-list {
    margin-bottom: 75px;
}

.title {
    font-size: 5rem;
}

.contact-list {
    list-style: none;
    width: 500px;
    font-size: 2rem;
}
.contact-list li {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.disclaimer {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.5rem;
}

/* menu section */
.item-name {
    font-size: 3rem;
    margin-bottom: 15px;
}
.menu-item {
    display: flex;
    align-items: center;
    gap: 50px;
    background-color: #fff;
    border-radius: 30px;
    margin-bottom: 75px;
}
.menu-item img {
    height: 300px;
    border-radius: 30px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
.menu-item img.reverse {
    border-radius: 0px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
}
.menu-item div {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-size: 2rem;
    margin-right: 75px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    user-select: none;\n    font-family: chibold;\n}\n\n@font-face {\n    font-family: chibold;\n    src: url(./chibold-font/Chibolddemo-1GD7g.ttf);\n}\n\n:root {\n    --BG-COLOR: #f472b6;\n    --CONTENT-BG-COLOR: #fbcfe8;\n    --HEADER-CLICKED-COLOR: #c084fc;\n    --HEADER-BORDER-COLOR: #fbcfe8;\n    --TAB-BG-COLOR: #f9a8d4;\n}\n\nbody {\n    background-color: var(--BG-COLOR);\n\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n\n    padding: 20px;\n}\n\n/* div that contains all content */\n.content {\n    min-height: 100vh;\n    width: 100%;\n    border-radius: 10px;\n    background-color: var(--CONTENT-BG-COLOR);\n    padding: 30px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n/* header directly above content div */\n.header {\n    height: 50px;\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: inherit;\n}\n.header .tabs {\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n}\n.header .tabs .tab {\n    height: 100%;\n    width: 200px;\n    border: 2px solid var(--HEADER-BORDER-COLOR);\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n    border-bottom: transparent;\n    background-color: var(--TAB-BG-COLOR);\n\n    font-size: 1.5rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.header .tabs .tab.clicked {\n    background-color: var(--CONTENT-BG-COLOR);\n}\n\n/* home heading section */\n.home-heading {\n    display: flex;\n    align-items: center;\n    justify-content: end;\n\n    margin-bottom: 75px;\n}\n.pastel {\n    height: 200px;\n    width: auto;\n}\n.home-heading p {\n    font-size: 4rem;\n    text-align: center;\n    rotate: -3deg;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.home-heading p .big {\n    font-size: 4.5rem;\n}\n.home-heading p .small {\n    font-size: 3rem;\n}\n\n\n/* review section */\n.review {\n    height: 300px;\n    display: flex;\n    align-items: center;\n    background-color: #fff;\n    border-radius: 30px;\n\n    margin-bottom: 75px;\n\n    gap: 20px;\n}\n.reviewer {\n    height: 300px;\n    border-radius: 30px;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n.review > div {\n    font-size: 1.5rem;\n    padding: 20px;\n    border-radius: 30px;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    text-align: center;\n}\n.review > div .bold {\n    font-family: inherit;\n    font-weight: bolder;\n}\n.review > div .end {\n    font-family: inherit;\n    width: 100%;\n\n    padding-right: 30px;\n\n    display: flex;\n    justify-content: end;\n}\n\n/* location section */\n.location-title {\n    font-size: 5rem;\n    rotate: 3deg;\n    margin-bottom: 25px;\n}\n\n.location {\n    width: 100%;\n    background-color: #fff;\n    border-radius: 30px;\n}\n.location div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    gap: 20px;\n}\n.location .address {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    text-align: center;\n    padding: 20px;\n    font-size: 1.5rem;\n}\n.location img {\n    height: 300px;\n    border-radius: 30px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\n\n/* contact section */\n.title,\n.contact-list {\n    margin-bottom: 75px;\n}\n\n.title {\n    font-size: 5rem;\n}\n\n.contact-list {\n    list-style: none;\n    width: 500px;\n    font-size: 2rem;\n}\n.contact-list li {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.disclaimer {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 0.5rem;\n}\n\n/* menu section */\n.item-name {\n    font-size: 3rem;\n    margin-bottom: 15px;\n}\n.menu-item {\n    display: flex;\n    align-items: center;\n    gap: 50px;\n    background-color: #fff;\n    border-radius: 30px;\n    margin-bottom: 75px;\n}\n.menu-item img {\n    height: 300px;\n    border-radius: 30px;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n.menu-item img.reverse {\n    border-radius: 0px;\n    border-top-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n}\n.menu-item div {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    text-align: center;\n    font-size: 2rem;\n    margin-right: 75px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact)
/* harmony export */ });
const content = document.querySelector('.content');


const createTitle = (() => {
    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Contact us';

    return title;
})();

const createContactDetails = (() => {
    let ul = document.createElement('ul');
    ul.classList.add('contact-list');
    ul.innerHTML = `
    Email: <li>WeAreNotResponsible@protonmail.me</li>
    <br>
    Phone Number: <li>911-911-9191</li>
    <br>
    Address: <li>3730 SugerCane Crescent, WhinePeg, ON L4T 2Z4, America</li>`;

    return ul;
})();

const createDisclaimer = (() => {
    let div = document.createElement('div');
    div.classList.add('disclaimer');
    div.textContent = `We are not responsible for any health issues as a result of eating here..`;

    return div;
})();

function contact() {
    content.appendChild(createTitle);
    content.appendChild(createContactDetails);
    content.appendChild(createDisclaimer);
};



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _pastel_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pastel.png */ "./src/pastel.png");
/* harmony import */ var _reviewer_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviewer.jpg */ "./src/reviewer.jpg");
/* harmony import */ var _location_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.png */ "./src/location.png");




const content = document.querySelector('.content');

const createHomeHeading = (() => {
    //create pastel image element
    const pastel = new Image();
    pastel.src = _pastel_png__WEBPACK_IMPORTED_MODULE_0__;
    pastel.setAttribute('draggable', false);
    pastel.classList.add('pastel');

    //create title element
    let title = document.createElement('p');
    title.innerHTML = `<span class="big">Pastels</span><br>Mellow<br><span class="small">Food</span>`;

    //combine pastelImg and Title
    let homeHeading = document.createElement('div');
    homeHeading.classList.add('home-heading');
    homeHeading.appendChild(pastel);
    homeHeading.appendChild(title);

    return homeHeading;
})();

const createReview = (() => {
    //create image of reviewer
    const reviewer = new Image();
    reviewer.src = _reviewer_jpg__WEBPACK_IMPORTED_MODULE_1__;
    reviewer.setAttribute('draggable', false);
    reviewer.classList.add('reviewer');

    //create div for text
    let comment = document.createElement('div');
    comment.innerHTML = `"I was given Diabetes after<br>
    just <span class="bold">ONE MEAL</span> at Pastels Mellow Food!!!"<br><br>
    <span class="end">- fat gus</span>`;

    //combine reviewerImg and comment
    let review = document.createElement('div');
    review.classList.add('review');
    review.appendChild(reviewer);
    review.appendChild(comment);

    return review;
})();

const createLocationTitle = (() => {
    //create title for section with location
    let title = document.createElement('div');
    title.textContent = `Come Visit Us at:`;
    title.classList.add('location-title');

    return title;
})();

const createLocation = (() => {
    //create image of location
    const location = new Image();
    location.src = _location_png__WEBPACK_IMPORTED_MODULE_2__;
    location.setAttribute('draggable', false);

    //create div for text
    let address = document.createElement('p');
    address.classList.add('address')
    address.innerText = `3730 SugerCane Crescent, WhinePeg, ON L4T 2Z4, America`;

    //combine locationImg and address
    let locationDiv = document.createElement('div');
    locationDiv.classList.add('location');
    let div = document.createElement('div');
    div.appendChild(address);
    div.appendChild(location);
    locationDiv.appendChild(div);

    return locationDiv;
})();

function home() {
    content.appendChild(createHomeHeading);
    content.appendChild(createReview);
    content.appendChild(createLocationTitle);
    content.appendChild(createLocation);

};




/***/ }),

/***/ "./src/initializeHeader.js":
/*!*********************************!*\
  !*** ./src/initializeHeader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeHeader: () => (/* binding */ initializeHeader)
/* harmony export */ });
const initializeHeader = () => {
    const content = document.querySelector('.content');

    //create header
    const header = document.createElement('div');
    header.classList.add('header');
    document.body.insertBefore(header, content);

    //create tabs
    let tabs = document.createElement('div');
    tabs.classList.add('tabs');
    let tabNames = ['Home', 'Menu', 'Contact'];
    for (let i = 0; i < 3; i++) {
        let tab = document.createElement('div');
        tab.textContent = tabNames[i];
        tab.classList.add('tab');

        tabs.appendChild(tab);
    };

    header.appendChild(tabs);
};



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _mellowpudding_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mellowpudding.png */ "./src/mellowpudding.png");
/* harmony import */ var _mellowcoffee_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mellowcoffee.png */ "./src/mellowcoffee.png");
/* harmony import */ var _mellowcereal_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mellowcereal.png */ "./src/mellowcereal.png");





const content = document.querySelector('.content');

const addMenuName = (title) => {
    let itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.textContent = title;

    return itemName;
};

const AddMenuItem = (img, desc, reverse) => {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');


    let newImage = new Image();
    newImage.src = img;

    let description = document.createElement('div');
    description.textContent = desc;

    if (reverse){
        description.style.marginRight = '0px';
        description.style.marginLeft = '75px';
        newImage.classList.add('reverse');
        menuItem.appendChild(description);
        menuItem.appendChild(newImage);
    } else {
        menuItem.appendChild(newImage);
        menuItem.appendChild(description);
    };

    return menuItem;
};

function menu() {
    content.appendChild(addMenuName('Mellow Pudding'));
    content.appendChild(AddMenuItem(_mellowpudding_png__WEBPACK_IMPORTED_MODULE_0__,
    'Mellow pudding is the most sweet pudding with marshmellows and sugar sprinkled on top!', false));

    content.appendChild(addMenuName('Mellow Coffee'));
    content.appendChild(AddMenuItem(_mellowcoffee_png__WEBPACK_IMPORTED_MODULE_1__,
    'Mellow Coffee is the nice taste of coffee with the sweetness of marshmellows!', true));

    content.appendChild(addMenuName('Mellow Cereal'));
    content.appendChild(AddMenuItem(_mellowcereal_png__WEBPACK_IMPORTED_MODULE_2__,
    'Mellow Cereal is literally just marshmellows in a bowl...', false));
};



/***/ }),

/***/ "./src/chibold-font/Chibolddemo-1GD7g.ttf":
/*!************************************************!*\
  !*** ./src/chibold-font/Chibolddemo-1GD7g.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60fbcc1a7edc348cd478.ttf";

/***/ }),

/***/ "./src/location.png":
/*!**************************!*\
  !*** ./src/location.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64a500ebb2d5101bef90.png";

/***/ }),

/***/ "./src/mellowcereal.png":
/*!******************************!*\
  !*** ./src/mellowcereal.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5327f06dc475c7d51ae4.png";

/***/ }),

/***/ "./src/mellowcoffee.png":
/*!******************************!*\
  !*** ./src/mellowcoffee.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e04f102118d95ec20c5.png";

/***/ }),

/***/ "./src/mellowpudding.png":
/*!*******************************!*\
  !*** ./src/mellowpudding.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4211d5d841c6edea5981.png";

/***/ }),

/***/ "./src/pastel.png":
/*!************************!*\
  !*** ./src/pastel.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3092d0a3256dc2270c9d.png";

/***/ }),

/***/ "./src/reviewer.jpg":
/*!**************************!*\
  !*** ./src/reviewer.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed64bffe81d3fe5ecd6a.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _initializeHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initializeHeader.js */ "./src/initializeHeader.js");






(0,_initializeHeader_js__WEBPACK_IMPORTED_MODULE_4__.initializeHeader)();

// clicking on tabs
const content = document.querySelector('.content');
let tabs = [...document.querySelector('.tabs').children];

// home tab clicked by default
tabs[0].classList.add('clicked');
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('clicked');
        });

        tab.classList.add('clicked');

        content.innerHTML = '';

        switch (tab.textContent) {
            case 'Home':
                (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();
                break;
            case 'Menu':
                (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)();
                break;
            case 'Contact':
                (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact)();
                break;
        };
    });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUpBQXVEO0FBQ25HLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGNBQWMsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxRQUFRLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsY0FBYyxXQUFXLEtB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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDWTtBQUNBO0FBQ007QUFDa0I7O0FBRXpELHNFQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBSTtBQUNwQjtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFJO0FBQ3BCO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQU87QUFDdkI7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbGl6ZUhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9jaGlib2xkLWZvbnQvQ2hpYm9sZGRlbW8tMUdEN2cudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBjaGlib2xkO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogY2hpYm9sZDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuOnJvb3Qge1xuICAgIC0tQkctQ09MT1I6ICNmNDcyYjY7XG4gICAgLS1DT05URU5ULUJHLUNPTE9SOiAjZmJjZmU4O1xuICAgIC0tSEVBREVSLUNMSUNLRUQtQ09MT1I6ICNjMDg0ZmM7XG4gICAgLS1IRUFERVItQk9SREVSLUNPTE9SOiAjZmJjZmU4O1xuICAgIC0tVEFCLUJHLUNPTE9SOiAjZjlhOGQ0O1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcblxuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIGRpdiB0aGF0IGNvbnRhaW5zIGFsbCBjb250ZW50ICovXG4uY29udGVudCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT05URU5ULUJHLUNPTE9SKTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuLyogaGVhZGVyIGRpcmVjdGx5IGFib3ZlIGNvbnRlbnQgZGl2ICovXG4uaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG4uaGVhZGVyIC50YWJzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1MHB4O1xufVxuLmhlYWRlciAudGFicyAudGFiIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUhFQURFUi1CT1JERVItQ09MT1IpO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tVEFCLUJHLUNPTE9SKTtcblxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlYWRlciAudGFicyAudGFiLmNsaWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTlRFTlQtQkctQ09MT1IpO1xufVxuXG4vKiBob21lIGhlYWRpbmcgc2VjdGlvbiAqL1xuLmhvbWUtaGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcbn1cbi5wYXN0ZWwge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG4uaG9tZS1oZWFkaW5nIHAge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcm90YXRlOiAtM2RlZztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvbWUtaGVhZGluZyBwIC5iaWcge1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xufVxuLmhvbWUtaGVhZGluZyBwIC5zbWFsbCB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG5cbi8qIHJldmlldyBzZWN0aW9uICovXG4ucmV2aWV3IHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xuXG4gICAgZ2FwOiAyMHB4O1xufVxuLnJldmlld2VyIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuLnJldmlldyA+IGRpdiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmV2aWV3ID4gZGl2IC5ib2xkIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLnJldmlldyA+IGRpdiAuZW5kIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4vKiBsb2NhdGlvbiBzZWN0aW9uICovXG4ubG9jYXRpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICByb3RhdGU6IDNkZWc7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4ubG9jYXRpb24gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgZ2FwOiAyMHB4O1xufVxuLmxvY2F0aW9uIC5hZGRyZXNzIHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ubG9jYXRpb24gaW1nIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbn1cblxuLyogY29udGFjdCBzZWN0aW9uICovXG4udGl0bGUsXG4uY29udGFjdC1saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxuLmNvbnRhY3QtbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuLmNvbnRhY3QtbGlzdCBsaSB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4uZGlzY2xhaW1lciB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xufVxuXG4vKiBtZW51IHNlY3Rpb24gKi9cbi5pdGVtLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLm1lbnUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcbn1cbi5tZW51LWl0ZW0gaW1nIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuLm1lbnUtaXRlbSBpbWcucmV2ZXJzZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xufVxuLm1lbnUtaXRlbSBkaXYge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogNzVweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsNENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlDQUFpQzs7SUFFakMsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNCQUFzQjs7SUFFdEIsYUFBYTtBQUNqQjs7QUFFQSxrQ0FBa0M7QUFDbEM7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUEsc0NBQXNDO0FBQ3RDO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0lBRVgsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVzs7SUFFWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osNENBQTRDO0lBQzVDLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLHFDQUFxQzs7SUFFckMsaUJBQWlCOztJQUVqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9COztJQUVwQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COzs7QUFHQSxtQkFBbUI7QUFDbkI7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1COztJQUVuQixtQkFBbUI7O0lBRW5CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtSkFBbUo7SUFDbkosa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVzs7SUFFWCxtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0lBRTlCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksbUpBQW1KO0lBQ25KLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUEsb0JBQW9CO0FBQ3BCOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1KQUFtSjtBQUN2Sjs7QUFFQTtJQUNJLG1KQUFtSjtJQUNuSixpQkFBaUI7QUFDckI7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLG1KQUFtSjtJQUNuSixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGNoaWJvbGQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogY2hpYm9sZDtcXG4gICAgc3JjOiB1cmwoLi9jaGlib2xkLWZvbnQvQ2hpYm9sZGRlbW8tMUdEN2cudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLUJHLUNPTE9SOiAjZjQ3MmI2O1xcbiAgICAtLUNPTlRFTlQtQkctQ09MT1I6ICNmYmNmZTg7XFxuICAgIC0tSEVBREVSLUNMSUNLRUQtQ09MT1I6ICNjMDg0ZmM7XFxuICAgIC0tSEVBREVSLUJPUkRFUi1DT0xPUjogI2ZiY2ZlODtcXG4gICAgLS1UQUItQkctQ09MT1I6ICNmOWE4ZDQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG5cXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyogZGl2IHRoYXQgY29udGFpbnMgYWxsIGNvbnRlbnQgKi9cXG4uY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09OVEVOVC1CRy1DT0xPUik7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi8qIGhlYWRlciBkaXJlY3RseSBhYm92ZSBjb250ZW50IGRpdiAqL1xcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcbi5oZWFkZXIgLnRhYnMge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG4uaGVhZGVyIC50YWJzIC50YWIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tSEVBREVSLUJPUkRFUi1DT0xPUik7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tVEFCLUJHLUNPTE9SKTtcXG5cXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC50YWJzIC50YWIuY2xpY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTlRFTlQtQkctQ09MT1IpO1xcbn1cXG5cXG4vKiBob21lIGhlYWRpbmcgc2VjdGlvbiAqL1xcbi5ob21lLWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcXG59XFxuLnBhc3RlbCB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG4uaG9tZS1oZWFkaW5nIHAge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcm90YXRlOiAtM2RlZztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhvbWUtaGVhZGluZyBwIC5iaWcge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG59XFxuLmhvbWUtaGVhZGluZyBwIC5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuXFxuLyogcmV2aWV3IHNlY3Rpb24gKi9cXG4ucmV2aWV3IHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcXG5cXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4ucmV2aWV3ZXIge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcbn1cXG4ucmV2aWV3ID4gZGl2IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucmV2aWV3ID4gZGl2IC5ib2xkIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5yZXZpZXcgPiBkaXYgLmVuZCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi8qIGxvY2F0aW9uIHNlY3Rpb24gKi9cXG4ubG9jYXRpb24tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIHJvdGF0ZTogM2RlZztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcbi5sb2NhdGlvbiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGdhcDogMjBweDtcXG59XFxuLmxvY2F0aW9uIC5hZGRyZXNzIHtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ubG9jYXRpb24gaW1nIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxufVxcblxcbi8qIGNvbnRhY3Qgc2VjdGlvbiAqL1xcbi50aXRsZSxcXG4uY29udGFjdC1saXN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4uY29udGFjdC1saXN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcbi5jb250YWN0LWxpc3QgbGkge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5kaXNjbGFpbWVyIHtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuXFxuLyogbWVudSBzZWN0aW9uICovXFxuLml0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcXG59XFxuLm1lbnUtaXRlbSBpbWcge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcbn1cXG4ubWVudS1pdGVtIGltZy5yZXZlcnNlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XFxufVxcbi5tZW51LWl0ZW0gZGl2IHtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5cbmNvbnN0IGNyZWF0ZVRpdGxlID0gKCgpID0+IHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMnO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xufSkoKTtcblxuY29uc3QgY3JlYXRlQ29udGFjdERldGFpbHMgPSAoKCkgPT4ge1xuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1saXN0Jyk7XG4gICAgdWwuaW5uZXJIVE1MID0gYFxuICAgIEVtYWlsOiA8bGk+V2VBcmVOb3RSZXNwb25zaWJsZUBwcm90b25tYWlsLm1lPC9saT5cbiAgICA8YnI+XG4gICAgUGhvbmUgTnVtYmVyOiA8bGk+OTExLTkxMS05MTkxPC9saT5cbiAgICA8YnI+XG4gICAgQWRkcmVzczogPGxpPjM3MzAgU3VnZXJDYW5lIENyZXNjZW50LCBXaGluZVBlZywgT04gTDRUIDJaNCwgQW1lcmljYTwvbGk+YDtcblxuICAgIHJldHVybiB1bDtcbn0pKCk7XG5cbmNvbnN0IGNyZWF0ZURpc2NsYWltZXIgPSAoKCkgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGlzY2xhaW1lcicpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGBXZSBhcmUgbm90IHJlc3BvbnNpYmxlIGZvciBhbnkgaGVhbHRoIGlzc3VlcyBhcyBhIHJlc3VsdCBvZiBlYXRpbmcgaGVyZS4uYDtcblxuICAgIHJldHVybiBkaXY7XG59KSgpO1xuXG5mdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdERldGFpbHMpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGlzY2xhaW1lcik7XG59O1xuXG5leHBvcnQgeyBjb250YWN0IH07IiwiaW1wb3J0IHBhc3RlbEltZyBmcm9tICcuL3Bhc3RlbC5wbmcnO1xuaW1wb3J0IHJldmlld2VySW1nIGZyb20gJy4vcmV2aWV3ZXIuanBnJztcbmltcG9ydCBsb2NhdGlvbkltZyBmcm9tICcuL2xvY2F0aW9uLnBuZyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5jb25zdCBjcmVhdGVIb21lSGVhZGluZyA9ICgoKSA9PiB7XG4gICAgLy9jcmVhdGUgcGFzdGVsIGltYWdlIGVsZW1lbnRcbiAgICBjb25zdCBwYXN0ZWwgPSBuZXcgSW1hZ2UoKTtcbiAgICBwYXN0ZWwuc3JjID0gcGFzdGVsSW1nO1xuICAgIHBhc3RlbC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIGZhbHNlKTtcbiAgICBwYXN0ZWwuY2xhc3NMaXN0LmFkZCgncGFzdGVsJyk7XG5cbiAgICAvL2NyZWF0ZSB0aXRsZSBlbGVtZW50XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImJpZ1wiPlBhc3RlbHM8L3NwYW4+PGJyPk1lbGxvdzxicj48c3BhbiBjbGFzcz1cInNtYWxsXCI+Rm9vZDwvc3Bhbj5gO1xuXG4gICAgLy9jb21iaW5lIHBhc3RlbEltZyBhbmQgVGl0bGVcbiAgICBsZXQgaG9tZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdob21lLWhlYWRpbmcnKTtcbiAgICBob21lSGVhZGluZy5hcHBlbmRDaGlsZChwYXN0ZWwpO1xuICAgIGhvbWVIZWFkaW5nLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHJldHVybiBob21lSGVhZGluZztcbn0pKCk7XG5cbmNvbnN0IGNyZWF0ZVJldmlldyA9ICgoKSA9PiB7XG4gICAgLy9jcmVhdGUgaW1hZ2Ugb2YgcmV2aWV3ZXJcbiAgICBjb25zdCByZXZpZXdlciA9IG5ldyBJbWFnZSgpO1xuICAgIHJldmlld2VyLnNyYyA9IHJldmlld2VySW1nO1xuICAgIHJldmlld2VyLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuICAgIHJldmlld2VyLmNsYXNzTGlzdC5hZGQoJ3Jldmlld2VyJyk7XG5cbiAgICAvL2NyZWF0ZSBkaXYgZm9yIHRleHRcbiAgICBsZXQgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbW1lbnQuaW5uZXJIVE1MID0gYFwiSSB3YXMgZ2l2ZW4gRGlhYmV0ZXMgYWZ0ZXI8YnI+XG4gICAganVzdCA8c3BhbiBjbGFzcz1cImJvbGRcIj5PTkUgTUVBTDwvc3Bhbj4gYXQgUGFzdGVscyBNZWxsb3cgRm9vZCEhIVwiPGJyPjxicj5cbiAgICA8c3BhbiBjbGFzcz1cImVuZFwiPi0gZmF0IGd1czwvc3Bhbj5gO1xuXG4gICAgLy9jb21iaW5lIHJldmlld2VySW1nIGFuZCBjb21tZW50XG4gICAgbGV0IHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldmlldy5jbGFzc0xpc3QuYWRkKCdyZXZpZXcnKTtcbiAgICByZXZpZXcuYXBwZW5kQ2hpbGQocmV2aWV3ZXIpO1xuICAgIHJldmlldy5hcHBlbmRDaGlsZChjb21tZW50KTtcblxuICAgIHJldHVybiByZXZpZXc7XG59KSgpO1xuXG5jb25zdCBjcmVhdGVMb2NhdGlvblRpdGxlID0gKCgpID0+IHtcbiAgICAvL2NyZWF0ZSB0aXRsZSBmb3Igc2VjdGlvbiB3aXRoIGxvY2F0aW9uXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgQ29tZSBWaXNpdCBVcyBhdDpgO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uLXRpdGxlJyk7XG5cbiAgICByZXR1cm4gdGl0bGU7XG59KSgpO1xuXG5jb25zdCBjcmVhdGVMb2NhdGlvbiA9ICgoKSA9PiB7XG4gICAgLy9jcmVhdGUgaW1hZ2Ugb2YgbG9jYXRpb25cbiAgICBjb25zdCBsb2NhdGlvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGxvY2F0aW9uLnNyYyA9IGxvY2F0aW9uSW1nO1xuICAgIGxvY2F0aW9uLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuXG4gICAgLy9jcmVhdGUgZGl2IGZvciB0ZXh0XG4gICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJylcbiAgICBhZGRyZXNzLmlubmVyVGV4dCA9IGAzNzMwIFN1Z2VyQ2FuZSBDcmVzY2VudCwgV2hpbmVQZWcsIE9OIEw0VCAyWjQsIEFtZXJpY2FgO1xuXG4gICAgLy9jb21iaW5lIGxvY2F0aW9uSW1nIGFuZCBhZGRyZXNzXG4gICAgbGV0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gICAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIHJldHVybiBsb2NhdGlvbkRpdjtcbn0pKCk7XG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lSGVhZGluZyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVSZXZpZXcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTG9jYXRpb25UaXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVMb2NhdGlvbik7XG5cbn07XG5cbmV4cG9ydCB7IGhvbWUgfTtcbiIsImNvbnN0IGluaXRpYWxpemVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICAvL2NyZWF0ZSBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoaGVhZGVyLCBjb250ZW50KTtcblxuICAgIC8vY3JlYXRlIHRhYnNcbiAgICBsZXQgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYnMuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuICAgIGxldCB0YWJOYW1lcyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBsZXQgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYi50ZXh0Q29udGVudCA9IHRhYk5hbWVzW2ldO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgICAgICAgdGFicy5hcHBlbmRDaGlsZCh0YWIpO1xuICAgIH07XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFicyk7XG59O1xuXG5leHBvcnQgeyBpbml0aWFsaXplSGVhZGVyIH07IiwiaW1wb3J0IG1lbGxvd3B1ZGRpbmcgZnJvbSAnLi9tZWxsb3dwdWRkaW5nLnBuZyc7XG5pbXBvcnQgbWVsbG93Y29mZmVlIGZyb20gJy4vbWVsbG93Y29mZmVlLnBuZyc7XG5pbXBvcnQgbWVsbG93Y2VyZWFsIGZyb20gJy4vbWVsbG93Y2VyZWFsLnBuZyc7XG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbmNvbnN0IGFkZE1lbnVOYW1lID0gKHRpdGxlKSA9PiB7XG4gICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIHJldHVybiBpdGVtTmFtZTtcbn07XG5cbmNvbnN0IEFkZE1lbnVJdGVtID0gKGltZywgZGVzYywgcmV2ZXJzZSkgPT4ge1xuICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG5cbiAgICBsZXQgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBuZXdJbWFnZS5zcmMgPSBpbWc7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2M7XG5cbiAgICBpZiAocmV2ZXJzZSl7XG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzBweCc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLm1hcmdpbkxlZnQgPSAnNzVweCc7XG4gICAgICAgIG5ld0ltYWdlLmNsYXNzTGlzdC5hZGQoJ3JldmVyc2UnKTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgfTtcblxuICAgIHJldHVybiBtZW51SXRlbTtcbn07XG5cbmZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRNZW51TmFtZSgnTWVsbG93IFB1ZGRpbmcnKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChBZGRNZW51SXRlbShtZWxsb3dwdWRkaW5nLFxuICAgICdNZWxsb3cgcHVkZGluZyBpcyB0aGUgbW9zdCBzd2VldCBwdWRkaW5nIHdpdGggbWFyc2htZWxsb3dzIGFuZCBzdWdhciBzcHJpbmtsZWQgb24gdG9wIScsIGZhbHNlKSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZE1lbnVOYW1lKCdNZWxsb3cgQ29mZmVlJykpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoQWRkTWVudUl0ZW0obWVsbG93Y29mZmVlLFxuICAgICdNZWxsb3cgQ29mZmVlIGlzIHRoZSBuaWNlIHRhc3RlIG9mIGNvZmZlZSB3aXRoIHRoZSBzd2VldG5lc3Mgb2YgbWFyc2htZWxsb3dzIScsIHRydWUpKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTWVudU5hbWUoJ01lbGxvdyBDZXJlYWwnKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChBZGRNZW51SXRlbShtZWxsb3djZXJlYWwsXG4gICAgJ01lbGxvdyBDZXJlYWwgaXMgbGl0ZXJhbGx5IGp1c3QgbWFyc2htZWxsb3dzIGluIGEgYm93bC4uLicsIGZhbHNlKSk7XG59O1xuXG5leHBvcnQgeyBtZW51IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUhlYWRlciB9IGZyb20gJy4vaW5pdGlhbGl6ZUhlYWRlci5qcyc7XG5cbmluaXRpYWxpemVIZWFkZXIoKTtcblxuLy8gY2xpY2tpbmcgb24gdGFic1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5sZXQgdGFicyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFicycpLmNoaWxkcmVuXTtcblxuLy8gaG9tZSB0YWIgY2xpY2tlZCBieSBkZWZhdWx0XG50YWJzWzBdLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbmhvbWUoKTtcblxudGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG5cbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBzd2l0Y2ggKHRhYi50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICAgICAgaG9tZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTWVudSc6XG4gICAgICAgICAgICAgICAgbWVudSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ29udGFjdCc6XG4gICAgICAgICAgICAgICAgY29udGFjdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgIH0pO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9