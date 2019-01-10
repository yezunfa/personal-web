var express = require('express');
var router = express.Router();
var db = require('../models/db');
/* GET users listing. */
router.get('/', function(req, res, ) {
    db.query("select * from user", function (rows) {
        console.log(rows);
    });
    res.render('login', {});
});
router.post('/',function (req,resp ) {
    let userName =req.body.userName;
    let password =req.body.password;
    let login_sql = "SELECT * FROM `user` WHERE `name`= ? and `password`= ?";
    db.query(login_sql,[userName,password],function(rows){
        console.log(rows);
        if (rows!=null && rows.length>0){
            //登陆成功
            resp.render('home',{});
        } else{
            //登陆失败
            // req.flash('error',"用户名或者密码错误");
            req.flash('error','登陆失败！！！');
            resp.redirect('login');
        }})
});
module.exports = router;
