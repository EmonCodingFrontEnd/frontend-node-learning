const mongoose = require('mongoose');

// 创建文档的结构对象，设置集合中文档的属性以及属性值的类型
let AccountSchema = new mongoose.Schema({
    item: {type: String, required: true},
    time: {type: Date, default: Date.now},
    type: {type: String, enum: ['income', 'expense'], required: true},
    amount: {type: mongoose.Schema.Types.Decimal128, required: true},
    remark: {type: String, enum: ['important', 'recurring', 'verified']},
})
// 创建模型对象，对集合进行操作
let AccountModel = mongoose.model('accounts', AccountSchema);
module.exports = AccountModel;