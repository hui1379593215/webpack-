// 基于node遵循commonjs规范
let path = require('path');
let HtmlwebpackPlugin = require('html-webpack-plugin');//引入插件
let CleanWebpackPlugin = require('clean-webpack-plugin');//清空webpack
//单页index.html引用多个js
//多页a.html index.js /b.html index.js
module.exports = {
    //多个入口
    // entry:['./src/index.js','./src/a.js'],//入口
    entry:{
        //多入口
        index:'./src/index.js',
        a:'./src/a.js'
    },
    output:{
        //多出口
        // filename:'build.[hash:8].js',
        filename:'[name].[hash:8].js',
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
        // 每次运行就清理掉
        new CleanWebpackPlugin('./build'),
        //打包html引入的js插件
        new HtmlwebpackPlugin({
            filename:'a.html',
            template:'./src/index.html',
            title:'自动打包标题',
            hash:true,//清理缓存用的
            chunks:['index'] //引用的是index.js
            // minify:{
            //     removeAttributeQuotes:true,//去除双引号
            //     collapseWhitespace:true//变成只有一行

            // }
        }),
        new HtmlwebpackPlugin({
            filename:'b.html',
            template:'./src/index.html',
            title:'自动打包标题',
            hash:true,//清理缓存用的
            chunks:['a'] //引用的是a.js
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