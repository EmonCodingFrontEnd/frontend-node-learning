/*
 * 针对 /admin /setting 的请求，要求 URL 携带 code=521 参数，如未携带，提示【暗号错误】
 */

// 导入express
const express = require('express');
const homeRouter = require('./routes/homeRouter')
const adminRouter = require('./routes/adminRouter')

// 创建应用对象
const app = express();
app.use(homeRouter)
app.use(adminRouter)


app.all(/.*/, (req, res) => {
    res.status(404).end('404 Not Found');
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
})
