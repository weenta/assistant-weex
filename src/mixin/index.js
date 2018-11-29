import util from '../utils/util'
import fetch from '../utils/fetch'
import config from '../config'
import { Utils } from 'weex-ui'

/* eslint-disable no-undef */
const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')
export default {
  data() {
    return {
      oss: 'http://weex-proj.oss-cn-beijing.aliyuncs.com/01assistant/',
      isNative: typeof window !== 'object',
      platform: weex.config.env.platform.toLowerCase(),
      deviceWidth: weex.config.env.deviceWidth,
      deviceHeight: weex.config.env.deviceHeight,
      
    }
  },
  computed: {
    baseUrl() {
      let url
      let bundleUrl = weex.config.bundleUrl
      let isAndroid = this.platform === 'android'
      let isiOS = this.platform === 'ios'
  
      if (isAndroid) {
        url = 'file://assets/dist/'
      } else if (isiOS) {
        url = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1)
      } else {
        let host = 'localhost:8080'
        // eslint-disable-next-line no-useless-escape
        let matches = /\/\/([^\/]+?)\//.exec(bundleUrl)
        host = (matches && matches.length >= 2) ? matches[1] : host
        url = 'http://' + host + '/dist/'
      }
      return url
    },

    contentHeight() {
      return Utils.env.getPageHeight()
    }
   
  },
  methods: {
    // util工具库
    ...util,

    // 网络请求封装
    ...fetch,
    
    /**
     * 跳转
     * @param {String} path pages/NewsDetail.js
     */
    _jump(path) {
      navigator.push({
        url: this.baseUrl + path
      })
    },
  
    // 返回
    _back() {
      navigator.pop()
    },

    /**
     * storage.setItem封装
     * @param {String} key key
     * @param {String} value val
     */
    _setItem(key,value) {
      return new Promise((resolve,reject)=>{
        storage.setItem(key, value, e => {
          if (e.result === 'success') {
            resolve()
          } else {
            reject(e.data)
          }
        })
      })
    },

    /**
     * storage.getItem 封装
     * @param {String} key key
     */
    _getItem(key) {
      return new Promise((resolve,reject)=>{
        storage.getItem(key, e => {
          if (e.result === 'success') {
            resolve(e.data)
          } else {
            reject(e.data)
          }
        })
      })
    },
  }
}