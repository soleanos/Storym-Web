(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('modaleUpdateChoiceController', modaleUpdateChoiceController);

    modaleUpdateChoiceController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceChoice','$route','ServicePage'];

    function modaleUpdateChoiceController($scope, $location ,$http, $rootScope, ngDialog,ServiceChoice,$route,ServicePage) {


        $scope.initModalUpdate = function(){
            $scope.newChoice = $rootScope.selectedChoice;
        };

        $scope.add = function(newChoice){
            if(newChoice.label) {
                ServiceChoice.createChoice(newChoice);
                ngDialog.close();
                $rootScope.reload = true;
            }else{
                alert("Veuillez saisir un choix");
            }
        };

        ServicePage.getPages().success(function (allpages) {
            $scope.allPages = allpages;
            console.log( $scope.allpages)
        });


        if(!$rootScope.selectedChoice.story){
            $rootScope.showLinkedStory = false;
        };

        $scope.clickChoice1 =function(){
            $scope.showChoice1Field =  !$scope.showChoice1Field;
        };
    }
})();