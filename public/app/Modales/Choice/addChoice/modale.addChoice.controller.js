
(function () {
    'use strict';

    angular
        .module('Storym')
        .controller('modaleAjoutChoiceController', modaleAjoutChoiceController);

    modaleAjoutChoiceController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServiceChoice','$route','ServicePage'];

    function modaleAjoutChoiceController($scope, $location ,$http, $rootScope, ngDialog,ServiceChoice,$route,ServicePage) {


        $scope.initModalAdd = function(){
            $scope.newChoice = {}
        };

        $scope.add = function(newChoice){

            if(newChoice.label) {
                ServiceChoice.createChoice(newChoice);
                ngDialog.close();
                $rootScope.reload = true;
            }else{
                alert("Veuillez ");
            }

        };

        ServicePage.getPages().success(function (allpages) {
            $scope.allPages = allpages;
            console.log( $scope.allpages)
        })
    }
})();