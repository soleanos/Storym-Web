(function () {
    'use strict';
    angular
        .module('Notes')
        .factory('ServiceChapter',ServiceChapter);

    ServiceChapter.$inject = ['$resource','$rootScope','$http'];

    function ServiceChapter($resource, $rootScope,$http) {

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
            return $http.get('http://localhost:2403/chapter')
        }

        function getChapter(id) {
            return $resource("http://localhost:2403/chapter/"+id).get();
        }

        function updateChapter(chapter) {
            $resource('http://localhost:2403/chapter').save(chapter);
        }

        function createChapter(chapter) {
            $resource('http://localhost:2403/chapter').save(chapter);
        }

        function removeChapter(chapter) {
            $resource('http://localhost:2403/chapter').remove(chapter.id);
        }

    }
})();
