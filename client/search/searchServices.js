angular.module('SearchServices', [])

//http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=[your api key here]

.factory('SearchFactory', ['$http', function($http){

  var searchPictures = {};

  var API_KEY = '06252ada83b0736a73b13ad8160e2b37';

  searchPictures.getAllPictures = function(location) {
    return $http({
      method: 'GET',
      url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + location + '&format=json&nojsoncallback=1'
    })
    .then(function(response) {
      return response;
    })
  }

  return searchPictures;

}]);