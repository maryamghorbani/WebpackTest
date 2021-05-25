/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/component/fonts/font-face.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/component/fonts/font-face.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Vazir_Regular_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vazir-Regular.eot */ \"./src/component/fonts/Vazir-Regular.eot\");\n/* harmony import */ var _Vazir_Regular_eot__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Regular_eot__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Vazir_Regular_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vazir-Regular.woff2 */ \"./src/component/fonts/Vazir-Regular.woff2\");\n/* harmony import */ var _Vazir_Regular_woff2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Regular_woff2__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Vazir_Regular_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vazir-Regular.woff */ \"./src/component/fonts/Vazir-Regular.woff\");\n/* harmony import */ var _Vazir_Regular_woff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Regular_woff__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Vazir_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Vazir-Regular.ttf */ \"./src/component/fonts/Vazir-Regular.ttf\");\n/* harmony import */ var _Vazir_Regular_ttf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Vazir_Bold_eot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Vazir-Bold.eot */ \"./src/component/fonts/Vazir-Bold.eot\");\n/* harmony import */ var _Vazir_Bold_eot__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Bold_eot__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Vazir_Bold_woff2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Vazir-Bold.woff2 */ \"./src/component/fonts/Vazir-Bold.woff2\");\n/* harmony import */ var _Vazir_Bold_woff2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Bold_woff2__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Vazir_Bold_woff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Vazir-Bold.woff */ \"./src/component/fonts/Vazir-Bold.woff\");\n/* harmony import */ var _Vazir_Bold_woff__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Bold_woff__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Vazir_Bold_ttf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Vazir-Bold.ttf */ \"./src/component/fonts/Vazir-Bold.ttf\");\n/* harmony import */ var _Vazir_Bold_ttf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Bold_ttf__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Vazir_Thin_eot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Vazir-Thin.eot */ \"./src/component/fonts/Vazir-Thin.eot\");\n/* harmony import */ var _Vazir_Thin_eot__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Thin_eot__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Vazir_Thin_woff2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Vazir-Thin.woff2 */ \"./src/component/fonts/Vazir-Thin.woff2\");\n/* harmony import */ var _Vazir_Thin_woff2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Thin_woff2__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _Vazir_Thin_woff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Vazir-Thin.woff */ \"./src/component/fonts/Vazir-Thin.woff\");\n/* harmony import */ var _Vazir_Thin_woff__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Thin_woff__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _Vazir_Thin_ttf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Vazir-Thin.ttf */ \"./src/component/fonts/Vazir-Thin.ttf\");\n/* harmony import */ var _Vazir_Thin_ttf__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Thin_ttf__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _Vazir_Light_eot__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Vazir-Light.eot */ \"./src/component/fonts/Vazir-Light.eot\");\n/* harmony import */ var _Vazir_Light_eot__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Light_eot__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _Vazir_Light_woff2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Vazir-Light.woff2 */ \"./src/component/fonts/Vazir-Light.woff2\");\n/* harmony import */ var _Vazir_Light_woff2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Light_woff2__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _Vazir_Light_woff__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Vazir-Light.woff */ \"./src/component/fonts/Vazir-Light.woff\");\n/* harmony import */ var _Vazir_Light_woff__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Light_woff__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _Vazir_Light_ttf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Vazir-Light.ttf */ \"./src/component/fonts/Vazir-Light.ttf\");\n/* harmony import */ var _Vazir_Light_ttf__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Light_ttf__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _Vazir_Medium_eot__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Vazir-Medium.eot */ \"./src/component/fonts/Vazir-Medium.eot\");\n/* harmony import */ var _Vazir_Medium_eot__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Medium_eot__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _Vazir_Medium_woff2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Vazir-Medium.woff2 */ \"./src/component/fonts/Vazir-Medium.woff2\");\n/* harmony import */ var _Vazir_Medium_woff2__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Medium_woff2__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _Vazir_Medium_woff__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Vazir-Medium.woff */ \"./src/component/fonts/Vazir-Medium.woff\");\n/* harmony import */ var _Vazir_Medium_woff__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Medium_woff__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _Vazir_Medium_ttf__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Vazir-Medium.ttf */ \"./src/component/fonts/Vazir-Medium.ttf\");\n/* harmony import */ var _Vazir_Medium_ttf__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Medium_ttf__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _Vazir_Black_eot__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Vazir-Black.eot */ \"./src/component/fonts/Vazir-Black.eot\");\n/* harmony import */ var _Vazir_Black_eot__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Black_eot__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _Vazir_Black_woff2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Vazir-Black.woff2 */ \"./src/component/fonts/Vazir-Black.woff2\");\n/* harmony import */ var _Vazir_Black_woff2__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Black_woff2__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _Vazir_Black_woff__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Vazir-Black.woff */ \"./src/component/fonts/Vazir-Black.woff\");\n/* harmony import */ var _Vazir_Black_woff__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Black_woff__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _Vazir_Black_ttf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Vazir-Black.ttf */ \"./src/component/fonts/Vazir-Black.ttf\");\n/* harmony import */ var _Vazir_Black_ttf__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_Vazir_Black_ttf__WEBPACK_IMPORTED_MODULE_25__);\n// Imports\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Regular_eot__WEBPACK_IMPORTED_MODULE_2___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Regular_eot__WEBPACK_IMPORTED_MODULE_2___default.a, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Regular_woff2__WEBPACK_IMPORTED_MODULE_3___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Regular_woff__WEBPACK_IMPORTED_MODULE_4___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Regular_ttf__WEBPACK_IMPORTED_MODULE_5___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Bold_eot__WEBPACK_IMPORTED_MODULE_6___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Bold_eot__WEBPACK_IMPORTED_MODULE_6___default.a, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Bold_woff2__WEBPACK_IMPORTED_MODULE_7___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Bold_woff__WEBPACK_IMPORTED_MODULE_8___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Bold_ttf__WEBPACK_IMPORTED_MODULE_9___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Thin_eot__WEBPACK_IMPORTED_MODULE_10___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Thin_eot__WEBPACK_IMPORTED_MODULE_10___default.a, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Thin_woff2__WEBPACK_IMPORTED_MODULE_11___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Thin_woff__WEBPACK_IMPORTED_MODULE_12___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Thin_ttf__WEBPACK_IMPORTED_MODULE_13___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Light_eot__WEBPACK_IMPORTED_MODULE_14___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Light_eot__WEBPACK_IMPORTED_MODULE_14___default.a, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Light_woff2__WEBPACK_IMPORTED_MODULE_15___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Light_woff__WEBPACK_IMPORTED_MODULE_16___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Light_ttf__WEBPACK_IMPORTED_MODULE_17___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Medium_eot__WEBPACK_IMPORTED_MODULE_18___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Medium_eot__WEBPACK_IMPORTED_MODULE_18___default.a, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Medium_woff2__WEBPACK_IMPORTED_MODULE_19___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Medium_woff__WEBPACK_IMPORTED_MODULE_20___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Medium_ttf__WEBPACK_IMPORTED_MODULE_21___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Black_eot__WEBPACK_IMPORTED_MODULE_22___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Black_eot__WEBPACK_IMPORTED_MODULE_22___default.a, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Black_woff2__WEBPACK_IMPORTED_MODULE_23___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Black_woff__WEBPACK_IMPORTED_MODULE_24___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Vazir_Black_ttf__WEBPACK_IMPORTED_MODULE_25___default.a);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {\\n  font-family: Vazir;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('embedded-opentype'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('truetype');\\n  font-weight: normal;\\n  font-display:swap;\\n}\\n\\n@font-face {\\n  font-family: Vazir;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") format('embedded-opentype'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \") format('truetype');\\n  font-weight: bold;\\n  font-display:swap;\\n}\\n\\n@font-face {\\n  font-family: Vazir;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \") format('embedded-opentype'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \") format('truetype');\\n  font-weight: 100;\\n  font-display:swap;\\n}\\n\\n@font-face {\\n  font-family: Vazir;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \") format('embedded-opentype'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_18___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_19___ + \") format('truetype');\\n  font-weight: 300;\\n  font-display:swap;\\n}\\n\\n@font-face {\\n  font-family: Vazir;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_20___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_21___ + \") format('embedded-opentype'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_22___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_23___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_24___ + \") format('truetype');\\n  font-weight: 500;\\n  font-display:swap;\\n}\\n\\n@font-face {\\n  font-family: Vazir;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_25___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_26___ + \") format('embedded-opentype'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_27___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_28___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_29___ + \") format('truetype');\\n  font-weight: 900;\\n  font-display:swap;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/component/fonts/font-face.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/component/styles/image-style.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/component/styles/image-style.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_font_face_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../fonts/font-face.css */ \"./node_modules/css-loader/dist/cjs.js!./src/component/fonts/font-face.css\");\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_font_face_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  font-family: 'vazir';\\n}\\n\\n.img-box {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: 2px solid darkred;\\n  padding: 10px;\\n  flex-direction: column;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/component/styles/image-style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/component/ImageComponent.js":
/*!*****************************************!*\
  !*** ./src/component/ImageComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_image_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/image-style.css */ \"./src/component/styles/image-style.css\");\n/* harmony import */ var _images_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/1.png */ \"./src/component/images/1.png\");\n\n\n\n\nclass ImageComponent {\n\n    crateImageTag() {\n        const image = document.createElement('img');\n        image.alt = 'My Image';\n        image.classList.add('image');\n        image.src = _images_1_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n        return image;\n    }\n\n    createTextTag() {\n        const text = document.createElement('h2');\n        text.innerHTML = 'سلام راکت';\n\n        return text;\n    }\n\n    render(){\n        const element = document.createElement('div');\n        element.classList.add('img-box')\n\n        element.appendChild(this.crateImageTag());\n        element.appendChild(this.createTextTag());\n\n        return element;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new ImageComponent());\n\n//# sourceURL=webpack:///./src/component/ImageComponent.js?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Black.eot":
/*!*********************************************!*\
  !*** ./src/component/fonts/Vazir-Black.eot ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Black.eot?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Black.ttf":
/*!*********************************************!*\
  !*** ./src/component/fonts/Vazir-Black.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Black.ttf?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Black.woff":
/*!**********************************************!*\
  !*** ./src/component/fonts/Vazir-Black.woff ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Black.woff?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Black.woff2":
/*!***********************************************!*\
  !*** ./src/component/fonts/Vazir-Black.woff2 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Black.woff2?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Bold.eot":
/*!********************************************!*\
  !*** ./src/component/fonts/Vazir-Bold.eot ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Bold.eot?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Bold.ttf":
/*!********************************************!*\
  !*** ./src/component/fonts/Vazir-Bold.ttf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Bold.ttf?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Bold.woff":
/*!*********************************************!*\
  !*** ./src/component/fonts/Vazir-Bold.woff ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Bold.woff?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Bold.woff2":
/*!**********************************************!*\
  !*** ./src/component/fonts/Vazir-Bold.woff2 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Bold.woff2?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Light.eot":
/*!*********************************************!*\
  !*** ./src/component/fonts/Vazir-Light.eot ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:1)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Light.eot?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Light.ttf":
/*!*********************************************!*\
  !*** ./src/component/fonts/Vazir-Light.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Light.ttf?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Light.woff":
/*!**********************************************!*\
  !*** ./src/component/fonts/Vazir-Light.woff ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Light.woff?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Light.woff2":
/*!***********************************************!*\
  !*** ./src/component/fonts/Vazir-Light.woff2 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Light.woff2?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Medium.eot":
/*!**********************************************!*\
  !*** ./src/component/fonts/Vazir-Medium.eot ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u001c' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Medium.eot?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Medium.ttf":
/*!**********************************************!*\
  !*** ./src/component/fonts/Vazir-Medium.ttf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Medium.ttf?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Medium.woff":
/*!***********************************************!*\
  !*** ./src/component/fonts/Vazir-Medium.woff ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Medium.woff?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Medium.woff2":
/*!************************************************!*\
  !*** ./src/component/fonts/Vazir-Medium.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Medium.woff2?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Regular.eot":
/*!***********************************************!*\
  !*** ./src/component/fonts/Vazir-Regular.eot ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u000e' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Regular.eot?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/component/fonts/Vazir-Regular.ttf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Regular.ttf?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Regular.woff":
/*!************************************************!*\
  !*** ./src/component/fonts/Vazir-Regular.woff ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Regular.woff?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Regular.woff2":
/*!*************************************************!*\
  !*** ./src/component/fonts/Vazir-Regular.woff2 ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Regular.woff2?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Thin.eot":
/*!********************************************!*\
  !*** ./src/component/fonts/Vazir-Thin.eot ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:1)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Thin.eot?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Thin.ttf":
/*!********************************************!*\
  !*** ./src/component/fonts/Vazir-Thin.ttf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Thin.ttf?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Thin.woff":
/*!*********************************************!*\
  !*** ./src/component/fonts/Vazir-Thin.woff ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Thin.woff?");

/***/ }),

/***/ "./src/component/fonts/Vazir-Thin.woff2":
/*!**********************************************!*\
  !*** ./src/component/fonts/Vazir-Thin.woff2 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/component/fonts/Vazir-Thin.woff2?");

/***/ }),

/***/ "./src/component/images/1.png":
/*!************************************!*\
  !*** ./src/component/images/1.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"build/images/1.png\");\n\n//# sourceURL=webpack:///./src/component/images/1.png?");

/***/ }),

/***/ "./src/component/styles/image-style.css":
/*!**********************************************!*\
  !*** ./src/component/styles/image-style.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_image_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./image-style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/component/styles/image-style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_image_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_image_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/component/styles/image-style.css?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_ImageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/ImageComponent */ \"./src/component/ImageComponent.js\");\n\n\nconst app = document.querySelector('#app');\napp.appendChild(_component_ImageComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render())\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });