const fs = require('fs');

/**
 * 文件流式读取
 * @param {string} path 文件路径
 * @param {object} options 配置项，默认一次读取 65536，也就是64KB
 * @returns {ReadStream}
 */
const rs = fs.createReadStream('./观书有感.txt', {highWaterMark: 22});
rs.on('data', (chunk) => {
    process.stdout.write(chunk);
})
rs.on('end', () => {
    console.log('读取完毕')
})
rs.on('error', (err) => {
    console.log(err);
})