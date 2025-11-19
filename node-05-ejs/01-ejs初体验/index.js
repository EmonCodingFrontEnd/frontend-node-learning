// 导入 EJS
const ejs = require('ejs');
const fs = require('fs');

// JS 模板字符串
let china = '中国';
let str = `我爱你 ${china}`;
console.log(str)

// 使用 EJS 渲染
let tpl = '我爱你 <%= china %>';
let result = ejs.render(tpl, {china: china})
console.log(result)

// 读取文件并渲染
tpl = fs.readFileSync(__dirname + '/index.html').toString();
result = ejs.render(tpl, {china: china})
console.log(result)