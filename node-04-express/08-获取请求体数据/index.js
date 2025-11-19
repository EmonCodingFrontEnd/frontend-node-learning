/*
 * 按照要求搭建 HTTP 服务
 * GET /login 显示表单网页
 * POST /login 获取表单中的用户名和密码
 */

// 导入express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

// 创建应用对象
const app = express();

// 解析 JSON 格式（application/json）请求体的中间件
const jsonParser = bodyParser.json()

// 解析 application/x-www-form-urlencoded 格式（表单数据）请求体的中间件
const urlencodedParser = bodyParser.urlencoded()

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})
app.post('/login', urlencodedParser, (req, res) => {
    console.log(req.body) // { username: '1', password: '2' }
    res.send('表单提交');
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
