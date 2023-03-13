import { defineStore } from 'pinia'
import { showToast } from 'vant'

import { getOrderMessage } from '@/service'

export const useIndentStore = defineStore({
  id: 'indent',
  state: () => ({
    selfOrderList: []
  }),
  actions: {
    async getOrderMessage(payload) {
      const res = await getOrderMessage(payload)
      if (res.code) return showToast(res.message)
      this.selfOrderList = res.data.list
    }
  }
})
