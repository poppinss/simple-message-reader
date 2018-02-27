(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["simpleMessageReader"] = factory();
	else
		root["simpleMessageReader"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * websocket-message-reader\n *\n * (c) Harminder Virk <virk@adonisjs.com>\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n*/\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isBlob = isBlob;\nexports.isArrayBuffer = isArrayBuffer;\nexports.parseBlob = parseBlob;\nexports.parseArrayBuffer = parseArrayBuffer;\nvar acceptedTypesMap = {\n  'arrayBuffer': 'readAsArrayBuffer',\n  'binaryString': 'readAsBinaryString',\n  'dataURL': 'readAsDataURL',\n  'text': 'readAsText'\n};\n\nfunction isBlob(input) {\n  return input instanceof window.Blob === true;\n}\n\nfunction isArrayBuffer(input) {\n  return ArrayBuffer.isView(input);\n}\n\nfunction parseBlob(input, cb) {\n  var outputFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'arrayBuffer';\n\n  var acceptedTypes = Object.keys(acceptedTypesMap);\n\n  if (acceptedTypes.indexOf(outputFormat) !== -1) {\n    cb(new Error(outputFormat + ' is not supported. Only ' + acceptedTypes.join(',') + ' are allowed'));\n    return;\n  }\n\n  if (!isBlob(input)) {\n    cb(new Error('Input must be blob'));\n    return;\n  }\n\n  var reader = new window.FileReader();\n  reader.onload = function (event) {\n    return cb(null, event.target.result);\n  };\n  reader.onerror = function (event) {\n    return cb(event);\n  };\n  reader.onabort = function (event) {\n    return cb(event);\n  };\n  reader[acceptedTypesMap[outputFormat]](input);\n}\n\nfunction parseArrayBuffer(input) {\n  return String.fromCharCode.apply(null, new Uint8Array(input));\n}\n\n//# sourceURL=webpack://simpleMessageReader/./index.js?");

/***/ })

/******/ });
});