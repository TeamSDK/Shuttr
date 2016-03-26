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

.factory('Flickr', ['$http', function($http){

  var Flickr = function() {
    this.items = [];
    this.busy = false;
    this.after = '';
  };

  Flickr.prototype.nextPage = function(location) {
    if (this.busy) return;
    this.busy = true;
    var currentLocation = location;

    $http({
      method: 'GET',
      url: '/api/photos/' + location
    })
    .then(function(response) {

      
        

        var items = response.data.photos.photo;
        for (var i = 0; i < items.length; i++) {
          this.items.push(items[i]);
        }

        this.busy = false;
      
    }.bind(this));
  }

  return Flickr;

}])