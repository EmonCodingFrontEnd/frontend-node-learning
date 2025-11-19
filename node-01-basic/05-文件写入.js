const fs = require('fs');

/**
 * 文件异步写入
 * @param {string} path 文件路径
 * @param {string} content 文件内容
 * @param {function} callback 回调函数
 * @returns {void} undefined
 */
fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('写入成功');
    }
});

/**
 * 文件同步写入
 * @param {string} path 文件路径
 * @param {string} content 文件内容
 * @returns {void} undefined
 */
fs.writeFileSync('./座右铭2.txt', '三人行，则必有我师焉');