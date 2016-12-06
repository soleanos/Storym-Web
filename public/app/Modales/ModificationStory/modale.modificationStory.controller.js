
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('modaleModifStoryController', modaleModifStoryController);

    modaleModifStoryController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory'];

    function modaleModifStoryController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory) {
            $scope.initModalUpdate = function(){
                var lienStory = "http://localhost:8008/api/storys/"+($rootScope.indexGlobal+1)

                ServiceStory.getStory(lienStory).$promise.then(function (story) {
                    $scope.storyToUpdate = story;
                });
            };
    }
})();