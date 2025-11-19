// 导入express
const express = require('express');

// 创建路由对象
const homeRouter = express.Router();

// 创建路由规则
// 前台首页
homeRouter.get('/home', (req, res) => {
    res.send('前台首页');
})

// 内容搜索
homeRouter.get('/search', (req, res) => {
    res.send('内容搜索');
})

// 导出路由对象
module.exports = homeRouter;