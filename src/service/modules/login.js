import Request from '../request'

// 通过微信code登录
export function getToken(data) {
  return Request.post({
    url: '/login/token',
    data
  })
}
