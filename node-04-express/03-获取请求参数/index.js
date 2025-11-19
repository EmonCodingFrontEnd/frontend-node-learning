// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // 原生操作
    // console.log(req.method)
    // console.log(req.url)
    // console.log(req.httpVersion)
    // console.log(req.headers)
    res.end('首页')

    // express封装
    // console.log(req.path)
    // console.log(req.query)
    // console.log(req.ip) // 请求的来源ip，比如： ::ffff:192.168.60.127
    // console.log(req.hostname) // 本服务的ip，比如： 127.0.0.1
    console.log(req.get('host')) // 本服务的ip和端口，比如： 127.0.0.1:3000
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
})
