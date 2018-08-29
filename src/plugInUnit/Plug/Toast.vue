<template>
  <div class="toast-container" v-show="show">
    <transition name="fade">
        <div class="toast">
           <div> {{message}}</div>
            <el-button  @click.stop.prevent="sure">确定</el-button>
            <el-button v-if="type==='delete'" @click.stop.prevent="close">取消</el-button>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "",
      duration:2000,
      type:'',
      callback:null
    };
  },
  methods:{
    sure(){
      this.callback && typeof this.callback === "function" && this.callback();
      this.$emit("close");
    },
    close(){
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.toast-container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99999;
}
.toast {
  position: fixed;
  top: 40%;
  left: 50%;
  margin-left: -15vw;
  padding: 2vw;
  width: 30vw;
  font-size: 3vw;
  color:#000;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  z-index: 99999;
  border:1px solid #d2d2d2
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease-out;
}
.fade-enter {
  opacity: 0;
  transform: scale(1.2);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>