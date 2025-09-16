/**
 * 这是默认导出（Default Export）
 * 直接导出一个函数（或任何其他值）
 * 只能导出一个主要的值
 * 导入时直接获得该函数
 * @returns {string}
 */
module.exports = function helloWorld() {
    return 'Hello, World!';
};