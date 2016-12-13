(function () {
    'use strict';
    angular
        .module('Storym')
        .factory('ServiceChapter',ServiceChapter);

    ServiceChapter.$inject = ['$resource','$rootScope','$http','ConfigService'];

    function ServiceChapter($resource, $rootScope,$http,ConfigService) {

        return {
            getChapter : getChapter,
            getChapters : getChapters,
            updateChapter : updateChapter,
            createChapter : createChapter,
            removeChapter : removeChapter,
            castStoryChapter : castStoryChapter
        };

        // castStoryChapter take an id parameter en return chapter object

        function castStoryChapter(idChapitre) {
               return getChapter(idChapitre).$promise.then(function (chapter) {
                    return chapter;
               });
        }

        function getChapters() {
            return $http.get(ConfigService.getApiUrl()+'/chapter')
        }

        function getChapter(id) {
            return $resource(ConfigService.getApiUrl()+"/chapter/"+id).get();
        }

        function updateChapter(chapter) {
            $resource(ConfigService.getApiUrl()+'/chapter/'+chapter.id).save(chapter);
        }

        function createChapter(chapter) {
            $resource(ConfigService.getApiUrl()+'/chapter').save(chapter);
        }

        function removeChapter(chapter) {
            $resource(ConfigService.getApiUrl()+'/chapter/'+chapter.id).remove();
        }

    }
})();
