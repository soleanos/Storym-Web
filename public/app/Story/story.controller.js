
(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('StoryController', StoryController);

    StoryController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceStory','ServiceChapter','_'];

    function StoryController($scope, $location ,$http, $rootScope, ngDialog,ServiceStory,ServiceChapter,_) {

        $rootScope.currentNavItem = 'storys';

        ServiceStory.getStories().then(function (allStories) {
            $scope.stories = allStories;
        })

        $scope.openUpdateModale = function (story) {
           $rootScope.dialog = ngDialog.open({ template: 'templateUpdate' });
           $rootScope.selectedStory = story;
        };


        $scope.openAddModale = function () {
           $rootScope.dialog = ngDialog.open({ template: 'templateAdd' });
        };

    }
})();


