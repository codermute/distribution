<template>
  <div class="popup" v-show="isShow" id="incomeBox">
    <div class="popup-bg"></div>
    <div class="popup-info">
      <div class="popup-content padding-sm">
        <div class="popup-title padding-bottom-sm">如何提升收益?</div>
        <div class="popup-text">
          1.增大队伍，即多邀请人注册成为裂变营销员<br />
          2.加强号卡推广，促成转化<br />
          3.监督团队整体转化<br />
          4.文字文字********
        </div>
        <a class="su-btn" @click="earningClick">确定</a>
      </div>
      <img
        src="@/assets/images/close-white.png"
        @click="earningClick"
        class="close-btn"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  isShow: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['earningClick'])

function earningClick() {
  emit('earningClick')
}
</script>
