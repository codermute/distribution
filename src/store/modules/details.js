import { defineStore } from 'pinia'
import { showToast } from 'vant'

import { getOrderById } from '@/service'

export const useDetailStore = defineStore({
  id: 'details',
  state: () => ({
    orderInfo: []
  }),
  actions: {
    async getOrderById(payload) {
      const res = await getOrderById(payload)
      if (res.code) return showToast(res.message)
      this.orderInfo = res.data
    }
  }
})
