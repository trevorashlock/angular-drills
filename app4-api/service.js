angular.module("App4").service("service", function ($http) {
     this.getSmurfs = function () {
      var promise = $http ({
         method: "GET",
         url:  "http://smurfs.devmounta.in/smurfs/"
      }).then(function (response) {
          return response.data;
      })
      return promise;
     }

})

// 9 angular.module("App4").service("service", function ($http) {
  
//   this.getPlanets = function () {
//     var promise = $http ({
//     method: "GET",
//     url: "http://swapi.co/api/planets/"
//     }).then(function (response) {
//       return response.data;
//   })
//   return promise;
// }

// })

// 8 angular.module("App4").service("service", function($http) {
     

//     this.getPlanets = function() {
//       var promise = $http({
//         method: "GET",
//         url: "http://swapi.co/api/planets/"
//       }).then(function(response) {
//         return response.data;
//       })
//       return promise;
//     }

// })

// 7 angular.module("App4").service("service", function($http) {
//     var baseUrl = "http://smurfs.devmounta.in/smurfs/";
//     this.getSmurf = function() {
//         var promise = $http ({
//            method: "GET",
//            url: baseUrl
//         });
//         promise.then(function(response) {
//             return response.data;
//         })
//         return promise;
//     }

// })

// 6 angular.module("App4").service("service", function($http) {
// var baseUrl = "http://swapi.co/api/planets/";
//     this.getPlanets = function() {
//       var promise = $http({
//           method: "GET",
//           url: baseUrl

//       });
//       promise.then(function(response) {
//           return response.data
//       })
//       return promise;
//     }
// })

// 5 angular.module("App4").service("service", function($http) {

//     var baseUrl = "http://swapi.co/api/planets/";

//     this.getPlanets = function() {
//       var promise = $http({
//         method: "GET",
//         url: baseUrl
//       });
//        promise.then(function(response) {
//           return response.data;
//        })
//        return promise;
//     }
// })

// 4 angular.module("App4").service("service", function($http) {
//   var baseUrl = "http://smurfs.devmounta.in/smurfs/";

//   this.getSmurf = function() {
//     var promise = $http({
//         method: "Get",
//         url: baseUrl
//   });
//     promise.then(function(response) {
//       return response.data;
//     })
//     return promise;
//   }

// })

// 3 angular.module("App4").service("service", function($http) {
//   var baseUrl = "http://pokeapi.co/api/v2/";

//   this.getPoke = function() {
//     var promise = $http({
//         method: "GET",
//         url: baseUrl
//     });
//        promise.then(function(response) {
//         return response.data;

//        })
//     return promise;
//   }  

// })

// 2 angular.module("App4").service("service", function($http) {
//   var baseUrl = "http://swapi.co/api/planets/";

//   this.getPlanets = function() {
//     var promise = $http({
//         method: "Get",
//         url: baseUrl
//     });
//      promise.then(function(response) {
//         return reponse.data
//     })
//     return promise;
//   }
// })

// 1 angular.module("App4").service("service", function($http) {
  
//   var baseUrl = "http://swapi.co/api/planets/";
  
//   this.getPlanets = function() {
//   	var promise = $http({
//   		    method: "GET",                    //If you dont understand the promise, go back and watech the vimeo 1:36:00
//   		    url: baseUrl
//       });
//   	    /////////Promise evaluation chain part A
//   	    promise.then(function(response) {
//       	  return response.data;

//       })
//   	    return promise;

//   }



// })