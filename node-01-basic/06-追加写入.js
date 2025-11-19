const fs = require('fs');

/**
 * 文件异步追加写入
 * @param {string} path 文件路径
 * @param {string} content 文件内容
 * @param {function} callback 回调函数
 * @returns {void} undefined
 */
fs.appendFile('./座右铭.txt', '\n择其善者而从之，其不善者而改之', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('追加成功');
    }
});

/**
 * 文件同步追加写入
 * @param {string} path 文件路径
 * @param {string} content 文件内容
 * @returns {void} undefined
 */
fs.appendFileSync('./座右铭2.txt', '\n择其善者而从之，其不善者而改之');

/**
 * 文件异步追加写入
 * @param {string} path 文件路径
 * @param {string} content 文件内容
 * @param {object} options 配置项
 * @param {function} callback 回调函数
 * @returns {void} undefined
 */
fs.writeFile('./座右铭.txt', '\n三人行，则必有我师焉', {flag: 'a'}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('追加成功');
    }
});