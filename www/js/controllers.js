angular.module('controllers', ['ionic'])

.controller('dataSourceCtrl', function($scope, $http, data) {
	$scope.test = '<h1>some data</h1>';
  data.api().success(function(response){
    $scope.data = response;
    console.log(response.home_header);
  })
  .error(function(){
    $scope.data = data.all();
  });
})
.controller('mapsCtrl', function($scope) {
  console.log($scope.response);
  var myLatlng = new google.maps.LatLng(51.381142, -2.373386);

  var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'The mint Room',
      raiseOnDrag: true,
      labelContent: "The mint Room",
  });
  $scope.map = map;
});