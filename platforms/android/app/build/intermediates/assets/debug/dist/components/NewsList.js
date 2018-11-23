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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // 数据智汇-新闻appKey
  NEWS_APP_KEY: 'c3c1dcbd7a4e400ab3dc56c6053cd3e4',

  // 新闻类型
  NEWS_CATEGORY: '要闻',

  // 数据智汇-baseUrl
  SJZH_BASE_URL: 'http://api.shujuzhihui.cn/api/'

};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(8);

var _util2 = _interopRequireDefault(_util);

var _fetch = __webpack_require__(9);

var _fetch2 = _interopRequireDefault(_fetch);

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
  methods: _extends({}, _util2.default, _fetch2.default, {

    // 跳转
    _jump: function _jump(path) {
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
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(11)
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
__vue_options__.__file = "/Users/weenta/01data/03weex/03assistant/src/components/NewsList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(4);

var _mixin2 = _interopRequireDefault(_mixin);

var _api = __webpack_require__(10);

var _api2 = _interopRequireDefault(_api);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_mixin2.default],
  data: function data() {
    return {
      page: 1,
      list: []
    };
  },

  methods: {
    test: function test() {
      this.testPost();
      // this.testGet()
    },
    testPost: function testPost() {
      var _this = this;

      var url = _api2.default.NEWS_LIST;
      var para = {
        appKey: _config2.default.NEWS_APP_KEY,
        category: _config2.default.NEWS_CATEGORY,
        page: this.page
      };
      this._post(url, para, function (res) {
        if (res.code === 0) {
          var list = res.data.RESULT.newsList;
          _this.list = list;
        }
      });
    },
    testGet: function testGet() {
      console.log('获取新闻详情');
      var url = _api2.default.NEWS_CATEGORY;
      var para = {
        appKey: _config2.default.NEWS_APP_KEY
      };
      this._get(url, para, function (res) {
        console.log(res);
      });
    }
  }
}; //
//
//
//
//
//
//
//
//
//

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * util 工具
 * 绑定在mixin上
 */
/* eslint-disable-next-line no-undef */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// 封装fetch api
/* eslint-disable-next-line no-undef */
var stream = weex.requireModule('stream');
var headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};
var fetch = {
  // get请求
  _get: function _get(url, para, cb) {
    stream.fetch({
      method: 'GET',
      type: 'json',
      url: url + '?' + toUrlParams(para)

    }, function (response) {
      var data = {
        code: response.ok ? 0 : response.status,
        data: response.data,
        msg: response.statusText
      };
      cb(data);
    });
  },


  // post请求
  _post: function _post(url, para, cb) {
    stream.fetch({
      method: 'POST',
      url: url,
      body: toUrlParams(para),
      type: 'json',
      headers: headers
    }, function (response) {
      var data = {
        code: response.ok ? 0 : response.status,
        data: response.data,
        msg: response.statusText
      };
      cb(data);
    });
  }
};

// 拼接GET请求字符串
var toUrlParams = function toUrlParams(para) {
  var arr = [];
  for (var key in para) {
    var str = key + '=' + para[key];
    arr.push(str);
  }
  return arr.join('&');
};

exports.default = fetch;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // 新闻列表
  NEWS_LIST: _config2.default.SJZH_BASE_URL + 'news/list',

  // 新闻类型
  NEWS_CATEGORY: _config2.default.SJZH_BASE_URL + 'news/categories'

};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["news-list"]
  }, [_c('text', {
    on: {
      "click": _vm.test
    }
  }, [_vm._v("今日要闻")]), _c('list', _vm._l((_vm.list), function(item, idx) {
    return _c('cell', {
      key: idx,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('text', [_vm._v(_vm._s(item.title))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _NewsList = __webpack_require__(6);

var _NewsList2 = _interopRequireDefault(_NewsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_NewsList2.default.el = '#root';
new Vue(_NewsList2.default);

/***/ })
/******/ ]);