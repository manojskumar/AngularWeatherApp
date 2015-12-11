'use strict';

// Weather Service
weatherApp.service('weatherService', ['$resource', function($resource){
    var that = this;
    this.city = "Melbourne";
    this.cnt = '2';

    this.getWeatherForecast = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=f0513d263e1291a68c15bbd362000284", {
            callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
        return weatherAPI.get({ q: city || that.city, cnt: days || that.cnt, units: "metric" });
    };

}]);
