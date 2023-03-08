import { defineStore } from 'pinia'
import { showToast } from 'vant'

import { getOrderMessage } from '@/service'

export const useIndentStore = defineStore({
  id: 'indent',
  state: () => ({
    selfOrderList: []
  }),
  actions: {
    async getOrderMessage() {
      const res = await getOrderMessage()
      if (res.code) return showToast(res.message)
      // console.log(res)
      this.selfOrderList = res.data.list
    }
  }
})
