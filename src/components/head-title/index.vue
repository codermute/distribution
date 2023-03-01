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
