var express = require('express');
var router = express.Router();
var movies = require('../models/moviesModel.js');

router.get('/moviesDb', function(req, res){
  movies.find({}, function(err, data){
    if(err){
      console.log(err);
    } else{
      console.log("brtnj");
      res.json(data);
    }
  });
});

router.post('/moviesDb', function(req, res){
  newMovie = new movies(req.body);
  newMovie.save(function(err){
    if(err){
      console.log(err);
    } else{
      res.json(req.body);
    }
  });
});

router.delete('/moviesDb/:id', function(req, res){
  movies.remove({_id:req.params.id}, function(err){
    if(err){
      console.log(err);
    } else{
      res.send("deleted");
    }
  })
})

module.exports = router;
