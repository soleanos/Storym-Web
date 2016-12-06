/**
 * Created by aarchamb on 12/04/2016.
 */

(function () {

    'use strict';

    angular
        .module('Notes', [
            'ngRoute',
            'ngMessages',
            'ngResource',
            'ngDialog',
            'ngMaterial',
            'ngMdIcons'
        ])
        .config(config)

    config.$inject = ['$routeProvider','$compileProvider','$httpProvider'];

    function config($routeProvider,$compileProvider,$httpProvider) {
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
       delete $httpProvider.defaults.headers.common['X-Requested-With'];

    }
})();

