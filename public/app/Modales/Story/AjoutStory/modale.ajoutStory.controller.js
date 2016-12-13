
(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('modaleAjoutStoryController', modaleAjoutStoryController);

    modaleAjoutStoryController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory','$route'];

    function modaleAjoutStoryController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory,$route) {


            $scope.initModalAdd = function(){
                $scope.newStory = {}
            };

            $scope.add = function(newStory){
                if(newStory){
                    ServiceStory.createStory(newStory)
                    ngDialog.close()
                    $route.reload();
                }
            };

    }
})();