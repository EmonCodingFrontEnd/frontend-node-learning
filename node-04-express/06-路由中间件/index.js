/*
 * 针对 /admin /setting 的请求，要求 URL 携带 code=521 参数，如未携带，提示【暗号错误】
 */

// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 声明路由中间件函数
let checkCodeMiddleware = function (req, res, next) {
    if (!req.query.code || req.query.code !== '521') {
        return res.status(403).send('暗号错误');
    }
    next();
}

// 前台首页
app.get('/home', (req, res) => {
    res.send('前台首页');
})

// 后台首页
app.get('/admin', checkCodeMiddleware, (req, res) => {
    console.log('url=' + req.url, 'ip=' + req.ip);
    res.send('后台首页');
})

// 设置页面
app.get('/setting', checkCodeMiddleware, (req, res) => {
    res.send('设置页面');
})

app.all(/.*/, (req, res) => {
    res.status(404).end('404 Not Found');
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
})
