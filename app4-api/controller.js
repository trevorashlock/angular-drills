angular.module("App4").controller("MainCtrl", function ($scope, service) {
  service.getSmurfs().then(function (datafrompromise) {
  	$scope.smurfs = datafrompromise;
  })

})

// 9 angular.module("App4").controller("MainCtrl", function	($scope, service) {

//     service.getPlanets().then(function (datafrompromise) {
//     	$scope.planets = datafrompromise;
//     })

// })

// 8 angular.module("App4").controller("MainCtrl", function($scope, service) {

//      service.getPlanets().then(function(datafrompromise) {
//     	$scope.planets = datafrompromise;
//     })

   
    
// })

// 7 angular.module("App4").controller("MainCtrl", function($scope, service) {
//    var promise = service.getSmurf();

//   promise.then(function(datafrompromise) {
//   	$scope.smurfs = datafrompromise;
//   })

// })

// 6 angular.module("App4").controller("MainCtrl", function($scope, service) {
  
//   var promise = service.getPlanets();

//   promise.then(function (datafrompromise) {
//       $scope.planets = datafrompromise;
//   })

// })

// 5 angular.module("App4").controller("MainCtrl", function($scope, service) {
//   service.getPlanets().then(function(promiseData) {
//   	  $scope.planets = promiseData;
//   })
// })


// 4 angular.module("App4").controller("MainCtrl", function($scope, service) {
//   var promise = service.getSmurf();

//   promise.then(function(datafrompromise) {
//   	$scope.smurf = datafrompromise;
//   })
// })

// 3 angular.module("App4").controller("MainCtrl", function($scope, service) {
//   var promise = service.getPoke();

//   promise.then(function(datafrompromise) {
//   	$scope.poke = datafrompromise;
//   })
// })

// 3 angular.module("App4").controller("MainCtrl", function($scope, service) {
//   var promise = service.getPlanets();

//   promise.then(function(promiseData) {
//   	  $scope.planets = promiseData;
//   })
// })

// 1 angular.module("App4").controller("MainCtrl", function($scope, service) {
//      $scope.SWAPI = "SWAPI storM";

//      var promise = service.getPlanets(); //becasue of promise, I do not wan to put service on the scope first. 
 
//      ///////Promise chain part B
//      promise.then(function(datafrompartA) {
//      	$scope.planets = datafrompartA;

//      })

// });