var express = require('express');
var router = express.Router();

// 获取db对象
const UserModel = require('../../models/UserModel')
const md5 = require('md5')

router.get('/reg', (req, res) => {
    res.render('auth/reg')
})
router.post('/reg', async (req, res) => {
    console.log(req.body)

    const account = {...req.body, password: md5(req.body.password)}
    try {
        console.log("注册入库之前========>", account)
        const result = await UserModel.insertOne(account)
        console.log("注册入库结果========>", result);
    } catch (e) {
        console.log(e)
        return res.status(500).send('注册失败')
    }

    res.render("success");
})

router.get('/login', (req, res) => {
    res.render('auth/login')
})
router.post('/login', async (req, res) => {
    console.log(req.body)

    const account = {...req.body, password: md5(req.body.password)}
    try {
        console.log("登录查询之前========>", account)
        const result = await UserModel.findOne({username: account.username})
        if (!result) {
            return res.status(400).send('用户不存在')
        }
        if (result.password !== account.password) {
            return res.status(400).send('密码错误')
        }
        console.log("登录查询结果========>", result);
        req.session.username = result.username
        req.session.uid = result._id
    } catch (e) {
        console.log(e)
        return res.status(500).send('登录失败')
    }

    res.render("success");
})
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
})

module.exports = router;
