<template>
  <div class="hb-bg">
    <div class="main-box">
      <div class="hb-box">
        <img class="ewm-img" src="@/assets/images/ewm-img.jpg" />
        <img src="@/assets/images/hb-bg.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import useTltle from '@/hooks/useTitle.js'

useTltle('分享海报')
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
