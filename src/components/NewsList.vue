<template>
  <div class="news-list">
    <text @click="test">今日要闻</text>
    <list>
      <cell v-for='(item,idx) in list' :key="idx">
        <text>{{ item.title }}</text>
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
      page: 1,
      list: []
    }
  },
  methods: {
    test() {
      this.testPost()
      // this.testGet()
    },

    testPost() {
      let url = API.NEWS_LIST
      let para = {
        appKey: config.NEWS_APP_KEY,
        category: config.NEWS_CATEGORY,
        page: this.page
      }
      this._post(url,para,res=>{
        if (res.code === 0) {
          let list = res.data.RESULT.newsList
          this.list = list
        }
      })
    },

    testGet() {
      console.log('获取新闻详情')
      let url = API.NEWS_CATEGORY
      let para = {
        appKey: config.NEWS_APP_KEY
      }
      this._get(url,para,res=>{
        console.log(res)
      })
    }
  }
}
</script>

