const fs = require('fs');

/**
 * 文件写入流
 * @param {string} path 文件路径
 * @returns {object} 文件写入流
 */
const ws = fs.createWriteStream('./观书有感.txt');
ws.write('半亩方塘一鉴开\n');
ws.write('天光水影共徘徊\n');
ws.write('问渠那得清如许\n');
ws.write('为有源头活水来');
ws.close(); // 关闭流，非必须