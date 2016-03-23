angular.module('Shuttr.search', ['SearchServices'])

.controller('SearchController', ['$scope', 'SearchFactory',
 function($scope, SearchFactory) {

  $scope.pictures;

  $scope.getPictures = function(location) {

    SearchFactory.getAllPictures(location)
    .then(function(response) {
      console.log("RESPONSE", response)
      $scope.pictures = response.data.photos.photo;
    })

  }

}])