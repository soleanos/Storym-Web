(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('modaleUpdatePageController', modaleUpdatePageController);

    modaleUpdatePageController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServicePage','$route','ServiceChoice','ServiceChapter'];

    function modaleUpdatePageController($scope, $location ,$http, $rootScope, ngDialog,ServicePage,$route,ServiceChoice,ServiceChapter) {


        $scope.initModalUpdate = function(){
            // $scope.pageToUpdate = $rootScope.selectedPage;
        };
        
        $scope.pageToUpdate = $rootScope.selectedPage;

        $scope.update = function(pageToUpdate){
            if(pageToUpdate){
                if($scope.pageToUpdate.choice1) {
                    pageToUpdate.choices[0] = $scope.pageToUpdate.choice1;
                    if($scope.pageToUpdate.choices[1] && $scope.pageToUpdate.choices[1].id) {
                        pageToUpdate.choices[1] = $scope.pageToUpdate.choices[1].id;
                    }
                }
                if($scope.pageToUpdate.choice2){
                    pageToUpdate.choices[1] =  $scope.pageToUpdate.choice2 ;
                    if($scope.pageToUpdate.choices[0] && $scope.pageToUpdate.choices[0].id) {
                        pageToUpdate.choices[0] = $scope.pageToUpdate.choices[0].id;
                    }
                }
                delete $scope.pageToUpdate.choice2;
                delete $scope.pageToUpdate.choice1;

                ServicePage.updatePage(pageToUpdate);
                ngDialog.close();
                $rootScope.reload = true;
            }
        };


        $scope.showChoice1Field = false;
        $scope.showChoice2Field = false;

        $scope.clickChoice1 =function(){
            $scope.showChoice1Field =  !$scope.showChoice1Field;
        };

        $scope.clickChoice2 =function(){
            $scope.showChoice2Field =  !$scope.showChoice2Field;
            console.log($scope.pageToUpdate)
        };

        ServiceChoice.getChoices().success(function (choices) {
            $scope.allChoices = choices;
        });

        ServiceChapter.getChapters().success(function (chapters) {
            $scope.allChapters = chapters;
        });

    }
})();