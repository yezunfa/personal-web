var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var homeRouter =require('./routes/home');
var myblogRouter =require('./routes/myblog');
var registerRouter = require('./routes/register');
var newsRouter = require('./routes/news');
var resumeRouter = require('./routes/resume');
var personal_blogRouter = require('./routes/personal_blog');

var session=require('express-session');
var flash =require('connect-flash');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'first_cookie',//session的存储方式，默认存放在内存中
  cookie:{maxAge:60000}//设置存放session的id的cookie的相关选项
}));
app.use(flash());
app.use(function(req,resp,next){
    resp.locals.error = req.flash("error");
      next();
});


app.use('/login',loginRouter);
app.use('/home' ,homeRouter);
app.use('/myblog',myblogRouter);
app.use('/register',registerRouter);
app.use('/news',newsRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/resume',resumeRouter);
app.use('/personal_blog',personal_blogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
