<template>
  <div class="news-list">
    <list>
      <cell v-for='(item,idx) in list' :key='idx'>
        <div class="cell">
          <image :src='item.newsImg' class="news-img"/>
          <div class="news-info border-bottom">
            <text class="title">{{ item.title }}</text>
            <text class="source">{{ item.source }}</text>
          </div>
        </div>
      </cell>
      <loading :display="loading ? 'show' : 'hide'" @loading="onloading">
        ...
      </loading>
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
      list: [],
      loading: 'show'
    }
  },
  created() {
    this.testPost()
  },
  methods: {
    onloading() {
      console.log('onloading')
      this._toast('onLoading')
    },

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
<style lang="less" scoped>
@import '../assets/mixin.less';
.new-list {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
}
.title {
  color: #333333;
  font-size: 26px;
}
.source {
  font-size: 22px;
  color: #666666;
}
.cell {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
}
.news-img {
  width: 220px;
  height: 120px;
}
.news-info {
  width: 550px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
}
</style>

