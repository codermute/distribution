<template>
  <div class="hb-bg">
    <div class="main-box">
      <div class="hb-box">
        <!-- <img class="ewm-img" src="@/assets/images/ewm-img.jpg" /> -->
        <qrcode-vue class="ewm-img" :value="url" :size="80"></qrcode-vue>
        <img src="@/assets/images/hb-bg.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue'
import { useLoginStore } from '@/store'

import useTltle from '@/hooks/useTitle.js'

useTltle('分享海报')

const store = useLoginStore()

const agentId = store.userInfo.agentId
const memberId = store.userInfo.memberId

const url = `https://wx.hn.189.cn/hnimgs/wx_view/fx/index.html?agentId=${agentId}&memberId=${memberId}&route=login&type=${store.userInfo.userType}`
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
.hb-bg {
  background: #6ad0ff;
}
.hb-box {
  position: relative;
}
.ewm-img {
  width: 1.6rem;
  height: 1.6rem;
  z-index: 9;
  position: absolute;
  right: 0.75rem;
  bottom: 1.35rem;
}
</style>
