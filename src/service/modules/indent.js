import Request from '../request'

// 查询发展人订单列表明细
export function getOrderMessage(data) {
  return Request.post({
    url: '/dist-order/page',
    data
  })
}
