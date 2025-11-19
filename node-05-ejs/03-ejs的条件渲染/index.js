/*
 * 通过 isLogin 决定最终的输出内容
 * true 输出 “欢迎回来”
 * false 输出 “请先登录”
 */

const ejs = require('ejs');
const fs = require('fs');

const isLogin = false;

// 导入 EJS
if (isLogin) {
    console.log('欢迎回来');
} else {
    console.log('请先登录');
}

// 使用 EJS 渲染
let tpl = '<%= isLogin ? "欢迎回来" : "请先登录" %>';
let result = ejs.render(tpl, {isLogin: isLogin})
console.log(result)

// 读取文件并渲染
tpl = fs.readFileSync(__dirname + '/index.html').toString();
result = ejs.render(tpl, {isLogin: isLogin})
console.log(result)