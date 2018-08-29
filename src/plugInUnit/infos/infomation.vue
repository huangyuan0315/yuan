<template>
  <div class="fe-message__container">
    <transition name="fade" >
     <div class="fe-message__box" v-show="visible">
        <p class="fe-message__content">
            {{content}}
        </p>
        <div class="fe-message__btnbox">
          <button class="fe-message__ok" @click.stop.prevent="handleSure">确&nbsp;&nbsp;定</button>
          <button v-if="type=='delete'" class="fe-message__cancel" @click.stop.prevent="handleCancel">取&nbsp;&nbsp;消</button>
        </div>
    </div>
    </transition>
    <div class="fe-message__mask"></div>
  </div>
</template>

<script>
export default {
  name: "Infomation",
  data() {
    return {
      visible: true,
      verticalOffset: 0,
      autoClose: 3000,
      height: 0,
      visible: false,
      content: "",
      type: "default",
      callback: null,
      beforeclosed: null
    };
  },
  methods: {
    handleSure() {
      this.callback && typeof this.callback === "function" && this.callback();
      this.$emit("closed");
    },
    handleCancel() {
      this.beforeclosed &&
        typeof this.beforeclosed === "function" &&
        this.beforeclosed();
      this.$emit("closed");
    },
    // afterLeave() {
    //   this.$emit("closed");
    // },
    close() {
      this.$emit("closed");
    }
  }
};
</script>

<style scoped>
.fe-message__container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99998;
}
.fe-message__mask {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0;
  z-index: 99998;
}
.fe-message__box {
  z-index: 999;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 360px;
  height: 180px;
  margin-left: -180px;
  margin-top: -90px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  z-index: 99999;
}
.fe-message__content {
  height: 20px;
  font-size: 14px;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
.fe-message__btnbox {
  position: absolute;
  height: 28px;
  bottom: 20px;
  width: 100%;
  text-align: center;
}
.fe-message__ok,
.fe-message__cancel {
  width: 100px;
  height: 28px;
  line-height: 28px;
  background: #e63f3c;
  cursor: pointer;
  color: #fff;
  border-radius: 4px;
}
.fe-message__cancel {
  margin-left: 20px;
  background: #b4b4b4;
}
</style>