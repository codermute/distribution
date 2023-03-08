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
          <recordItem num="30,000" name="累计奖励金额" />
          <recordItem num="10,000" name="昨日到账奖励" />
        </div>
      </div>
    </div>
    <div class="content-box">
      <headTitle title="我的发展酬金" />
      <div class="cpn-table">
        <hlTable :propList="propList" :listData="listData" />
        <div class="total">合计：2222元</div>
      </div>
      <headTitle title="我的商机(促成订单激活充值在网可获得酬金)" />
      <div class="cpn-table">
        <hlTable :propList="propList" :listData="listData" />
        <div class="total">合计：2222元</div>
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
import { ref } from 'vue'
import { useComStore } from '@/store'

import { propList, listData } from './config'
import useTltle from '@/hooks/useTitle.js'

import recordItem from '@/components/record-item'
import earningsPopup from '@/components/earnings-popup'
import headTitle from '@/components/head-title'
import hlTable from '@/components/hl-table'

useTltle('我的酬金')

const store = useComStore()

store.getActivityList()

const isEarningShow = ref(false)
</script>

<style>
@import '../../assets/css/home/style.css';
</style>
