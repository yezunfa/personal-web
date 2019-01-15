var express = require('express');
var router = express.Router();
var db = require('../models/db');
var news_sql = "SELECT * FROM news where title like ? limit ? , ?";
/* GET home page. */

router.get('/', function(req, res) {
     // console.log(news_sql);
     // db.query(news_sql,["%"],function (rows)
     // {
         res.render('news');
     // });
});
router.post('/',function(req,resp){
    let page=req.body.page;
    let line=req.body.line;
    let keyWord=req.body.keyWord;

    db.query(news_sql,["%"+keyWord+"%",page,line],function(rows){
        resp.json(rows);
    })
});
module.exports = router;