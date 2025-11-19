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
        is_hot: Boolean,
        tags: Array,
        pub_time: Date,
        test: mongoose.Schema.Types.Mixed,
    })
    // 创建模型对象，对集合进行操作
    let BookModel = mongoose.model('books', BookSchema);
    // 新增数据
    try {
        const data = await BookModel.insertOne({
            name: '三国演义',
            author: '施耐庵',
            price: 19.9,
            is_hot: true,
            tags: ['小说', '中国', '鬼怪', '励志', '社会'],
            pub_time: new Date(),
            test: {times: 10, created_at: new Date(), updated_at: new Date(), username: 'admin'}
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