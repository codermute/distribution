<template>
  <div class="main-box">
    <div class="search-box">
      <div class="search-row">
        <div class="search-item">
          <img class="icon" src="@/assets/images/icon-search.png" />
          <input
            type="text"
            placeholder="搜索下单手机号/手机后四位"
            class="input"
          />
        </div>
      </div>
    </div>
    <tabControl
      :tabList="tabList"
      :currentIndex="currentIndex"
      @itemClick="itemClick"
    />
    <div class="search-box">
      <div class="search-row">
        <div class="search-item">
          <img class="icon" src="@/assets/images/icon-date.png" />
          <input
            type="text"
            placeholder="请选择时间"
            class="input"
            id="date"
            lay-key="1"
            readonly
            v-model="date"
            @click="isCalendarShow = true"
          />
        </div>
        <div class="search-item">
          <img class="select-arrow" src="@/assets/images/arrow-bottom.png" />
          <select class="select">
            <option style="display: none">办理来源</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div class="search-item">
          <img class="select-arrow" src="@/assets/images/arrow-bottom.png" />
          <select class="select">
            <option style="display: none">状态</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
    </div>
    <div class="group-list">
      <groupItem />
    </div>
    <div class="order-bottom">
      <headTitle title="分享我的专属推广链接，获得更多收益" />
      <div class="share-row">
        <template v-for="item in shareList" :key="item">
          <a class="share-item">{{ item }}</a>
        </template>
      </div>
    </div>
  </div>

  <calendar
    v-model:show="isCalendarShow"
    :show-confirm="false"
    @confirm="confirmClick"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Calendar } from 'vant'

import tabControl from '@/components/tab-control'
import groupItem from '@/components/group-item'
import headTitle from '@/components/head-title'

const currentIndex = ref(0)
const date = ref('')
const isCalendarShow = ref(false)

const tabList = ['未激活', '已激活', '已作废']
const shareList = ['办卡推广', '充话费', '代办卡']

const itemClick = (index) => (currentIndex.value = index)

const formatDate = (date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
const confirmClick = (value) => {
  isCalendarShow.value = false
  date.value = formatDate(value)
}
</script>

<style scoped>
.main-box {
  position: relative;
  max-width: 750px;
  min-height: 100vh;
  margin: auto;
  font-size: 0.3rem;
  background: #f5f5f5;
}
.search-box {
  padding: 0.3rem;
  background: #fff;
}
.search-row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -0.05rem 0.1rem;
}
.search-row:last-child {
  margin: 0 -0.05rem 0;
}
.search-item {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.05rem;
}
.search-item .icon {
  position: absolute;
  width: 0.3rem;
  height: 0.3rem;
  left: 0.2rem;
}
.input {
  display: flex;
  height: 0.7rem;
  border-radius: 0.1rem;
  background: #f5f5f5;
  width: 100%;
  padding-left: 0.6rem;
  outline: none;
  font-size: 0.26rem;
}
.select {
  display: flex;
  height: 0.7rem;
  border-radius: 0.1rem;
  background: #f5f5f5;
  width: 100%;
  padding-left: 0.2rem;
  outline: none;
  font-size: 0.26rem;
  -webkit-appearance: none;
  appearance: none;
}
.input.active,
.select.active {
  background: #2f85ef;
}
.select-arrow {
  position: absolute;
  right: 0.2rem;
  width: 0.3rem;
}
.search-btn {
  height: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2f85ef;
  color: #fff;
  margin-left: 0.1rem;
  border-radius: 0.1rem;
  padding: 0 0.3rem;
}
.search-btn img {
  width: 0.3rem;
  height: 0.3rem;
  margin: 0 0.05rem;
}

.group-list {
  padding: 0.3rem;
}

.order-bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  margin-top: 0.3rem;
  padding: 0.3rem;
}
.share-row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -0.1rem;
}
.share-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 0 0.1rem;
  height: 0.7rem;
  border-radius: 0.1rem;
  border: solid 1px #2f85ef;
  color: #2f85ef;
}
</style>
