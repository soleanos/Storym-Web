(function () {
    'use strict';
    angular
        .module('Storym')
        .factory('ConfigService',ConfigService);

    ConfigService.$inject = ['$resource','$rootScope','$http'];

    function ConfigService($resource, $rootScope,$http) {

        return {
            getApiUrl : _getApiUrl
        };

        function  _getApiUrl() {
            var prodUrl  = "http://90.105.169.31:666";
            var devUrl  = "localhost:2403";
            var devLocalURL = "http://192.168.1.13:2403"
            return prodUrl;
        }

    }
})();
