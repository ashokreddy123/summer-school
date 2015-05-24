var module = angular.module('app',['onsen']);

module.controller('mapcontroller',function($scope){
 
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
 directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(12.9917880,80.2337820);
  var mapOptions = {
    zoom:7,
    center: gajendra circle
};
map = new google.maps.Map(document.getElementById('map'),mapOptions);
directionsDisplay.setMap(map);
});