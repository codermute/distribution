import Request from '../request'

// 查询发展人订单列表明细
export function getOrderMessage() {
  return Request.get({
    url: '/dist-order/page'
  })
}
