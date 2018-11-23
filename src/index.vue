<template>
  <div class="wrapper">
    <wxc-tab-bar :tab-titles="tabTitles" :tab-styles="tabStyles" title-type="text" @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <!-- 第一个页面内容-->
      <div class="item-container">
        <news-list/>
      </div>

      <!-- 第二个页面内容-->
      <div class="item-container"><text>开心一刻</text></div>

      <!-- 第三个页面内容-->
      <div class="item-container"><text>生活助手</text></div>
    </wxc-tab-bar>
  </div>
</template>

<script>
const tabTitles = [
  {
    title: '今日要闻',
  },
  {
    title: '开心一刻',
  },
  {
    title: '生活助手',
         
  }
]
const tabStyles = {
  bgColor: '#FFFFFF',
  titleColor: '#666666',
  activeTitleColor: '#3D3D3D',
  activeBgColor: '#FFFFFF',
  isActiveTitleBold: true,
  width: 160,
  height: 120,
  fontSize: 24,
  textPaddingLeft: 10,
  textPaddingRight: 10
}
import mixin from '@/mixin'
import { WxcTabBar } from 'weex-ui'
import NewsList from '@/components/NewsList'
export default {
  name: 'App',
  components: {
    WxcTabBar,
    NewsList
  },
  mixins: [mixin],
  data () {
    return {
      tabTitles: tabTitles,
      tabStyles: tabStyles,

    }
  },

  methods: {
    wxcTabBarCurrentTabSelected() {

    },

    helloHandler() {
      this._toast('jump to homepage')
      let path = 'pages/Home.js'
      this._jump(path)
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
    align-items: center;
    justify-content: center;
  }
</style>
