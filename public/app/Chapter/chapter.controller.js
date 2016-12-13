
(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('StoryController', StoryController);

    StoryController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory','ServiceSession','ServicePage'];

    function StoryController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory,ServiceSession,ServicePage) {

        $scope.storys =  [];

        ServiceStory.getStorys().success(function (allStorys) {

            for  (var indiceStory in allStorys){

                var story = allStorys[indiceStory];

                var pageList = [];
                for(var indiceChapitre in story.pages){
                    var idChapitre = story.pages[indiceChapitre];

                    ServicePage.getPage(idChapitre).$promise.then(function (page) {
                        pageList.push(page);
                    });
                }

                story.pages = pageList;
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

