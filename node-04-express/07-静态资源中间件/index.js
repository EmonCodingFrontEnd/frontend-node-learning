// 导入express
const express = require('express');
const fs = require('fs');
const path = require('path');

// 创建应用对象
const app = express();

// 我是首页
app.get('/', (req, res) => {
    res.send('我是首页');
})

// 声明静态资源中间件函数，将 public 目录设为静态资源目录
app.use(express.static(path.join(__dirname, 'public')))

app.all(/.*/, (req, res) => {
    res.status(404).end('404 Not Found');
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
})
