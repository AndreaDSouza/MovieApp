angular.module('MovieApp').controller('editController', function($scope, $http){

  $http.get('/api/moviesDb').then(function(response){
    $scope.movies = response.data;
    console.log("fvbrtbrt");
  });

  $scope.AddMovie = function(){
    $http.post('/api/moviesDb/', $scope.newMovie).then(function(response){
      console.log("post success");
    });
  };
  $scope.DeleteMovie = function(movie){
    $http.delete('/api/moviesDb/' + movie._id).then(function(response){
      console.log("delete success");
    });
  }
});
