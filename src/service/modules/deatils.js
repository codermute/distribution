import { RequestStatic } from '../request'

// 查询订单详情接口商机单用来做续约用
export function getOrderById(params) {
  return RequestStatic.get({
    url: '/dist-order/getOrderById',
    params
  })
}
