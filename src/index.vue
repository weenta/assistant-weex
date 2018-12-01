<template>
  <div class="wrapper">
    <wxc-tab-bar :tab-titles="tabTitles" :tab-styles="tabStyles" title-type='icon' @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <!-- 今日要闻-->
      <div :style='{height:contentHeight}' class="item-container">
        <news-list/>
      </div>

      <!-- 开心一刻-->
      <div class="item-container">
        <joke-list/>
      </div>

      <!-- 生活助手 -->
      <div class="item-container">
        <assistant />
      </div>
    </wxc-tab-bar>
  </div>
</template>

<script>

import mixin from '@/mixin'
import { WxcTabBar } from 'weex-ui'
import config from '@/config'
import NewsList from '@/components/NewsList'
import JokeList from '@/components/JokeList'
import Assistant from '@/components/Assistant'
export default {
  name: 'App',
  components: {
    WxcTabBar,
    NewsList,
    JokeList,
    Assistant
  },
  mixins: [mixin],
  data () {
    return {
      tabTitles: config.tabTitles,
      tabStyles: config.tabStyles,
      
    }
  },
  computed: {
    
  },
  created() {
   
  },
  methods: {
    wxcTabBarCurrentTabSelected(e) {
      console.log(e)
      
    },
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
  .img {
    width: 30px;
    height: 20px;
  }
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
  }
</style>
