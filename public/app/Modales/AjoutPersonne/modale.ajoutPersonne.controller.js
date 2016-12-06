
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('modaleAjoutPersonneController', modaleAjoutPersonneController);

    modaleAjoutPersonneController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServicePersonnes','$route'];

    function modaleAjoutPersonneController($scope, $location ,$http, $rootScope, ngDialog,ServicePersonnes,$route) {


            $scope.initModalAdd = function(){
                $scope.newPersonne = {}
            };

            $scope.add = function(newPersonne){
                if(newPersonne){
                    ServicePersonnes.createPersonne(newPersonne)
                    console.log(newPersonne);
//                    $route.reload();

                }
            };

            $scope.test = function(newPersonne){
                alert("mdr");
            };

    }
})();