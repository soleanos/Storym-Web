(function () {
 'use strict';
    angular
        .module('Notes')
        .factory('ServiceSession',ServiceSession);

   ServiceSession.$inject = ['$resource','$rootScope'];

    function ServiceSession($resource, $rootScope) {

        return {
            getSession : getSession,
            getSessions : getSessions,
            updateSession : updateSession,
            createSession : createSession,
            removeSession : removeSession
        };

        function  getSessions() {
            return $resource("http:///localhost:8008/api/sessions/").query();
        }

        function getSession(lienSession) {
            return $resource(lienSession).get();
        }

        function updateSession(session) {
            $resource('http:///localhost:8008/api/sessions/').save(personne);
        }

        function createSession(session) {
            $resource('http:///localhost:8008/api/sessions/').save(user);
        }

        function removeSession(session) {
            $resource('http:///localhost:8008/api/sessions/').remove(personne);
        }

    }
})();