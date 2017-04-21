var express = require('express');
var router = express.Router();
var movies = require('../models/movies.js');

router.get('/', function(req, res){
  res.render('index');
  console.log('root API');
});

router.get('/movies', function(req, res){
  movies.find({}, function(err, data){
    if(err){
      console.log(err);
    } else{
      res.json(data);
    }
  });
});

router.post('/movies', function(req, res){
  movies.create(req.body, function(err){
    res.json(req.body);
  })
})

module.exports = router;
