var express = require('express');
var router = express.Router();
var db=require('../models/db');
/* GET home page. */

router.get('/', function(req, res, ) {
    res.render('register', {});
});
router.post('/',function (req, res,) {
    var username = req.body.userName;
    var password = req.body.password1;
    var register_sql = "select * from user where name= ?";
    db.query(register_sql, [username], function (rows) {
        console.log('select' + rows);
        if(rows!=null && rows.length >0){
            req.flash('error','该用户名已被注册');
            res.redirect('register');
        }
        else {
            var Register_sql="insert into user (name,password) value(?,?)";
            db.query(Register_sql,[username,password],function(rows){
                console.log('insert'+rows);
                if(rows){
                    res.redirect('login');
                }else{
                    req.flash('err','注册失败');
                    res.redirect('register');
                }

            })
        }
    });
});
module.exports = router;
