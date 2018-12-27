// 基于node遵循commonjs规范
let path = require('path');
let HtmlwebpackPlugin = require('html-webpack-plugin');//引入插件
let CleanWebpackPlugin = require('clean-webpack-plugin');//清空webpack
let webpack =require('webpack');// webpack自带的热更新功能
//引用mini-css-extract-plugin来引入css样式
let MiniCssTractPlugin = require('mini-css-extract-plugin');
module.exports = {
   entry:'./src/index.js',
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
        open:true, //自动打开浏览器
        hot: true //不强制刷新，热更新
    },//开发服务器
    plugins:[
        //引入css样式
        new MiniCssTractPlugin({
            filename:'css/css.css'
        }),
        //热更新模块
        new webpack.HotModuleReplacementPlugin(),
        // 每次运行就清理掉
        new CleanWebpackPlugin('./build'),
        //打包html引入的js插件
        new HtmlwebpackPlugin({
            template:'./src/index.html',
            title:'自动打包标题',
            hash:true,//清理缓存用的
        }),
    ],//插件配置
    mode:'development',//可以更改模式
    resolve:{
        // extensions: ['.js','jsx','.ts', '.tsx' ]
    },//配置解析
    module:{
        rules:[//从右往左写
            {test:/\.css$/,use:[
                // {loader:'style-loader'},
                MiniCssTractPlugin.loader,
                {loader:'css-loader'}
            ]},
            {test:/\.less$/,use:[
                // {loader:'style-loader'},
                MiniCssTractPlugin.loader,
                {loader:'css-loader'},
                {loader:'less-loader'}
            ]}
        ]
    }//模块配置
}