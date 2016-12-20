
(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('modaleModifChapterController', modaleModifChapterController);

    modaleModifChapterController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceChapter','ServicePage','_','$route'];

    function modaleModifChapterController($scope, $location ,$http, $rootScope, ngDialog,ServiceChapter,ServicePage,_,$route) {
            $scope.initModalUpdate = function(){
                $scope.addPageClick == false;

                $scope.chapterToUpdate = $rootScope.selectedChapter;

                updateAllPages()

                $scope.addPageClick = false;

                 function updateAllPages(){
                    ServicePage.getPages().success(function (allPages) {
                        console.log(allPages)

                        var filtered = allPages;

                        for (var indiceCapterInitial  in $rootScope.selectedChapter.pages) {

                            var chapitreInitial = $rootScope.selectedChapter.pages[indiceCapterInitial]

                            filtered = _(filtered).filter(function (item) {
                                return item.id !== chapitreInitial.id
                            });
                        }
                        $scope.allPages = filtered
                    });
                }


                $scope.showAddPage = function(){
                    if($scope.allPages.length != 0 ) {
                        $scope.addPageClick = !$scope.addPageClick
                    }else{
                        alert("Pas d'autres chapitres à ajouter")
                    }
                };

                $scope.deletePage = function (chapter,page) {
                    var filtered = _(chapter.pages).filter(function(item) {
                        return item.id !== page.id
                    });
                    $scope.chapterToUpdate.pages = filtered;

                    updateAllPages()
                };

                $scope.addToChapterToUpade = function(chapter) {
                    for (var indicePageSelected in $scope.data.pagesSelected) {

                        var nbPageExist = 0;

                        var pageSelected = $scope.data.pagesSelected[indicePageSelected];

                        for (var indiceInitialPage in $rootScope.selectedChapter.pages){
                                var initialPage = $rootScope.selectedChapter.pages[indiceInitialPage];

                                if (initialPage.id == pageSelected.id) {
                                    nbPageExist = nbPageExist + 1;
                                }
                        }
                        if (nbPageExist == 0) {
                            $scope.chapterToUpdate.pages.push(pageSelected);
                        } else {
                            console.log("Ce chapitre existe déja")
                        }
                    }
                    updateAllPages()
                };

                $scope.updatePagesSelected = function(){
                    if($scope.allPages.length == 0 ){ $scope.addPageClick = false; }
                };

                $scope.updateChapter = function () {

                    // Chapter's pages array need to be composed of ID
                    var pagesId = [];
                    for (var indicePage in $scope.chapterToUpdate.pages){
                        pagesId.push($scope.chapterToUpdate.pages[indicePage].id);
                    }
                    $scope.chapterToUpdate.pages = pagesId;

                    ServiceChapter.updateChapter($scope.chapterToUpdate);
                    ngDialog.close();
                    $rootScope.reload = true;
                    // $route.reload();
                }
            };
    }
})();