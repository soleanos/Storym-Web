
(function () {
    angular
        .module('Storym')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.
        when('/stories', {
            templateUrl: 'app/Story/story.html',
            controller: 'StoryController',
            controllerAs : 'StoryCtrl'
        });
    }
})();

