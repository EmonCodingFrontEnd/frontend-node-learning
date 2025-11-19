/*
 * 记录每个请求的 url 与 ip 地址
 */

// 导入express
const express = require('express');
const fs = require('fs');
const path = require('path');

// 创建应用对象
const app = express();

// 声明全局中间件函数
let recordMiddleware = function (req, res, next) {
    let {url, ip} = req;
    fs.appendFileSync(path.resolve(__dirname, 'access.log'), `${url} ${ip}\n`)
    next();
}
app.use(recordMiddleware);

// 前台首页
app.get('/home', (req, res) => {
    res.send('前台首页');
})

// 后台首页
app.get('/admin', (req, res) => {
    console.log('url=' + req.url, 'ip=' + req.ip);
    res.send('后台首页');
})

app.all(/.*/, (req, res) => {
    res.status(404).end('404 Not Found');
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
})
