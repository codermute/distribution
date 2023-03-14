import { defineStore } from 'pinia'
import { showToast } from 'vant'

import { getMemberMoneyDetail, getProductList } from '@/service'

export const useHomeStore = defineStore({
  id: 'home',
  state: () => ({
    balanceInfo: {}
  }),
  actions: {
    async getMemberBalance() {
      const res = await getMemberMoneyDetail()
      if (res.code) return showToast(res.message)
      this.balanceInfo = res.data
    },
    async getProductList() {
      const res = await getProductList()
      console.log(res)
    }
  }
})
