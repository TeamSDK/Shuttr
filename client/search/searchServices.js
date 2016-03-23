angular.module('SearchServices', ['ngResource'])

//http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=[your api key here]
// https://api.flickr.com/services/feeds/photos_public.gne?tags=alaac14&format=json
// url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + location + '&per_page=5&page=1&format=json&nojsoncallback=1'

.factory('SearchFactory', ['$http', function($http){

  var searchPictures = {};

  var API_KEY = '06252ada83b0736a73b13ad8160e2b37';

  var _getBaseUrl = function(){
      return "http://api.flickr.com/services/feeds/photos_public.gne?tags=alaac14&format=json";
      // return "https://api.flickr.com/services/rest/?format=json&jsoncallback=JSON_CALLBACK&api_key="+ API_KEY +"&method=";
    }

  searchPictures.getAllPictures = function(location) {
    return $http({
      method: 'GET',
      url: '/api/photos/' + location
    })
    .then(function(response) {
      return response;
    })
  }


  searchPictures.getPhotoSearchList = function(location){
    var url = _getBaseUrl();
    // var url = _getBaseUrl() + "flickr.photos.search&per_page=5&text=" + location;
    return $http({
      methodm: 'GET',
      url: url
    })
    .then(function(response) {
      return response;
    });
  }
  
  return searchPictures;

}])