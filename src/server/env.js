let apiPath = '' // 数据API
let sendCodePath = ''
if (process.env.NODE_ENV === 'development') {
    apiPath = 'http://api.cricwifi.com/server/index.php?g=Web&c=Mock&o=simple&projectID=104&uri='
    // apiPath = 'http://fyt.test.dev.cricwifi.com/api'
    // sendCodePath = 'http://mfyt.yhf.dev.cricwifi.com'
} else if (process.env.NODE_ENV === 'production') {
    apiPath = 'http://yunying.meirifang.com/api'
    sendCodePath = 'http://m.meirifang.com/'
}

export default {
    apiPath,
    sendCodePath
}
