import { RequestStatic } from '../request'

// 资格校验
export function changeAuthentication(data) {
  return RequestStatic.post({
    url: '/dist-order/checkOrder',
    data
  })
}

// 创建订单
export function createOrder(data) {
  return RequestStatic.post({
    url: '/dist-order/saveOrder',
    data
  })
}
