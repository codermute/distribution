<template>
  <div class="main-box">
    <div class="top-box">
      <div class="top-row">
        <div class="head-box" id="gzBtn">
          <img :src="loginStore.userInfo.memberAvatar" />
        </div>
        <div class="top-info">
          <div class="name-row">{{ loginStore.userInfo.memberUsername }}</div>
          <p>
            等级:{{
              loginStore.userInfo.userType === 'agent' ? '推广员' : '分销员'
            }}
          </p>
        </div>
        <div class="top-right">
          <!-- <a class="bind-btn" @click="changeBind">绑定微信领酬金</a> -->
          <a class="income-text" @click="isEarningShow = true" id="incomeBtn"
            >如何提升收益?</a
          >
        </div>
      </div>
      <div class="home-record">
        <div class="record-list clearfix">
          <recordItem :num="store.balanceInfo.accountMoney" name="累计收入" />
          <recordItem :num="store.balanceInfo.ydayMoney" name="昨日收入" />
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
        <template v-if="store.productList.length">
          <template v-for="item in store.productList" :key="item.userId">
            <productItem :item="item" />
          </template>
        </template>
        <template v-else>
          <empty description="暂无数据" />
        </template>
      </div>
    </div>
    <div class="index-tips">
      备注：链接7天有效，失效后如需下单，需重新分享链接。
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
import { Empty } from 'vant'
import { useHomeStore, useLoginStore } from '@/store'

import { menuList } from './config'
import useTltle from '@/hooks/useTitle.js'

import recordItem from '@/components/record-item'
import productItem from '@/components/product-item'
import headTltle from '@/components/head-title'
import earningsPopup from '@/components/earnings-popup'

useTltle('裂变活动')

const router = useRouter()
const store = useHomeStore()
const loginStore = useLoginStore()

store.getMemberBalance()
store.getProductList()

const isEarningShow = ref(false)

// const changeBind = () => {
//   const { openId, memberId, memberUsername, memberAvatar, userType } =
//     loginStore.userInfo
//   const options = {
//     openId,
//     memberId,
//     name: memberUsername,
//     memberAvatar,
//     type: userType
//   }

//   store.changeBindOpenId(options)
// }

function menuClickHandle(path) {
  router.push(`/${path}`)
}
</script>

<style scoped>
@import '../../assets/css/home/style.css';
.nav-box {
  padding: 0.3rem;
  background: #fff;
  border-radius: 0.2rem;
  margin: -1rem 0.2rem 0;
}
.nav-item {
  float: left;
  width: 25%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.nav-item img {
  width: 0.8rem;
  height: 0.8rem;
  margin-bottom: 0.1rem;
}

.index-tips {
  padding: 0 0.3rem;
  color: #666;
}
</style>
