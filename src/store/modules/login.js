import { defineStore } from 'pinia'

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    phoneReg:
      /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
  }),
  actions: {
    // wxf07fe334d165709e
    getCode() {}
  }
})
