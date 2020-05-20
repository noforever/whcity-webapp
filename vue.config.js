const webpack = require('webpack')
const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
    publicPath: './',
    devServer: {
        port: 12110,
        open: false, // 项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
        //publicPath: './'
    },

    css: {
    },
    chainWebpack: config => {
        config.resolve.alias.set("@", resolve("src"))
            .set("~assets", resolve('../assets'))
        //public js
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            'axios': 'axios',
            'echarts': 'echarts',
        }])
    },
}
