/** 
 * 线上环境
 * 为了方便测试，使用的是聚合数据免费接口
 * 网址：https://www.juhe.cn/
 * https://ms-api.caibowen.net
 */
// export const ONLINEHOST = 'http://api.juheapi.com'
export const ONLINEHOST = 'https://ms-api.caibowen.net'

/** 
 * 测试环境
 */
export const QAHOST = 'http://xxx.cn'

/** 
 * 线上mock
 */
export const MOCKHOST = 'http://xxx/mock'

/** 
 * 是否mock
 */
export const ISMOCK = false

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAINHOST = ONLINEHOST

/**
 * 全局的分享信息 不用每一个都去写
 */
export const SHAREINFO = {
  'title': '分享标题',
  'path': '路径',
  'imageUrl': '图片'
}