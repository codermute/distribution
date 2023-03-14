import { defineStore } from 'pinia'
import { showToast } from 'vant'

import {
  getMemberMoneyDetail,
  getProductList,
  changeBindOpenId
} from '@/service'

export const useHomeStore = defineStore({
  id: 'home',
  state: () => ({
    balanceInfo: {},
    productList: []
  }),
  actions: {
    async getMemberBalance() {
      const res = await getMemberMoneyDetail()
      if (res.code) return showToast(res.message)
      this.balanceInfo = res.data
    },
    async getProductList() {
      const res = await getProductList()
      if (res.code) return showToast(res.message)
      this.productList = res.data
    },
    async changeBindOpenId(payload) {
      const res = await changeBindOpenId(payload)
      console.log(res, '----')
    }
  }
})
