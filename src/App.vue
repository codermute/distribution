<template>
  <router-view />
</template>

<script setup>
import { useRouter } from 'vue-router'

import { useLoginStore } from '@/store'
import { getUrlSearch } from '@/utils'

const router = useRouter()
const store = useLoginStore()

const code = getUrlSearch('code') || '000'
const routeName = getUrlSearch('route')

initialize()

function initialize() {
  switch (routeName) {
    case 'order':
      router.replace('/order')
      break
    case 'login':
      router.replace('/login')
      !code ? store.getCode() : store.changeCodeLogin({ wxCode: code })
      break
    default:
      !code ? store.getCode() : store.changeCodeLogin({ wxCode: code })
      break
  }
}
</script>
