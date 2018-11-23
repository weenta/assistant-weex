// 封装fetch api
/* eslint-disable-next-line no-undef */
const stream = weex.requireModule('stream')
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
const fetch = {
  // get请求
  _get(url,para,cb) {
    stream.fetch({
      method: 'GET',
      type: 'json',
      url: url + '?' + toUrlParams(para),
      
    },response=>{
      let data = {
        code: response.ok ? 0 : response.status,
        data: response.data,
        msg: response.statusText
      }
      cb(data)
    })
  },

  // post请求
  _post(url,para,cb) {
    stream.fetch({
      method: 'POST',
      url: url,
      body: toUrlParams(para),
      type: 'json',
      headers: headers,
    },response=>{
      let data = {
        code: response.ok ? 0 : response.status,
        data: response.data,
        msg: response.statusText
      }
      cb(data)
    })
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