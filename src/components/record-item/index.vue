<template>
  <div class="record-item">
    <div class="record-num">{{ num }}</div>
    <div class="record-name">{{ name }}</div>
  </div>
</template>

<script setup>
defineProps({
  num: {
    type: [String, Number],
    defalut: '0.00'
  },
  name: {
    type: String,
    defalut: ''
  }
})
</script>

<style scoped>
.record-item {
  float: left;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-right: solid 1px #90daff;
  margin: 0.15rem 0;
  color: #fff;
}
.record-item:nth-child(2n) {
  border: 0;
}
.record-num {
  font-size: 0.4rem;
}
.record-name {
  margin-top: 0.1rem;
}
</style>
