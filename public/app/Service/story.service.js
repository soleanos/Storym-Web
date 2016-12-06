
(function () {
 'use strict';
    angular
        .module('Notes')
        .factory('ServiceStory',ServiceStory);

    ServiceStory.$inject = ['$resource','$rootScope','$http'];

    function ServiceStory($resource, $rootScope,$http) {

        return {
            getStory : getStory,
            getStorys : getStorys,
            updateStory : updateStory,
            createStory : createStory,
            removeStory : removeStory
        };

        function getStorys() {
            return $resource("http://localhost:2403/story").query();
        }

        function getStory(lienStory) {
            return $resource(lienStory).get();
        }

        function updateStory(story) {
                $resource('http://localhost:2403/story').save(story);
        }

        function createStory(story) {
           $resource('http://localhost:2403/story').save(story);
        }

        function removeStory(story) {
            $resource('http://localhost:2403/story').remove(story);
        }
        
    }
})();
