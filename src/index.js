let msg= require('./a.js');

console.log('msg',msg);
// console.log(7)
document.getElementById('app').innerHTML=msg;

//不强制刷新只更新一部分
if (module.hot) {
    module.hot.accept();
}
