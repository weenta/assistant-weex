// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(2)
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(6)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weenta/01data/03weex/03assistant/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "50"
  },
  "message": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "32",
    "color": "#727272"
  },
  "img": {
    "width": "30",
    "height": "20"
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(4);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable-next-line no-undef */

exports.default = {
  name: 'App',
  components: {},
  mixins: [_mixin2.default],
  data: function data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    };
  },


  methods: {
    helloHandler: function helloHandler() {
      this._toast('jump to homepage');
      var path = 'pages/Home.js';
      this._jump(path);
    }
  }
}; //
//
//
//
//
//
//

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(5);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
var navigator = weex.requireModule('navigator');
exports.default = {
  data: function data() {
    return {
      oss: 'http://weex-proj.oss-cn-beijing.aliyuncs.com/01assistant/',
      isNative: (typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object',
      platform: weex.config.env.platform.toLowerCase(),
      deviceWidth: weex.config.env.deviceWidth,
      deviceHeight: weex.config.env.deviceHeight
    };
  },

  computed: {
    baseUrl: function baseUrl() {
      var url = void 0;
      var bundleUrl = weex.config.bundleUrl;
      var isAndroid = this.platform === 'android';
      var isiOS = this.platform === 'ios';

      if (isAndroid) {
        url = 'file://assets/dist/';
      } else if (isiOS) {
        url = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
      } else {
        var host = 'localhost:8080';
        // eslint-disable-next-line no-useless-escape
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        host = matches && matches.length >= 2 ? matches[1] : host;
        url = 'http://' + host + '/dist/';
      }
      return url;
    }
  },
  methods: _extends({}, _util2.default, {

    // 跳转
    _jump: function _jump(path) {
      console.log(this.baseUrl);
      navigator.push({
        url: this.baseUrl + path
      });
    },


    // 返回
    _back: function _back() {
      navigator.pop();
    }
  })
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-undef */
/**
 * util 工具
 * 绑定在mixin上
 */
var modal = weex.requireModule('modal');
exports.default = {
  /**
   * 默认toast 0.7s
   * @param {String} msg 
   */
  _toast: function _toast(msg) {
    modal.toast({
      message: msg || '',
      duration: 0.7
    });
  },


  /**
   * 长时间toast 1.5s
   * @param {String} msg 
   */
  _toastLong: function _toastLong(msg) {
    modal.toast({
      message: msg || '',
      duration: 1.5
    });
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["greeting"],
    on: {
      "click": _vm.helloHandler
    }
  }, [_vm._v("Hello world")]), _c('image', {
    staticClass: ["img"],
    attrs: {
      "src": _vm.oss + "arrow.png"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);