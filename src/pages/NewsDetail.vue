<template>
  <div class="news-detail">
    <text class="title" @click="getNewsTitle">{{ title }}</text>
    <div class="source-time">
      <text class="source">{{ source }}</text>
      <text class="time">{{ publishTime }}</text>
    </div>
    <!-- 调用android webview扩展 -->
    <webView v-if='platform=="android"' :content='content' class="web-view"/>
</div></template>
<script>
import mixin from '../mixin'
import config from '../config'
import API from '../api'

export default {
  mixins: [mixin],
  data() {
    return {
      title: '新闻',
      source: '来源',
      publishTime: '时间',
      content: 'news detail',
    }
  },
  created() {
    this.getNewsTitle()
  },
  methods: {
    getNewsTitle() {
      this._getItem('NEWS_INFO').then(data=>{
        let info = JSON.parse(data)
        this.title = info.title 
        this.getNewsDetail(info.newsId)
      }).catch(()=>{})
    },

    // 获取新闻详情
    getNewsDetail(newsId) {
      let url = API.NEWS_DETAIL
      let para = {
        appKey: config.NEWS_APP_KEY,
        newsId
      }
      this._post(url,para,res=>{
        if (res.code === 0) {
          this.source = res.data.RESULT.source
          this.publishTime = res.data.RESULT.publishTime
          this.content = res.data.RESULT.content
        }
      })
    },
    
  }
}
</script>
<style lang="less" scoped>
@import '../assets/mixin.less';
.title {
  font-size: 36px;
  color: #000000;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}
.source-time {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
}
.time,
.source {
  font-size: 28px;
  color: #999999;
}

.web-view {
  flex: 1;
  width: 750px;
}
</style>
