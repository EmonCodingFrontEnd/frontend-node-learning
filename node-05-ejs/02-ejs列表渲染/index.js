// 导入 EJS
const ejs = require('ejs');
const fs = require('fs');

// 西游记
const xiyouji = ['唐僧', '孙悟空', '猪八戒', '沙僧'];

// 原生 JS
let str = '<ul>'
for (let i = 0; i < xiyouji.length; i++) {
    str += '<li>' + xiyouji[i] + '</li>'
}
str += '</ul>'
console.log(str)

// 使用 EJS 渲染
let tpl = '<ul><% for (let i = 0; i < xiyouji.length; i++) { %><li><%= xiyouji[i] %></li><% } %></ul>';
let result = ejs.render(tpl, {xiyouji: xiyouji})
console.log(result)

// 读取文件并渲染
tpl = fs.readFileSync(__dirname + '/index.html').toString();
result = ejs.render(tpl, {xiyouji: xiyouji})
console.log(result)