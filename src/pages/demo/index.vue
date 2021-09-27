<template>
    <div class="demo">demo1111</div>
</template>

<script>
import Api from '@/api'
export default {
    name: 'Demo',
    props: {
        msg: String
    },
    mounted() {
        this.demo()
    },
    methods: {
        async demo() {
            let res = await Api.demo()
            console.log('测试1', res)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped >
.demo {
}
</style>