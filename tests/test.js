describe('Shuttr', function() {
  beforeEach(module('Shuttr'));

   var $controller, user, $scope, $http, $location, $q, deferred, $httpBackend, createController;

  beforeEach(inject(function(_$controller_, _$rootScope_, _$q_, _$location_) {
    $controller = _$controller_;
    $scope = _$rootScope_;
  }));

  // Search CONTROLLER
  describe('SearchController', function() {

    var createController = function() {
      return $controller('LoginController', { $scope: $scope });
    };
    
    it('should have text SF', function() {
      var controller = createController();
      expect($scope.imageFetched).toEqual(false);
    });
  });
});