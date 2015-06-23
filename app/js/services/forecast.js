app.factory('forecast', ['$http', function($http) {
  return $http.get('http://api.wunderground.com/api/994af6bd25aa6a2c/forecast10day/q/TX/Austin.json')
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    });
}]);
