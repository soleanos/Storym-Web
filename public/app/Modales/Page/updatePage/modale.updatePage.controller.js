(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('modaleUpdatePageController', modaleUpdatePageController);

    modaleUpdatePageController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServicePage','$route','ServiceChoice','ServiceChapter'];

    function modaleUpdatePageController($scope, $location ,$http, $rootScope, ngDialog,ServicePage,$route,ServiceChoice,ServiceChapter) {


        $scope.initModalUpdate = function(){
            $scope.pageToUpdate = $rootScope.selectedPage;
        };
        
        $scope.pageToUpdate = $rootScope.selectedPage;

        // console.log($scope.pageToUpdate)
        // $scope.pageToUpdate.choice1 = $scope.pageToUpdate.choices[0].label;
        // $scope.pageToUpdate.choice2 = $scope.pageToUpdate.choices[1].label;

        $scope.update = function(pageToUpdate){
            if(pageToUpdate){
                pageToUpdate.choices = [];
                if($scope.choice1  ) {
                    pageToUpdate.choices.push($scope.pageToUpdate.choice1);
                }
                if($scope.choice2){
                    pageToUpdate.choices.push($scope.pageToUpdate.choice2);
                }

                ServicePage.cupdatePage(pageToUpdate);
                ngDialog.close();
                $rootScope.reload = true;
            }
        };



        ServiceChoice.getChoices().success(function (choices) {
            $scope.allChoices = choices;
        });

        ServiceChapter.getChapters().success(function (chapters) {
            $scope.allChapters = chapters;
        });

    }
})();