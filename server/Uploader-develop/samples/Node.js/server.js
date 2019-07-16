
var express = require('express');

var app = express();

// Host most stuff in the public folder
// app.use(express.static(__dirname + '/public'));
app.use(express.static('/home/wagnxx/wxx/pro/vue/vue-uploader/web/_dist'));

app.use('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
//res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');//设置方法
  // res.header('Access-Control-Allow-Credentials', true);//设置方法
 
  next();
 
});

app.listen(8080);
