// 导入mongoose
const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://root:root123@other:27017/bilibili?authSource=admin&ssl=false');

// 设置回调
mongoose.connection.once('open', async function () {
    console.log('数据库连接成功');
    // 创建文档的结构对象，设置集合中文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
    })
    // 创建模型对象，对集合进行操作
    let BookModel = mongoose.model('books', BookSchema);
    // 新增数据
    try {
        const data = await BookModel.insertOne({
            name: '西游记',
            author: '吴承恩',
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
})
mongoose.connection.on('error', function () {
    console.log('数据库连接失败');
})
mongoose.connection.on('close', function () {
    console.log('数据库已关闭');
})