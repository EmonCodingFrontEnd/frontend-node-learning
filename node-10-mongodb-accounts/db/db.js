const config = require('../config/config');

/**
 * 连接数据库
 * @param success - 连接成功的回调函数
 * @param error - 连接失败的回调函数
 */
module.exports = function (success, error) {
    if (typeof error != 'function') {
        error = () => {
            console.log('数据库连接失败')
        }
    }
    // 导入mongoose
    const mongoose = require('mongoose');

    // 连接数据库
    mongoose.connect(config.DB_URL);

    // 设置回调
    mongoose.connection.once('open', async function () {
        console.log('数据库连接成功');
        success();
    })
    mongoose.connection.on('error', function () {
        console.log('数据库连接失败');
        error();
    })
    mongoose.connection.on('close', function () {
        console.log('数据库已关闭');
    })
};