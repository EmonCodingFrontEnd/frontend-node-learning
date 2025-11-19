// 导入express
const express = require('express');
const path = require('path');

// 创建应用对象
const app = express();
// 设置模板引擎
app.set('view engine', 'ejs');
// 设置模板文件存放的目录
app.set('views', path.resolve(__dirname, 'views'));
// 声明静态资源中间件函数，将 public 目录设为静态资源目录
app.use(express.static(path.join(__dirname, 'public')))

// 创建路由
app.get('/', (req, res) => {
    let title = 'flyin - 旧时王谢堂前燕，飞入寻常百姓家'
    res.render('index', {title: title});
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
})
