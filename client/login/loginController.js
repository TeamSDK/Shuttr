angular.module('Shuttr.login', ['LoginServices'])

.controller('LoginController', ['$scope', 'LoginFactory', function($scope, LoginFactory) {
  $scope.imageFetched = false;
  $scope.getPhoto = function() {
    LoginFactory.getPhoto().then(function(response) {
      $scope.imageFetched = true;
      $scope.bgImage = response.data.hdurl;
    });
  };

  $scope.loginState = false;

  $scope.toggleLoginState = function() {
    $scope.loginState = !$scope.loginState;
  };

  $scope.getPhoto();
}]);