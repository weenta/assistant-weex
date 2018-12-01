// 封装fetch api
/* eslint-disable-next-line no-undef */
const stream = weex.requireModule('stream')
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
const fetch = {
  /**
   * get请求
   * @param {String} url url
   * @param {Object} para para
   * @param {Function} cb cb
   */
  _get(url,para,cb) {
    let options = {
      method: 'GET',
      type: 'json',
      url: url + '?' + toUrlParams(para)
    }
    stream.fetch(options,response=>{
      let data = {
        code: response.ok ? 0 : response.status,
        data: response.data,
        msg: response.statusText
      }
      cb(data)
    },progress=>{})
  },

  /**
   * post请求
   * @param {String} url url
   * @param {Object} para para
   * @param {Function} cb cb
   */
  _post(url,para,cb) {
    let options = {
      method: 'POST',
      url: url,
      body: toUrlParams(para),
      type: 'json',
      headers: headers,
    }
    stream.fetch(options,response=>{
      let data = {
        code: response.ok ? 0 : response.status,
        data: response.data,
        msg: response.statusText
      }
      cb(data)
    },progress=>{})
  }
}

// 拼接GET请求字符串
const toUrlParams = (para)=>{
  let arr = []
  for (let key in para) {
    let str = key + '=' + para[key]
    arr.push(str)
  }
  return arr.join('&')
}

export default fetch