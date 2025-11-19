const mongoose = require('mongoose');

// 创建文档的结构对象，设置集合中文档的属性以及属性值的类型
let UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
})
// 创建模型对象，对集合进行操作
let UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;