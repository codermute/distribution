<template>
  <div class="group-item" @click="router.push(`/details/${item.orderId}`)">
    <div class="group-order">
      单号{{ item.orderId }}<img src="@/assets/images/icon-details.png" />
    </div>
    <div class="group-name">{{ item.custName }}</div>
    <div class="group-source">
      <label><img src="@/assets/images/icon-qd.png" />线上单</label
      ><label>
        <img src="@/assets/images/icon-yj.png" />激活收益{{ earnings }}元
      </label>
    </div>
    <div class="group-time">
      <label>下单时间 {{ item.createTime }}</label
      ><span>激活剩余{{ distanceTime }}天</span>
    </div>
    <div class="group-status">已发货{{ status }}</div>
    <a class="group-tell"><img src="@/assets/images/icon-tel.png" /> </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

const router = useRouter()

const earnings = computed(() =>
  props.item.kickbackRespList.reduce((pre, cur) => {
    if (cur.kickbackState == 2) {
      return pre + cur.kickbackMoney
    }
    return pre + 0
  }, 0)
)
const status = computed(() =>
  props.item.thOrderState === 'sysn_wait'
    ? '未激活'
    : props.item.thOrderState === 'activity'
    ? '已激活'
    : props.item.thOrderState === 'activity_error' && '激活失败'
)
const distanceTime = computed(() => {
  const endTime = dayjs(props.item.createTime).add(35, 'day')
  return dayjs(endTime).diff(new Date(), 'day')
})
</script>

<style scoped>
.group-item {
  position: relative;
  background: #fff;
  margin-bottom: 0.3rem;
  border-radius: 0.1rem;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.group-order {
  color: #666;
}
.group-order img {
  margin-left: 0.1rem;
  width: 0.3rem;
  height: 0.3rem;
}
.group-name {
  font-size: 0.3rem;
  font-weight: 700;
  color: #2f85ef;
  margin-top: 0.1rem;
}
.group-source {
  display: flex;
  align-items: center;
  color: #78c025;
  margin-top: 0.1rem;
}
.group-source img {
  width: 0.25rem;
  height: 0.25rem;
  margin-right: 0.05rem;
}
.group-source label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #d4fff3;
  height: 0.4rem;
  font-size: 0.24rem;
  padding: 0 0.2rem;
  border-radius: 0.1rem;
  color: #34d1a8;
  margin-right: 0.2rem;
}
.group-source label:last-child {
  background: #ffc107;
  color: #fff;
}
.group-time {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #999;
  margin-top: 0.1rem;
}
.group-status {
  position: absolute;
  right: 0;
  top: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffdddd;
  height: 0.4rem;
  font-size: 0.24rem;
  padding: 0 0.2rem;
  border-radius: 0 0 0 0.2rem;
  color: #f84747;
}
.group-tell {
  position: absolute;
  right: 0.4rem;
  width: 0.8rem;
  height: 0.8rem;
}
</style>
