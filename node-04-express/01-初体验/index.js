// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/home', (req, res) => {
    res.end('hello express')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
})
