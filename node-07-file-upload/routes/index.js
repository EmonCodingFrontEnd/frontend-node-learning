var express = require('express');
var router = express.Router();
const {formidable, errors: formidableErrors} = require('formidable');
// import formidable, {errors as formidableErrors} from 'formidable';

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/portrait', function (req, res, next) {
    res.render('portrait', {title: 'Express'});
});

router.post('/portrait', async function (req, res, next) {
    const form = formidable({multipart: true, uploadDir: __dirname + '/../public/images', keepExtensions: true});
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        let url = '/images/' + files.portrait[0].newFilename;
        res.json({fields, files, url});
    });
});

module.exports = router;
