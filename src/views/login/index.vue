<template>
  <div class="bg-white">
    <div class="main-box">
      <div class="login-top"><img src="@/assets/images/login-ban.jpg" /></div>
      <div class="rw-info">
        <div class="form-group">
          <img class="form-icon" src="@/assets/images/icon-img1.png" />
          <input
            type="text"
            class="form-control"
            placeholder="请输入手机号码"
          />
        </div>
        <div class="form-group">
          <img class="form-icon" src="@/assets/images/icon-img3.png" />
          <input
            type="text"
            class="form-control"
            placeholder="请输入短信验证码"
          />
          <!-- <input type="button" value="获取验证码" class="btn-yz" /> -->
          <CountDown
            ref="countDown"
            class="btn-yz"
            format="获取验证码ss"
            :auto-start="false"
            :time="60000"
            @click="start"
          />
        </div>
        <div class="form-group">
          <img class="form-icon" src="@/assets/images/icon-img4.png" />
          <input
            type="text"
            class="form-control"
            placeholder="请填写推荐人手机号码"
          />
        </div>
        <a class="su-btn">注册</a>
      </div>
      <div class="login-tips">
        <div class="loging-tops-tit"><span>注册的好处</span></div>
        自发展成功1单<span>最高可得70元</span><br />
        裂变成功1单<span>最高可得11元</span><br />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CountDown } from 'vant'

const countDown = ref(null)

const start = () => {
  countDown.value.start()
}
</script>

<style>
@import '../../assets/css/home/style.css';
</style>
