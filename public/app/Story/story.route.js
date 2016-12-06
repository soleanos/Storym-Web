
(function () {
    angular
        .module('Notes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.
        when('/storys', {
            templateUrl: 'app/Story/story.html',
            controller: 'StoryController',
            controllerAs : 'StoryCtrl'
        });
    }
})();

