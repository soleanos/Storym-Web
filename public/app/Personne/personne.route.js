
(function () {
    angular
        .module('Notes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.
        when('/personnes', {
            templateUrl: 'app/Personne/personne.html',
            controller: 'PersonneController',
            controllerAs : 'PersonneCtrl'
        });
    }
})();

