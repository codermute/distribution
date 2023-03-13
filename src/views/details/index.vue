<template>
  <div class="main-box">
    <div class="order-details-tit">
      <headTitle title="订单详情" />
    </div>
    <div class="order-details">
      <div class="order-row">
        <label>订单号：</label><span>{{ store.orderInfo.orderId }}</span>
      </div>
      <div class="order-row"><label>订单来源：</label><span>自发展</span></div>
      <div class="order-row"><label>订单状态：</label><span>已作废</span></div>
      <div class="order-row"><label>充值：</label><span>是</span></div>
      <div class="order-row"><label>物流状态：</label><span>已发货</span></div>
      <div class="order-row"><label>作废原因：</label><span>*****</span></div>
      <div class="order-row">
        <label>收货人姓名：</label><span>{{ store.orderInfo.custName }}</span>
      </div>
      <div class="order-row">
        <label>收货人电话：</label
        ><span>{{ store.orderInfo.orderMobile }}</span>
      </div>
    </div>
    <div class="order-details-tit">
      <headTitle title="酬金详情" />
    </div>
    <div class="order-details">
      <div class="order-row">
        <label>已到账：</label><span>15元</span
        ><em class="color-green">已到账</em>
      </div>
      <div class="order-row">
        <label>激活奖励：</label><span>15元</span
        ><em class="color-blue">未到账</em>
      </div>
      <div class="order-row">
        <label>充值奖励：</label><span>15元</span
        ><em class="color-blue">未到账</em>
      </div>
      <div class="order-row">
        <label>在网1个月奖励：</label><span>15元</span
        ><em class="color-green">已到账</em>
      </div>
      <div class="order-row">
        <label>在网2个月奖励：</label><span>15元</span
        ><em class="color-blue">未到账</em>
      </div>
      <div class="order-row">
        <label>在网3个月奖励：</label><span>15元</span
        ><em class="color-blue">未到账</em>
      </div>
    </div>
    <div class="padding-sm">
      <a href="javascript:history.go(-1)" class="bottom-btn">返回</a>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

import { useDetailStore } from '@/store'
import useTltle from '@/hooks/useTitle.js'

import headTitle from '@/components/head-title'

useTltle('订单详情')

const route = useRoute()
const store = useDetailStore()

const id = route.params.id

store.getOrderById({ id })
</script>

<style scoped>
.main-box {
  position: relative;
  max-width: 750px;
  min-height: 100vh;
  margin: auto;
  font-size: 0.26rem;
  line-height: 0.4rem;
  background: #f5f5f5;
}
.order-details-tit {
  padding: 0.3rem 0.3rem 0.1rem;
}
.order-details {
  background: #fff;
  margin: 0 0.3rem 0.3rem;
  border-radius: 0.2rem;
  padding: 0.3rem;
}
.order-row {
  display: flex;
  align-items: center;
  padding-bottom: 0.2rem;
}
.order-row:last-child {
  padding: 0;
}
.order-row span {
  color: #666;
}
.order-row em {
  margin-left: auto;
  font-style: normal;
}
.bottom-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 0.8rem;
  background: linear-gradient(to bottom, #3babfd, #0c80f1);
  font-size: 0.3rem;
  border-radius: 0.5rem;
}
.color-red {
  color: #d30327 !important;
}
.color-green {
  color: #4fc !important;
}
.color-blue {
  color: #0078ff !important;
}
.color-gray {
  color: #666 !important;
}
.pull-left {
  float: left !important;
}
.pull-right {
  float: right !important;
}
.margin-bottom-sm {
  margin-bottom: 0.3rem;
}
.padding-top-sm {
  padding-top: 0.3rem !important;
}
.padding-sm {
  padding: 0.3rem !important;
}
</style>
