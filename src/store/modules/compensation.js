import { defineStore } from 'pinia'
import { showToast } from 'vant'

import {
  getPageActivity,
  getDevSupport,
  getDevNoSupport,
  getSelectSumMoney
} from '@/service'

export const useComStore = defineStore({
  id: 'compensation',
  state: () => ({
    activityList: [],
    developList: [],
    businessList: [],
    sumMoneyInfo: {}
  }),
  actions: {
    async getActivityList() {
      const res = await getPageActivity()
      if (res.code) return showToast(res.message)
      this.activityList = res.data.list
    },
    getCommission() {
      getDevSupport().then((res) => {
        if (res.code) return showToast(res.message)
        this.developList = res.data.list
      })
      getDevNoSupport().then((res) => {
        if (res.code) return showToast(res.message)
        this.businessList = res.data.list
      })
    },
    async getSelectSumMoney() {
      const res = await getSelectSumMoney()
      if (res.code) return showToast(res.message)
      this.sumMoneyInfo = res.data
    }
  }
})
