
(function () {
 'use strict';
    angular
        .module('Notes')
        .factory('ServiceStory',ServiceStory);

    ServiceStory.$inject = ['$resource','$rootScope','$http','ServiceChapter'];

    function ServiceStory($resource, $rootScope,$http,ServiceChapter) {

        return {
            getStory : getStory,
            getStorys : getStorys,
            updateStory : updateStory,
            createStory : createStory,
            removeStory : removeStory,
            test:test
        };

        function test() {
            var p1 = $http.get('http://localhost:2403/story').then(
                function successCallback(response) {
                return response;
            }, function errorCallback(error) {
                // console.log(error)
            })

            return p1.then(
                function successCallback(response) {
                    var allStory = [];
                    var chapterList = [];

                    for  (var indiceStory in response.data){
                        var story = response.data[indiceStory];
                        var newStory = getStory(story.id).success(function (maStory) {
                            allStory.push(maStory)
                        })
                    }

                    response = allStory
                    return response

                }, function errorCallback(error) {
                     console.log(error)
                }

            );


        }

        function getStorys() {
            return $http.get('http://localhost:2403/story')
        }

        function getStory(id) {
            return $http.get("http://localhost:2403/story/"+id).success(
                 function successCallback(response) {
                    var chapterList =  [];
                    for(var indiceChapitre in response.chapters){
                        var idChapitre = response.chapters[indiceChapitre];

                        var test = ServiceChapter.castStoryChapter(idChapitre);

                        test.then(function(data) {
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
