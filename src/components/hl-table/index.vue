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

<style scoped>
.table {
  border-collapse: collapse;
  width: 100%;
  background: #fff;
  overflow: hidden;
  border-top: solid 1px #dedcdc;
  border-right: solid 1px #dedcdc;
}
.table tr td,
.table tr th {
  padding: 0.1rem 0;
  text-align: center;
  border-bottom: solid 1px #dedcdc;
  border-left: solid 1px #dedcdc;
}
.table tr th {
  background: #fb8421;
  color: #fff;
  font-weight: 400;
}
.table tr td {
  background: #fff;
  font-size: 0.24rem;
}
</style>
