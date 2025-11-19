// 声明函数
function tiemo() {
    console.log('贴膜boy和贴膜gril')
}

// 捏脚
function niejiao() {
    console.log('捏脚')
}

// 方式一：统一暴露函数
// module.exports = {tiemo, niejiao}

// 方式二：分别暴露函数
exports.tiemo = tiemo
exports.niejiao = niejiao

/* 
 * // 说明：在内部 exports = module.exports = {}
 * require('./me.js')返回的是module.exports，也就是说，只要能修改module.exports，require()就能拿到
 * 而 exports = 'Hello World' 等于重新赋值了，必然拿不到；
 * 正确的做法是 exports.xxx = 'Hello World'，等于给 module.exports 对象添加了属性。
 *
 * 同时，由于 require('./me.js')返回的是module.exports，所以 module.exports 修改为什么，都能被拿到。
 *
 * 总结：module.exports是正主，权利大；而exports是引用，若不在规则内使用，是会被抛弃的。
 */
console.log(module.exports === exports) // true