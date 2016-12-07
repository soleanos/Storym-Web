
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('modaleModifStoryController', modaleModifStoryController);

    modaleModifStoryController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory','ServiceChapter'];

    function modaleModifStoryController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory,ServiceChapter) {
            $scope.initModalUpdate = function(){
                $scope.addChapterClick == false;

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
                    for (var chapterSelected in $scope.data.chaptersSelected) {
                        $scope.storyToUpdate.chapters.push($scope.data.chaptersSelected[chapterSelected])
                    }
                }
            };
    }
})();