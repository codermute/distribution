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
      <div class="cpn-table">
        <hlTable :propList="propList" :listData="store.developList">
          <template #createTime="{ row }">
            {{ dayjs(row.createTime).format('YYYY-MM-DD') }}</template
          >
          <template #kickbackType="{ row }">
            {{
              row.kickbackType == '1'
                ? '推广员首次佣金'
                : row.kickbackType == '2'
                ? '激活金额'
                : row.kickbackType == '3'
                ? '首充奖励金额'
                : row.kickbackType == '4'
                ? '在网一月奖励'
                : row.kickbackType == '5'
                ? '在网两月奖励'
                : row.kickbackType == '6' && '在网三月奖励'
            }}
          </template>
          <template #kickbackState="{ row }">
            {{
              row.kickbackState == '0'
                ? '待发放'
                : row.kickbackState == '1'
                ? '符合条件待审核'
                : row.kickbackState == '2'
                ? '已经发放'
                : '审核不通过'
            }}
          </template>
        </hlTable>
        <div class="total">合计：{{ store.sumMoneyInfo.zyMoney || 0 }}元</div>
      </div>
      <headTitle title="我的商机(促成订单激活充值在网可获得酬金)" />
      <div class="cpn-table">
        <hlTable :propList="propList" :listData="store.businessList">
          <template #createTime="{ row }">
            {{ dayjs(row.createTime).format('YYYY-MM-DD') }}</template
          >
          <template #kickbackType="{ row }">
            {{
              row.kickbackType == '1'
                ? '推广员首次佣金'
                : row.kickbackType == '2'
                ? '激活金额'
                : row.kickbackType == '3'
                ? '首充奖励金额'
                : row.kickbackType == '4'
                ? '在网一月奖励'
                : row.kickbackType == '5'
                ? '在网两月奖励'
                : row.kickbackType == '6' && '在网三月奖励'
            }}
          </template>
          <template #kickbackState="{ row }">
            {{
              row.kickbackState == '0'
                ? '待发放'
                : row.kickbackState == '1'
                ? '符合条件待审核'
                : row.kickbackState == '2'
                ? '已经发放'
                : '审核不通过'
            }}
          </template>
        </hlTable>
        <div class="total">合计：{{ store.sumMoneyInfo.noZyMoney || 0 }}元</div>
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
store.getSelectSumMoney()
homeStore.getMemberBalance()

const isEarningShow = ref(false)
</script>

<style>
@import '../../assets/css/home/style.css';
</style>
