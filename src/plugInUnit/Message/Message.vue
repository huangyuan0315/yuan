<template>
    <div v-show="show">
    <transition name="fade">
        <div class="message">
            <i class="message-icon el-icon-info"></i>
            <p class="message-text">{{message}}</p>
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
      duration:3000,
    };
  }
};
</script>

<style scoped>
.message {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 40%;
  left: 50%;
  margin-left: -15vw;
  padding: 1vw;
  width: 30vw;
  font-size: 1vw;
  color:#000;
  background-color: #eef2fb;
  border-radius: 5px;
  z-index: 99999;
  border:1px solid #d2d2d2
}
.message-icon{
  margin-right:.5vw;
}
.message-text{
  text-align:left;
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