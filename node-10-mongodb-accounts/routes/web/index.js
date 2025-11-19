var express = require('express');
var router = express.Router();

// 获取db对象
const AccountModel = require('../../models/AccountModel')
const moment = require('moment')

// 声明中间件检测登录
const checkLoginMiddleware = require('../../middlewares/checkLoginMiddleware')

/* GET home page. */
router.get(['/', '/account'], checkLoginMiddleware, async function (req, res, next) {
    const accounts = await AccountModel.find().sort({time: -1})
    console.log(accounts.length);
    res.render("list", {accounts, moment})
});

router.get('/account/create', checkLoginMiddleware, function (req, res, next) {
    res.render("create")
});

router.post('/account/create', async function (req, res, next) {
    console.log("请求体========>", req.body);

    const account = {...req.body}
    account.time = moment(req.body.time).toDate();
    account.amount = Number.parseFloat(req.body.amount);
    account.remark = req.body.important ? 'important' : req.body.recurring ? 'recurring' : req.body.verified ? 'verified' : '';
    console.log("入库之前========>", account)
    const result = await AccountModel.insertOne(account)
    console.log("入库结果========>", result);

    res.render("success");
});

router.get('/account/:id', async function (req, res, next) {
    let id = req.params.id;
    console.log(`id=${id}`)
    const result = await AccountModel.deleteOne({_id: id})
    console.log("删除结果========>", result);
    res.render("success");
});

module.exports = router;
