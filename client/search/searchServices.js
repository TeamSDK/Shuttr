angular.module('SearchServices', [])

.factory('SearchFactory', ['$http', function($http){

  var searchPictures = {};

  searchPictures.getAllPictures = function(location) {
    return $http({
      method: 'GET',
      url: '/api/photos/' + location
    })
    .then(function(response) {
      return response;
    })
  }

  return searchPictures;

}])