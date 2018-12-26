# webpack-

# 本地安装webpack

npm install webpack webpack-cli -D 

# 直接允许webpack
  会直接执行对应的mode_modules对应下的\bin\webpack.cmd
  ....
    npx webpack
  ....
#webpack配置文件
  1.创建一个webpack.config.js文件
  module.exports = {
    entry:'',//入口
    output:{}, //出口
    devServer: {
        contentBase: "./dist",
        hot: true
    },//开发服务器
    module:{},//模块配置
    plugins:[],//插件配置
    mode:'development',//可以更改模式
    resolve:{
        extensions: ['.js','jsx','.ts', '.tsx' ]
    }//配置解析
}
2.在webpack如何配置开发服务器 webpack-dev-server

  npm install webpack-dev-server -D
  
  "build":"webpack",
  "start": "webpack-dev-server"
3.webpack插件将html文件打包到build下可以自动引入生产的js
  npm install html-webpack-plugin -D
  
4.清除的的WebPack的插件
