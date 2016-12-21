
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

                $scope.addChapterClick = false;

                 function updateAllChapters(){
                    ServiceChapter.getChapters().success(function (allChapters) {
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
                    if($scope.allChapters.length != 0 ) {
                        $scope.addChapterClick = !$scope.addChapterClick
                    }else{
                        alert("Pas d'autres chapitres à ajouter")
                    }
                };

                $scope.deleteChapter = function (story,chapter) {
                    var filtered = _(story.chapters).filter(function(item) {
                        return item.id !== chapter.id
                    });
                    $scope.storyToUpdate.chapters = filtered;

                    updateAllChapters()
                };

                $scope.addToStoryToUpade = function(story) {
                    for (var indiceChapterSelected in $scope.data.chaptersSelected) {

                        var nbChapterExist = 0;

                        var chapterSelected = $scope.data.chaptersSelected[indiceChapterSelected];

                        for (var indiceInitialChapter in $rootScope.selectedStory.chapters){
                                var initialChapter = $rootScope.selectedStory.chapters[indiceInitialChapter];

                                if (initialChapter.id == chapterSelected.id) {
                                    nbChapterExist = nbChapterExist + 1;
                                }
                        }
                        if (nbChapterExist == 0) {
                            $scope.storyToUpdate.chapters.push(chapterSelected);
                        } else {
                            console.log("Ce chapitre existe déja")
                        }
                    }
                    updateAllChapters()
                };

                $scope.updateChaptersSelected = function(){
                    if($scope.allChapters.length == 0 ){ $scope.addChapterClick = false; }
                };

                $scope.updateStory = function () {

                    // Story's chapters array need to be composed of ID
                    var chaptersId = [];
                    for (var indiceChapter in $scope.storyToUpdate.chapters){
                        chaptersId.push($scope.storyToUpdate.chapters[indiceChapter].id);
                    }
                    $scope.storyToUpdate.chapters = chaptersId;

                    ServiceStory.updateStory($scope.storyToUpdate);
                    ngDialog.close();
                    $rootScope.reload = true;
                    // $route.reload();
                }
            };
    }
})();