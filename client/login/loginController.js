angular.module('Shuttr.login', ['LoginServices'])

.controller('LoginController', ['$scope', 'LoginFactory', function($scope, LoginFactory) {
  $scope.imageFetched = false;
  $scope.getPhoto = function() {
    LoginFactory.getPhoto().then(function(response) {
      console.log("RESPONSE ", response);
      $scope.imageFetched = true;
      $scope.bgImage = response.data.hdurl;
    });
  };

  $scope.getPhoto();
}]);