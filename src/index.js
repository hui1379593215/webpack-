let msg= require('./a.js');


// console.log(7)
document.getElementById('app').innerHTML=msg;
import './index.css';
import './style.less';
console.log('msg',msg);
//不强制刷新只更新一部分
if (module.hot) {
    module.hot.accept();
}
