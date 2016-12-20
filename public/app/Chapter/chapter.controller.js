
(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('ChapterController', ChapterController);

    ChapterController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceChapter','ServicePage','_','$route'];

    function ChapterController($scope, $location ,$http, $rootScope, ngDialog,ServiceChapter,ServicePage,_,$route) {

        $rootScope.reload = false;
        updateAllChapter();

        $rootScope.$watch('reload', function(newValue, oldValue) {
            if(newValue == true){
                setTimeout(function(){
                    updateAllChapter();
                    $rootScope.reload = false;
                    $route.reload();
                }, 100);
            }
        });

        function updateAllChapter(){
            ServiceChapter.getChapters().then(function (allChapters) {
                $scope.chapters = allChapters.data;
            })
        }

        $scope.openUpdateModale = function (story) {
            $rootScope.dialog = ngDialog.open({ template: 'templateUpdateChapter' });
            $rootScope.selectedChapter = story;
        };

        $scope.openAddModale = function () {
            $rootScope.dialog = ngDialog.open({ template: 'templateAddChapter' });
        };

        $scope.DeleteChapter = function (story) {
            ServiceChapter.removeChapter(story);
            $rootScope.reload = true;
        }
    }
})();


