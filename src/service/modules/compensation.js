import Request from '../request'

// 查询已经激活产生佣金明细
export function getPageActivity() {
  return Request.get({
    url: '/dist-order/pageactivity'
  })
}

// 查询自营发展佣金
export function getDevSupport() {
  return Request.get({
    url: '/dist-kickback/page'
  })
}

// 查询非自营发展佣金
export function getDevNoSupport() {
  return Request.get({
    url: '/dist-kickback/memberPage'
  })
}
