
(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('modaleModifStoryController', modaleModifStoryController);

    modaleModifStoryController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory','ServiceChapter','_','$route'];

    function modaleModifStoryController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory,ServiceChapter,_,$route) {
            $scope.initModalUpdate = function(){
                $scope.addChapterClick == false;

                $scope.storyToUpdate = $rootScope.selectedStory;

                updateAllChapters()

                 function updateAllChapters(){

                    ServiceChapter.getChapters().success(function (allChapters) {
                        //$scope.allChapters = allChapters;
                        var filtered = allChapters;

                        for (var indiceCapterInitial  in $rootScope.selectedStory.chapters) {

                            var chapitreInitial = $rootScope.selectedStory.chapters[indiceCapterInitial]

                            filtered = _(filtered).filter(function (item) {
                                return item.id !== chapitreInitial.id
                            });
                        }

                        $scope.allChapters = filtered
                    });

                }


                $scope.showAddChapter = function(){
                    if ($scope.addChapterClick == false) {
                        $scope.addChapterClick = true
                    } else {
                        $scope.addChapterClick = false
                    };
                }

                $scope.deleteChapter = function (story,chapter) {
                    var filtered = _(story.chapters).filter(function(item) {
                        return item.id !== chapter.id
                    });
                    $scope.storyToUpdate.chapters = filtered

                    updateAllChapters()
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
                            console.log("Ce chapitre existe déja")
                        }
                    }

                    updateAllChapters()
                }

                $scope.updateChaptersSelected = function(){
                    console.log("Modification select")
                }

                $scope.updateStory = function () {
                    ServiceStory.updateStory($scope.storyToUpdate)
                    ngDialog.close()
                    $route.reload();
                }

            };
    }
})();