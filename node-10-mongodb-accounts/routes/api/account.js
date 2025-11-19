var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

// 获取db对象
const AccountModel = require('../../models/AccountModel')
const moment = require('moment')

// 声明中间件检测token
const checkTokenMiddleware = require('../../middlewares/checkTokenMiddleware')

/* GET home page. */
router.get([['/', '/account']], checkTokenMiddleware, async function (req, res, next) {
    console.log(req.user)
    try {
        const accounts = await AccountModel.find().sort({time: -1})
        console.log(accounts.length);
        res.json({code: 200, msg: "获取成功", data: accounts})
    } catch (e) {
        console.log(e)
        res.json({code: 500, msg: "获取失败", data: null})
    }
});

router.post('/account/create', async function (req, res, next) {
    console.log("请求体========>", req.body);

    const account = {...req.body}
    account.time = moment(req.body.time).toDate();
    account.amount = Number.parseFloat(req.body.amount);
    account.remark = req.body.important ? 'important' : req.body.recurring ? 'recurring' : req.body.verified ? 'verified' : '';
    console.log("入库之前========>", account)
    try {
        const result = await AccountModel.insertOne(account)
        res.json({code: 200, msg: "添加成功", data: result})
        console.log("入库结果========>", result);
    } catch (e) {
        console.log(e)
        res.json({code: 500, msg: "添加失败", data: null})
    }
});

router.get('/account/:id', checkTokenMiddleware, async function (req, res, next) {
    let id = req.params.id;
    console.log(req.user)
    console.log(`id=${id}`)
    try {
        const result = await AccountModel.findById({_id: id})
        res.json({code: 200, msg: "查询详情成功", data: result})
        console.log("查询详情结果========>", result);
    } catch (e) {
        console.log(e)
        res.json({code: 500, msg: "删除失败", data: null})
    }
});

module.exports = router;
