<template>
  <!-- 笑话大全 -->
  <div class="joke-list">
    <list :style='{height:contentHeight}' class="list">
      <cell v-for='(item,idx) in list' :key="idx">
        <text class="joke-text border-bottom">{{ item.content }}</text>
      </cell>
      <loading :display="loading ? 'show' : 'hide'" class="loading-wrapper" @loading="loadMore">
        <loading-indicator class="indicator"/>
      </loading>
    </list>
  </div>
</template>
<script>

import mixin from '../mixin'
import API from '../api'
import config from '../config'
import { WxcLoading } from 'weex-ui'

export default {
  components: {
    WxcLoading
  },
  mixins: [mixin],
  data() {
    return {  
      page: 1,
      pageSize: 10,
      list: [],
      loading: false,
    }
  },
  created() {
    this.getJokeList()
  },

  methods: {
    // 加载下一页
    loadMore() {
      this.page ++
      this.getJokeList()
    },

    // 获取笑话列表
    getJokeList() {
      let url = API.JOKE_LIST
      let para = {
        page: this.page,
        pageSize: this.pageSize,
        key: config.JOKE_KEY
      }
      this.loading = true
      this._get(url,para,res=>{
        this.loading = false
        if (res.code === 0) {
          let list = res.data.result.data
          this.__formatList(list)
        }
      })
    },

    __formatList(data) {
      data.forEach(e=>{
        this.list.push(e)
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/mixin.less';
.list {
  background: #ffffff;
}
.title {
  font-size: 50px;
}
.joke-text {
  font-size: 28px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #333333;
  line-height: 60px;
  background: #ffffff;
}
</style>
