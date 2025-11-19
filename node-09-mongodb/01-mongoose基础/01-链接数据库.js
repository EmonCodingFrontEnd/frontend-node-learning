// 导入mongoose
const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://root:root123@other:27017/bilibili?authSource=admin&ssl=false');

// 设置回调
mongoose.connection.once('open', function () {
    console.log('数据库连接成功');
})
mongoose.connection.on('error', function () {
    console.log('数据库连接失败');
})
mongoose.connection.on('close', function () {
    console.log('数据库已关闭');
})

// 延迟2秒后关闭连接
setTimeout(() => {
    mongoose.disconnect();
}, 2000)