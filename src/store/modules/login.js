import { defineStore } from 'pinia'

import { getToken } from '@/service'

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    phoneReg:
      /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
  }),
  actions: {
    getCode() {
      const appid = 'wxf07fe334d165709e'
      const redirect_uri = 'https://wx.hn.189.cn/hnimgs/wx_view/fx/index.html'
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=code`
    },
    async getToken(payload) {
      const res = await getToken(payload)
      console.log(res)
    }
  }
})
