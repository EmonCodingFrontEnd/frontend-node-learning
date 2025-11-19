const mongoose = require('mongoose');

const db = require('./db/db');
const BookModel = require('./models/BookModel');

db(async () => {
    // 新增数据
    try {
        const data = await BookModel.insertOne({
            name: '红楼梦',
            author: '曹雪芹',
            price: 19.9
        });
        console.log('保存成功');
        console.log(data);
    } catch (err) {
        console.log('保存失败', err.message);
    } finally {
        // 关闭连接
        mongoose.disconnect();
    }
});