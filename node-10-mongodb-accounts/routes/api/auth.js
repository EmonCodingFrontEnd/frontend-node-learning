var express = require('express');
var router = express.Router();
const config = require('../../config/config')
const jwt = require('jsonwebtoken');

// 获取db对象
const UserModel = require('../../models/UserModel')
const md5 = require('md5')

router.post('/login', async (req, res) => {
    console.log(req.body)

    const account = {...req.body, password: md5(req.body.password)}
    try {
        console.log("登录查询之前========>", account)
        const result = await UserModel.findOne({username: account.username})
        if (!result) {
            return res.json({code: 400, msg: "用户不存在"})
        }
        if (result.password !== account.password) {
            return res.json({code: 400, msg: "密码错误"})
        }
        const token = jwt.sign({username: result.username, uid: result._id}, config.SECRET, {expiresIn: 60 * 5})
        console.log("登录查询结果========>", result, token);
        return res.json({code: 200, msg: "登录成功", token: token})
    } catch (e) {
        console.log(e)
        return res.json({code: 500, msg: "登录失败"})
    }
})
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
})

module.exports = router;
