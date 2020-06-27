var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var PagesRouter = require('./routes/Pages');
var checkRouter = require('./routes/check');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/check', checkRouter);
app.use('/Pages', PagesRouter); //하나하나씩 다 해줘야하나

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

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
