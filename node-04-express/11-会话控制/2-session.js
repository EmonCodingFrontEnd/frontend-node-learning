// 导入express
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// 创建应用对象
const app = express();
app.use(session({
    name: 'session-id', // 设置cookie的name，默认值是：connect.sid
    secret: 'flyin', // 参与加密的字符串（又称作签名）
    saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id
    resave: true, // 是否在每次请求时重新保存session，也就是每次请求重置session的过期时间
    cookie: {
        httpOnly: true, // 是否只通过http访问，开启后前端无法通过 JS 操作
        maxAge: 1000 * 60 * 5 /** 60 * 24 * 7*/ // cookie的过期时间，单位毫秒
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://root:root123@other:27017/bilibili?authSource=admin&ssl=false' // 连接数据库的url
    })
}))

app.get('/', (req, res) => {
    res.send('首页')
});

app.get('/cart', (req, res) => {
    if (req.session.username) {
        res.send(`购物车页面，欢迎您 ${req.session.username}`)
    } else {
        res.send(`您还没有登录`)
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send('注销成功')
    })
});

app.get('/login', (req, res) => {
    if (req.query.username === 'admin' && req.query.password === 'admin') {
        req.session.username = 'flyin';
        req.session.uid = 1;
        res.send('登录成功')
    } else {
        res.send('登录失败')
    }
});


// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
})