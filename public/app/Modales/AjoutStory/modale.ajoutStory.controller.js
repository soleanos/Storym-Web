
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('modaleAjoutStoryController', modaleAjoutStoryController);

    modaleAjoutStoryController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory','$route'];

    function modaleAjoutStoryController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory,$route) {


            $scope.initModalAdd = function(){
                $scope.newStory = {}
            };

            $scope.add = function(newStory){
                if(newStory){
                    ServiceStory.createStory(newStory)
                    console.log(newStory);
//                    $route.reload();

                }
            };

            $scope.test = function(newStory){
                alert("mdr");
            };

    }
})();