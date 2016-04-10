angular.module('Shuttr.search', ['PictureServices'])

.controller('SearchController', ['$scope', '$interval', 'PicturesFactory',
  function($scope, $interval, PicturesFactory) {

  var picturesList = {};
  picturesList.data = [];
  var counter = 0;

  $scope.getPictures = function(location) {

    if (!picturesList.data.length) {

      PicturesFactory.getAllPictures(location)
      .then(function(pictures) {

        counter = counter + 5;
        $scope.pictures = pictures.items.splice(0,counter);
        picturesList.data.push(pictures);
        console.log(picturesList);       
        
        var displayNextPicture = function() {
          counter++;
          $scope.pictures = [data[counter]]
          console.log($scope.pictures)
        }
        
        // $interval(displayNextPicture, 1000)

      })
    }
    else {
      counter = counter + 20;
      picturesList.data.forEach(function(pictureObj, index){
        $scope.pictures = pictureObj.items.splice(0, counter);
        console.log(counter, index, picturesList);
      })
      

      if (counter >= 100) {
        picturesList.data = [];
        counter = 0;
      }
    }
  }

}])


// .directive('ngSlowSrc', function($timeout){
// return{
//     restrict: 'A',
//     link: function(scope, element, attrs){
//         $timeout(function() {
//             element.src = attrs.ngSlowSrc;
//         }, 2000);
//     }
// }

