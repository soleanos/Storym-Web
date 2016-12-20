(function () {
    'use strict';
    angular
        .module('Storym')
        .factory('ServicePage',ServicePage);

    ServicePage.$inject = ['$resource','$rootScope','$http','ConfigService'];

    function ServicePage($resource, $rootScope,$http,ConfigService) {

        return {
            getPage : getPage,
            getPages : getPages,
            updatePage : updatePage,
            createPage : createPage,
            removePage : removePage
        };

        function getPages() {
            return $http.get(ConfigService.getApiUrl()+'/page')
        }

        function getPage(id) {
            return $resource(ConfigService.getApiUrl()+"/page/"+id).get();
        }

        function updatePage(page) {
            $resource(ConfigService.getApiUrl()+'/page/'+page.id).save(page);
        }

        function createPage(page) {
            $resource(ConfigService.getApiUrl()+'/page').save(page);
        }

        function removePage(page) {
            $resource(ConfigService.getApiUrl()+'/page/'+page.id).remove();
        }

    }
})();
