<template>
  <div class="tab-title-row">
    <template v-for="(item, index) in tabList" :key="item">
      <a
        :class="['tab-title-item', { active: index === currentIndex }]"
        @click="itemClick(index)"
        >{{ item }}</a
      >
    </template>
  </div>
</template>

<script setup>
defineProps({
  tabList: {
    type: Array,
    default: () => []
  },
  currentIndex: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['itemClick'])

function itemClick(index) {
  emit('itemClick', index)
}
</script>

<style scoped>
.tab-title-row {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
}
.tab-title-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 0.8rem;
  font-size: 0.3rem;
  border-bottom: solid 1px #ddd;
}
.tab-title-item.active {
  color: #2f85ef;
  border-bottom: solid 2px #2f85ef;
}
</style>
