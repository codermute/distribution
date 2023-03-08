import Request from '../request'

// 查询已经激活产生佣金明细
export function getPageActivity() {
  return Request.get({
    url: '/dist-order/pageactivity'
  })
}
