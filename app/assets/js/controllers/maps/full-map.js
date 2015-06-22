app.controller('FullMapController', ['$scope', '$rootScope', 'uiGmapIsReady', function($scope, $rootScope, uiGmapIsReady) {
  $scope.map = { center: { latitude: 10, longitude: -84 }, zoom: 8, control: {} };


  var idMarker = 0;
  var markers = [];

  $rootScope.isFullPageMap = true;

  $scope.$on('$destroy', function() {
    $rootScope.isFullPageMap = false;
  });


  // This is so the map repaints after revisiting the page
  // Or else it would not display fully
  uiGmapIsReady.promise(1).then(function(instances) {
    instances.forEach(function(inst) {
      $scope.map.control.refresh();
    });
  });

  $scope.createMarker = function(){

   alert("hello");

      idMarker = idMarker + 1;
  };


  $scope.markers = markers;

}]);
