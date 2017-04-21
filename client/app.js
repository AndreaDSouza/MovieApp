var app = angular.module("MovieApp", ["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "./views/home.html",
    controller: "homeController"
  })
  .when("/edit", {
    templateUrl: "./views/edit.html",
    controller: "editController"
  });
});
