
(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('modaleAjoutChapterController', modaleAjoutChapterController);

    modaleAjoutChapterController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceChapter','$route'];

    function modaleAjoutChapterController($scope, $location ,$http, $rootScope, ngDialog,ServiceChapter,$route) {


            $scope.initModalAdd = function(){
                $scope.newChapter = {}
            };

            $scope.add = function(newChapter){
                if(newChapter){
                    ServiceChapter.createChapter(newChapter);
                    ngDialog.close();
                    $rootScope.reload = true;
                }
            };

    }
})();