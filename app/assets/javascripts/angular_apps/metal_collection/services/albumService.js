angular.module('metalCollection').service('albumService', ["$http", "$q", "$rootScope", function($http, $q, $rootScope){
  var albums = [];

  return {
    parseAlbums: function(albumString){
      albums = JSON.parse(albumString);
      return albums;
    },
    addAlbum: function(name, album){
      var deferred = $q.defer();

      $http.post("/albums/add_album?name=" + name + "&album=" + album).then(function(response){
        deferred.resolve(response.data);
      }, function(errorMessage){
        deferred.resolve(errorMessage);
      });
      return deferred.promise;
    },
    refreshList: function(new_album){
      albums.push(new_album);
      return albums;
    }

  };
}]);
