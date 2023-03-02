<template>
  <div class="record-item">
    <div class="record-num">{{ num }}</div>
    <div class="record-name">{{ name }}</div>
  </div>
</template>

<script setup>
defineProps({
  num: {
    type: String,
    defalut: ''
  },
  name: {
    type: String,
    defalut: ''
  }
})
</script>
