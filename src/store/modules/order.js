import { defineStore } from 'pinia'
import { showToast } from 'vant'

import { changeAuthentication, createOrder } from '@/service/modules/order'

export const useOrderStore = defineStore({
  id: 'order',
  state: () => ({
    phoneReg:
      /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/,
    idReg:
      /(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/
  }),
  actions: {
    async checkOrderIdentity(payload) {
      const res = await changeAuthentication(payload)
      if (res.code) return showToast(res.message)
    },
    async changeCreateOrder(payload) {
      const res = await createOrder(payload)
      if (res.code) return showToast(res.message)
      window.location.href =
        'http://flow.hn.189.cn/hnfx/hd/hlwkczindex?orderid=87ff8bd41d63201d3a10a2672268bf311c6868be97060502&username=2fd4e36a201cb4801f14d5ab99776fce&cardid=eac226f8856ab261d6bc3e62a61822fdd785090feb898d52&clientid=lblxhlwyl'
    }
  }
})
