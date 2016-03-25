angular.module('Shuttr.search', ['SearchServices', 'infinite-scroll'])

.controller('SearchController', ['$scope', 'SearchFactory', 'Flickr',
  function($scope, SearchFactory, Flickr) {


  $scope.flickr = new Flickr();

  $scope.next_page = null;
  var in_progress = true;
  $scope.location = '';

  $scope.getPictures = function(location) {

    SearchFactory.getAllPictures(location)
    .then(function(response) {
      console.log(response.data)
      $scope.pictures = response.data.photos.photo;
    })

    console.log("Scorlling apparently");
    console.log($scope.pictures)

  }

  var height = $('row').height();
  console.log(height);



}])
