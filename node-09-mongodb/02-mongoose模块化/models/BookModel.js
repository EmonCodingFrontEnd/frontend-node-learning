const mongoose = require('mongoose');

// 创建文档的结构对象，设置集合中文档的属性以及属性值的类型
let BookSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    author: {type: String, required: true, default: '匿名作者'},
    price: Number,
    style: {
        type: String,
        enum: ['小说', '散文', '诗集', '历史', '社会'],
        default: '散文'
    }
})
// 创建模型对象，对集合进行操作
let BookModel = mongoose.model('books', BookSchema);
module.exports = BookModel;