<template>
  <div class="girl-list">
    <waterfall :show-scrollbar='false' :column-count='2' column-gap='normal' class="waterfall">
      <refresh :display="loading ? 'show' : 'hide'" class="loading-wrapper" @refresh="onRefresh">
        <loading-indicator class="indicator"/>
      </refresh>
      <cell v-for='(item,idx) in list' :key="idx">
        <image :src='item.url' :placeholder="oss+'girl_off.png'" class="girl-img" resize='cover' @click='previewImg(item)'/>
      </cell>
      <loading :display="loading ? 'show' : 'hide'" class="loading-wrapper" @loading="loadMore">
        <loading-indicator class="indicator"/>
      </loading>
    </waterfall>
    <div v-if='showPreview' class="preview-wrapper" @click.stop="closePreview">
      <image :src='previewUrl' class="img-preview" @click.stop/>
    </div>
  </div>
</template>
<script>
import API from '../api'
import mixin from '../mixin'

export default {
  components: {
  },
  mixins: [mixin],
  data() {
    return {
      page: 1,
      list: [],
      loading: false,
      showPreview: false,
      previewUrl: ''
    }
  },
  created() {
    this.getList()
  },
  methods: {
    closePreview() {
      this.showPreview = false
    },
    // 预览图片
    previewImg(item) {
      this.showPreview = true
      this.previewUrl = item.url
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
        this.list.push(e)
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
.preview-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.8);
}
.img-preview {
  width: 650px;
  height:900px;
  position: absolute;
  top: 100px;
  left: 50px;
}
</style>

