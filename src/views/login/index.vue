<template>
  <div class="bg-white">
    <div class="main-box">
      <div class="login-top"><img src="@/assets/images/login-ban.jpg" /></div>
      <div class="rw-info">
        <template v-for="item in formList" :key="item.field">
          <div class="form-group">
            <img class="form-icon" :src="item.img" />
            <input
              class="form-control"
              v-model="formOutput[item.field]"
              :type="item.type"
              :placeholder="item.placeholder"
            />
            <template v-if="item.field === 'code'">
              <CountDown
                ref="countDownRef"
                class="btn-yz"
                :auto-start="false"
                :time="60000"
                @click="startClick"
                @finish="finish"
              >
                <template #default="timeData">
                  <span>{{
                    isCountDown ? `重新发送(${timeData.seconds})` : '获取验证码'
                  }}</span>
                </template>
              </CountDown>
            </template>
          </div>
        </template>
        <a class="su-btn" @click="login">注册</a>
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
import { ref, reactive } from 'vue'
import { CountDown, showToast } from 'vant'
import { useLoginStore } from '@/store'

import { formList } from './config'
import { debounce } from '@/utils'
import useTltle from '@/hooks/useTitle.js'

const store = useLoginStore()

useTltle('注册')

const formOutput = reactive({
  phone: '',
  code: '',
  recommend: ''
})
const countDownRef = ref(null)
const isCountDown = ref(false)

const startClick = () => {
  countDownRef.value[0].start()
  isCountDown.value = true
}
const finish = () => {
  isCountDown.value = false
  countDownRef.value[0].reset()
}

const login = debounce(
  () => {
    if (!store.phoneReg.test(formOutput.phone))
      return showToast('请输入有效手机号码')
    if (!formOutput.code) return showToast('请填写验证码')
    if (!store.phoneReg.test(formOutput.recommend))
      return showToast('请输入有效推荐人手机号码')

    console.log({ ...formOutput })
  },
  300,
  true
)
</script>

<style>
@import '../../assets/css/home/style.css';
</style>
