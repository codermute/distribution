import Request from '../request'

// 资格校验
export function changeAuthentication(data) {
  return Request.post({
    url: '/checkOrder',
    data
  })
}

// 创建订单
export function createOrder(data) {
  return Request.post({
    url: '/saveOrder',
    data
  })
}
