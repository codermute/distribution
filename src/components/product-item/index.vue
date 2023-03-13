<template>
  <div class="pro-item" @click="itemClick">
    <img class="pro-img" src="@/assets/images/pro-img.png" />
    <div class="pro-info">
      <div class="pro-name">
        <label>19星卡</label>
        <a class="pro-detaile-btn">套餐详情>></a>
      </div>
      <div class="pro-text">
        说明:套餐资费19元/月，每月30GB定向流量+65G全国通用流量，可参与充50送120活
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

<style scoped>
.pro-item {
  display: flex;
  align-items: center;
  padding: 0.2rem;
  background: #fff;
  margin-bottom: 0.2rem;
  border-radius: 0.2rem;
}
.pro-img {
  width: 1.8rem;
  border-radius: 0.15rem;
}
.pro-info {
  flex: 1;
  padding-left: 0.2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.pro-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pro-name label {
  font-size: 0.35rem;
}
.pro-detaile-btn {
  color: #f38431;
  font-size: 0.26rem;
}
.pro-text {
  color: #666;
  margin: 0.1rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.pro-btn-row {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.1rem;
}
.pro-btn {
  display: inline-flex;
  align-items: center;
  font-size: 0.24rem;
  background: #f38431;
  border-radius: 0.4rem;
  padding: 0 0.3rem;
  height: 0.45rem;
  color: #fff;
  margin-right: 0.1rem;
}
.pro-btn img {
  width: 0.25rem;
  height: 0.25rem;
}
</style>
