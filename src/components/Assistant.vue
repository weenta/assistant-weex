<template>
  <div class="assistant">
    <list class="list">
      <cell v-for='(item,idx) in list' :key="idx">
        <div class="list-item" @click="_jump(item.path)">
          <text class="item-label" >{{ item.label }}</text>
          <image :src='oss+"arrow_right_light.png"' class="arrow" />
        </div>
      </cell>
    </list>
  </div>
</template>

<script>
import mixin from '../mixin'
export default {
  mixins: [mixin],
  data() {
    return {
      list: [
        {
          label: '快递查询',
          path: 'pages/Express.js'
        }
      ]
    }
  },

}
</script>

<style lang="less" scoped>
@import '../assets/mixin.less';

.list {
  background: #ffffff;
}

.list-item {
  width: 750px;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  background-color: @color-accent;
  margin-bottom: 20px;
}

.item-label {
  font-size: 32px;
  color: #ffffff;
}
.arrow {
  width: 35px;
  height: 35px;
}
</style>
