
(function () {
 'use strict';
    angular
        .module('Storym')
        .factory('ServiceStory',ServiceStory);

    ServiceStory.$inject = ['$resource','$rootScope','$http','ServiceChapter','ConfigService'];

    function ServiceStory($resource, $rootScope,$http,ServiceChapter,ConfigService) {

        return {
            getStory : getStory,
            getStories : getStories,
            updateStory : updateStory,
            createStory : createStory,
            removeStory : removeStory
        };

        function getStories() {

            // Get all storys without casted chapters ( only id )

            return $http.get(ConfigService.getApiUrl()+'/story').then(
                function successCallback(response) {
                return response;
            }, function errorCallback(error) {
                console.log(error)
            })

        }

        function getStory(id) {
            return $http.get(ConfigService.getApiUrl()+"/story/"+id).then(
                function successCallback(response) {
                    return response;
                }, function errorCallback(error) {
                    console.log(error)
                })
        }

        function updateStory(story) {
                $resource(ConfigService.getApiUrl()+'/story/'+story.id).save(story);
        }

        function createStory(story) {
           $resource(ConfigService.getApiUrl()+'/story').save(story);
        }

        function removeStory(story) {
            $resource(ConfigService.getApiUrl()+'/story/'+story.id).remove();
        }

    }
})();
