const fs = require('fs');

const rs = fs.createReadStream('./观书有感.txt')
const ws = fs.createWriteStream('./观书有感2.txt');

rs.on('data', (chunk) => {
    const canIContinue = ws.write(chunk);
    if (!canIContinue) {
        // 手动处理背压
        rs.pause();
        // 当写入流缓冲区清空后，恢复读取流继续读取数据
        ws.once('drain', () => {
            rs.resume();
        });
    }
});
rs.on('error', (err) => {
    console.log(err)
});
rs.on('end', () => {
    ws.end();
    console.log(process.memoryUsage())
    console.log('读取完毕')
});

ws.on('error', (err) => {
    console.log(err)
});