angular.module('LoginServices', [])

.factory('LoginFactory', ['$http', function($http) {
  var loginServices = {};

  loginServices.getPhoto = function() {
    return $http.get('https://api.nasa.gov/planetary/apod?api_key=tsQJ7Xf3Rbq0lZWRx5XypTSWFz9vCdiihLbxA4Zq')
      .then(function(response){
        return response;
      });
  };

  loginServices.signin = function(info) {
    return $http.post('/auth/signin', info)
      .then(function(response){
        console.log("RESPONSE", response);
      });
  };

  loginServices.signup = function(info) {
    return $http.post('/auth/signup', info)
      .then(function(response){
        console.log('RESPONSE', response);
      });
  };

  return loginServices;
}]);