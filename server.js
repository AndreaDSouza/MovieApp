var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var router = require('./server/routes/moviesRouter');

app.use(morgan('dev'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/moviebook');
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error : "));
db.once('open', function(){
  console.log("connection open");
});

app.use(express.static(path.join(__dirname, '/client')));

// app.use('/', router);
app.use('/api', router);
app.listen(3000, function(req, res){
  console.log("server is running on port 3000");
});
