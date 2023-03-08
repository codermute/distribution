import Request from '../request'

// 查询当前会员余额
export function getMemberMoneyDetail() {
  return Request.get({
    url: '/dist-member/getMemberMoneyDetail'
  })
}
