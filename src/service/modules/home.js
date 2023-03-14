import Request from '../request'

// 查询当前会员余额
export function getMemberMoneyDetail() {
  return Request.get({
    url: '/dist-member/getMemberMoneyDetail'
  })
}

// 查询产品列表
export function getProductList() {
  return Request.get({
    url: '/dist-product/productList'
  })
}
