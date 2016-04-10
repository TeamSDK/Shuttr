angular.module('PictureServices', [])

.factory('PicturesFactory', ['$http', function($http){

  var pictures = {};
  pictures.items = [];

  pictures.getAllPictures = function(location) {
    return $http({
      method: 'GET',
      url: '/api/photos/' + location
    })
    .then(function(response) {
      pictures.items = response.data.photos.photo;
      return pictures;
    })
  }
  
  return pictures;

}])