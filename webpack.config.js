// 基于node遵循commonjs规范
let path = require('path');
let HtmlwebpackPlugin = require('html-webpack-plugin');//引入插件
module.exports = {
    entry:'./src/index.js',//入口
    output:{
        filename:'build.[hash:8].js',
        //这个路径必须是绝对路径
        path:path.resolve('./build')
    }, //出口
    devServer: {
        contentBase: "./build",
        port:3000 , //端口号
        compress:true, //服务器压缩
        open:true //自动打开浏览器
        // hot: true
    },//开发服务器
    module:{},//模块配置
    plugins:[
        //打包html引入的js插件
        new HtmlwebpackPlugin({
            template:'./src/index.html',
            title:'自动打包标题',
            hash:true//清理缓存用的
            // minify:{
            //     removeAttributeQuotes:true,//去除双引号
            //     collapseWhitespace:true//变成只有一行

            // }
        })
    ],//插件配置
    mode:'development',//可以更改模式
    resolve:{
        // extensions: ['.js','jsx','.ts', '.tsx' ]
    }//配置解析
}