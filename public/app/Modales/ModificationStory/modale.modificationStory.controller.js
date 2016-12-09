
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

                $scope.addToStoryToUpade = function(story) {

                    for (var indiceChapterSelected in $scope.data.chaptersSelected) {

                        var nbChapterExist = 0

                        var chapterSelected = $scope.data.chaptersSelected[indiceChapterSelected];

                        for (var indiceInitialChapter in $rootScope.selectedStory.chapters){
                                var initialChapter = $rootScope.selectedStory.chapters[indiceInitialChapter]

                                if (initialChapter.id == chapterSelected.id) {
                                    nbChapterExist = nbChapterExist + 1;
                                }
                        }
                        if (nbChapterExist == 0) {
                            $scope.storyToUpdate.chapters.push(chapterSelected)
                        } else {
                            console.log("Ce  chapitre existe déja")
                        }
                    }
                }

                $scope.updateStory = function(){
                    //console.log("Selection d'un chapitre");
                }

            };
    }
})();