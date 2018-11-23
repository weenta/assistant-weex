/**
 * util 工具
 * 绑定在mixin上
 */
/* eslint-disable-next-line no-undef */
const modal = weex.requireModule('modal')
export default {
  /**
   * 默认toast 0.7s
   * @param {String} msg 
   */
  _toast(msg) {
    modal.toast({
      message: msg || '',
      duration: 0.7
    })
  },

  /**
   * 长时间toast 1.5s
   * @param {String} msg 
   */
  _toastLong(msg) {
    modal.toast({
      message: msg || '',
      duration: 1.5
    })
  },
  
}