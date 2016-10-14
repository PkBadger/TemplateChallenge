var miAngularApp = angular.module("App",[]);

miAngularApp.controller("BlogCtrl", ['$http','$scope',function ($http,$scope){
  $scope.posts = {};
  $http.get("http://localhost:8080").then(succesCallback,errorCallback);
  function succesCallback(response){
    $scope.posts = response.data;
  }
  function errorCallback(response){
    console.log(response);
  }
}]);
