// 基于node遵循commonjs规范
let path = require('path');
let HtmlwebpackPlugin = require('html-webpack-plugin');//引入插件
let CleanWebpackPlugin = require('clean-webpack-plugin');//清空webpack
let webpack =require('webpack');// webpack自带的热更新功能
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');//抽取独立的css文件
//抽离多个css文件
//直接加载到页面改的时候就刷新

let CssExtract= new ExtractTextWebpackPlugin({
    filename:'css/css.css',
    // disable:true //禁用掉
});
let PurifycssWebpack =require('purifycss-webpack');  //防止引用过多css文件
let glob =require('glob');//防止引用过多css文件
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
        CssExtract,
        // LessExtract,
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
        // 没用的css会被消除，必须放在HtmlwebpackPlugin的后面
        new PurifycssWebpack({
            path:glob.sync(path.resolve('src/*.html'))
        })
    ],//插件配置
    mode:'development',//可以更改模式
    resolve:{
        // extensions: ['.js','jsx','.ts', '.tsx' ]
    },//配置解析
    module:{
        rules:[//从右往左写
            {test:/\.css$/,use:CssExtract.extract({
                fallback:'style-loader',//上面禁用掉之后使用
                use:[
                    // {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'postcss-loader'}
                ]
            })
           }
        ]
    }//模块配置
}