// 导入express
const express = require('express');
const cookieParser = require('cookie-parser');

// 创建应用对象
const app = express();
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
    // res.cookie('name', 'flyin') // 关闭即失效
    res.cookie('name', 'flyin', {maxAge: 1000 * 60 /** 60 * 24 * 7*/}) // 1分钟（哪怕关闭）后才失效
    res.cookie('theme', 'dark')
    res.send('首页')
});

app.get('/remove-cookie', (req, res) => {
    res.clearCookie('name')
    res.send('删除成功')
});

app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    res.send("获取cookie")
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
})