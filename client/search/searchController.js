angular.module('Shuttr.search', ['SearchServices', 'infinite-scroll'])

.controller('SearchController', ['$scope', 'SearchFactory', 'Flickr',
  function($scope, SearchFactory, Flickr) {


  $scope.flickr = new Flickr();

  if (!$scope.images) {

  } else {
    $scope.images = Flickr.items
  }



}])
