angular.module('metalCollection').controller('metalCollectionController', ['$scope', '$rootScope', 'albumService',
  function($scope, $rootScope, albumService){
    $scope.init = function(albums){
      $scope.albums = albums;
    };
  }
]);
