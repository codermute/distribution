<template>
  <div class="pro-item" @click="itemClick">
    <img class="pro-img" src="@/assets/images/pro-img.png" />
    <div class="pro-info">
      <div class="pro-name">
        <label>29星卡</label>
        <a class="pro-detaile-btn">套餐详情>></a>
      </div>
      <div class="pro-text">
        说明:套餐资费29元/月，每月30GB定向流量+65G全国通用流量可参与充50送120活
      </div>
      <div class="pro-btn-row">
        <!-- <a class="pro-btn"><img src="@/assets/images/icon-pro1.png" />链接</a>
        <a class="pro-btn"><img src="@/assets/images/icon-pro2.png" />页面</a> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function itemClick() {
  router.push('/order')
}
</script>
