(function () {
    'use strict';
    angular
        .module('Storym')
        .factory('ServiceChoice',ServiceChoice);

    ServiceChoice.$inject = ['$resource','$rootScope','$http','ConfigService'];

    function ServiceChoice($resource, $rootScope,$http,ConfigService) {

        return {
            getChoice : getChoice,
            getChoices : getChoices,
            updateChoice : updateChoice,
            createChoice : createChoice,
            removeChoice : removeChoice
        };

        function getChoices() {
            return $http.get(ConfigService.getApiUrl()+'/choice')
        }

        function getChoice(id) {
            return $resource(ConfigService.getApiUrl()+"/choice/"+id).get();
        }

        function updateChoice(choice) {
            $resource(ConfigService.getApiUrl()+'/choice/'+choice.id).save(choice);
        }

        function createChoice(choice) {
            $resource(ConfigService.getApiUrl()+'/choice').save(choice);
        }

        function removeChoice(choice) {
            $resource(ConfigService.getApiUrl()+'/choice/'+choice.id).remove();
        }

    }
})();