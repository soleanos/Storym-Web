/**
 * Created by aarchamb on 12/04/2016.
 */

(function () {

    'use strict';


    var underscore = angular.module('underscore', []);
    underscore.factory('_', function() {
        return window._; //Underscore should be loaded on the page
    });

    angular
        .module('Notes', [
            'ngRoute',
            'ngMessages',
            'ngResource',
            'ngDialog',
            'ngMaterial',
            'ngMdIcons',
            'underscore'
        ])
        .config(config)

    config.$inject = ['$routeProvider','$compileProvider','$httpProvider','$locationProvider'];

    function config($routeProvider,$compileProvider,$httpProvider,$locationProvider) {
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
       delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $locationProvider.hashPrefix('');
    }
})();

