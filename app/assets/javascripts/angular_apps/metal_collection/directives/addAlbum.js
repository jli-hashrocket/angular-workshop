angular.module('metalCollection').directive('addAlbum', ['albumService',function(albumService){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      $(element).click(function(scope, element, attrs){
        var name = $('#artist-name').val();
        var album = $('#artist-album').val();
        albumService.addAlbum(name, album).then(function(response){
          albumService.refreshList(response.album);
        });
      });
    }
  };
}]);
