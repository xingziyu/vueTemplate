import axios from 'axios'
import Config from '@/server/env.js'

const myHttp = axios.create({
    baseURL: Config.apiPath,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
    // withCredentials: true //解决跨域
})

const submitHttp = axios.create({
    baseURL: Config.sendCodePath,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    withCredentials: true //解决跨域
})

// 添加请求拦截器
myHttp.interceptors.request.use(
    function(config) {
        return config
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 添加响应拦截器
myHttp.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么

        return response
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
export default class MYHTTP {
    static get({ url = '', params = {}, config = {} }) {
        return myHttp.get(
            url,
            Object.assign(
                {},
                {
                    params: params
                },
                config
            )
        )
    }

    static post({ url = '', params = {}, config = {} }) {
        return myHttp.post(url, params, config)
    }

    static submitGet({ url = '', params = {}, config = {} }) {
        return submitHttp.get(
            url,
            Object.assign(
                {},
                {
                    params: params
                },
                config
            )
        )
    }
    static submitpost({ url = '', params = {}, config = {} }) {
        return submitHttp.post(url, params, config)
    }
}
