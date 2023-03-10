<template>
  <div class="cpn-title">{{ title }}</div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.cpn-title {
  position: relative;
  font-size: 0.32rem;
  display: flex;
  align-items: center;
  padding-left: 0.2rem;
  margin-bottom: 0.2rem;
}
.cpn-title:before {
  position: absolute;
  left: 0;
  width: 0.07rem;
  height: 0.3rem;
  border-radius: 0.1rem;
  display: block;
  background: #0f82f2;
  content: '';
}
</style>
