const fs = require('fs');

/**
 * 文件异步读取
 * @param {string} path 文件路径
 * @param {function} callback 回调函数
 * @returns {void} undefined
 */
fs.readFile('./观书有感.txt', (err, data) => {
    console.log('----------华丽的分隔线----------')
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
})


/**
 * 文件同步读取
 * @param {string} path 文件路径
 * @returns {Buffer} 文件内容
 */
const data = fs.readFileSync('./观书有感.txt');
console.log(data.toString())