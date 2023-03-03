<template>
  <div class="main-box">
    <div class="content-box">
      <headTitle title="活动内容" />
      <div class="cpn-info">
        <p class="color-yellow"><b>首单激活激励+在网激励</b></p>
        首单激活激励：对所属裂变营销员（Ⅰ级）首单激活后，可获得“20元”
        微信红包奖励；<br /><br />
        在网激励分为三种场景：<br />
        1.对所属裂变营销员（Ⅰ级）激活且在网首月、次月、第三个月分别获得5元/单、5元/单、10元/单的在网激励；<br />
        2.对所属裂变营销员（Ⅰ级）发展的裂变营销员（Ⅱ级）激活且在网首月、次月、第三个月分别获得2元/单、2元/单、10元/单的在网激励；<br />
        3.对所属裂变营销员（Ⅱ级）发展的裂变营销员（Ⅲ级）激活且在网首月、次月、第三个月分别获得1元/单、1元/单、10元/单的在网激励；
      </div>
      <headTitle title="活动说明" />
      <div class="cpn-info">
        1、本活动限湖南电信互联网卡用户参与。<br />
        2、用户必须在分享页面下单激活，营销员才能得到现金奖励。<br />
        3、本活动解释权归湖南电信所有。
      </div>
      <headTitle title="活动说明" />
      <div class="cpn-table">
        <hlTable :propList="propList" :listData="listData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { propList, listData } from './config'
import useTltle from '@/hooks/useTitle.js'

import headTitle from '@/components/head-title'
import hlTable from '@/components/hl-table'

useTltle('推广赚钱')
</script>

<style>
@import '../../assets/css/home/style.css';
</style>
