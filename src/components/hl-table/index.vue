<template>
  <table class="table" cellspacing="0">
    <thead>
      <tr>
        <th v-for="item in propList" :key="item.estate">{{ item.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in listData" :key="item">
        <td v-for="key in keys" :key="key">
          <slot :name="key" :row="item">
            {{ item[key] || '--' }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  propList: {
    type: Array,
    default: () => []
  },
  listData: {
    type: Array,
    default: () => []
  }
})

const keys = ref([])

keys.value = props.propList.map((item) => item.prop)
</script>
