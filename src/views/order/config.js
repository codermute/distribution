export const formList = [
  {
    name: '客户姓名',
    placeholder: '请填写客户姓名',
    field: 'name',
    autoComplete: 'off'
  },
  {
    name: '身份证号',
    type: 'password',
    placeholder: '请输入办理人身份证号（加密）',
    field: 'id',
    autoComplete: 'new-password'
  },
  {
    name: '手机号码',
    placeholder: '请输入有效手机号码',
    field: 'phone',
    type: 'number',
    autoComplete: 'off'
  },
  {
    name: '收货地址',
    placeholder: '选择省/市/区县',
    field: 'address',
    readonly: true,
    autoComplete: 'off'
  },
  {
    name: '详细地址',
    placeholder: '请输入街道**小区**门牌号',
    field: 'detailed',
    autoComplete: 'off'
  }
]

export const introduceList = [
  { name: '常见问题解答', img: require('@/assets/images/cjwtjd.png') },
  { name: '详细资费说明', img: require('@/assets/images/xxzf.png') },
  { name: '免流规则', img: require('@/assets/images/mlgz.png') },
  { name: '免流范围', img: require('@/assets/images/mlfw.png') },
  { name: '不免流范围', img: require('@/assets/images/bmlfw.png') },
  { name: '购买须知', img: require('@/assets/images/gmxz.png') }
]
