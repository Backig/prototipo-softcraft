app.controller('FullMapController', ['$scope', '$rootScope','$aside', 'uiGmapIsReady', function($scope, $rootScope,$aside,uiGmapIsReady) {
  $scope.map = { center: { latitude: 10, longitude: -84 }, zoom: 8, control: {} };

  $scope.settings = {
    singular: 'Item',
    plural: 'Items',
    cmd: 'Add'
  };

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
  angular.extend($scope.map, {


    events: {

      tilesloaded: function (map, eventName, originalEventArgs) {
        //map is trueley ready then this callback is hit
      },

      click: function (mapModel, eventName, originalEventArgs) {
        var e = originalEventArgs[0];
        var lat = e.latLng.lat();
        var lon = e.latLng.lng();

        markers.push({

          id:idMarker,
          latitude: lat,
          longitude: lon,
          message: 'Marker# ' + idMarker
        });
        idMarker = idMarker + 1;
        $scope.markers = markers;
        $scope.$apply();

      }
    }
});

  $scope.createItem = function(){

    var item = {
      editing: true
    };
    $scope.item = item;
    $scope.settings.cmd = 'New';
    $scope.showForm();
  };

  $scope.showForm = function(){
    angular.element('.tooltip').remove();
    formTpl.show();
  };

  var formTpl = $aside({
    scope: $scope,
    template: 'assets/tpl/apps/crud-form.html',
    show: false,
    placement: 'left',
    backdrop: false,
    animation: 'am-slide-left'
  });

  $scope.markersEvents = {
    click: function (gMarker, eventName, model) {

        $scope.createItem();
    }
  };


}]);
