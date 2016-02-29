angular.module("App2").controller("MainCtrl", function($scope, service) {
	$scope.getIt = service.returnMyData();

})

// 5 angular.module("App2").controller("MainCtrl", function($scope, service) {
// 	$scope.getData = service.showmyData();
// })

// 4 angular.module("App2").controller("MainCtrl", function($scope, service) {
//   $scope.getData = service.returnMyData();

// })

// 3 angular.module("App2").controller("MainCtrl", function($scope, service) {
// 	$scope.trevor = service.newArrData();

// })

// 2 angular.module("App2").controller("MainCtrl", function($scope, service) {

//   $scope.gathering = service.returnArr();
// })

// 1 angular.module("App2").controller("MainCtrl", function($scope, service) {
    
//     $scope.bananaInfo = service.returnDataOrSomething();

// });