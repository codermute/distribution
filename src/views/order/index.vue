<template>
  <div class="page">
    <img src="@/assets/images/tou_sn.jpg" />
    <img v-if="false" src="@/assets/images/tou_sw.jpg" />
    <div class="info-box">
      <div class="input-wrap">
        <div class="inp-content">
          <template v-for="(item, index) in formList" :key="index">
            <div class="row">
              <div class="r_lab">
                <i class="r_lab_star">*</i>
                <span class="txt">{{ item.name }}</span
                >:
              </div>
              <div class="r_inner">
                <input
                  class="r_inner_inp"
                  :type="item.type ?? 'text'"
                  :placeholder="item.placeholder"
                  :readonly="item.readonly"
                  :autoComplete="item.autoComplete"
                  v-model="formOutput[item.field]"
                  @click="addressClickHandle(item)"
                  @change="changeCheckOrder(item)"
                />
              </div>
            </div>
          </template>
        </div>
        <div class="agreement_box">
          <i
            :class="['ico', 'readAgreement', { on: isOnShow }]"
            @click="isOnShow = !isOnShow"
          ></i>
          <span class="agree-content"
            >我已阅读并同意
            <a class="ahref" @click="isNetinShow = true" id="xybtnone"
              >《入网许可协议》</a
            >&amp;
            <a class="ahref" @click="isPrivacyShow = true" id="xybtntwo"
              >《个人信息收集证明》</a
            >
          </span>
        </div>
        <p class="subtit">
          根据国家手机号卡实名制规定<br />请如实填写信息，以便我们及时为您送达。
        </p>
      </div>
    </div>
    <!-- 资费详情 -->
    <div class="solving-wrap">
      <img src="@/assets/images/zfxq.png" />
    </div>
    <!-- 会员领取 -->
    <!--		<div class="solving-wrap">
			<img src="images/hylq.png"/>
		</div>-->

    <div :class="['page-details', { 'introduce-ani': isOpenShow }]">
      <template v-for="item in introduceList" :key="item.name">
        <div class="solving-wrap">
          <img :src="item.img" />
        </div>
      </template>
    </div>
    <div class="more-box">
      <div :class="['center', 'openMore', { open: isOpenShow }]">
        <span class="btn" @click="isOpenShow = !isOpenShow">{{
          isOpenShow ? '收起' : '更多详情'
        }}</span>
        <img src="@/assets/images/arr1.png" class="ico_arr" />
      </div>
    </div>
    <div class="page-copyright">
      <p class="text">中国电信股份有限公司湖南分公司<br />4008155555</p>
    </div>
    <div class="space"></div>
    <div class="page-footer pageFooter">
      <button
        type="button"
        @click="submitClickHandle"
        class="btn btn-1 btnConfirm"
      >
        立即领取
      </button>
      <!-- <a type="button" class="btn btn-2 btnSubmit">免费领卡(包邮)</a> -->
    </div>
  </div>

  <!--隐私协议-->
  <agreementPopup
    :isShow="isPrivacyShow"
    @triggerClick="isPrivacyShow = false"
    title="隐私协议"
    :content="privacy"
  />

  <!--入网协议-->
  <agreementPopup
    :isShow="isNetinShow"
    @triggerClick="isNetinShow = false"
    title="中国电信用户入网协议（2021 版）"
    :content="netin"
  />

  <Popup :show="isAreaShow" position="bottom">
    <Area
      :area-list="areaList"
      @confirm="areaClickHandle"
      @cancel="isAreaShow = false"
      option-height="38"
    />
  </Popup>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Popup, Area, showToast } from 'vant'
import { areaList } from '@vant/area-data'
import { useOrderStore } from '@/store'

import { formList, introduceList } from './config'
import { privacy, netin, debounce, getUrlSearch } from '@/utils'
import useTitle from '@/hooks/useTitle.js'

import agreementPopup from '@/components/agreement-popup'

useTitle('29元65G')

const store = useOrderStore()

const formOutput = reactive({
  name: '',
  id: '',
  phone: '',
  address: '',
  detailed: ''
})
const isAreaShow = ref(false)
const isOnShow = ref(false)
const isOpenShow = ref(false)
const isPrivacyShow = ref(false)
const isNetinShow = ref(false)

const memberId = getUrlSearch('memberId') || '9a7d666af577416b96eb3d0c3dd04181'
const productId = getUrlSearch('productId') || 'DX1000029'

function addressClickHandle(item) {
  if (item.field !== 'address') return
  isAreaShow.value = true
}
function areaClickHandle(options) {
  formOutput.address = options.selectedOptions
    .map((item) => item.text)
    .join(' ')
  isAreaShow.value = false
}

const changeCheckOrder = async (item) => {
  if (item.field !== 'phone') return
  const data = {
    custName: formOutput.name,
    custNo: formOutput.id,
    phone: formOutput.phone,
    productId,
    memberId
  }

  const result = await store.checkOrderIdentity(data)
  console.log(!result)
}

const submitClickHandle = debounce(
  () => {
    if (!formOutput.name) return showToast('请填写客户姓名')
    if (!store.idReg.test(formOutput.id)) return showToast('请输入有效身份证号')
    if (!store.phoneReg.test(formOutput.phone))
      return showToast('请输入有效手机号码')
    if (!formOutput.address) return showToast('请选择省/市/区县')
    if (!formOutput.detailed) return showToast('请填写详细地址')
    if (!isOnShow.value) return showToast('请勾选入网许可协议')

    const addressInfos = formOutput.address.split(' ')
    const data = {
      rname: formOutput.name,
      orderProv: addressInfos[0],
      orderCity: addressInfos[1],
      orderDis: addressInfos[2],
      orderAddress: formOutput.detailed,
      memberId,
      custName: formOutput.name,
      custNo: formOutput.id,
      orderMobile: formOutput.phone,
      productId
    }

    store.changeCreateOrder(data)
  },
  300,
  true
)
</script>

<style scoped>
@import '../../assets/css/order/style.css';
input {
  background-clip: text;
}
</style>
