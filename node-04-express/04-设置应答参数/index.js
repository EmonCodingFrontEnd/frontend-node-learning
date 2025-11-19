// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/', (req, res) => {
    // 1. express 中设置响应的方式兼容 HTTP 模块的方式
    // res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // res.statusCode = 404;
    // res.statusMessage = 'resources not found';
    // res.setHeader("name", "flyin");
    // res.write('请求的资源不存在');
    // res.end();

    // 2. express 的响应方法
    // res.status(404);
    // res.set("name", "flyin");
    // res.send('请求的资源不存在'); // 自动设置应答编码
    // 一气呵成的写法
    // res.status(404).set("name", "flyin").send('请求的资源不存在');

    // 3. 其他响应
    // res.redirect('http://www.baidu.com') // 重定向
    // res.download(__dirname + '/index.js') // 下载响应
    // res.json({name: 'flyin问秋'}) // 响应JSON
    res.sendFile(__dirname + '/index.js') // 响应文件内容
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
})
