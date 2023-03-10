<template>
  <div class="details">
    <cell-group>
      <cell title="订单号" value="12345667" />
      <cell title="订单来源" value="自发展" />
      <cell title="订单状态" value="已作废" />
      <cell title="充值" value="是" />
      <cell title="物流状态" value="已作废" />
      <cell title="作废原因" value="" />
      <cell title="收货姓名" value="林**" />
      <cell title="收货人电话" value="16523658742" />
    </cell-group>
  </div>
</template>

<script setup>
import { Cell, CellGroup } from 'vant'
</script>

<style scoped>
.details {
  min-height: 100vh;
  background: #f5f5f5;
}
</style>
