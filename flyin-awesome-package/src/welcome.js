/**
 * 这是命名导出（Named Exports）
 * 导出的是一个对象，该对象包含 printMsg 属性
 * 可以同时导出多个值/函数
 * 导入时需要通过属性名访问或使用解构赋值
 * @returns {string}
 */
exports.printMsg = function () {
    console.log("欢迎使用我的Node.js模块");
}
