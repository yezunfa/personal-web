var express = require('express');
var router = express.Router();
var db = require('../models/db');
/* GET home page. */

router.get('/', function(req, res) {

    let news_sql = "SELECT * FROM news where name like ?";
     console.log(news_sql);
     db.query(news_sql,["%"],function (rows)
     {
         res.render('news',{news:rows});
     });
});

module.exports = router;