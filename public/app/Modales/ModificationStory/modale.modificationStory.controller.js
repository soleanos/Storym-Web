
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('modaleModifStoryController', modaleModifStoryController);

    modaleModifStoryController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory','ServiceChapter'];

    function modaleModifStoryController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory,ServiceChapter) {
            $scope.initModalUpdate = function(){
                $scope.addChapterClick == false;
                // var lienStory = "http://localhost:8008/api/storys/"+($rootScope.indexGlobal+1)
                //
                // ServiceStory.getStory(lienStory).$promise.then(function (story) {
                //     $scope.storyToUpdate = story;
                //
                // });

                $scope.storyToUpdate = $rootScope.selectedStory;
                ServiceChapter.getChapters().success(function (allChapters) {

                   $scope.allChapters = allChapters;

                });

                $scope.showAddChapter = function(){
                    if ($scope.addChapterClick == false) {
                        $scope.addChapterClick = true
                    } else {
                        $scope.addChapterClick = false
                    };
                }

                $scope.updateStory = function(){

                    var secondeStory = [];
                    secondeStory= $scope.storyToUpdate;

                    for (var chapterSelected in $scope.data.chaptersSelected) {
                        secondeStory.chapters.push(chapterSelected)
                    }

                    console.log(secondeStory)
                }

            };
    }
})();