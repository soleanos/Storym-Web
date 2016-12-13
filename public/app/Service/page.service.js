(function () {
 'use strict';
    angular
        .module('Storym')
        .factory('ServicePage',ServicePage);

   ServicePage.$inject = ['$resource','$rootScope','ConfigService'];

    function ServicePage($resource, $rootScope,ConfigService) {

        return {
            getPage : getPage,
            getPages : getPages,
            updatePage : updatePage,
            createPage : createPage,
            removePage : removePage
        };

        var urlApi = ConfigService.getApiUrl()

        function  getPages() {
            return $resource("http://localhost:2403/chapter").query();
        }

        function getPage(lienPage) {
            return $resource(lienPage).get();
        }

        function updatePage(page) {
            $resource('http://localhost:2403/chapter').save(personne);
        }

        function createPage(page) {
            $resource('http://localhost:2403/chapter').save(user);
        }

        function removePage(page) {
            $resource('http://localhost:2403/chapter').remove(personne);
        }

    }
})();