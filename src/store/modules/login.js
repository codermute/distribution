import { defineStore } from 'pinia'
import { showToast } from 'vant'
import router from '@/router'

import { localCache } from '@/utils'
import {
  changeCodeLogin,
  login,
  changeProLogin,
  changeDistLogin
} from '@/service'

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    userInfo: localCache.getCache('userInfoLB') ?? {},
    token: localCache.getCache('tokenLB') ?? '',
    phoneReg:
      /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
  }),
  actions: {
    getCode() {
      const appid = 'wxf07fe334d165709e'
      const redirect_uri = 'https://wx.hn.189.cn/hnimgs/wx_view/fx/index.html'
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=code`
    },
    async changeCodeLogin(payload) {
      const res = await changeCodeLogin(payload)
      // if (res.code === 1) return router.replace('/login')
      if (res.code === 0) {
        this.changeUserInfo(res)
      }
    },
    async login(payload) {
      const res = await login(payload)
      if (res.code) return showToast(res.message)
      this.changeUserInfo(res)
      router.replace('/home')
    },
    async changeProLogin(payload) {
      const res = await changeProLogin(payload)
      console.log(res)
    },
    async changeDistLogin(payload) {
      const res = await changeDistLogin(payload)
      console.log(res)
    },
    changeUserInfo(res) {
      const userInfo = res.data.memberDetail
      const token = res.data.access_token
      this.userInfo = userInfo
      this.token = token
      localCache.setCache('userInfoLB', userInfo)
      localCache.setCache('tokenLB', token)
    }
  }
})
