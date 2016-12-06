
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServicePersonnes'];

    function HomeController($scope, $location ,$http, $rootScope, ngDialog,ServicePersonnes) {

        $scope.message= " Bienvenue sur ce super site !! "

    }

})();


