
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('modaleModifPersonneController', modaleModifPersonneController);

    modaleModifPersonneController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServicePersonnes'];

    function modaleModifPersonneController($scope, $location ,$http, $rootScope, ngDialog,ServicePersonnes) {
            $scope.initModalUpdate = function(){
                var lienPersonne = "http://localhost:8008/api/personnes/"+($rootScope.indexGlobal+1)

                ServicePersonnes.getPersonne(lienPersonne).$promise.then(function (personne) {
                    $scope.personneToUpdate = personne;
                });
            };
    }
})();