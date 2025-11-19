const fs = require('fs');
const path = require('path');

// 优化文件路径
const absolutePath = path.resolve(__dirname, '..', 'node-01-basic', '21-相对路径的bug.js')
console.log('__dirname=' + __dirname)
console.log(absolutePath)

// 分隔符
console.log(path.sep)

// 当前文件的绝对路径
console.log('__filename=' + __filename)

// 获取文件信息，包含 文件名、扩展名、目录名等
console.log(path.parse(__filename))

// 获取文件名
console.log(path.basename(__filename, '.js')) // 得到 23-路径
console.log(path.basename(__filename)) // 23-路径.js

// 获取目录名，等效于 __dirname
console.log(path.dirname(__filename))

// 获取扩展名
console.log(path.extname(__filename))