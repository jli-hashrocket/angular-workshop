angular.module('metalCollection').controller('metalCollectionController', ['$scope', '$rootScope', 'albumService',
  function($scope, $rootScope, albumService){
    $scope.init = function(){
      $scope.albums = albumService.parseAlbums($('#albums').val());
    };

    $scope.init();
  }
]);
