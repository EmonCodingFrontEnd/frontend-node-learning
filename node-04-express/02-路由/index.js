// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('首页')
})
app.get('/:id', (req, res) => {
    // http://127.0.0.1:3000/12?a=10  req.query.a=10 req.params.id=2 req.query是查询参数，req.params是路径参数
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    console.log('req.query=', req.query, ' req.params=', req.params)
    let {id} = req.params
    res.end('路由=' + id);
})

app.get('/home', (req, res) => {
    res.end('hello express')
})

app.post('/login', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('登录成功')
})

app.all('/test', (req, res) => {
    res.end('test')
})

app.all(/.*/, (req, res) => {
    res.status(404);
    res.end('404 Not Found');
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
})
