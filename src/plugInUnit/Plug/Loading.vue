<template>
  <div class="load-container" v-show="loadingShow">
  <div class="loadSpinner">
    <i class="loadingIcon el-icon-loading"></i>
    <p class="loadText">加载中</p>
  </div>
  </div>
</template>

<script>
export default {
  props:{
    loadingShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.load-container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99999;
  background-color: #fff;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap
}
.loadSpinner{
    width: 100%;
    text-align: center;
    position: absolute;
}
.loadingIcon{
  font-size:16px;
  vertical-align: baseline;
  display: inline-block;
}
.loadText{
    margin: 3px 0;
    font-size: 14px;
}
</style>