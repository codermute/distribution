<template>
  <router-view />
</template>

<script setup>
import { useLoginStore } from '@/store'
// import { getUrlSearch } from '@/utils'

const store = useLoginStore()
// const code = getUrlSearch('code')

// if (!code) {
//   store.getCode()
// }
store.getToken({ wxCode: '011sKP0w35Vjg03D3w2w3eq1Ex4sKP0S' })
</script>
