import config from '../config'
export default {
  // 新闻列表
  NEWS_LIST: config.SJZH_BASE_URL + 'news/list',

  // 新闻类型
  NEWS_CATEGORY: config.SJZH_BASE_URL + 'news/categories',

  // 新闻详情
  NEWS_DETAIL: config.SJZH_BASE_URL + 'news/detail',
  
  // 笑话大全
  JOKE_LIST: config.JHSJ_BASE_URL + 'joke/content/text.php',

  // 快递查询
  EXPRESS_TRACE: config.SJZH_BASE_URL + 'sjzhApi/searchExpress'
}