<template>
    <div class="tool">
      <div class="tool_text">
        <transition name="fade">
        <div class="tag">
        <div class="arrow">
            <em></em><span></span>
        </div>
        <span class="tool_message">{{messageTooltip}}</span>
       </div>
       </transition>
      </div>
     <slot></slot>
    </div>
</template>

<script>
export default {
  props:{
    messageTooltip:{
      default:'',
      type:String
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {transition: 0.3s ease-out;}
.fade-enter {opacity: 0;transform: scale(1.2);}
.fade-leave-to {opacity: 0;transform: scale(0.8);}
.tool{position:relative}
.tool_text{display:none;position:absolute;top:-36px}
.tool:hover .tool_text{display:block}
.tag{ padding:5px 20px; border:1px solid #f2f2f2; position:relative; background-color:#FFF;width: fit-content;}
.arrow{ position:absolute; width:10px; height:10px; bottom:-10px; left:5px; }
.arrow *{ display:block; border-width:10px; position:absolute; border-style:solid dashed dashed dashed; font-size:0; line-height:0; }
.arrow em{border-color:#f2f2f2 transparent transparent;}
.arrow span{border-color:#FFF transparent transparent; top: -1px}
.tool_message{font-size:12px;font-weight: 400;color:#000}
.tool:hover{cursor: pointer;}
</style>