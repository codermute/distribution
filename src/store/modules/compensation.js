import { defineStore } from 'pinia'
import { showToast } from 'vant'

import { getPageActivity } from '@/service'

export const useComStore = defineStore({
  id: 'compensation',
  state: () => ({
    activityList: []
  }),
  actions: {
    async getActivityList() {
      const res = await getPageActivity()
      if (res.code) return showToast(res.message)
      // console.log(res)
      this.activityList = res.data.list
    }
  }
})
