<template>
  <div class="agreement-popup" v-show="isShow">
    <div class="pop_up" id="xyBoxone">
      <div class="pop_box pop_xy_box">
        <div class="pop_tit">{{ title }}</div>
        <div class="pop_text">{{ content }}</div>
        <span class="close_pop" @click="triggerClickHandle">确定</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isShow: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['triggerClick'])

function triggerClickHandle() {
  emit('triggerClick')
}
</script>

<style scoped>
.pop_up {
  display: block;
}
</style>
