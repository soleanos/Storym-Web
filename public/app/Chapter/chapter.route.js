
(function () {
    angular
        .module('Storym')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.
        when('/chapters', {
            templateUrl: 'app/Chapter/chapter.html',
            controller: 'ChapterController',
            controllerAs : 'ChapterCtrl'
        });
    }
})();
