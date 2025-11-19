const config = require('../config/config')

const jwt = require("jsonwebtoken");
let checkTokenMiddleware = function (req, res, next) {
    const token = req.get('token')
    if (!token) {
        res.json({code: 500, msg: "请先登录", data: null})
        return
    }
    jwt.verify(token, config.SECRET, function (err, decoded) {
        if (err) {
            console.log('验证失败', err)
            return res.json({code: 500, msg: "token验证失败", data: null})
        } else {
            req.user = decoded
            console.log('验证成功', decoded)
            next()
        }
    })
}
module.exports = checkTokenMiddleware;