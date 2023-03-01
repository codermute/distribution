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
          <div class="record-item">
            <div class="record-num">30,000</div>
            <div class="record-name">累计奖励金额</div>
          </div>
          <div class="record-item">
            <div class="record-num">10,000</div>
            <div class="record-name">昨日到账奖励</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-box">
      <div class="cpn-title">我的发展酬金</div>
      <div class="cpn-table">
        <table class="table" cellspacing="0">
          <thead>
            <tr>
              <th>发展人</th>
              <th>酬金类型</th>
              <th>下发奖励<br />时间</th>
              <th>用户</th>
              <th>金额</th>
              <th>结算状态</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>张三</td>
              <td>激活奖励</td>
              <td>2023-01-01</td>
              <td>李四</td>
              <td>10</td>
              <td>已结算</td>
            </tr>
            <tr>
              <td>张三</td>
              <td>激活奖励</td>
              <td>2023-01-01</td>
              <td>李四</td>
              <td>10</td>
              <td>已结算</td>
            </tr>
            <tr>
              <td>张三</td>
              <td>激活奖励</td>
              <td>2023-01-01</td>
              <td>李四</td>
              <td>10</td>
              <td>已结算</td>
            </tr>
            <tr>
              <td>张三</td>
              <td>激活奖励</td>
              <td>2023-01-01</td>
              <td>李四</td>
              <td>10</td>
              <td>已结算</td>
            </tr>
          </tbody>
        </table>
        <div class="total">合计：2222元</div>
      </div>
      <div class="cpn-title">我的商机(促成订单激活充值在网可获得酬金)</div>
      <div class="cpn-table">
        <table class="table" cellspacing="0">
          <thead>
            <tr>
              <th>发展人</th>
              <th>酬金类型</th>
              <th>下发奖励<br />时间</th>
              <th>用户</th>
              <th>金额</th>
              <th>结算状态</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>张三</td>
              <td>激活奖励</td>
              <td>2023-01-01</td>
              <td>李四</td>
              <td>10</td>
              <td>已结算</td>
            </tr>
            <tr>
              <td>张三</td>
              <td>激活奖励</td>
              <td>2023-01-01</td>
              <td>李四</td>
              <td>10</td>
              <td>已结算</td>
            </tr>
            <tr>
              <td>张三</td>
              <td>激活奖励</td>
              <td>2023-01-01</td>
              <td>李四</td>
              <td>10</td>
              <td>已结算</td>
            </tr>
            <tr>
              <td>张三</td>
              <td>激活奖励</td>
              <td>2023-01-01</td>
              <td>李四</td>
              <td>10</td>
              <td>已结算</td>
            </tr>
            <tr>
              <td>张三</td>
              <td>激活奖励</td>
              <td>2023-01-01</td>
              <td>李四</td>
              <td>10</td>
              <td>已结算</td>
            </tr>
            <tr>
              <td>张三</td>
              <td>激活奖励</td>
              <td>2023-01-01</td>
              <td>李四</td>
              <td>10</td>
              <td>已结算</td>
            </tr>
            <tr>
              <td>张三</td>
              <td>激活奖励</td>
              <td>2023-01-01</td>
              <td>李四</td>
              <td>10</td>
              <td>已结算</td>
            </tr>
          </tbody>
        </table>
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

import earningsPopup from '@/components/earnings-popup'

const isEarningShow = ref(false)
</script>

<style>
@import '../../assets/css/home/style.css';
</style>
