
(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('ChapterController', ChapterController);

    ChapterController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceChapter','_'];

    function ChapterController($scope, $location ,$http, $rootScope, ngDialog,_) {

        // updateAllChapter()
        //
        // function updateAllChapter(){
        //     ServiceChapter.getStories().then(function (allStories) {
        //         $scope.stories = allStories;
        //     })
        // }
        //
        // $scope.openUpdateModale = function (chapter) {
        //     $rootScope.dialog = ngDialog.open({ template: 'templateUpdate' });
        //     $rootScope.selectedChapter = chapter;
        // };
        //
        // $scope.openAddModale = function () {
        //     $rootScope.dialog = ngDialog.open({ template: 'templateAdd' });
        // };
        //
        // $scope.DeleteChapter = function (chapter) {
        //     ServiceChapter.removeChapter(chapter)
        //     updateAllChapter()
        // }

    }
})();

