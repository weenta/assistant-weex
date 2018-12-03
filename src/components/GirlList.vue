<template>
  <div class="girl-list">
    <waterfall :show-scrollbar='false' :column-count='2' column-gap='normal' class="waterfall">
      <refresh :display="loading ? 'show' : 'hide'" class="loading-wrapper" @refresh="onRefresh">
        <loading-indicator class="indicator"/>
      </refresh>
      <cell v-for='(item,idx) in list' :key="idx">
        <image :src='item.src' :placeholder="oss+'girl_off.png'" class="girl-img" resize='cover' @click='previewImg(idx)'/>
      </cell>
      <loading :display="loading ? 'show' : 'hide'" class="loading-wrapper" @loading="loadMore">
        <loading-indicator class="indicator"/>
      </loading>
    </waterfall>
    <wxc-lightbox
      ref="wxc-lightbox"
      :show="showPreview"
      :image-list="previewList"
      :indicator-color='indicatorColor'
      @wxcLightboxOverlayClicked="closePreview"/>
  </div>
</template>
<script>
import API from '../api'
import mixin from '../mixin'
import { WxcLightbox } from 'weex-ui'
export default {
  components: {
    WxcLightbox
  },
  mixins: [mixin],
  data() {
    return {
      page: 1,
      list: [], // 美女图片
      previewList: [], // 预览列表
      loading: false,
      showPreview: false,
      indicatorColor: {'item-color': 'rgba(255, 195, 0, .5)','item-selected-color': '#ffc300','item-size': '0'}
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 关闭图片
    closePreview() {
      this.showPreview = false
    },

    // 预览图片
    previewImg(idx) {
      this.previewList = this.list.slice(idx)
      this.showPreview = true
    },

    // 刷新
    onRefresh() {
      this.list = []
      this.page = 1
      this.getList()
    },

    // 加载下一页
    loadMore() {
      this.page ++
      this.getList()
    },

    // 获取列表
    getList() {
      let url = API.GIRL_LIST + this.page
      this.loading = true
      this._get(url,{},res=>{
        this.loading = false
        if (res.code === 0 && !res.data.error) {
          this.__formatList(res.data.results)
        } else {
          this._toast(res.msg)
        }
      })
    },

    __formatList(list) {
      list.forEach(e=>{
        let o = {src: e.url}
        this.list.push(o)
      })
    }
  },

}
</script>

<style lang="less" scoped>
@import '../assets/mixin.less';
.girl-list {
  width: 750px;
  background: #ffffff;
}

.waterfall {
  width: 750px;
}
.girl-img {
  width: 350px;
  height: 400px;
  margin-bottom: 10px;
}
</style>

