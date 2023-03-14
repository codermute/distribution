import Request from '../request'
import { RequestStatic } from '../request'

// 查询当前会员余额
export function getMemberMoneyDetail() {
  return Request.get({
    url: '/dist-member/getMemberMoneyDetail'
  })
}

// 查询产品列表
export function getProductList() {
  return RequestStatic.get({
    url: '/dist-product/productList'
  })
}

// 绑定openid
export function changeBindOpenId() {
  return Request.post({
    url: '/dist-member/bindOpenId'
  })
}
