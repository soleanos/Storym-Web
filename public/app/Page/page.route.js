
(function () {
    angular
        .module('Storym')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.
        when('/pages', {
            templateUrl: 'app/Page/page.html',
            controller: 'PageController',
            controllerAs : 'PageCtrl'
        });
    }
})();
