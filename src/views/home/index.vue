<template>
  <div class="main-box">
    <div class="top-box">
      <div class="top-row">
        <div class="head-box" id="gzBtn">
          <img src="@/assets/images/head.png" />
        </div>
        <div class="top-info">
          <div class="name-row">张三</div>
          <p>等级:推广员</p>
        </div>
        <div class="top-right">
          <a class="bind-btn">绑定微信领酬金</a>
          <a class="income-text" @click="isEarningShow = true" id="incomeBtn"
            >如何提升收益?</a
          >
        </div>
      </div>
      <div class="home-record">
        <div class="record-list clearfix">
          <div class="record-item">
            <div class="record-num">30,000</div>
            <div class="record-name">累计收入</div>
          </div>
          <div class="record-item">
            <div class="record-num">10,000</div>
            <div class="record-name">昨日收入</div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-box clearfix">
      <template v-for="item in menuList" :key="item.title">
        <a class="nav-item" @click="menuClickHandle(item.path)">
          <img :src="item.img" />
          {{ item.title }}
        </a>
      </template>
    </div>
    <div class="content-box">
      <headTltle title="热销特惠产品" />
      <div class="pro-list">
        <template v-for="item in 2" :key="item">
          <productItem :item="item" />
        </template>
      </div>
    </div>
    <div class="index-tips">
      备注:此下单链接7天内有效，如超过7天，请重新复制链接给用户下单。
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
import { useRouter } from 'vue-router'

import { menuList } from './config'

import productItem from '@/components/product-item'
import headTltle from '@/components/head-title'
import earningsPopup from '@/components/earnings-popup'

const router = useRouter()

const isEarningShow = ref(false)

function menuClickHandle(path) {
  router.push(`/${path}`)
}
</script>

<style>
@import '../../assets/css/home/style.css';
</style>
