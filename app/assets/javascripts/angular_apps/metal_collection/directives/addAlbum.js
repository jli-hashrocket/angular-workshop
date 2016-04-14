angular.module('metalCollection').directive('addAlbum', ['albumService',function(albumService){
  return {
    restrict: 'A',
    scope: '@albums',
    link: function($scope, element, attrs){
      element.bind('click', function(){
        var name = $('#artist-name').val();
        var album = $('#artist-album').val();
        albumService.addAlbum(name, album).then(function(response){
          $scope.albums.push(response.album);
        });
      });
    }
  };
}]);
