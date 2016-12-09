
(function () {
 'use strict';
    angular
        .module('Notes')
        .factory('ServiceStory',ServiceStory);

    ServiceStory.$inject = ['$resource','$rootScope','$http','ServiceChapter'];

    function ServiceStory($resource, $rootScope,$http,ServiceChapter) {

        return {
            getStory : getStory,
            getStories : getStories,
            updateStory : updateStory,
            createStory : createStory,
            removeStory : removeStory,
        };

        function getStories() {

            // Get all storys without casted chapters ( only id )

            var getBasicStories = $http.get('http://localhost:2403/story').then(
                function successCallback(response) {
                return response;
            }, function errorCallback(error) {
                console.log(error)
            })

            // Return all stories with an array of chapter objects

            return getBasicStories.then(
                function successCallback(response) {
                    var allStories = [];
                    var chapterList = [];

                    for  (var indiceStory in response.data){
                        var story = response.data[indiceStory];
                        var newStory = getStory(story.id).success(function (maStory) {
                            allStories.push(maStory)
                        })
                    }
                    response = allStories
                    return response

                }, function errorCallback(error) {
                     console.log(error)
                }
            );
        }

        function getStory(id) {
            return $http.get("http://localhost:2403/story/"+id).success(
                 function successCallback(response) {
                    var chapterList =  [];
                    for(var indiceChapter in response.chapters){
                        var idChapter = response.chapters[indiceChapter];

                        var chapter = ServiceChapter.castStoryChapter(idChapter);

                        chapter.then(function(data) {
                                chapterList.push(data)
                        });
                    }
                     response.chapters = chapterList;
                     return response;
                }
            )
        }

        function updateStory(story) {
                $resource('http://localhost:2403/story').save(story);
        }

        function createStory(story) {
           $resource('http://localhost:2403/story').save(story);
        }

        function removeStory(story) {
            $resource('http://localhost:2403/story').remove(story.id);
        }
        
    }
})();
