angular.module('metalCollection').service('albumService', ["$http", "$q", "$rootScope", function($http, $q, $rootScope){
  return {
    addAlbum: function(name, album){
      var deferred = $q.defer();

      $http.post("/albums/add_album?name=" + name + "&album=" + album).then(function(response){
        deferred.resolve(response.data);
      }, function(errorMessage){
        deferred.resolve(errorMessage);
      });
      return deferred.promise;
    }
  };
}]);
