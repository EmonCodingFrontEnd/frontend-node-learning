// 导入express
const express = require('express');

// 创建路由对象
const adminRouter = express.Router();

// 创建路由规则
// 后台首页
adminRouter.get('/admin', (req, res) => {
    console.log('url=' + req.url, 'ip=' + req.ip);
    res.send('后台首页');
})

// 设置页面
adminRouter.get('/setting', (req, res) => {
    res.send('设置页面');
})

// 导出路由对象
module.exports = adminRouter;