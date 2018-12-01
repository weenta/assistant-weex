<template>
  <div class="express">
    <div class="input-wrapper">
      <input :autofocus='true' :value="expressNo" type="text" return-key-type="search" class="input border-bottom" placeholder="请输入快递单号" @return="searchHandler" @input="inputExpressNo">
      <text class="btn-search" @click="searchHandler">查询</text>
    </div>
    <list class="list">
      <cell v-for='(item,idx) in traces' :key="idx">
        <div class="list-item border-bottom">
          <text class="trace-desc">{{ item.desc }}</text>
          <text class="trace-time">{{ item.time }}</text>
        </div>
      </cell>
    </list>
  </div>
</template>
<script>
import mixin from '../mixin'
import API from '../api'
import config from '../config'
export default {
  mixins: [mixin],
  data() {
    return {
      expressNo: '',
      traces: [],
    }
  },
  created() {
    this.getLastExpressNo()
  },
  methods: {
    // 获取上次查询记录
    getLastExpressNo() {
      this._getItem('LAST_EXPRESS_NO').then(expressNo=>{
        this.expressNo = expressNo
      }).catch(()=>{})
    },

    inputExpressNo(e) {
      this.expressNo = e.value
    },

    // 查询
    searchHandler() {
      if (this.expressNo.length === 0) {
        this._toast('请输入快递单号')
        return
      }
      this.search()
    },

    // 查询
    search() {
      let appKey = config.EXPRESS_APP_KEY
      let url = API.EXPRESS_TRACE
      let para = {
        appKey,
        expressNo: this.expressNo
      }
      this._post(url,para,res=>{
        if (res.code === 0 && res.data.ERRORCODE === '0') {
          this.__formatTraces(res.data)
          // 本地存储本次查询
          this._setItem('LAST_EXPRESS_NO',this.expressNo).then(()=>{}).catch(()=>{})
        } else {
          this._toastLong('暂无相关数据')
        }
      })
    },

    // 格式化轨迹
    __formatTraces(data) {
      this.traces = data.RESULT.context
      let companyInfo = {
        desc: '承运公司：' + data.RESULT.com,
        time: ''
      }
      this.traces.push(companyInfo)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/mixin.less';
.express {
  background: #ffffff;
}
.input-wrapper {
  width: 750px;
  height: 100px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 32px;
}
.input {
  flex: 1;
  height: 80px;
  margin-right: 10px;
}
.btn-search {
  display: block;
  font-size: 32px;
  width: 120px;
  height: 80px;
  line-height: 80px;
  color: #ffffff;
  background-color: @color-accent;
  font-weight: 500;
  text-align: center;
  border-radius: 5px;
}
.list {
  flex: 1;
  width: 750px;
  background: #ffffff;
}
.list-item {
  width: 750px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.trace-desc {

  font-size: 28px;
  color: #000000;
  line-height: 42px;
}
.trace-time {
  font-size: 26px;
  color: #666666;
  padding-top: 10px;
}
</style>
