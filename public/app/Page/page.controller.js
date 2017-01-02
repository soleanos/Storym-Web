(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('PageController', PageController);

    PageController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceChapter','ServicePage','_','$route'];

    function PageController($scope, $location ,$http, $rootScope, ngDialog,ServiceChapter,ServicePage,_,$route) {

        $rootScope.reload = false;
        updateAllPage();

        $rootScope.$watch('reload', function(newValue, oldValue) {
            if(newValue == true){
                setTimeout(function(){
                    updateAllPage();
                    $rootScope.reload = false;
                    $route.reload();
                }, 100);
            }
        });

        function updateAllPage(){
            ServicePage.getPages().then(function (allPages) {
                $scope.pages = allPages.data;
            })
        }

        $scope.openUpdateModale = function (story) {
            $rootScope.dialog = ngDialog.open({ template: 'templateUpdatePage' });
            $rootScope.selectedPage = story;
        };

        $scope.openAddModale = function () {
            $rootScope.dialog = ngDialog.open({ template: 'templateAddPage' });
        };

        $scope.DeletePage = function (story) {
            ServicePage.removePage(story);
            $rootScope.reload = true;
        }
    }

})();

