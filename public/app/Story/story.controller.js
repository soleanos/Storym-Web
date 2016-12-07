
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('StoryController', StoryController);

    StoryController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory','ServiceSession','ServiceChapter'];

    function StoryController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory,ServiceSession,ServiceChapter) {

        $scope.storys =  [];
        var storyList = [];

        ServiceStory.getStorys().success(function (allStorys) {
            var chapterList = [];
            for  (var indiceStory in allStorys){
                var story = allStorys[indiceStory];

                for(var indiceChapitre in story.chapters){
                   var idChapitre = story.chapters[indiceChapitre];

                    ServiceChapter.getChapter(idChapitre).$promise.then(function (chapter) {
                        chapterList.push(chapter);
                    });
                }

                 story.chapters = chapterList;
                 storyList.push(story);
            }

            $scope.storys = storyList;

        });

        $scope.openUpdateModale = function (story) {
           $rootScope.dialog = ngDialog.open({ template: 'templateUpdate' });
           $rootScope.selectedStory = story;
        };

        $scope.openAddModale = function () {
           $rootScope.dialog = ngDialog.open({ template: 'templateAdd' });
        };



    }
})();


