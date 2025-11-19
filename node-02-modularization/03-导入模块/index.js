// 导入模块
// const tiemo = require('./me.js');

// 省略后缀
// const tiemo = require('./me');
// tiemo()

// 导入json，也可以省略后缀
// const todos = require('./todos');
// console.log(todos) // 对象

// 若存在同名的js和json，则优先使用js
const todos = require('./todos');
console.log(todos)

// 可以是其他后缀，但内容要是标准的js暴露即可
const others = require('./others.txt');
console.log(others)