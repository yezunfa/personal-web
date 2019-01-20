var express = require('express');
var router = express.Router();
var db=require("../models/db");
var infosql="select * from passages ";
/* GET home page. */

router.get('/', function(req, res, next) {
    db.query(infosql,["%"],function (rows) {
        console.log(rows);
        res.render('personal_blog', { info:rows});
    });
});

module.exports = router;