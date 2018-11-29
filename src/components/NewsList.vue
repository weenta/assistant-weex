<template>
  <!-- 新闻列表 -->
  <div class="news-list">
    <!--  -->
    <list :style='{height:contentHeight}' class="list" >
      <cell v-for='(item,idx) in list' :key='idx'>
        <div class="cell">
          <image :src='item.newsImg' class="news-img"/>
          <div class="news-info border-bottom">
            <text class="title">{{ item.title }}</text>
            <text class="source">{{ item.source }}</text>
          </div>
        </div>
      </cell>
      <loading :display="loading ? 'show' : 'hide'" class="loading-wrapper" @loading="onloading">
        <loading-indicator class="indicator"/>
      </loading>
    </list>
  </div>
</template>
<script>
import mixin from '../mixin'
import API from '../api'
import config from '../config'
import { WxcLoading,Utils } from 'weex-ui'
export default {
  components: {
    WxcLoading
  },
  mixins: [mixin],
  data() {
    return {
      page: 1,
      list: [],
      loading: false
    }
  },
  computed: {
  },
  created() {
    this.testPost()
  },
  methods: {
    onloading() {
      this.page ++
      this.testPost()
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
      this.loading = true
      this._post(url,para,res=>{
        this.loading = false
        if (res.code === 0) {
          let result = res.data.RESULT
          if (typeof(result) === 'string') this._toast('没有更多了')
          else this.__formatList(result.newsList)
        }
      })
    },

    __formatList(list) {
      list.forEach(e=>{
        this.list.push(e)
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
.list {
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
  padding-right: 20px;
}
.loading-wrapper {
  width: 750px;
  height: 80px;
  align-items: center;
  justify-content: center;
}

.indicator {
  margin-top: 16px;
  height: 80px;
  width: 80px;
  color:@color-accent;
}

</style>

