//webpack插件
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    lintOnSave: false,
    publicPath: '/',
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null,
        before: (app) => {},
        disableHostCheck: true
    },
    // parallel: false,
    chainWebpack: (config) => {
        config.module
            .rule('worker')
            .test(/\.worker\.js$/)
            .use('worker-loader')
            .loader('worker-loader')
            .options({
                inline: true
            })
            .end()

        config.module.rule('js').exclude.add(/\.worker\.js$/)
    },
    runtimeCompiler: true,
    configureWebpack: {
        //删除打包后的console文件
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    exclude: [/\.worker\.js$/, /InnovationTrafficHistory.*\.js$/, /Test.*\.js$/],
                    uglifyOptions: {
                        compress: {
                            // warnings: false,
                            // drop_console: true,
                            // drop_debugger: true,
                            // pure_funcs: ["console.log", "console.warn"],
                        }
                    }
                })
            ]
        },

        // module: {
        //     rules: [{
        //         test: /\.worker\.js$/,
        //         use: [{
        //             loader: 'worker-loader',
        //             // options: {
        //             //     inline: true,
        //             //     fallback: false
        //             // },
        //         }, {
        //             loader: 'babel-loader'
        //         }]
        //     }]
        // },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'windows.jQuery': 'jquery'
            })
        ]
    },

    css: {
        loaderOptions: {
            sass: {
                // data: `@import "@/assets/style/mixin.scss";`
                // @import "@/assets/style//value.scss";
                // `
            }
        }
    },

    // build 输出 地址
    outputDir: 'dist'
}
