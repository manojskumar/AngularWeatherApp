'use strict';

// HOME Controller
weatherApp.controller('homeController', ['$scope', '$log', 'weatherService', '$location', function($scope, $log, weatherService, $location){
    $scope.city = weatherService.city || '';
    $scope.cnt = weatherService.cnt;
    $scope.$watch('city', function() {
        weatherService.city = $scope.city;
    });
    $scope.submit = function() {
        $location.path("/forecast");
    }
}]);

// Forecast Controller
weatherApp.controller('forecastController', ['$scope', '$log', 'weatherService', '$routeParams', function($scope, $log, weatherService, $routeParams){
    $scope.city = weatherService.city || 'Melbourne';
    $scope.cnt = $routeParams.days || weatherService.cnt;
    $scope.$watch('cnt', function() {
        weatherService.cnt = $scope.cnt;
    });

    $scope.formatDate = function(dt) {
        return new Date(dt * 1000);
    };

    $scope.weatherResult = weatherService.getWeatherForecast($scope.city, $scope.cnt);
}]);
