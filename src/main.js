import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './router/index'
let router = new VueRouter({
    routes,
    mode: 'hash',
    base: process.env.BASE_URL
    // linkActiveClass: 'selected',
    // strict: process.env.NODE_ENV !== 'production'
})

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
    router
}).$mount('#app')
