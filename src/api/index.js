import MYHTTP from '@/server/request.js'
export default class Api {
    static demo(params) {
        return MYHTTP.get({
            url: '/landing/landingpage',
            params: params
        })
    }
}
