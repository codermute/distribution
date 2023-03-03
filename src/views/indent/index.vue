<template>
  <div class="main-box">
    <div class="content-box">
      <headTitle title="自发展订单" />
      <div class="cpn-table">
        <hlTable :propList="propList" :listData="listData.slice(0, 6)" />
      </div>
      <headTitle title="裂变发展订单" />
      <div class="cpn-table">
        <hlTable :propList="propList" :listData="listData.slice(0, 4)" />
      </div>
      <headTitle title="我的商机订单" />
      <p style="padding-bottom: 0.2rem">
        (商机单是指:下单未完成或下单后未激活充值的的订单)
      </p>
      <div class="cpn-table">
        <hlTable :propList="propList" :listData="listData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { propList, listData } from './config'
import useTltle from '@/hooks/useTitle.js'

import headTitle from '@/components/head-title'
import hlTable from '@/components/hl-table'

useTltle('我的订单')
</script>

<style>
@import '../../assets/css/home/style.css';
</style>
