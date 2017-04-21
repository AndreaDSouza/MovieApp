 angular.module('MovieApp').controller('homeController', function($scope, $http){
   $http.get('/api/moviesDb').then(function(response){
     $scope.movies = response.data;
     console.log("fvbrtbrt");
   });
 });
