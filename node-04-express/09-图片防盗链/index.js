/*
 * 按照要求搭建 HTTP 服务
 * GET /login 显示表单网页
 * POST /login 获取表单中的用户名和密码
 */

// 导入express
const express = require('express');
const path = require('path');

// 创建应用对象
const app = express();

// 声明中间件
app.use((req, res, next) => {
    let referer = req.get('referer');
    if (referer) {
        let url = new URL(referer);
        let hostname = url.hostname;
        if (hostname !== '127.0.0.1' && hostname !== 'localhost') {
            res.status(403).end('Forbidden');
            return;
        }
    }
    next();
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
