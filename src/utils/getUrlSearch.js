export function getUrlSearch(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  let context = ''
  if (r != null) context = r[2]
  reg = null
  r = null
  return context == null || context == '' || context == 'undefined'
    ? ''
    : context
}
