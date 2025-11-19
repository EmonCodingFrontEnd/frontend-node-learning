var express = require('express');
var router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(__dirname + '/../data/db.json');

// 获取db对象
const db = low(adapter)
const shortid = require('shortid')

/* GET home page. */
router.get('/account', function (req, res, next) {
    let accounts = db.get('accounts').value()
    console.log(accounts);
    res.render("list", {accounts})
});
router.get('/account/create', function (req, res, next) {
    res.render("create")
});
router.post('/account/create', function (req, res, next) {
    console.log("========>", req.body);
    let id = shortid.generate();
    db.get('accounts').unshift({id, ...req.body}).write();
    res.render("success");
});
router.get('/account/:id', function (req, res, next) {
    let id = req.params.id;
    console.log(`id=${id}`)
    db.get('accounts').remove({id}).write();
    res.render("success");
});

module.exports = router;
