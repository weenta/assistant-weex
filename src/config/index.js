export default {
  // 数据智汇-新闻appKey category baseUrl
  NEWS_APP_KEY: 'c3c1dcbd7a4e400ab3dc56c6053cd3e4',
  NEWS_CATEGORY: '要闻',
  SJZH_BASE_URL: 'http://api.shujuzhihui.cn/api/',

  // 聚合数据-笑话大全
  JHSJ_BASE_URL: 'http://v.juhe.cn/',
  JOKE_KEY: 'b6295e146775567e051f25bdce25941b',
  
  // 底部导航栏title icon
  tabTitles: [
    {
      title: '今日要闻',
      icon: 'http://weex-proj.oss-cn-beijing.aliyuncs.com/01assistant/news_off.png',
      activeIcon: 'http://weex-proj.oss-cn-beijing.aliyuncs.com/01assistant/news_on.png'
    },
    {
      title: '开心一刻',
      icon: 'http://weex-proj.oss-cn-beijing.aliyuncs.com/01assistant/joke_off.png',
      activeIcon: 'http://weex-proj.oss-cn-beijing.aliyuncs.com/01assistant/joke_on.png'
    },
    {
      title: '生活助手',
      icon: 'http://weex-proj.oss-cn-beijing.aliyuncs.com/01assistant/assistant_off.png',
      activeIcon: 'http://weex-proj.oss-cn-beijing.aliyuncs.com/01assistant/assistant_on.png'
    }
  ],

  // tabitem 配置
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#FF4081',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    iconWidth: 50,
    iconHeight: 50,
    width: 160,
    height: 100,
    fontSize: 14,
    textPaddingLeft: 10,
    textPaddingRight: 10
  }
}