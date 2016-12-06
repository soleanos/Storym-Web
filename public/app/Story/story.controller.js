
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('StoryController', StoryController);

    StoryController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory','ServiceSession','ServiceChapter'];

    function StoryController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory,ServiceSession,ServiceChapter) {

        $scope.storys =  [];

        ServiceStory.getStorys().success(function (allStorys) {

            for  (var indiceStory in allStorys){

                var story = allStorys[indiceStory];

                var chapterList = [];
                    for(var indiceChapitre in story.chapters){
                        var idChapitre = story.chapters[indiceChapitre];

                        ServiceChapter.getChapter(idChapitre).$promise.then(function (chapter) {
                            chapterList.push(chapter);
                        });
                    }

                story.chapters = chapterList;
                $scope.storys.push(story);

                console.log($scope.storys)
            }

        });

        $scope.openUpdateModale = function (index) {
           $rootScope.dialog = ngDialog.open({ template: 'templateUpdate' });
           $rootScope.indexGlobal = index;
        };

        $scope.openAddModale = function () {
           $rootScope.dialog = ngDialog.open({ template: 'templateAdd' });
        };



    }
})();


