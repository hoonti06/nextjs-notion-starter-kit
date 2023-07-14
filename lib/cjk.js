import * as config from '@/lib/config'
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { config: BLOG } = require('../lib/server/config')

function cjk() {
  switch (config.lang.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return 'SC'
    case 'zh':
    case 'zh-hk':
    case 'zh-tw':
      return 'TC'
    case 'ja':
    case 'ja-jp':
      return 'JP'
    case 'ko':
    case 'ko-kr':
      return 'KR'
    default:
      return null
  }
}

module.exports = cjk
