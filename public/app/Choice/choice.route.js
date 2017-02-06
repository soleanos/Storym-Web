
(function () {
    angular
        .module('Storym')
        .config(config);

    config.$inject = ['$routeProvider'];

    //controllerAs : 'Choice'

    function config($routeProvider) {
        $routeProvider.
        when('/choices', {
            templateUrl: 'app/Choice/choice.html',
            controller: 'ChoiceController'
        });
    }
})();