console.log("i am inside create table")

var FinalAPI= angular.module('FinalAPI', [])
.config(function($httpProvider) {
$httpProvider.defaults.useXDomain = true;
$httpProvider.defaults.withCredentials = true;
});


FinalAPI.controller("testController",function($scope,$http,$log) {
$scope.home = "this is the homepage" ;

// Get called in html webpage directs this
$scope.getRequest = function() {
$log.info("I've been pressed!"); // console log statement
$http.get('http://localhost:8000/id').then(function successCallback(res) // <<
 {
  $scope.response = res.data ;
  console.log($scope.response);
  },
  function errorCallback(response) {
  console.log("Unable to perform get request");
  }
 ) ;
};


$scope.getRequest1 = function() {
console.log("I've been pressed!");
$http.get('http://localhost:8000/quest_text').then(
function successCallback(res) // <<
{
$scope.response=res.data;
console.log($scope.response);
},
function errorCallback(response) {
console.log("Unable to perform get request");
}
);
};

});
