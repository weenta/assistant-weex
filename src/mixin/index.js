import util from '../utils/util'

/* eslint-disable no-undef */
const navigator = weex.requireModule('navigator')
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
    }
  },
  methods: {
    // util工具库
    ...util,
    
    // 跳转
    _jump(path) {
      console.log(this.baseUrl)
      navigator.push({
        url: this.baseUrl + path
      })
    },
  
    // 返回
    _back() {
      navigator.pop()
    }

  }
}