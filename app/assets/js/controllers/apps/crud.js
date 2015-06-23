app.controller('CrudController', ['$scope', '$window', '$aside', 'PlaceholderTextService',function($scope, $window, $aside, PlaceholderTextService){

  // settings
  $scope.settings = {
    singular: 'Item',
    plural: 'Items',
    cmd: 'Add'
  };

  // adding demo data
  var data = [];
  for (var i = 1; i <= 4; i++){
    data.push({
      firstname: PlaceholderTextService.createFirstname(i),
      lastname: PlaceholderTextService.createLastname(i),
      paragraph: PlaceholderTextService.createSentence()
    });
  }
  $scope.data = data;

  // defining template
  var formTpl = $aside({
    scope: $scope,
    template: 'assets/tpl/apps/CrudUsuarios.html',
    show: false,
    placement: 'left',
    backdrop: false,
    animation: 'am-slide-left'
  });

  // methods
  $scope.checkAll = function () {
    angular.forEach($scope.data, function (item) {
      item.selected = !item.selected;
    });
  };

  $scope.editItem = function(item){
    if(item){
      item.editing = true;
      $scope.item = item;
      $scope.settings.cmd = 'Edit';
      showForm();
    }
  };

  $scope.viewItem = function(item){
    if(item){
      item.editing = false;
      $scope.item = item;
      $scope.settings.cmd = 'View';
      showForm();
    }
  };

  $scope.createItem = function(){
    var item = {
      icon: PlaceholderTextService.createIcon(true),
      editing: true
    };
    $scope.item = item;
    $scope.settings.cmd = 'New';
    showForm();
  };

  $scope.saveItem = function(){
    if($scope.settings.cmd == 'New'){
      $scope.data.push($scope.item);
    }
    hideForm();
  };

  $scope.remove = function(item){
    eliminarUsuarios();
    if(true){
      if(item){
        $scope.data.splice($scope.data.indexOf(item), 1);
      } else {
        $scope.data = $scope.data.filter(
          function(item) {
            return !item.selected;
          }
        );
        $scope.selectAll = false;
      }
    }
  };

  eliminarUsuarios = function(){
    sweetAlert({
      title: "Oops!",
      text: "Something went wrong on the page!",
      type: "error"
    });


  };

  showForm = function(){
    angular.element('.tooltip').remove();
    formTpl.show();
  };

  hideForm = function(){
    formTpl.hide();
  };

  $scope.$on('$destroy', function() {
    hideForm();
  });

}]);
