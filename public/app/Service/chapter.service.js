(function () {
    'use strict';
    angular
        .module('Storym')
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
            return $http.get('http://90.105.169.31:666/chapter')
        }

        function getChapter(id) {
            return $resource("http://90.105.169.31:666/chapter/"+id).get();
        }

        function updateChapter(chapter) {
            $resource('http://90.105.169.31:666/chapter/'+chapter.id).save(chapter);
        }

        function createChapter(chapter) {
            $resource('http://90.105.169.31:666/chapter').save(chapter);
        }

        function removeChapter(chapter) {
            $resource('http://90.105.169.31:666/chapter/'+chapter.id).remove();
        }

    }
})();
