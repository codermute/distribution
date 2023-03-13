<template>
  <div class="main-box">
    <div class="top-box" style="padding: 0.4rem 0.3rem 0.2rem">
      <p class="text-right">
        <a class="income-btn" @click="isEarningShow = true" id="incomeBtn"
          >如何提升收益?</a
        >
      </p>
      <div class="home-record">
        <div class="record-list clearfix">
          <recordItem
            :num="homeStore.balanceInfo.accountMoney"
            name="累计奖励金额"
          />
          <recordItem
            :num="homeStore.balanceInfo.ydayMoney"
            name="昨日到账奖励"
          />
        </div>
      </div>
    </div>
    <div class="content-box">
      <headTitle title="我的发展酬金" />
      <div class="cpn-table" v-if="store.developList.length">
        <hlTable :propList="propList" :listData="store.developList">
          <template #createTime="{ row }">
            {{ dayjs(row.createTime).format('YYYY-MM-DD') }}</template
          >
        </hlTable>
        <div class="total">合计：{{ developTotal }}元</div>
      </div>
      <headTitle title="我的商机(促成订单激活充值在网可获得酬金)" />
      <div class="cpn-table" v-if="store.businessList.length">
        <hlTable :propList="propList" :listData="store.businessList" />
        <div class="total">合计：{{ businessTotal }}元</div>
      </div>
      <p>备注:订单详情请去我的订单页面查看</p>
    </div>
  </div>

  <!--提升收益弹窗-->
  <earningsPopup
    :isShow="isEarningShow"
    @earningClick="isEarningShow = false"
  />
</template>

<script setup>
import { computed, ref } from 'vue'
import { useComStore, useHomeStore } from '@/store'
import dayjs from 'dayjs'

import { propList } from './config'
import useTltle from '@/hooks/useTitle.js'

import recordItem from '@/components/record-item'
import earningsPopup from '@/components/earnings-popup'
import headTitle from '@/components/head-title'
import hlTable from '@/components/hl-table'

useTltle('我的酬金')

const store = useComStore()
const homeStore = useHomeStore()

// store.getActivityList()
store.getCommission()
homeStore.getMemberBalance()

const isEarningShow = ref(false)

const developTotal = computed(() =>
  store.developList.reduce((pre, cur) => {
    return pre + cur.kickbackMoney
  }, 0)
)
const businessTotal = computed(() =>
  store.businessList.reduce((pre, cur) => {
    return pre + cur.kickbackMoney
  }, 0)
)
</script>

<style>
@import '../../assets/css/home/style.css';
</style>
