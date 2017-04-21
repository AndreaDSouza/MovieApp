var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var user = require('./routes/user.js');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

mongoose.connect('mongodb://localhost/moviebook');
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error : "));
db.once('open', function(){
  console.log("connection open");
});

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', user);

app.listen(3000, function(req, res){
  console.log("server is running on port 3000");
});
