
(function () {
    angular
        .module('Storym')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'app/Home/home.html',
            controller: 'HomeController',
            controllerAs : 'HomeCtrl'
        });
    }
})();

