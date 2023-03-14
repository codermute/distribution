import Request from '../request'
import { RequestStatic } from '../request'

// 通过微信code登录
export function changeCodeLogin(data) {
  return Request.post({
    url: '/login/token',
    data
  })
}

// 推广员发展一级会员
export function changeProLogin(data) {
  return RequestStatic.post({
    url: '/dist-member/saveOne',
    data
  })
}

// 通过手机号和code获取登录token
export function login(data) {
  return Request.post({
    url: '/login/phoneToken',
    data
  })
}

// 一级会员裂变二级会员
export function changeDistLogin(data) {
  return RequestStatic.post({
    url: '/dist-member/addMember',
    data
  })
}
