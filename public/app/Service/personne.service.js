
(function () {
 'use strict';
    angular
        .module('Notes')
        .factory('ServicePersonnes',ServicePersonnes);
    
   ServicePersonnes.$inject = ['$resource','$rootScope','$http'];

    function ServicePersonnes($resource, $rootScope,$http) {

        return {
            getPersonne : getPersonne,
            getPersonnes : getPersonnes,
            updatePersonne : updatePersonne,
            createPersonne : createPersonne,
            removePersonne : removePersonne
        };

        function getPersonnes() {
            return $resource("http:///localhost:8008/api/personnes/").query();
        }

        function getPersonne(lienPersonne) {
            return $resource(lienPersonne).get();
        }

        function updatePersonne(personne) {
                $resource('http:///localhost:8008/api/personnes/').save(personne);
        }

        function createPersonne(personne) {
           $resource('http:///localhost:8008/api/personnes/').save(personne);
        }

        function removePersonne(personne) {
            $resource('http:///localhost:8008/api/personnes/').remove(personne);
        }
        
    }
})();
