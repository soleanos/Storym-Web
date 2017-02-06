
(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('modaleAjoutChapterController', modaleAjoutChapterController);

    modaleAjoutChapterController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceChapter','$route','ServiceStory'];

    function modaleAjoutChapterController($scope, $location ,$http, $rootScope, ngDialog,ServiceChapter,$route,ServiceStory) {


            $scope.initModalAdd = function(){
                $scope.newChapter = {}
            };

            $scope.add = function(newChapter){
                if(newChapter){
                    if(newChapter.storyLinked) {
                        ServiceChapter.createChapter(newChapter);
                        ngDialog.close();
                        $rootScope.reload = true;
                    }else{
                        alert("Veuillez selectionner une histoire è_é");
                    }
                }
            };

            ServiceStory.getStories().then(function (allStories) {
                $scope.allStories = allStories.data;
            })
    }
})();